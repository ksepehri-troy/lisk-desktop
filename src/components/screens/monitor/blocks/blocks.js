import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { DEFAULT_LIMIT } from '../../../../constants/monitor';
import { DateTimeFromTimestamp } from '../../../toolbox/timestamp';
import BlockFilterDropdown from './blockFilterDropdown';
import Box from '../../../toolbox/box';
import Feedback from '../../../toolbox/feedback/feedback';
import FilterBar from '../../../shared/filterBar';
import LiskAmount from '../../../shared/liskAmount';
import PageLayout from '../../../toolbox/pageLayout';
import Table from '../../../toolbox/table';
import routes from '../../../../constants/routes';
import styles from './blocks.css';
import withFilters from '../../../../utils/withFilters';

const Blocks = ({
  t, blocks, filters, applyFilters, clearFilter, clearAllFilters,
}) => {
  const formatters = {
    height: value => `${t('Height')}: ${value}`,
    address: value => `${t('Generated by')}: ${value}`,
  };

  const handleLoadMore = () => {
    blocks.loadData(Object.keys(filters).reduce((acc, key) => ({
      ...acc,
      ...(filters[key] && { [key]: filters[key] }),
    }), {
      offset: blocks.data.length,
    }));
  };

  return (
    <PageLayout>
      <Box isLoading={blocks.isLoading} width="full" main>
        <Box.Header>
          <h1>{t('All blocks')}</h1>
          <BlockFilterDropdown filters={filters} applyFilters={applyFilters} />
        </Box.Header>
        <FilterBar {...{
          clearFilter, clearAllFilters, filters, formatters, t,
        }}
        />
        { blocks.error
          ? (
            <Box.Content>
              <Feedback status="error" show>{`${blocks.error}`}</Feedback>
            </Box.Content>
          )
          : (
            <React.Fragment>
              <Box.Content className={styles.content}>
                <Table
                  data={blocks.data}
                  columns={[{
                    /* eslint-disable react/display-name */
                    header: t('ID'),
                    className: `${grid['col-md-2']} ${grid['col-xs-3']} block-id`,
                    getValue: block => <Link to={`${routes.blocks.path}/${block.id}`}>{block.id}</Link>,
                  }, {
                    header: t('Height'),
                    className: grid['col-xs-2'],
                    getValue: block => block.height,
                  }, {
                    header: t('Date'),
                    className: `${grid['col-md-2']} hidden-m`,
                    getValue: block => <DateTimeFromTimestamp time={block.timestamp * 1000} token="BTC" />,
                  }, {
                    header: t('Transactions'),
                    className: grid['col-xs-2'],
                    getValue: block => block.numberOfTransactions,
                  }, {
                    header: t('Generated by'),
                    className: grid['col-xs-2'],
                    getValue: block => (
                      <Link to={`${routes.accounts.pathPrefix}${routes.accounts.path}/${block.generatorAddress}`}>
                        {block.generatorUsername}
                      </Link>
                    ),
                  }, {
                    header: t('Amount'),
                    className: grid['col-xs-1'],
                    getValue: block => <LiskAmount val={block.totalAmount} token="LSK" />,
                  }, {
                    header: t('Forged'),
                    className: `${grid['col-md-1']} ${grid['col-xs-2']}`,
                    getValue: block => <LiskAmount val={block.totalForged} token="LSK" />,
                    /* eslint-enable react/display-name */
                  }]}
                />


              </Box.Content>
              {!!blocks.data.length && blocks.data.length % DEFAULT_LIMIT === 0 && (
              <Box.FooterButton
                className="load-more"
                onClick={handleLoadMore}
              >
                {t('Load more')}
              </Box.FooterButton>
              )}
            </React.Fragment>
          )
      }
      </Box>
    </PageLayout>
  );
};

Blocks.propTypes = {
  t: PropTypes.func.isRequired,
  blocks: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultFilters = {
  dateFrom: '',
  dateTo: '',
  height: '',
  address: '',
};

export default withFilters('blocks', defaultFilters)(Blocks);
