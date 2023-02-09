import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <main>
        <div className="main_inner p-40">
          <div class="tittle_blocks mb-40 d-flex align-center justify-between">
            <h1>Все кроссовки</h1>
            <div className="search_block">
              <input placeholder="Поиск..."></input>
              <img src="/img/search.svg" alt="Error"></img>
            </div>
          </div>

          <div className="d-flex justify-between">
            <Card/>
            <div className="card">
              <img
                width={133}
                height={112}
                src="./img/sneakers/2.jpg"
                alt=""
              ></img>
              <h5 className="mb-15 mt-15">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h5>
              <div className="d-flex justify-between">
                <div className="card_price d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 грн.</b>
                </div>
                <button className="card_button">
                  <img
                    width={14}
                    height={14}
                    src="/img/add.svg"
                    alt="Error"
                  ></img>
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="./img/sneakers/3.jpg"
                alt=""
              ></img>
              <h5 className="mb-15 mt-15">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h5>
              <div className="d-flex justify-between">
                <div className="card_price d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 499 грн.</b>
                </div>
                <button className="card_button">
                  <img
                    width={14}
                    height={14}
                    src="/img/add.svg"
                    alt="Error"
                  ></img>
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="./img/sneakers/4.jpg"
                alt=""
              ></img>
              <h5 className="mb-15 mt-15">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h5>
              <div className="d-flex justify-between">
                <div className="card_price d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 599 грн.</b>
                </div>
                <button className="card_button">
                  <img
                    width={14}
                    height={14}
                    src="/img/add.svg"
                    alt="Error"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
