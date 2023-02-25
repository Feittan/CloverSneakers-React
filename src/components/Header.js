function Header(props) {

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="header_left d-flex align-center">
        <img src="/img/logo.svg"></img>
        <div className="header_tittle">
          <h3>CLOVER SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 d-flex align-center cu-p" onClick={props.onClickBasket}>
          <img className="mr-5" src="/img/korzina.svg"></img>
          <span className="cash_span ml-5">1205 грн.</span>
        </li>

        <li className="mr-40 d-flex align-center">
          <img src="/img/favorite.svg"></img>
        </li>

        <li>
          <img src="/img/union.svg"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header