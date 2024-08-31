import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/pages/NotFound.module.scss";
const NotFound = (props) => {
  return (
    <div className={styles.wrapper}>
      <span>🙁</span>
      <h1>Этой страницы не существует!</h1>

      <Link to="/">
        <h2>перейти на главную</h2>
      </Link>
    </div>
  );
};

export default NotFound;
