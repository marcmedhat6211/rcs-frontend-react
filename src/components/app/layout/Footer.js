import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-phrase"]}>
        Copyright © 2020 Reliance Compliance Solutions - All Rights Reserved.{" "}
      </p>
    </footer>
  );
};
export default Footer;
