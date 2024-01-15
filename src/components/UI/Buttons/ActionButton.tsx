import styles from "./ActionButton.module.scss";

const Button = (props) => {
  return <button className={styles.action}>{props.text}</button>;
};

export default Button;
