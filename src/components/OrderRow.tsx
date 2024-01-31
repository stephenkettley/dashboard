import styles from "./OrderRow.module.scss";

interface OrderRowProps {
  id: number;
  litres: string;
  date: string;
  status: string;
}

const OrderRow = ({ id, litres, date, status }: OrderRowProps) => {
  return (
    <div className={styles["order-row"]}>
      <p className={styles.id}>{id}</p>
      <p className={styles.litres}>{litres}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

export default OrderRow;
