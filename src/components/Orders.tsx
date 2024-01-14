import styles from "./Orders.module.scss";

const Orders = () => {
  return (
    <div className={styles["orders-container"]}>
      <div className={styles.header}>
        <p>Today's Orders</p>
        <p>Place Order</p>
      </div>
      <p>1 total</p>
    </div>
  );
};

export default Orders;
