import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import Styles from "./Styles.module.scss";

const View = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default View;
