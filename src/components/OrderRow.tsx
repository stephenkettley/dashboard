import styles from "./OrderRow.module.scss";

const OrderRow = (props) => {
  return (
    <div className={styles["order-row"]}>
      <p className={styles.id}>{props.id}</p>
      <p className={styles.litres}>{props.litres}</p>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.status}>{props.status}</p>
    </div>
  );
};

export default OrderRow;
