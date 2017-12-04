import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import Transactions from './../transactions';
import SendWritable from '../sendWritable';
import SendReadable from './../sendReadable';
import SuccessModal from '../modals';
import MultipStep from './../multiStep';
import styles from './styles.css';

const TransactionsDashboard = () => (
  <div className={`${grid.row} ${styles.wrapper}`} >
    <div className={`${grid['col-xs-4']}`}>
      <div className='box'>
        <MultipStep>
          <SendWritable/>
          <SendReadable />
          <SuccessModal />
        </MultipStep>
      </div>
    </div>
    <div className={`${grid['col-xs-8']}`}>
      <Transactions></Transactions>
    </div>
  </div>
);

export default TransactionsDashboard;
