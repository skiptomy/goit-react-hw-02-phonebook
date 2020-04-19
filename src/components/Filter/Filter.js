import React from 'react';
import propTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => (
  <div className={styles.wrapper}>
    <label>
      Contact Filter:
      <input className={styles.filterInput} value={filter} onChange={handleFilterChange} />
    </label>
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleFilterChange: propTypes.func.isRequired,
};

export default Filter;
