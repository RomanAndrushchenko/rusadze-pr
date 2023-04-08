import { Container } from "../../shared/components";
import logo from "../../shared/assets/LOGO.png";
import twitter from "../../shared/assets/twitter.png";
import fb from "../../shared/assets/fb.png";
import instagram from "../../shared/assets/instagram.png";
import linkedin from "../../shared/assets/linkedin.png";

import Styles from "./Styles.module.scss";

const View = () => {
  return (
    <footer className={Styles.footer}>
      <Container>
        <div className={Styles.footer__iner}>
          <div className={Styles.contacts_info}>
            <p>
              <a className={Styles.email} href="email">
                info@Rusadze +
              </a>
            </p>
            <p>
              <a className={Styles.adress} href="adress">
                901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA
              </a>
            </p>
          </div>
          <div className={Styles.socials}>
            <div className={Styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <img src={fb} alt="fb" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <p>© 2023 - Rusadze & Partners</p>
          </div>
          <nav className={Styles.list_item_info}>
            <p> - Portfolio</p>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Pricing Plans</li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};
export default View;
