import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div>
      <h1>Этой страницы не существует!</h1>
      <br />
      <Link to="/">
        <p>перейти на главную</p>
      </Link>
    </div>
  );
};

export default NotFound;
