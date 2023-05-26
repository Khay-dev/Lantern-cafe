import "./Footer.css";
import Menu from "../assets/menu.pdf";
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
            <a target="blank" href="https://wa.me/message/33PWDDHABE46H1">
              <AiOutlineWhatsApp />
              <span>+2349157657294</span>
            </a>
          </div>
          <div className="socials">
            <a
              target="blank"
              href="https://instagram.com/lantern_cafe_phc?igshid=NTc4MTIwNjQ2YQ=="
            >
              <AiOutlineInstagram />
              <span>Lantern_cafe_phc</span>
            </a>
          </div>
          <div className="mail">
            <a href="mailto:lanterncafephc@gmail.com">
              lanterncafephc@gmail.com
            </a>
          </div>
          <div className="mail">
            <a href="mailto:info@lanterncafeng.com">info@lanterncafeng.com</a>
          </div>
          <div className="address">
            28 Stadium Road, Inside Atrium Event Center
          </div>
        </div>

        <div className="footer-2">
          <div className="f-title">OPENING HOURS</div>
          <div className="name"> MON-FRI</div>
          <div className="time">9:00AM-9:00PM</div>
          <div className="name">SAT-SUN</div>
          <div className="time">10:00AM-9:30PM</div>
          <div className="f-title">KARAOKE DAYS</div>
          <div className="name">WED/FRI/SAT/SUN</div>
          <div className="time">5:00PM-9:00PM</div>
        </div>
        <div className="footer-1">
          <div className="menu one">
            <a href={Menu} download="Menu">
              <span>DOWNLOAD MENU</span>
              <AiOutlineDownload />
            </a>
          </div>
          <div className="reserve one">
            <a target="blank" href="https://wa.me/message/33PWDDHABE46H1">
              <span> RESERVATION</span>
              <AiOutlinePhone />
            </a>
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
