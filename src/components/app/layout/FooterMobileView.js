import styles from "./Footer.module.scss";

const FooterMobileView = () => {
  return (
    <p className={styles["mobile-footer-phrase"]}>
      Copyright © 2020 Reliance Compliance Solutions - All Rights Reserved.{" "}
    </p>
  );
};
export default FooterMobileView;
