import React from "react";
import styles from "./ItemCard.module.css";
function ItemCard({ data }) {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={data?.image} alt={data?.name} />
      <p className={styles.title}>
        {data?.name?.length > 15
          ? `${data?.name?.slice(0, 15)}...`
          : data?.name}
      </p>
      <p className={styles.description}>
        {data?.description?.length > 60
          ? `${data?.description?.slice(0, 60)}...`
          : data?.description}
      </p>
    </div>
  );
}

export default ItemCard;
