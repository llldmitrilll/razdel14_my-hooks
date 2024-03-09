import React from "react";
import styles from "./ProductItem.module.css"

const ProductItem = (props) => {
   return (
      <li className={styles.product}>{props.number}) {props.name} - {props.price}руб</li>
   );
};

export default ProductItem;