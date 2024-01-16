import "./navbar.css";
import logo from "../../assets/Logo.svg";
import BotonNav from "./components/BotonNav";

export function Navbar() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/tarifa", text: "Tarifa" },
    { to: "/faqs", text: "Preguntas Frecuentes" },
  ];
  return (
    <nav className="navbar">
      <img
        src={logo}
        className="navbar__logo"
        alt="Logo Anzor Zabala Transportes"
      />

      <BotonNav links={links} />
    </nav>
  );
}

export default Navbar;
