import React from 'react';
import propTypes, { array } from 'prop-types';
import StatisticsItem from './StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <>
      <ul className={styles.list}>
        {stats.length > 0 &&
          stats.map(item => {
            return <StatisticsItem key={item[0]} value={item[1]} />;
          })}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(array).isRequired,
};

export default Statistics;
