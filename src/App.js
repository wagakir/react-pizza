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
      .get("http://localhost:3020/pizza")
      .then((res) => setPizzasArray(res.data));
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <button
          className="button"
          onClick={() => {
            getPizza();
          }}
        ></button>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzasArray.map((obj) => (
                <PizzaBlock {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
