import styles from "./Button1.module.scss";
const Button1 = (props) => {
  return (
    <button type="button" className={styles["button1"]}>
      {props.children}
    </button>
  );
};
export default Button1;
