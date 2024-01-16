import { NavLink } from "react-router-dom";

import menu from "../../../assets/hamburguer_icon.svg";
import close from "../../../assets/X_icon.svg";
interface NavigationProps {
  links: {
    to: string;
    text: string;
  }[];
}

function BotonNav({ links }: NavigationProps) {
  const handleNav = () => {
    console.log("click");
    const nav = document.querySelector(".navbar__links");
    nav?.classList.toggle("active");
  };
  return (
    <>
      <button className="navbar__button" onClick={handleNav}>
        <img src={menu} alt="boton menu" />
      </button>
      <div className="navbar__links">
        <button className="navbar__button--close" onClick={handleNav}>
          <img src={close} alt="boton menu" />
        </button>
        {links.map((link: { to: string; text: string }) => (
          <NavLink to={link.to} key={link.to}>
            {link.text}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default BotonNav;
