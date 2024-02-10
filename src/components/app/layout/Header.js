import styles from "./Header.module.scss";
import { headerLinks } from "../../../constants/header-links";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles["logo-container"]}>
        <img
          className={styles["navbar-logo"]}
          src="https://reliancecompliance.ca/images/890fb8.png?v=1.0.1"
        ></img>
      </a>
      <ul className={styles["links-container"]}>
        {headerLinks.map((link) => {
          return <li className={styles["links"]}>{link.text}</li>;
        })}
      </ul>
    </nav>
  );
};
export default Header;
