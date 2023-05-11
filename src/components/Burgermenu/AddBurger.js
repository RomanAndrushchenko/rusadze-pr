import "./Burger.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="navbar_menu">
      <nav className="nav_bar">
        <div className="burger_menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className="list_item">
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#732df5" : "inherit",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/faqs"
            >
              FAQs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
