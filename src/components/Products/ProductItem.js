import React from "react";

const ProductItem = (props) => {
   return (
      <li>{props.number}) {props.name} - {props.price}руб</li>
   );
};

export default ProductItem;