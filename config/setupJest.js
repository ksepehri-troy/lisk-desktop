/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18next from 'i18next';
// TODO remove next line after upgrading node version to at least 7
import 'babel-polyfill';

require('jest-localstorage-mock');

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(chaiAsPromised);
sinonStubPromise(sinon);
// eslint-disable-next-line no-undef
jest.useFakeTimers();
i18next.t = key => key;


// https://github.com/nkbt/react-copy-to-clipboard/issues/20#issuecomment-414065452
// Polyfill window prompts to always confirm.  Needed for react-copy-to-clipboard to work.
global.prompt = () => true;

// Polyfill text selection functionality.  Needed for react-copy-to-clipboard to work.
// Can remove this once https://github.com/jsdom/jsdom/issues/317 is implemented.
const getSelection = () => ({
  rangeCount: 0,
  addRange: () => {},
  getRangeAt: () => {},
  removeAllRanges: () => {},
});
window.getSelection = getSelection;
document.getSelection = getSelection;

