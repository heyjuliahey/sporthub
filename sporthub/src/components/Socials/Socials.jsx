import "./Socials.scss";
import {
  FaVk,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <h3>СОЦСЕТИ</h3>
      <div className="socials-box">
         
          <a href="#"><FaVk /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTelegramPlane /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaTwitter /></a>

      </div>
    </div>
  );
};

export default Socials;
