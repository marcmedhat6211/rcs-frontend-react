import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles["logo-container"]}>
        <img
          className={styles["navbar-logo"]}
          src="https://reliancecompliance.ca/images/890fb8.png?v=1.0.1"
        ></img>
      </a>
    </nav>
  );
};
export default Header;
