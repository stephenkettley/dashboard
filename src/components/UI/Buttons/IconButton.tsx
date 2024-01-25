import LogoutIcon from "../Icons/LogoutIcon";
import styles from "./IconButton.module.scss";

export default function IconButton({ children, icon }) {
  const Icon = icon;
  console.log(Icon);
  let cssClasses = styles["menu-button"];

  if (Icon === LogoutIcon) {
    cssClasses = styles["logout-menu-button"];
  }
  return (
    <button className={cssClasses}>
      <div className={styles["icon-word"]}>
        <Icon />
        <span>{children}</span>
      </div>
    </button>
  );
}
