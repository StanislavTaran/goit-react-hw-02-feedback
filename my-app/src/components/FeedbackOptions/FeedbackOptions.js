import React from 'react';
import propTypes from 'prop-types';
import FeedbackButton from '../Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.length > 1 &&
      options.map(item => {
        return (
          <FeedbackButton
            name={item}
            key={item}
            option={item}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
