import styles from "./Footer.module.scss";
import FooterDesktopView from "./FooterDesktopView";
import FooterMobileView from "./FooterMobileView";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterMobileView />
      <FooterDesktopView />
    </footer>
  );
};
export default Footer;
