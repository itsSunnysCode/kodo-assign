import React from "react";
import styles from "./ItemCard.module.css";
function ItemCard() {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={"https://picsum.photos/640/480"} />
      <p className={styles.title}>title</p>
      <p className={styles.description}>description</p>
    </div>
  );
}

export default ItemCard;
