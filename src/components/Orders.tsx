import orderItems from "../order-items";
import OrderHeader from "./OrderHeader";
import OrderRow from "./OrderRow";
import styles from "./Orders.module.scss";
import Button from "./UI/Buttons/ActionButton";

const Orders = () => {
  return (
    <div className={styles["orders-container"]}>
      <div className={styles.header}>
        <h1>Today's Orders</h1>
        <Button className="orders" text="Place Order"></Button>
      </div>
      <p className={styles.total}>1 total</p>
      <div className={styles.orders}>
        <hr></hr>
        <OrderHeader></OrderHeader>
        <hr></hr>
        {orderItems.map((order) => (
          <OrderRow
            id={order.id}
            litres={order.litres}
            date={order.date}
            status={order.status}
          ></OrderRow>
        ))}
        {/* <OrderRow
          id="571"
          litres="500L"
          date="23 January"
          status="In Progress"
        ></OrderRow>
        <OrderRow
          id="571"
          litres="500L"
          date="23 January"
          status="In Progress"
        ></OrderRow>
        <OrderRow
          id="571"
          litres="500L"
          date="23 January"
          status="In Progress"
        ></OrderRow>
        <OrderRow
          id="571"
          litres="500L"
          date="23 January"
          status="In Progress"
        ></OrderRow>
        <OrderRow
          id="571"
          litres="500L"
          date="23 January"
          status="In Progress"
        ></OrderRow> */}
      </div>
    </div>
  );
};

export default Orders;
