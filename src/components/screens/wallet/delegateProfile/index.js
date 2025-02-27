// istanbul ignore file
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withData from '@utils/withData';
import { getVoters, getDelegate } from '@api/delegate';
import { getBlocks } from '@api/block';
import DelegateProfile from './delegateProfile';

const mapStateToProps = state => ({
  awaitingForgers: state.blocks.awaitingForgers,
  forgingTimes: state.blocks.forgingTimes,
});

const defaultVoters = {
  account: {},
  votes: [],
};

const apis = {
  delegate: {
    apiUtil: (network, params) => getDelegate({ network, params }),
    defaultData: {},
    autoload: true,
    getApiParams: (_, ownProps) => ({
      address: ownProps.account.summary?.address,
    }),
    transformResponse: response => response.data[0],
  },
  voters: {
    apiUtil: (network, params) => getVoters({ network, params }),
    defaultData: defaultVoters,
    getApiParams: (_, ownProps) => ({ address: ownProps.account.summary.address }),
    transformResponse: response => (response.data.votes ? response.data : defaultVoters),
  },
  lastBlockForged: {
    apiUtil: (network, params) => getBlocks({ network, params }),
    defaultData: {},
    transformResponse: response => (response ? response.data[0] : {}),
  },
};

const ComposedDelegateProfile = compose(
  connect(mapStateToProps),
  withData(apis),
  withTranslation(),
)(DelegateProfile);

export default ComposedDelegateProfile;
