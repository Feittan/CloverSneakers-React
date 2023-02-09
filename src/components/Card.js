function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/like.svg" alt="Unlike"></img>
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""></img>
      <h5 className="mb-15 mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between">
        <div className="card_price d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 грн.</b>
        </div>
        <button className="card_button">
          <img width={14} height={14} src="/img/add.svg" alt="Error"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
