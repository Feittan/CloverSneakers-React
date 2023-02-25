import styles from "./Card.module.scss";
import React from "react";

function Card({imgUrl,tittle,price,onPlus}) {
  const [isAdded,setIsAdded] = React.useState(false)
  const [isLiked,setIsLiked] = React.useState(false)

  const onClickPlus = () => {
    onPlus({price,imgUrl,tittle});
    setIsAdded(!isAdded) 
    
  }

  const onClickLike = () => {
    setIsLiked(!isLiked)
  }


  return (
    <div className={styles.card}>
      <div className={styles.unlike}>
        <img src={ isLiked ? "/img/like.svg" : "/img/unlike.svg"} alt="Unlike" onClick={onClickLike}></img>
      </div>
      <img width={133} height={112} src={imgUrl} alt=""></img>
      <h5 className="mb-15 mt-15">{tittle}</h5>
      <div className="d-flex justify-between">
        <div className="card_price d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
       <button className={styles.card_button}  onClick={onClickPlus}>
         <img  src={isAdded ? "/img/add_green.svg" : "/img/add.svg"} alt="Error"></img>
        </button> 
      </div>
    </div>
  );
}

export default Card;
