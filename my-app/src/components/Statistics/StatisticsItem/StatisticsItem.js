import React from 'react';
import propTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ key, value }) => (
  <li className={styles.item}>
    {key}
    :
    <span>{value}</span>
  </li>
);

StatisticsItem.propTypes = {
  key: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};

export default StatisticsItem;
