import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import AccountVisual from '../../../toolbox/accountVisual';
import tableStyles from '../../../toolbox/table/table.css';
import LiskAmount from '../../../shared/liskAmount';
import styles from './votes.css';
import { formatAmountBasedOnLocale } from '../../../../utils/formattedNumber';
import { isEmpty } from '../../../../utils/helpers';

const VoteRow = ({
  data, onRowClick, t, accounts,
}) => (
  <div className={`${tableStyles.row} ${styles.row} vote-row`} onClick={() => onRowClick(data.delegateAddress)}>
    <div className={`${grid['col-sm-4']} ${grid['col-lg-3']}`}>
      <div className={`${styles.info}`}>
        <AccountVisual
          className={`${styles.avatar}`}
          address={data.delegateAddress}
          size={40}
        />
        <div className={styles.accountInfo}>
          <span className={`${styles.username} vote-username`}>{data.delegate.username}</span>
          <span className={`${styles.address} showOnLargeViewPort`}>{data.delegateAddress}</span>
        </div>
      </div>
    </div>
    <div className={grid['col-sm-2']}>
      {!isEmpty(accounts)
        ? `${formatAmountBasedOnLocale({ value: accounts[data.delegateAddress].productivity })}%`
        /* istanbul ignore next */
        : '-'
      }
    </div>
    <div className={grid['col-sm-1']}>
      <span>
        {
          /* istanbul ignore next */
          !isEmpty(accounts) ? `#${accounts[data.delegateAddress].rank}` : '-'
        }
      </span>
    </div>
    <div className={`${grid['col-sm-3']} ${grid['col-lg-2']}`}>
      <span>
        <LiskAmount
          val={!isEmpty(accounts) ? accounts[data.delegateAddress].totalVotesReceived : 0}
        />
        {' '}
        {t('LSK')}
      </span>
    </div>
    <div className={`${grid['col-sm-2']} ${grid['col-lg-4']}`}>
      <span className={styles.votes}>
        <LiskAmount
          val={data.delegate.totalVotesReceived}
          token="LSK"
          showInt
          className={styles.voteAmount}
        />
      </span>
    </div>
  </div>
);

/* istanbul ignore next */
const areEqual = (prevProps, nextProps) =>
  (prevProps.data.address === nextProps.data.address
    && prevProps.data.rewards === nextProps.data.rewards);

export default React.memo(VoteRow, areEqual);
