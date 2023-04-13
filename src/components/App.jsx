import { Component } from 'react';
import { Section, Notification, Statistics, FeedbackOptions } from './index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = event => {
    const { id } = event.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (100 * (this.state.good / this.countTotalFeedback())).toFixed(0);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          gap: 60,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          {/* <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          /> */}
        </Section>
      </div>
    );
  }
}
