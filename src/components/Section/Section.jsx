import PropTypes from 'prop-types';
import { Title } from 'components';
const Section = ({ title, children }) => (
  <section>
    <Title text={title} />
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
