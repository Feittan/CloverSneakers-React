function Drawer() {
  return (
    <div style={{ display: "none" }} className="drawer_wrapper">
      <div className="drawer">
        <h2 className="d-flex  justify-between">
          Корзина{" "}
          <img
            className="drawer_add cu-p"
            width={32}
            height={32}
            src="/img/drawer/draw_add.svg"
            alt="loose"
          />{" "}
        </h2>

        <div className="drawer_item">
          <div className="drawer_inner">
            <div className="drawer_img d-flex justify-between align-center pr-30">
              <img src="/img/drawer/draw_1.svg" alt="loose" />
              <img
                className="drawer_add mt-20"
                width={32}
                height={32}
                src="/img/drawer/draw_add.svg"
                alt="loose"
              />
            </div>
            <div className="drawer_info">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 грн</b>
            </div>
          </div>
          <div className="drawer_inner">
            <div className="drawer_img d-flex justify-between align-center pr-30">
              <img src="/img/drawer/draw_2.svg" alt="loose" />
              <img
                className="drawer_add mt-20"
                width={32}
                height={32}
                src="/img/drawer/draw_add.svg"
                alt="loose"
              />
            </div>
            <div className="drawer_info">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>8 499 грн</b>
            </div>
          </div>
        </div>
        <div className="drawer_total">
          <ul>
            <li className="d-flex mb-15">
              <span>Итого: </span>
              <div></div>
              <b>21 498 грн </b>
            </li>
            <li className="d-flex mb-15">
              <span>Доставка: </span>
              <div></div>
              <b>150 грн</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/drawer/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer
