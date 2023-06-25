import React, { useEffect, useState } from "react";
import ListingPage from "../ListingPage";
import data from "../../data";
import styles from "./Home.module.css";
function Home() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const changePage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= items.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ListingPage items={items} changePage={changePage} page={page} />
      </div>
    </div>
  );
}

export default Home;
