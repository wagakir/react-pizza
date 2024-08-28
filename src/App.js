import "./App.scss";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
// import pizzasArrayJson from "./assets/pizzaArray.json";
import React from "react";
import axios from "axios";
function App() {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  React.useEffect(() => {
    getPizza();
  }, []);
  const getPizza = () => {
    axios
      .get("https://my-json-server.typicode.com/wagakir/react-pizza/test")
      .then((res) => setPizzasArray(res.data));
  };
  const postPizza = () => {
    axios
      .post(
        "https://my-json-server.typicode.com/wagakir/react-pizza/test",
        1

        // {
        //   id: Math.floor(Math.random() * 100000),
        //   imageUrl:
        //     "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
        //   title: "Пепперони Фреш с перцем",
        //   types: [0, 1],
        //   sizes: [26, 30, 40],
        //   price: Math.floor(Math.random() * 100000),
        //   category: 0,
        //   rating: 4,
        // }
      )
      .catch(alert("err"));
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <button
          className="button"
          onClick={() => {
            postPizza();
          }}
        >
          post pizza
        </button>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzasArray.map((obj) => (
                <div>{obj}</div>
                // <PizzaBlock {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
