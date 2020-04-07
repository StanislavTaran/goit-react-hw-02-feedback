import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ title }) => <p>{title}</p>;

Notification.propTypes = {
  title: propTypes.string.isRequired,
};

export default Notification;
