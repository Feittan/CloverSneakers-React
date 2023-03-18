import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

import { Route } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [removeFromBasket,setremoveFromBasket] = React.useState()

  //BACK-END
  React.useEffect(() => {
    axios.get("https://63ebd5e732a081172392d745.mockapi.io/items").then((res) => {
    setItems(res.data)
   });

   axios.get("https://63ebd5e732a081172392d745.mockapi.io/addToCard").then((res) => {
    setBasketItems(res.data)
   });
  }, []);


  const onAddtoBasket = (obj) => {
    axios.post("https://63ebd5e732a081172392d745.mockapi.io/addToCard",obj)
    setBasketItems(prev => [...prev,obj])
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  
  const onRemoveFromBasket = (id) => {
    axios.delete(`https://63ebd5e732a081172392d745.mockapi.io/addToCard/${id}`)
    setBasketItems(prev => prev.filter(items => items.id !== id))
  }

  return (
    <div className="wrapper clear">
      {basketOpened && (
        <Drawer items={basketItems} onClose={() => setBasketOpened(false)} onRemove={onRemoveFromBasket}/>
      )}
      <Header onClickBasket={() => setBasketOpened(true)} />

    
      <main>
        <div className="main_inner p-40">
          <div className="tittle_blocks mb-40 d-flex align-center justify-between">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
            <div className="search_block">
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
              <img src="/img/search.svg" alt="Error"></img>
            </div>
          </div>

          <div className="d-flex justify-between flex-wrap">
            {items
            .filter((items) => items.tittle.toLowerCase().includes(searchValue.toLowerCase()))
            .map((items) => (
              <Card key={items.tittle} tittle={items.tittle} price={items.price} imgUrl={items.imgUrl} onPlus={(obj) => onAddtoBasket(obj)}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
