import React, { useRef, useState } from "react";
import styles from "./ProductForm.module.css";

const ProductForm = (props) => {
   const productRef = useRef();
   const priceRef = useRef();
   const [notProduct, setNotProduct] = useState(false);

   function submitHandler(event) {
      event.preventDefault();

      const productPrice = priceRef.current.value;
      const productValue = productRef.current.value;
      if (productValue.trim().length > 0 && productPrice.trim().length > 0) {
         const product = {
            name: productValue,
            price: productPrice
         }
         props.addProduct(product)
         setNotProduct(false);
      }
      else {
         setNotProduct(true);
      }
   }


   return (
      <form onSubmit={submitHandler}>
         <div>
            <label htmlFor="name" >Name product</label>
            <input id="name" type="text" ref={productRef} />
         </div>
         <div>
            <label htmlFor="price">Price product</label>
            <input id="price" type="number" ref={priceRef} />
         </div>

         <button>
            {props.loading ? "Loaded propuct" : "Add Product"}
         </button>
         {notProduct && <p>Write name product</p>}
      </form>
   );
};

export default ProductForm;