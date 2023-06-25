import React from "react";
import styles from "./ListingPage.module.css";
import ItemCard from "../ItemCard";
function ListingPage({ items, page, changePage }) {
  return (
    <div>
      <h2 style={{ marginLeft: "10px" }}>Feed</h2>
      <div className={styles.filter}>
        <input placeholder="search" />
        <select placeholder="sort by">
          <option>name</option>
          <option>last edited</option>
          <option>none</option>
        </select>
      </div>
      <div className={styles.itemCardParent}>
        {items.slice(page * 10 - 10, page * 10).map((item) => {
          return <ItemCard data={item} />;
        })}
      </div>
      {items?.length > 0 ? (
        <div className={styles.pagination}>
          <a
            onClick={() => changePage(page - 1)}
            className={page > 1 ? "" : styles.pagination__disable}
          >
            &laquo;
          </a>
          {[...Array(items?.length / 10)].map((_, i) => {
            return (
              <a
                key={i}
                className={page === i + 1 ? styles.active : ""}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </a>
            );
          })}
          <a
            onClick={() => changePage(page + 1)}
            className={
              page < items.length / 10 ? "" : styles.pagination__disable
            }
          >
            &raquo;
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default ListingPage;
