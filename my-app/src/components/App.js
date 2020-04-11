import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  options = Object.keys(this.state);

  getTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allFeedback = this.getTotalFeedback();

    return `${Math.round((good * 100) / allFeedback)}%`;
  };

  handleClick = e => {
    const name = e.target.name.toLowerCase();

    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  render() {
    const allOptions = {
      ...this.state,
      total: this.getTotalFeedback(),
      'Positive percentage': this.getPositiveFeedbackPercentage(),
    };

    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.handleClick}
        />
        <Section title="Statistics">
          {allOptions.total > 0 ? (
            <Statistics stats={Object.entries(allOptions)} />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
