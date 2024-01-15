import { NavLink } from "react-router-dom";

export function Navbar() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/tarifa", text: "Tarifa" },
    { to: "/faqs", text: "Preguntas Frecuentes" },
  ];
  return (
    <div>
      {links.map((link) => (
        <NavLink to={link.to} className="nav-link">
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
