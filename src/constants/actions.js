const actionTypes = {
  storeCreated: 'STORE_CREATED',
  newBlockCreated: 'NEW_BLOCK_CREATED',
  accountUpdated: 'ACCOUNT_UPDATED',
  accountLoggedOut: 'ACCOUNT_LOGGED_OUT',
  accountLoggedIn: 'ACCOUNT_LOGGED_IN',
  accountLoading: 'ACCOUNT_LOADING',
  accountAddVotes: 'ACCOUNT_ADD_VOTES',
  accountAddVoters: 'ACCOUNT_ADD_VOTERS',
  delegateStatsLoaded: 'ACCOUNT_DELEGATE_STATS',
  liskAPIClientSet: 'LISK_API_CLIENT_SET',
  liskAPIClientUpdate: 'LISK_API_CLIENT_UPDATE',
  liskAPIClientReset: 'LISK_API_CLIENT_RESET',
  dialogDisplayed: 'DIALOG_DISPLAYED',
  dialogHidden: 'DIALOG_HIDDEN',
  VotePlaced: 'VOTE_PLACED',
  voteToggled: 'VOTE_TOGGLED',
  votesAdded: 'VOTES_ADDED',
  votesCleared: 'VOTES_CLEARED',
  votesUpdated: 'VOTES_UPDATED',
  voteLookupStatusCleared: 'VOTE_LOOKUP_STATUS_CLEARED',
  voteLookupStatusUpdated: 'VOTE_LOOKUP_STATUS_UPDATED',
  delegatesAdded: 'DELEGATES_ADDED',
  delegateRetrieved: 'DELEGATE_RETRIEVED',
  delegateRetrieving: 'DELEGATE_RETRIEVING',
  delegateRegisteredSuccess: 'DELEGATE_REGISTERED_SUCCESS',
  delegateRegisteredFailure: 'DELEGATE_REGISTERED_FAILURE',
  secondPassphraseRegisteredFailure: 'SECOND_PASSPHRASE_REGISTRATION_FAILIRE',
  secondPassphraseRegisteredFailureReset: 'SECOND_PASSPHRASE_REGISTRATION_FAILIRE_RESET',
  updateDelegate: 'UPDATE_DELEGATE',
  pendingVotesAdded: 'PENDING_VOTES_ADDED',
  toastDisplayed: 'TOAST_DISPLAYED',
  toastHidden: 'TOAST_HIDDEN',
  addDataToCurrencyGraph: 'ADD_DATA_TO_CURRENCY_GRAPH',
  addErrorToCurrencyGraph: 'ADD_ERROR_TO_CURRENCY_GRAPH',
  clearDataOfCurrencyGraph: 'CLEAR_DATA_OF_CURRENCY_GRAPH',
  loadingStarted: 'LOADING_STARTED',
  loadingFinished: 'LOADING_FINISHED',
  searchSuggestions: 'SEARCH_SUGGESTIONS',
  searchClearSuggestions: 'SEARCH_CLEAR_SUGGESTIONS',
  searchTransactions: 'SEARCH_TRANSACTIONS',
  searchMoreTransactions: 'SEARCH_MORE_TRANSACTIONS',
  searchAccount: 'SEARCH_ACCOUNT',
  searchDelegate: 'SEARCH_DELEGATE',
  searchVotes: 'SEARCH_VOTES',
  searchVoters: 'SEARCH_VOTERS',
  searchUpdateLast: 'SEARCH_UPDATE_LAST',
  sendFeedback: 'SEND_FEEDBACK',
  transactionsFailed: 'TRANSACTIONS_FAILED',
  transactionsUpdated: 'TRANSACTIONS_UPDATED',
  transactionsLoad: 'TRANSACTIONS_LOAD',
  transactionsLoadFinish: 'TRANSACTIONS_LOAD_FINISH',
  transactionsLoaded: 'TRANSACTIONS_LOADED',
  transactionsFilterSet: 'TRANSACTIONS_FILTER_SET',
  transactionsFiltered: 'TRANSACTIONS_FILTERED',
  transactionAdded: 'TRANSACTION_ADDED',
  transactionFailed: 'TRANSACTION_FAILED',
  transactionFailedClear: 'TRANSACTION_FAILED_CLEAR',
  transactionAddDelegateName: 'TRANSACTION_ADD_DELEGATE_NAME',
  transactionCleared: 'TRANSACTION_CLEARED',
  transactionLoadRequested: 'TRANSACTION_LOAD_REQUESTED',
  transactionLoaded: 'TRANSACTION_LOADED',
  transactionLoadFailed: 'TRANSACTION_LOAD_FAILED',
  passphraseUsed: 'PASSPHRASE_USED',
  followedAccountsRetrieved: 'FOLLOWED_ACCOUNTS_RETRIEVED',
  followedAccountAdded: 'FOLLOWED_ACCOUNT_ADDED',
  followedAccountUpdated: 'FOLLOWED_ACCOUNT_UPDATED',
  followedAccountRemoved: 'FOLLOWED_ACCOUNTS_REMOVED',
  accountsRetrieved: 'ACCOUNTS_RETRIEVED',
  accountRemoved: 'ACCOUNT_REMOVED',
  accountSwitched: 'ACCOUNT_SWITCHED',
  removePassphrase: 'REMOVE_PASSPHRASE',
  settingsUpdated: 'SETTINGS_UPDATED',
  settingsReset: 'SETTINGS_RESET',
  switchChannel: 'SWITCH_CHANNEL',
  addFilter: 'ADD_FILTER',
  getNewsFeed: 'GET_NEWS_FEED',
  showEmptyNewsFeed: 'SHOW_EMPTY_NEWS_FEED',
  addPriceTicker: 'ADD_PRICE_TICKER',
  cleanTransactions: 'CLEAN_TRANSACTIONS',
  moduleAdded: 'MODULE_ADDED',
  walletUpdated: 'WALLET_UPDATED',
};

export default actionTypes;
