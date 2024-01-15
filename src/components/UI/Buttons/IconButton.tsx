import styles from "./IconButton.module.scss";

export default function IconButton({ children, icon }) {
  const Icon = icon;
  console.log(Icon);

  return (
    <button className={styles["menu-button"]}>
      <Icon />
      <span>{children}</span>
    </button>
  );
}
