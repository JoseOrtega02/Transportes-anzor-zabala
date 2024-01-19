import { Link } from "react-router-dom";
import "./footer.css";
import messageIcon from "../../assets/message_icon_white.svg";
import logo from "../../assets/Logo.svg";
export function Footer() {
  return (
    <footer>
      <div className={"footer__buttons__container"}>
        <Link to={"/tarifa"} className={"footer__button"}>
          Calcula tu tarifa
        </Link>
        <Link
          to={"https://web.whatsapp.com/send?phone=+542645881605&app_absent=0"}
          className={"footer__button--2"}
        >
          Contactanos
          <img src={messageIcon} alt="icono de mensage" />
        </Link>
      </div>
      <img src={logo} alt="logo Anzor Zabala Transportes" />
      <div className={"footer__links"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/tarifa"}>Tarifa</Link>
        <Link to={"/faq"}>FAQ</Link>
      </div>
    </footer>
  );
}

export default Footer;
