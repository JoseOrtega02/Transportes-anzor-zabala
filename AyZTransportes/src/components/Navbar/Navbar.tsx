import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/tarifa" className="nav-link">
        Tarifa
      </NavLink>

      <NavLink to="/faqs" className="nav-link">
        Preguntas Frecuentes
      </NavLink>
    </div>
  );
}

export default Navbar;
