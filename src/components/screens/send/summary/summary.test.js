import React from 'react';
import { mount } from 'enzyme';
import { tokenMap } from '@constants';
import { formatAmountBasedOnLocale } from '@utils/formattedNumber';
import { toRawLsk, fromRawLsk } from '@utils/lsk';
import Summary from './summary';
import accounts from '../../../../../test/constants/accounts';
import i18n from '../../../../i18n';

describe('Summary', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      t: i18n.t,
      account: {
        summary: {
          address: accounts.second_passphrase_account.summary?.address,
          secondPublicKey: accounts.second_passphrase_account.secondPublicKey,
        },
        hwInfo: {
          deviceModel: 'Ledger Nano S',
        },
      },
      fields: {
        recipient: {
          address: '123123L',
        },
        amount: {
          value: '1.123',
        },
        reference: {
          value: 1,
        },
        fee: {
          value: 0.1e8,
        },
        isLoading: false,
        isHardwareWalletConnected: false,
      },
      prevState: {
        fields: {},
      },
      prevStep: jest.fn(),
      nextStep: jest.fn(),
      transactionCreated: jest.fn(),
      resetTransactionResult: jest.fn(),
      isLoading: false,
      isHardwareWalletConnected: false,
      transactions: {
        pending: [],
        failed: '',
        transactionsCreated: [],
        transactionsCreatedFailed: [],
        broadcastedTransactionsError: [],
      },
      token: tokenMap.LSK.key,
    };
    wrapper = mount(<Summary {...props} />);
  });

  it('should render properly', () => {
    expect(wrapper).toContainMatchingElement('.summary');
    expect(wrapper).toContainMatchingElement('.summary-header');
    expect(wrapper).toContainMatchingElement('.summary-content');
    expect(wrapper).toContainMatchingElement('.summary-footer');
    expect(wrapper.find('button.confirm-button')).toHaveText('Send 1.123 LSK');
    expect(wrapper.find('.amount-summary')).toIncludeText('1.123 LSK');
  });

  it('should render German decimal point  properly', () => {
    wrapper.setProps({
      fields: {
        ...props.fields,
        amount: {
          value: '1,123',
        },
      },
    });
    expect(wrapper.find('button.confirm-button')).toHaveText('Send 1,123 LSK');
    expect(wrapper.find('.amount-summary')).toIncludeText('1,123 LSK');
  });

  it('should goind to previous page', () => {
    wrapper.find('.cancel-button').at(0).simulate('click');
    wrapper.update();
    expect(props.prevStep).toBeCalled();
  });

  it('should show props.fields.recipient.title if it is present', () => {
    const title = 'Custom title';
    wrapper = mount(<Summary {...{
      ...props,
      fields: {
        ...props.fields,
        recipient: {
          ...props.fields.recipient,
          title,
        },
      },
    }}
    />);
    expect(wrapper.find('.recipient-value')).toIncludeText(props.fields.recipient.address);
    expect(wrapper.find('.recipient-value')).toIncludeText(title);
  });


  it('should show props.fields.fee.value and use it in transactionCreated if props.token is not LSK', () => {
    const txFee = 12451;
    const formattedtxFee = formatAmountBasedOnLocale({ value: fromRawLsk(txFee) });
    wrapper.setProps({
      token: 'BTC',
      fields: {
        ...props.fields,
        selectedPriority: {
          value: txFee,
        },
        fee: {
          value: txFee,
        },
        reference: undefined,
      },
      account: { },
    });
    expect(wrapper.find('.fee-value')).toIncludeText(formattedtxFee);
    wrapper.find('.confirm-button').at(0).simulate('click');
    expect(props.transactionCreated).toBeCalledWith(expect.objectContaining({
      fee: toRawLsk(txFee),
    }));
  });

  it('should call transactionCreated as soon the component load if using HW', () => {
    const newProps = { ...props };
    newProps.account = {
      ...props.account,
      hwInfo: {
        deviceId: '123123sdf',
      },
    };
    wrapper = mount(<Summary {...newProps} />);
    wrapper.update();
    expect(props.transactionCreated).toBeCalled();
  });
});
