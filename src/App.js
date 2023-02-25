import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);

  //BACK-END
  React.useEffect(() => {
    fetch("https://63ebd5e732a081172392d745.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);


  const onAddtoBasket = (obj) => {
    setBasketItems(prev => [...prev,obj])
  }
  

  return (
    <div className="wrapper clear">
      {basketOpened && (
        <Drawer items={basketItems} onClose={() => setBasketOpened(false)} />
      )}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <main>
        <div className="main_inner p-40">
          <div className="tittle_blocks mb-40 d-flex align-center justify-between">
            <h1>Все кроссовки</h1>
            <div className="search_block">
              <input placeholder="Поиск..."></input>
              <img src="/img/search.svg" alt="Error"></img>
            </div>
          </div>

          <div className="d-flex justify-between flex-wrap">
            {items.map((items) => (
              <Card tittle={items.tittle} price={items.price} imgUrl={items.imgUrl} onPlus={(obj) => onAddtoBasket(obj)}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
