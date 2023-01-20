import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const handleClick = ({ currentTarget: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);

      // eslint-disable-next-line no-fallthrough

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (bad + good + neutral)) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          handleClick={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            total={countTotalFeedback()}
            options={options}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
