import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>
          Good:<span>{good}</span>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Bad:<span>{bad}</span>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Total:<span>{total}</span>
        </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>
          Positive feedback:<span>{positivePercentage}%</span>
        </p>
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
