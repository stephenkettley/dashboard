import { DiAptana, DiGhostSmall, DiStreamline } from "react-icons/di";
import { IoLogOutOutline } from "react-icons/io5";
import { TiFolderOpen, TiShoppingCart } from "react-icons/ti";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["menu-items"]}>
        <img
          className={styles.logo}
          src="../../../images/starbucks.webp"
          alt="logo"
        />
        <hr className={styles.line}></hr>

        <div className={styles["menu-options"]}>
          <button>
            <DiGhostSmall className={styles.icon}></DiGhostSmall>
            Dashboard
          </button>

          <button>
            <DiStreamline className={styles.icon}></DiStreamline>
            Future Orders
          </button>

          <button>
            <TiShoppingCart className={styles.icon} />
            Place Order
          </button>

          <button>
            <TiFolderOpen className={styles.icon} />
            History
          </button>

          <button>
            <DiAptana className={styles.icon}></DiAptana>
            Settings
          </button>

          <button className={styles.logout}>
            <IoLogOutOutline className={styles.icon} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
