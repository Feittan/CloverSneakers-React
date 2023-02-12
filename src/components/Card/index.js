import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unlike.svg" alt="Unlike"></img>
      </div>
      <img width={133} height={112} src={props.ImgUrl} alt=""></img>
      <h5 className="mb-15 mt-15">{props.tittle}</h5>
      <div className="d-flex justify-between">
        <div className="card_price d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.card_button}>
          <img width={12} height={12} src="/img/add.svg" alt="Error"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
