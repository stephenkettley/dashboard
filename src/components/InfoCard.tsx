import styles from "./InfoCard.module.scss";

const InfoCard = ({ cardType }) => {
  const card = cardType;
  return <div className={`${styles[card]}`}></div>;
};

export default InfoCard;
