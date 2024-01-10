import styles from "./InfoCard.module.css";

const InfoCard = ({ cardType }) => {
  const card = cardType;
  return <div className={`${styles[card]}`}></div>;
};

export default InfoCard;
