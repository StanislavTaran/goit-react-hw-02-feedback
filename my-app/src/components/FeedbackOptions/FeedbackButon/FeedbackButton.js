import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackButton.module.css';

const FeedbackButton = ({ option, onLeaveFeedback }) => (
  <button
    name={option}
    type="button"
    className={styles.button}
    onClick={onLeaveFeedback}
  >
    {option}
  </button>
);

FeedbackButton.propTypes = {
  option: propTypes.string.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackButton;
