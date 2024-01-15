import styles from "./Button.module.scss";

const Button = (props) => {
  return <button className={styles.action}>{props.text}</button>;
};

export default Button;
