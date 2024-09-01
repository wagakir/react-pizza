import React from "react";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaLoader from "../components/PizzaLoader";
import pizzasArrayJson from "../assets/pizzaArray.json";
const Home = (props) => {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const getPizza = async () => {
    await setPizzasArray([...new Array(10)]);

    setPizzasArray(pizzasArrayJson);
  };
  React.useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="home">
      <div className="top">
        <Categories />
        <Sort />
      </div>
      <h2 className="title">Все пиццы</h2>
      <div className="items">
        {pizzasArray.map((obj) =>
          obj ? <PizzaBlock {...obj} key={obj.id} /> : <PizzaLoader />
        )}
      </div>
    </div>
  );
};

export default Home;
