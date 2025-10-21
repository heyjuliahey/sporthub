import Socials from "../Socials/Socials";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import "./FooterSection.scss";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <Socials />
      <SubscribeForm />
    </div>
  );
};

export default FooterSection;