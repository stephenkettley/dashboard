import styles from "./InfoCard.module.scss";

export default function InfoCard(props: {
  cardType: string;
  amount: number;
  icon: string;
  action: string;
}) {
  const card = props.cardType;
  return (
    <div className={`${styles[card]}`}>
      <div className={styles["info-card-top"]}>
        <p>{props.icon}</p>
        <p>{props.action}</p>
      </div>
      <div className={styles["info-card-bottom"]}>
        <p>
          {props.cardType.charAt(0).toUpperCase() + props.cardType.slice(1)}
        </p>
        <p className={styles.amount}>{props.amount}</p>
      </div>
    </div>
  );
}
