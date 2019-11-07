module.exports = {
  modulePaths: ['src/components'],
  testMatch: [
    '<rootDir>/app/src/**/*.test.js',
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/test/integration/*.test.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/test/integration/wallet.test.js',
    'src/components/shared/errorBoundary/index.test.js',
    'src/components/login/*.test.js',
    'src/components/newsFeed/index.test.js', // This component doesn't meet the setted tresholds for mocha but in jest
    'src/components/screens/register/register.test.js',
    'src/components/screens/delegates/voting/voteUrlProcessor/index.test.js',
    'src/store/reducers/liskService.test.js',
    'src/store/middlewares/socket.test.js',
    'src/components/screens/register/register.test.js',
    'src/components/shared/header/signInHeader/signInHeader.test.js',
  ],
  verbose: false,
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/jest',
  collectCoverageFrom: [
    'src/**/*.js',
    'app/src/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.test.js',
    '.stories.js',
    'app/src/ipc.js',
    'app/src/ledger.js',
    'src/actions/liskService.js',
    'src/actions/transactions.js',
    'src/components/screens/wallet/balanceChart.js', // This should be unskipped in issue #1499
    'src/utils/balanceChart.js', // This should be unskipped in issue #1499
    'src/components/shared/errorBoundary/index.js',
    'src/components/shared/formattedNumber/stories.js',
    'src/components/screens/dashboard/newsFeed/index.js', // This component doesn't meet the setted tresholds for mocha but in jest
    'src/components/screens/dashboard/newsFeed/news.js',
    'src/components/screens/register/register.js',
    'src/components/screens/register/register.js',
    'src/components/screens/wallet/transactions/request/index.js',
    'src/components/screens/wallet/transactions/request/index.js',
    'src/components/shared/transactionDashboard/index.js',
    'src/components/screens/wallet/transactions/transactions.js',
    'src/components/screens/explorer/transactions/transactions.js',
    'src/components/screens/delegates/voting/voteUrlProcessor/index.js',
    'src/constants/',
    'src/i18n-scanner.js',
    'src/main.js',
    'src/store/middlewares/login.js',
    'src/store/reducers/liskService.js',
    'src/store/reducers/filters.js', // To be removed in #2175
    'src/tests.js',
    'src/utils/api/ledger.js',
    'src/utils/api/lsk/liskService.js',
    'src/utils/api/btc/',
    'src/utils/applyDeviceClass.js',
    'src/utils/ledger.js',
    'src/components/screens/registerDelegate/registerDelegate.js',
    'src/components/wallet/transactions/transactionsOverview.js',
    'src/components/screens/delegates/voting/voting.js',
    'src/components/screens/explorer/transactions/index.js',
    'src/components/screens/explorer/accounts/accounts.js',
    'src/components/toolbox/dropdown/toolBoxDropdown.js',
    'app/src/utils.js',
    'app/src/hwManager.js',
    'app/src/trezor.js',
    'src/utils/api/lsk/account.js',
    'src/utils/loading.js',
    'src/store/middlewares/socket.js',
    'src/utils/platform.js',
    'src/components/screens/login/login.js',
    'src/components/shared/header/signInHeader/signInHeader.js',
    'src/components/screens/register/register.js',
    'src/components/toolbox/demoRenderer.js',
    'src/components/screens/delegates/votingHeader.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    'app/src/**/*.js': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    'src/**/*.js': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    'src/store/**/*.js': {
      statements: 90,
    },
  },
  setupFiles: [
    '<rootDir>/config/setupJest.js',
    'jest-canvas-mock',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testURL: 'http://localhost',
  globals: {
    PRODUCTION: true,
    TEST: true,
    VERSION: '',
  },
  coverageReporters: process.env.ON_JENKINS ? [
    'text',
    'lcov',
    'cobertura',
  ] : [
    'html',
    'json',
  ],
  reporters: [
    'default',
    ['jest-junit', { suiteName: 'jest tests', outputDirectory: '<rootDir>/coverage/jest' }],
  ],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  testEnvironment: 'enzyme',
  watchPlugins: [
    ['jest-watch-toggle-config', { setting: 'verbose' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    'jest-watch-typeahead/filename',
  ],
};
