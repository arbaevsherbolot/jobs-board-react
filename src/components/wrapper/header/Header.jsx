import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/employees">
            Employees
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
