import { Container } from "../../shared/components";
import logo from "../../shared/assets/Golio.png";
import Styles from "./Styles.module.scss";

const View = () => {
  return (
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
          <button className={Styles.btn}>Contact Us</button>
        </div>
      </Container>
    </header>
  );
};
export default View;
