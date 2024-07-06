import styles from "./Button1.module.scss";
const Button1 = ({ children, className, type, disabled }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${styles["button1"]} ${className && className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button1;
