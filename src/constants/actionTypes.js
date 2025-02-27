const actionTypes = {
  emptyTransactionsData: 'EMPTY_TRANSACTIONS_DATA',
  addNewPendingTransaction: 'ADD_NEW_PENDING_TRANSACTION',
  getTransactions: 'GET_TRANSACTIONS',
  getTransactionsSuccess: 'GET_TRANSACTIONS_SUCCESS',
  getTransactionSuccess: 'GET_TRANSACTION_SUCCESS',
  accountAddVotes: 'ACCOUNT_ADD_VOTES',
  accountLoading: 'ACCOUNT_LOADING',
  accountLoggedIn: 'ACCOUNT_LOGGED_IN',
  accountLoggedOut: 'ACCOUNT_LOGGED_OUT',
  timerReset: 'TIMER_RESET',
  accountRemoved: 'ACCOUNT_REMOVED',
  accountsRetrieved: 'ACCOUNTS_RETRIEVED',
  accountSwitched: 'ACCOUNT_SWITCHED',
  accountUpdated: 'ACCOUNT_UPDATED',
  delegateRegisteredSuccess: 'DELEGATE_REGISTERED_SUCCESS',
  delegateRetrieved: 'DELEGATE_RETRIEVED',
  delegateRetrieving: 'DELEGATE_RETRIEVING',
  delegatesAdded: 'DELEGATES_ADDED',
  bookmarksRetrieved: 'BOOKMARK_RETRIEVED',
  bookmarkAdded: 'BOOKMARK_ADDED',
  bookmarkRemoved: 'BOOKMARK_REMOVED',
  bookmarkUpdated: 'BOOKMARK_UPDATED',
  watchListRetrieved: 'WATCHLIST_RETRIEVED',
  addedToWatchList: 'ADDED_TO_WATCHLIST',
  removedFromWatchList: 'REMOVED_FROM_WATCHLIST',
  getNewsFeed: 'GET_NEWS_FEED',
  loadingFinished: 'LOADING_FINISHED',
  loadingStarted: 'LOADING_STARTED',
  nodeDefined: 'NODE_DEFINED',
  networkSelected: 'NETWORK_SELECTED',
  networkConfigSet: 'NETWORK_CONFIG_SET',
  serviceUrlSet: 'SERVICE_URL_SET',
  networkStatusUpdated: 'NETWORK_STATUS_UPDATED',
  lastBtcUpdateSet: 'NETWORK_LAST_BTC_UPDATE_SET',
  newBlockCreated: 'NEW_BLOCK_CREATED',
  olderBlocksRetrieved: 'OLDER_BLOCKS_RETRIEVED',
  passphraseUsed: 'PASSPHRASE_USED',
  pricesRetrieved: 'PRICES_RETRIEVED',
  removePassphrase: 'REMOVE_PASSPHRASE',
  searchDelegate: 'SEARCH_DELEGATE',
  searchVotes: 'SEARCH_VOTES',
  sendFeedback: 'SEND_FEEDBACK',
  settingsReset: 'SETTINGS_RESET',
  settingsUpdated: 'SETTINGS_UPDATED',
  settingsRetrieved: 'SETTINGS_RETRIEVED',
  showEmptyNewsFeed: 'SHOW_EMPTY_NEWS_FEED',
  storeCreated: 'STORE_CREATED',
  switchChannel: 'SWITCH_CHANNEL',
  transactionAddDelegateName: 'TRANSACTION_ADD_DELEGATE_NAME',
  transactionCleared: 'TRANSACTION_CLEARED',
  transactionFailed: 'TRANSACTION_FAILED',
  transactionFailedClear: 'TRANSACTION_FAILED_CLEAR',
  transactionLoadFailed: 'TRANSACTION_LOAD_FAILED',
  transactionLoadRequested: 'TRANSACTION_LOAD_REQUESTED',
  transactionsFailed: 'TRANSACTIONS_FAILED',
  updateTransactions: 'UPDATE_TRANSACTIONS',
  voteLookupStatusCleared: 'VOTE_LOOKUP_STATUS_CLEARED',
  voteLookupStatusUpdated: 'VOTE_LOOKUP_STATUS_UPDATED',
  votesRetrieved: 'VOTES_RETRIEVED',
  votesSubmitted: 'VOTES_SUBMITTED',
  votesCleared: 'VOTES_CLEARED',
  votesConfirmed: 'VOTES_CONFIRMED',
  voteEdited: 'VOTE_EDITED',
  deviceListUpdated: 'DEVICE_LIST_UPDATED',
  transactionCreatedSuccess: 'TRANSACTION_CREATED_SUCCESS',
  transactionCreatedError: 'TRANSACTION_CREATED_ERROR',
  resetTransactionResult: 'RESET_TRANSACTION_RESULTS',
  broadcastedTransactionSuccess: 'BROADCAST_TRANSACTION_SUCCESS',
  broadcastedTransactionError: 'BROADCASTED_TRANSACTION_ERROR',
  forgingTimesRetrieved: 'FORGING_TIME_RETRIEVED',
  appUpdateAvailable: 'APP_UPDATE_AVAILABLE',
  transactionsRetrieved: 'TRANSACTION_RETRIEVED',
};

export default actionTypes;
