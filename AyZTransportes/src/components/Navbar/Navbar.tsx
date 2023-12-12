import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/tarifa"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Tarifa
      </NavLink>
      <NavLink
        to="/faqs"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Preguntas Frecuentes
      </NavLink>
    </div>
  );
}

export default Navbar;
