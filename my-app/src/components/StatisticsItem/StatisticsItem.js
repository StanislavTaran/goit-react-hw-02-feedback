import React from 'react';
import propTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ name, value }) => (
  <li className={styles.item}>
    <span>{name}</span>
    <span>:</span>
    <span>{value}</span>
  </li>
);

StatisticsItem.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};

export default StatisticsItem;
