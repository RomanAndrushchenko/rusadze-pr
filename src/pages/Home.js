import { Container } from "../shared/components";
import arrow from "../shared/assets/ArrowRight.png";
import Styles from "./home.module.scss";
import Slider from "../components/Slider/Slider";
import Form from "../components/Form/AddForm";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Home = () => {
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
    <main className={Styles.main}>
      <Container>
        <div className={Styles.position}>
          <div className={Styles.animation_background}></div>
          <div className={Styles.txt_center}>
            <p className={Styles.digital}>DIGITAL WAY </p>
            <p className={Styles.brand}>
              BRAND & <span>STRATEGY</span>{" "}
            </p>
          </div>
        </div>
        <p className={Styles.join_team}>
          Join a <span>team</span> of sucess.
        </p>
        <div className={Styles.cases}>
          <div>
            <p className={Styles.numbers}>80+</p>
            <p className={Styles.texts}>Projects</p>
          </div>
          <div>
            <p className={Styles.numbers}>60+</p>
            <p className={Styles.texts}>Partners</p>
          </div>
          <div>
            <p className={Styles.numbers}>18+</p>
            <p className={Styles.texts}>Business Areas</p>
          </div>
        </div>
      </Container>
      <div className={Styles.bng_image}>
        <div className={Styles.content_in_backimage}>
          <Container>
            <p className={Styles.your_business}>
              WE MAKE <span>YOUR </span>
            </p>
            <p className={Styles.your_business}>
              {" "}
              <span>BUSINESS</span> WORKS BETTER
            </p>
            <p className={Styles.partners}>Our partners:</p>
          </Container>
          <Slider />
          {createPortal(
            <Form open={open} onClose={handleClose} />,
            document.body
          )}
          <div className={Styles.position_btn}>
            <button className={Styles.btn} onClick={handleOpen}>
              Contact Us
              <img
                className={Styles.arrow_right}
                src={arrow}
                alt="ArrowRight"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
