import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Employees.module.scss";

const Employees = () => {
  const [data, setData] = useState([{}]);

  const [countPrev, setCountPrev] = useState(0);
  const [countNext, setCountNext] = useState(10);

  const server_url = "http://localhost:3000";

  useEffect(() => {
    const getData = async () => {
      const start = countPrev;
      const end = countNext;

      const result = await axios.get(`${server_url}/jobs/${start}/${end}`);
      const data = result.data.listings;

      setData(data);
    };
    getData();
  }, []);

  const handlePrev = () => {
    setCountPrev(countPrev === 0 ? 0 : countPrev - 10);
    console.log(countPrev);
  };

  const handleNext = () => {
    setCountNext(countNext + 10);
    console.log(countNext);
  };

  return (
    <>
      <h3 className={styles.title}>Employees:</h3>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button onClick={() => handlePrev()} className={styles.prev}>
            Prev
          </button>
          <button onClick={() => handleNext()} className={styles.next}>
            Next
          </button>
        </div>
        {data.map((employee, i) => (
          <div className={styles.employee} key={i}>
            <p>{employee.employer}</p>
            <p>
              <span>{employee.role}</span>
            </p>
            <p>{employee.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Employees;
