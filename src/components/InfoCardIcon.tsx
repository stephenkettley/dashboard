import styles from "./InfoCardIcon.module.scss";

export default function InfoCardIcon({ icon }) {
  const Icon = icon;

  return (
    <div className={styles["info-card-icon"]}>
      <Icon />
    </div>
  );
}
