import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NewsSection.scss";

const NewsSection = ( {image, tag, title} ) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="news-section">
      <div 
        className="news-section__background" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={`news-card ${visible ? "visible" : ""}`}>
        <span className="hashtag">{tag}</span>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

NewsSection.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsSection;