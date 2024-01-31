import { MouseEventHandler } from "react";
import styles from "./ActionButton.module.scss";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.action} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
