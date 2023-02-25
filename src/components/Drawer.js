function Drawer({onClose,items = []}) {
  return (
    <div className="drawer_wrapper">
      <div className="drawer">
        <h2 className="d-flex  justify-between">
          Корзина{" "}
          <img onClick={onClose}
            className="drawer_add cu-p"
            width={32}
            height={32}
            src="/img/drawer/drawer_close.svg"
            alt="loose"
          />{" "}
        </h2>

        <div className="drawer_item">
          {items.map((obj) => (
             <div className="drawer_inner">
               <div className="drawer_img d-flex justify-between align-center pr-30">
                    <div style={{backgroundImage:`url(${obj.imgUrl})`}} className="drawer_test">

                    </div>
                    <img
                      className="drawer_add mb-5"
                      width={32}
                      height={32}
                      src="/img/drawer/drawer_close.svg"
                      alt="loose"
                    />
                 </div>
                <div className="drawer_info">
                  <p className="mb-5">{obj.tittle}</p>
                  <b>{obj.price}</b>
                </div>
            </div>
          ))}
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
