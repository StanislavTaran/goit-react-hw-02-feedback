import React from 'react';
import propTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.elementType,
};

Section.defaultProps = {
  children: null,
};

export default Section;
