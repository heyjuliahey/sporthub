import "./Footer.scss";
import {
  FaVk,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <span className="logo-text">sporthub</span>
        </div>

        <div className="footer__links">
          <a href="#">О проекте</a>
          <a href="#">Обратная связь</a>
          <div className="footer__ads">
            <p>Реклама:</p>
            <a href="mailto:ads@sporthub.news">ads@sporthub.news</a>
          </div>
        </div>
      </div>

      <div className="footer__social">
          <a href="#" aria-label="VK"><FaVk /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </div>

      <div className="footer__bottom">
        <p>© 2022 «Спортхаб»</p>
        <p>
          Разработка сайта — компания <a href="#">PRAS</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;