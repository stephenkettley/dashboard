import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles["welcome-container"]}>
      <div className={styles.container}>
        <p className={styles["welcome-back"]}>
          Welcome Back, John! <span>&#x1F44B;</span>
        </p>
        <h1 className={styles["company-name"]}>Company Name</h1>
      </div>
    </div>
  );
};

export default Welcome;
