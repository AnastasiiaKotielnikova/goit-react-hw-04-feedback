import { useState } from 'react';
import { Container } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((100 / countTotalFeedback()) * (good + neutral));
  };

  const totalFeedback = countTotalFeedback();
  const optionKeys = { good, neutral, bad };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionKeys}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// handleLeaveFeedback = option => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// positivePercentage = () => {
//   return Math.round(
//     (100 / this.countTotalFeedback()) * (this.state.good + this.state.neutral)
//   );
// };

//   render() {
//     const { handleLeaveFeedback, positivePercentage } = this;
//     const totalFeedback = this.countTotalFeedback();
//     const optionKeys = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionKeys}
//             onLeaveFeedback={handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
