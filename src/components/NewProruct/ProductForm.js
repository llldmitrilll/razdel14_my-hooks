import React, { useState } from "react";
import styles from "./ProductForm.module.css";

const ProductForm = (props) => {
   const [isPrice, setIsPrice] = useState("");
   const [inputPriceTouched, setInputPriceTouched] = useState(false);

   const [isProduct, setIsProduct] = useState("");
   const [inputTouched, setInputTouched] = useState(false);

   const [isEmail, setIsEmail] = useState("");
   const [inputEmailTouched, setInputEmailTouched] = useState(false);

   const isProductValid = isProduct.trim() !== "";
   const isProductInpInvalid = !isProductValid && inputTouched;

   const isPriceValid = isPrice.trim() !== "";
   const isPriceInpInvalid = !isPriceValid && inputPriceTouched;

   const isEmailValid = isEmail.trim() !== "" && isEmail.includes('@');
   const isEmailInpInvalid = !isEmailValid && inputEmailTouched;

   let isFormValid = isProductValid && isPriceValid && isEmailValid;
   // let isFormValid = true;
   // if (isProductValid && isPriceValid && isEmailValid) {
   //    isFormValid = false;
   // }

   const productInputChangeHandler = (event) => {
      setIsProduct(event.target.value);
      setInputTouched(false);
   }

   const emailInputChangeHandler = (event) => {
      setIsEmail(event.target.value);
      setInputEmailTouched(false);
   }

   const priceInputChangeHandler = (event) => {
      setIsPrice(event.target.value);
      setInputPriceTouched(false);
   }


   const inputTouchedHendler = () => {
      setInputTouched(true);
   }

   const inputEmailTouchedHendler = () => {
      setInputEmailTouched(true)
   }

   const inputPriceTouchedHendler = () => {
      setInputPriceTouched(true);
   }

   function submitHandler(event) {
      event.preventDefault();

      setInputTouched(true);

      if (!isEmail.includes('@')) return;

      setIsProduct("");
      setInputTouched(false);
      setIsPrice("");
      setInputPriceTouched(false);
      setIsEmail("");
      setInputEmailTouched(false);
   }

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <div className={styles.formBlock}>
            <label htmlFor="name" >Name product</label>
            <input
               placeholder="Product"
               id="name"
               type="text"
               onBlur={inputTouchedHendler}
               onChange={productInputChangeHandler}
               value={isProduct}
            />
         </div>
         {isProductInpInvalid && <p className={styles.errorProduct}>Please print name product</p>}
         <div className={styles.formBlock}>
            <label htmlFor="name" >Print Email</label>
            <input
               placeholder="Product"
               id="name"
               type="text"
               onBlur={inputEmailTouchedHendler}
               onChange={emailInputChangeHandler}
               value={isEmail}
            />
         </div>
         {isEmailInpInvalid && <p className={styles.errorProduct}>Please print Email</p>}
         <div className={styles.formBlock}>
            <label htmlFor="price">Price product</label>
            <input
               placeholder="Price"
               id="price"
               type="number"
               onBlur={inputPriceTouchedHendler}
               onChange={priceInputChangeHandler}
               value={isPrice} />
         </div>
         {isPriceInpInvalid && <p className={styles.errorProduct}>Input Price lost focus</p>}
         <button disabled={!isFormValid}>
            {props.loading ? "Loaded propuct" : "Add Product"}
         </button>
      </form>
   );
};

export default ProductForm;