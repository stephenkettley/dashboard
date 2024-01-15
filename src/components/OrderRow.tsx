import styles from "./OrderRow.module.scss";

const OrderRow = (props) => {
  return (
    <div className={styles["order-row"]}>
      <input type="checkbox" className={styles["row-check"]}></input>
      <p>{props.id}</p>
      <p>{props.litres}</p>
      <p>{props.date}</p>
      <p>{props.status}</p>
    </div>
  );
};

export default OrderRow;
