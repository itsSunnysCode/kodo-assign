import React from "react";
import ListingPage from "../ListingPage";
import data from "../../data";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ListingPage data={data} />
      </div>
    </div>
  );
}

export default Home;
