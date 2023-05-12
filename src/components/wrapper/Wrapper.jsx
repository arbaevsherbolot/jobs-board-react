import React from "react";
import Main from "./main/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from "./Wrapper.module.scss";

const Wrapper = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <Header />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Wrapper;
