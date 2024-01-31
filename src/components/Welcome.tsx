import styles from "./Welcome.module.scss";

type WelcomeCardProps = {
  userName: string;
  companyName: string;
};

const Welcome = ({ userName, companyName }: WelcomeCardProps) => {
  return (
    <div className={styles["welcome-container"]}>
      <p className={styles["welcome-back"]}>
        Welcome Back, {userName}!<span>&#x1F44B;</span>
      </p>
      <h1 className={styles["company-name"]}>{companyName}</h1>
    </div>
  );
};

export default Welcome;
