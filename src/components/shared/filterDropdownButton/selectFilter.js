import React from 'react';
import { withTranslation } from 'react-i18next';
import { MODULE_ASSETS_NAME_ID_MAP } from '@constants';
import { getModuleAssetSenderLabel } from '@utils/moduleAssets';
import Select from '@toolbox/select';
import styles from './filters.css';

const SelectFilter = ({
  label, placeholder, filters, name, updateCustomFilters,
}) => {
  const options = Object.keys(MODULE_ASSETS_NAME_ID_MAP)
    .map(key => ({
      value: MODULE_ASSETS_NAME_ID_MAP[key],
      label: getModuleAssetSenderLabel()[key],
    }));
  options.unshift({ value: '', label: placeholder });

  const onChange = (value) => {
    updateCustomFilters({
      [name]: {
        value,
      },
    });
  };

  return (
    <div className={styles.fieldGroup}>
      <span className={styles.fieldLabel}>{label}</span>
      <Select
        placeholder={placeholder}
        options={options}
        selected={filters[name]}
        onChange={onChange}
        className={styles.input}
        size="xs"
      />
    </div>
  );
};

export default withTranslation()(SelectFilter);
