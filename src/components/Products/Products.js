import React from "react";
import Section from "../UI/Section";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";


const Products = (props) => {
   let content = <p>Products is not loading. Loader to ptoducts.</p>

   if (props.isLoading) {
      content = <p>Products is loading ...</p>
   }

   if (!props.isLoading && props.productsArray.length > 0) {
      content = (
         <ul>
            {props.productsArray.map(((product, index) => (

               <ProductItem
                  number={index + 1}
                  key={product.id}
                  name={product.name}
                  price={product.price}
               />
            )))}
         </ul>
      )
   };

   if (props.error !== null) {
      content = <button type="button" onClick={props.getProducts}>Попробовать еще раз</button>
   };

   return (
      <Section>
         <div className={styles.productsList}>{content}</div>
      </Section>
   );
};

export default Products;