import styles from "./ActionButton.module.scss";

const Button = (props) => {
  return (
    <button className={styles.action} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
