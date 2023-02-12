import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 грн.",
    ImgUrl: "/img/sneakers/1.jpg",
  },
  {
    tittle: "Мужские Кроссовки Nike Air Max 270",
    price: "10 999 грн.",
    ImgUrl: "/img/sneakers/2.jpg",
  },
  {
    tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 грн.",
    ImgUrl: "/img/sneakers/3.jpg",
  },
  {
    tittle: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 грн.",
    ImgUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <main>
        <div className="main_inner p-40">
          <div className="tittle_blocks mb-40 d-flex align-center justify-between">
            <h1>Все кроссовки</h1>
            <div className="search_block">
              <input placeholder="Поиск..."></input>
              <img src="/img/search.svg" alt="Error"></img>
            </div>
          </div>

          <div className="d-flex justify-between">
            {arr.map((obj) => (
              <Card tittle={obj.tittle} price={obj.price} ImgUrl={obj.ImgUrl} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
