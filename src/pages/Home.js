import { Container } from "../shared/components";
import arrow from "../shared/assets/ArrowRight.png";
import Styles from "./home.module.scss";
import Slider from "../components/Slider/Slider";

const Home = () => {
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
          <div className={Styles.position_btn}>
            <button className={Styles.btn}>
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
