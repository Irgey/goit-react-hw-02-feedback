import PropTypes from 'prop-types';
import { Button } from 'components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <Button
            text={option.slice(0, 1).toUpperCase() + option.slice(1)}
            clickHandler={onLeaveFeedback}
          />
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
