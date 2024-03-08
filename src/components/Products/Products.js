import React from "react";
import ProductItem from "./ProductItem";


const Products = (props) => {
   let content = <p>Products is not loading. Loader to ptoducts.</p>

   if (props.isLoading) {
      content = <p>Products is loading ...</p>
   }

   if (!props.isLoading && props.productsArray.length > 0) {
      content = (
         props.productsArray.map(((product, index) => (
            <ul>
               <ProductItem
                  number={index + 1}
                  key={product.id}
                  name={product.name}
                  price={product.price}
               />
            </ul>
         )))
      )
   };

   if (props.error !== null) {
      content = <button onClick={props.getProducts}>Попробовать еще раз</button>
   };

   return (
      <div>
         {content}
      </div>
   );
};

export default Products;