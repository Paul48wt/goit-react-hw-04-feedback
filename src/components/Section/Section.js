import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <p className="sectionTitle">{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
