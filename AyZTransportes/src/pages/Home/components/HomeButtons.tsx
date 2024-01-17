import { Link } from "react-router-dom";
import "./buttons.css";
import messageIcon from "../../../assets/message_icon.svg";
function HomeButtons() {
  return (
    <div className="hero__buttons">
      <Link to="/tarifa" className="hero__button--1">
        Calcular Tarifa
      </Link>
      <Link
        to="https://web.whatsapp.com/send?phone=+542645881605&app_absent=0"
        className="hero__button--2"
      >
        Contactanos!
        <img src={messageIcon} alt="icono de mensage" />
      </Link>
    </div>
  );
}

export default HomeButtons;
