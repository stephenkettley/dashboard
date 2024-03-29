import styles from "./OrderHeader.module.scss";

const OrderHeader = () => {
  return (
    <div className={styles["order-header"]}>
      <p className={styles["order-headings"]}>ID</p>
      <p className={styles["order-headings"]}>Litres</p>
      <p className={styles["order-headings"]}>Date</p>
      <p className={styles["order-headings"]}>Status</p>
    </div>
  );
};

export default OrderHeader;
