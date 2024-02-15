import HeaderDeskTopView from "./HeaderDesktopView";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import HeaderMobileView from "./HeaderMobileView";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles["logo-container"]}>
        <img className={styles["navbar-logo"]} src={logo}></img>
      </Link>
      <HeaderDeskTopView />
      <HeaderMobileView />
    </nav>
  );
};

export default Header;
