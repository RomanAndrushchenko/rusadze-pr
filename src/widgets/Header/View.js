import { Container } from "../../shared/components";
import logo from "../../shared/assets/Golio.png";
import Styles from "./Styles.module.scss";
import Form from "../../components/Form/AddForm";
import NavBar from "../../components/Burgermenu/AddBurger";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

const View = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header className={Styles.header}>
        <Container>
          <div className={Styles.header__iner}>
            <img src={logo} alt="Logo" className={Styles.logo} />
            <nav>
              <ul className={Styles.list_item}>
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
            </nav>

            <button className={Styles.btn} onClick={handleOpen}>
              Contact Us
            </button>
            <NavBar />
          </div>
        </Container>
      </header>
      {createPortal(<Form open={open} onClose={handleClose} />, document.body)}
    </>
  );
};
export default View;
