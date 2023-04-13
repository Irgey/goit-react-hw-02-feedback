import PropTypes from 'prop-types';

const Title = ({ text }) => <h2>{text}</h2>;

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
