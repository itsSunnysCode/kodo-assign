import React from "react";
import styles from "./ListingPage.module.css";
import ItemCard from "../ItemCard";
function ListingPage() {
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
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <div className={styles.pagination}>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}

export default ListingPage;
