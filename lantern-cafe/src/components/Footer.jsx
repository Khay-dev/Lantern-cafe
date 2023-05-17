import "./Footer.css";
import {
  AiOutlineDownload,
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-3">
          <div className="number">
            <AiOutlineWhatsApp />
            <span>+2348153270969</span>
          </div>
          <div className="socials">
            <AiOutlineInstagram />
            <span>Lantern_cafe_phc</span>
          </div>
          <div className="mail">
            Lorem ipsum dolor sit amet, consectetur 
          </div>
          <div className="address">
            Lorem ipsum dolor sit amet consectetur adipisicing elit At
            explicabo
          </div>
        </div>

        <div className="footer-2">
          <div className="f-title">OPENING HOURS</div>
          <div className="name"> MON-FRI</div>
          <div className="time">7:30-9:00</div>
          <div className="name">SAT-SUN</div>
          <div className="time">12:00-8:00</div>
        </div>
        <div className="footer-1">
          <div className="menu one">
            <span>DOWNLOAD MENU</span>
            <AiOutlineDownload />
          </div>
          <div className="reserve one">
            <span> RESERVATION</span>
            <AiOutlinePhone />
          </div>
          <div className="note">
            {" "}
            *All reservations must be made a day before*
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
