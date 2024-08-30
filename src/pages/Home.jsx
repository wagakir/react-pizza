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
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzasArray.map((obj) =>
            obj ? <PizzaBlock {...obj} key={obj.id} /> : <PizzaLoader />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
