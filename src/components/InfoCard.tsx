import styles from "./InfoCard.module.scss";
import Button from "./UI/Button";

export default function InfoCard(props: {
  cardType: string;
  amount: string;
  icon: string;
  action: string;
}) {
  const card = props.cardType;
  return (
    <div className={`${styles[card]}`}>
      <div className={styles["info-card-top"]}>
        <p>{props.icon}</p>
        <Button text={props.action}></Button>
      </div>
      <div className={styles["info-card-bottom"]}>
        <p className={styles.description}>
          {props.cardType.charAt(0).toUpperCase() + props.cardType.slice(1)}
        </p>
        <h2 className={styles.amount}>{props.amount}</h2>
      </div>
    </div>
  );
}
