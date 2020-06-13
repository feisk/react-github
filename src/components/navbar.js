import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand">
      <ul className="navbar-nav">
        <li className="navItem">
          <NavLink exact to="/" className="nav-link">
            Главная
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/about" className="nav-link">
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
