import { Container } from "../../shared/components";
import logo from "../../shared/assets/Golio.png";
import Styles from "./Styles.module.scss";
import Form from "../../components/Form/AddForm";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
                <li>Home</li>
                <li>About</li>
                <li>Team</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>FAQs</li>
              </ul>
            </nav>
            <button className={Styles.btn} onClick={handleOpen}>
              Contact Us
            </button>
          </div>
        </Container>
      </header>
      {createPortal(<Form open={open} onClose={handleClose} />, document.body)}
    </>
  );
};
export default View;
