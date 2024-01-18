import styles from "./InfoCard.module.scss";
import InfoCardIcon from "./InfoCardIcon";
import Button from "./UI/Buttons/ActionButton";

export default function InfoCard({
  cardType,
  amount,
  icon,
  action,
  onActionButtonClicked,
}) {
  const card = cardType;
  return (
    <>
      <div className={`${styles[card]}`}>
        <div className={styles["info-card-top"]}>
          <InfoCardIcon icon={icon}></InfoCardIcon>
          <Button text={action} onClick={onActionButtonClicked}></Button>
        </div>
        <div className={styles["info-card-bottom"]}>
          <p className={styles.description}>
            {cardType.charAt(0).toUpperCase() + cardType.slice(1)}
          </p>
          {cardType === "balance" && (
            <h2 className={styles.amount}>R{amount}</h2>
          )}
          {cardType !== "balance" && (
            <h2 className={styles.amount}>{amount}</h2>
          )}
        </div>
      </div>
    </>
  );
}
