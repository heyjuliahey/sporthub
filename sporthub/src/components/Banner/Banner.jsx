import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ image, title, text }) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;