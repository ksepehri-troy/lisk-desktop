import React from 'react';
import { routes } from '@constants';
import DialogHolder from '@toolbox/dialog/holder';
import { mountWithRouter } from '@utils/testHelpers';
import TopBar from './topBar';
import accounts from '../../../../../test/constants/accounts';

const mockInputNode = {
  focus: jest.fn(),
};

jest.mock('../../searchBar', () => function SearchBarMock({ onSearchClick, setSearchBarRef }) {
  setSearchBarRef(mockInputNode);
  return (
    <div className="searchBarMock">
      <div className="mockSearchResult" onClick={onSearchClick} />
    </div>
  );
});

jest.mock('./navigationButtons', () => function () {
  return (
    <div />
  );
});

describe('TopBar', () => {
  const account = {
    passphrase: accounts.genesis.passphrase,
    expireTime: Date.now() + 60000,
    address: '12345L',
    info: {
      LSK: {
        address: '12345L',
        balance: 120,
      },
    },
  };

  const props = {
    account,
    showDelegate: false,
    t: val => val,
    logOut: jest.fn(),
    history: {
      location: { pathname: routes.dashboard.path, search: '' },
      replace: () => {},
      push: jest.fn(),
    },
    transactions: [],
    token: {
      active: 'LSK',
      list: {
        LSK: true,
        BTC: true,
      },
    },
    network: {
      status: { online: true },
      name: 'Custom Node',
      networks: {
        LSK: {
          nodeUrl: 'hhtp://localhost:4000',
          nethash: '198f2b61a8eb95fbeed58b8216780b68f697f26b849acf00c8c93bb9b24f783d',
        },
      },
    },
    settings: {
      network: { name: 'Custom Nodee', address: 'hhtp://localhost:4000' },
    },
    settingsUpdated: jest.fn(),
    networkSet: jest.fn(),
  };

  beforeEach(() => {
    DialogHolder.showDialog = jest.fn();
  });

  it('renders <TopBar /> component', () => {
    const wrapper = mountWithRouter(
      TopBar,
      props,
      { pathname: routes.wallet.path },
    );
    expect(wrapper).toContainMatchingElement('.top-bar');
  });

  it('renders <TopBar /> component with user log in', () => {
    const wrapper = mountWithRouter(
      TopBar,
      props,
      { pathname: routes.wallet.path },
    );
    expect(wrapper).not.toContainMatchingElement('.signIn');
  });

  it('renders sign in component when user is logout', () => {
    const logoutProps = {
      ...props,
      account: {},
    };
    const wrapper = mountWithRouter(
      TopBar,
      logoutProps,
      { pathname: routes.wallet.path },
    );
    expect(wrapper).toContainMatchingElement('.signIn');
  });

  it('renders the search component when user do click in the search icon', () => {
    const wrapper = mountWithRouter(
      TopBar,
      props,
      { pathname: routes.wallet.path },
    );
    expect(wrapper).toContainMatchingElement('img.search-icon');
    expect(wrapper.find('div.searchDropdown')).not.toHaveClassName('show');
  });

  it('renders searched value in the search container when the url contains a relevant search param', () => {
    const wrapper = mountWithRouter(
      TopBar,
      {
        ...props,
        history: {
          location: { pathname: routes.block.path, search: '?id=1L' },
        },
      },
      { pathname: routes.block.path },
    );
    expect(wrapper).toContainMatchingElement('img.search-icon');
    expect(wrapper).toContainMatchingElement('span.searchedValue');
    expect(wrapper.find('div.searchDropdown')).not.toHaveClassName('show');
  });

  it('renders searched value in the search container with AccountVisual when the url contains an account address', () => {
    const wrapper = mountWithRouter(
      TopBar,
      {
        ...props,
        history: {
          location: { pathname: routes.account.path, search: '?address=1L' },
        },
      },
      { pathname: routes.account.path },
    );
    expect(wrapper).toContainMatchingElement('img.search-icon');
    expect(wrapper).toContainMatchingElement('span.searchedValue');
    expect(wrapper).toContainMatchingElement('AccountVisual');
    expect(wrapper.find('div.searchDropdown')).not.toHaveClassName('show');
  });

  it('does not render searched value in the search container when the url contains an irrelevant search param ', () => {
    const wrapper = mountWithRouter(
      TopBar,
      {
        ...props,
        history: {
          location: { pathname: routes.account.path, search: '?somerandomparam=1L' },
        },
      },
      { pathname: routes.account.path },
    );
    expect(wrapper).toContainMatchingElement('img.search-icon');
    expect(wrapper).not.toContainMatchingElement('span.searchedValue');
    expect(wrapper).not.toContainMatchingElement('AccountVisual');
    expect(wrapper.find('div.searchDropdown')).not.toHaveClassName('show');
  });

  it('Should not navigate on Initialization screen', () => {
    const wrapper = mountWithRouter(
      TopBar,
      {
        ...props,
        history: {
          ...props.history,
          location: { pathname: routes.initialization.path },
        },
      },
    );
    wrapper.find('.token-selector-BTC').first().simulate('click');
    wrapper.find('.token-selector-LSK').first().simulate('click');
    wrapper.find('.bookmark-list-toggle').first().simulate('click');
    wrapper.find('.search-toggle').first().simulate('click');
    expect(props.history.push).not.toHaveBeenCalled();
  });

  // can we remove this test?
  it.skip('hides search icon if token is BTC', () => {
    const wrapper = mountWithRouter(
      TopBar,
      props,
      { pathname: routes.wallet.path },
    );
    expect(wrapper).toContainMatchingElement('.search-icon');
    wrapper.setProps({
      token: {
        active: 'BTC',
        list: [],
      },
    });
    expect(wrapper).not.toContainMatchingElement('.search-icon');
  });
});
