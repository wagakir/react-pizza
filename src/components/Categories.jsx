import React from "react";

const Categories = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (num) => {
    setActiveIndex(num);
  };

  const categoriesArray = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((title, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
