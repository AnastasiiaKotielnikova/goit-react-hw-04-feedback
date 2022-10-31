import PropTypes from 'prop-types';
import { Title, Container } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
