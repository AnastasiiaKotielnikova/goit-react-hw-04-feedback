import PropTypes from 'prop-types';
import { ButtonList, Button, ButtonItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ButtonList>
      {keys.map(key => (
        <ButtonItem key={key}>
          <Button onClick={() => onLeaveFeedback(key)} type="button">
            {key}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
