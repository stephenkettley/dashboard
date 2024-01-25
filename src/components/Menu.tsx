import IconButton from "./UI/Buttons/IconButton";
import DashboardIcon from "./UI/Icons/DashboardIcon";
import FutureOrdersIcon from "./UI/Icons/FutureOrdersIcon";
import HistoryIcon from "./UI/Icons/HistoryIcon";
import LogoutIcon from "./UI/Icons/LogoutIcon";
import PlaceOrderIcon from "./UI/Icons/PlaceOrderIcon";
import SettingsIcon from "./UI/Icons/SettingsIcon";

import styles from "./Menu.module.scss";
import HamburgerIcon from "./UI/Icons/HamburgerIcon";

const Menu = () => {
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["top-section"]}>
        <img
          className={styles.logo}
          src="../../../images/starbucks.webp"
          alt="logo"
        />
        <hr className={styles.line}></hr>
      </div>
      <div className={styles["burger-options"]}>
        <HamburgerIcon></HamburgerIcon>
      </div>
      <div className={styles["menu-options"]}>
        <IconButton icon={DashboardIcon}>Dashboard</IconButton>
        <IconButton icon={FutureOrdersIcon}>Future Orders</IconButton>
        <IconButton icon={PlaceOrderIcon}>Place Order</IconButton>
        <IconButton icon={HistoryIcon}>History</IconButton>
        <IconButton icon={SettingsIcon}>Settings</IconButton>
        <IconButton icon={LogoutIcon}>Logout</IconButton>
      </div>
    </div>
  );
};

export default Menu;
