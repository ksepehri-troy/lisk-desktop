import { passphrase as LiskPassphrase, cryptography } from '@liskhq/lisk-client';
import { tokenMap, regex, account as accountConst } from '@constants';

/**
 * Extracts Lisk PublicKey from a given valid Mnemonic passphrase
 *
 * @param {String} passphrase - Valid Mnemonic passphrase
 * @returns {String?} - Extracted publicKey for a given valid passphrase
 */
export const extractPublicKey = (passphrase) => {
  if (LiskPassphrase.Mnemonic.validateMnemonic(passphrase)) {
    return cryptography.getKeys(passphrase).publicKey.toString('hex');
  }
  throw Error('Invalid passphrase');
};

/**
 * Extracts address from publicKey
 *
 * @param {String} data PublicKey in Hex
 * @returns {String} - address derived from the given publicKey
 */
export const extractAddressFromPublicKey = (data) => {
  if (regex.publicKey.test(data)) {
    const binaryPublicKey = Buffer.from(data, 'hex');
    return cryptography.getBase32AddressFromPublicKey(binaryPublicKey).toString('hex');
  }
  if (Buffer.isBuffer(data)) {
    return cryptography.getBase32AddressFromPublicKey(data);
  }
  throw Error(`Unable to convert publicKey ${data} to address`);
};

/**
 * Extracts address from Mnemonic passphrase
 *
 * @param {String} data Valid Mnemonic passphrase
 * @returns {String} - address derived from the given passphrase
 */
export const extractAddressFromPassphrase = (data) => {
  if (LiskPassphrase.Mnemonic.validateMnemonic(data)) {
    return cryptography.getBase32AddressFromPassphrase(data).toString('hex');
  }
  throw Error('Invalid passphrase');
};

/**
 * Extracts Lisk address from given passphrase or publicKey
 *
 * @param {String} data - passphrase or public key
 * @returns {String?} - Extracted address for a given valid passphrase or publicKey
 */
export const getBase32AddressFromAddress = (data) => {
  try {
    return cryptography.getBase32AddressFromAddress(data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw Error('Invalid address');
  }
};

export const getAddressFromBase32Address = (data) => {
  try {
    return cryptography.getAddressFromBase32Address(data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw Error('Invalid address');
  }
};

/**
 * This is selector, getting active token account from the Redux store
 *
 * @param {Object} state - Redux store state
 * @returns {Object} - account details or empty object
 */
export const getActiveTokenAccount = state => ({
  ...state.account,
  ...((state.account.info && state.account.info[
    state.settings.token && state.settings.token.active
      ? state.settings.token.active
      : tokenMap.LSK.key
  ]) || {}),
});

/**
 * Returns a shorter version of a given address
 * by replacing characters by ellipsis except for
 * the first and last 3.
 * @param {String} address LSk or BTC address
 * @returns {String} Truncated address
 */
export const truncateAddress = address =>
  address.replace(regex.lskAddressTrunk, '$1...$3');

/**
 * calculates the balance locked in votes
 *
 * @param {Object} votes - Votes dictionary, values must include vote.confirmed
 * @returns {Number} - Sum of vote amounts
 */
export const calculateBalanceLockedInVotes = (votes = {}) =>
  Object.values(votes).reduce((total, vote) => (total + vote.confirmed), 0);

/**
 * calculates balance locked for the account in unvotes
 *
 * @param {Array} unlocking - unlocking values array from the account details
 * @returns {Number} - Sum of locked LSK, this can be different than sum of vote amounts
 */
export const calculateBalanceLockedInUnvotes = (unlocking = []) =>
  unlocking.reduce((acc, vote) => acc + parseInt(vote.amount, 10), 0);

/**
 * Checks if given unlocking item can be unlocked
 * (Checks if the current height is greater than the unlocking height)
 *
 * @param {Number} unlockHeight - The height at which given LSK can be unlocked
 * @param {Number} currentBlockHeight - Current block height
 * @returns {Boolean} - True if the height is there
 */
export const isBlockHeightReached = (unlockHeight, currentBlockHeight) =>
  currentBlockHeight >= unlockHeight;

/**
 * returns unlocking objects for broadcasting an unlock transaction
 * at the current height
 *
 * @param {Array} unlocking - unlocking values array from the account details
 * @param {Number} currentBlockHeight - Current block height
 * @returns {Array} Array of LSK rows available to unlock
 */
export const getUnlockableUnlockingObjects = (unlocking = [], currentBlockHeight = 0) =>
  unlocking.filter(vote => isBlockHeightReached(vote.height.end, currentBlockHeight))
    .map(vote => ({
      delegateAddress: vote.delegateAddress,
      amount: vote.amount,
      unvoteHeight: Number(vote.height.start),
    }));

/**
 * returns the balance that can be unlocked at the current block height
 *
 * @param {Array} unlocking - unlocking values array from the account details
 * @param {Number} currentBlockHeight - Current block height
 * @returns {Number} - The LSK value that can be unlocked
 */
export const calculateUnlockableBalance = (unlocking = [], currentBlockHeight = 0) =>
  unlocking.reduce(
    (sum, vote) =>
      (isBlockHeightReached(vote.height.end, currentBlockHeight)
        ? sum + parseInt(vote.amount, 10) : sum),
    0,
  );

/**
 * returns the balance that can not be unlocked at the current block height
 *
 * @param {Array} unlocking - unlocking values array from the account details
 * @param {Number} currentBlockHeight - Current block height
 * @returns {Number} - The LSK value that can NOT be unlocked at the current height
 */
export const calculateBalanceUnlockableInTheFuture = (unlocking = [], currentBlockHeight = 0) =>
  unlocking.reduce(
    (sum, vote) =>
      (!isBlockHeightReached(vote.height.end, currentBlockHeight)
        ? sum + parseInt(vote.amount, 10) : sum),
    0,
  );

export const getTokenFromAddress = address => (
  cryptography.validateBase32Address(address) ? tokenMap.LSK.key : tokenMap.BTC.key
);

export const isAccountInitialized = account => account
  && account.info
  && account.info.LSK
  && !!account.info.LSK.serverPublicKey;

export const hasEnoughBalanceForInitialization = (balance = 0) =>
  Number(balance) >= accountConst.balanceNeededForInitialization;
