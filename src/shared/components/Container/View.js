import Styles from "./Styles.module.scss";

const View = ({ children }) => {
  return <div className={Styles.container}>{children}</div>;
};

export default View;
