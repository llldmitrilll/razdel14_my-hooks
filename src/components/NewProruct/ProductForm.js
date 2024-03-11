import React, { useState } from "react";
import styles from "./ProductForm.module.css";
import useInput from "../../hooks/use-input";

const isInputEmpty = (value) => (value.trim() !== "")

const ProductForm = (props) => {
   const {
      inputValue: inputProduct,
      isInputValid: isProductValid,
      isInputInvalid: isProductInvalid,
      inputChangeHandler: productChangeHandler,
      inputLostFocusHandler: productLostFocusHandler,
      resetValues: resetProductValues
   } = useInput(isInputEmpty);

   const {
      inputValue: inputEmail,
      isInputValid: isEmailValid,
      isInputInvalid: isEmailInvalid,
      inputChangeHandler: emailChangeHandler,
      inputLostFocusHandler: emailLostFocusHandler,
      resetValues: resetEmailValues
   } = useInput((value) => (value.trim() !== "" && value.includes('@')))

   const {
      inputValue: inputPrice,
      isInputValid: isPriceValid,
      isInputInvalid: isPriceInvalid,
      inputChangeHandler: priceChangeHandler,
      inputLostFocusHandler: priceLostFocusHandler,
      resetValues: resetPriceValues
   } = useInput(isInputEmpty)

   let isFormValid = isProductValid && isEmailValid && isPriceValid;

   function submitHandler(event) {
      event.preventDefault();

      if (!isFormValid) return;

      const product = {
         name: inputProduct,
         price: inputPrice
      }

      props.addProduct(product);

      resetProductValues();
      resetEmailValues();
      resetPriceValues();
   }

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <div className={`${styles.formBlock} ${isProductInvalid && styles.invalid}`}>
            <label htmlFor="name" >Name product</label>
            <input
               placeholder="Product"
               id="name"
               type="text"
               onBlur={productLostFocusHandler}
               onChange={productChangeHandler}
               value={inputProduct}
            />
         </div>
         {isProductInvalid && <p className={styles.errorProduct}>Please print name product</p>}
         <div className={`${styles.formBlock} ${isEmailInvalid && styles.invalid}`}>
            <label htmlFor="name" >Print Email</label>
            <input
               placeholder="Email"
               id="name"
               type="text"
               onBlur={emailLostFocusHandler}
               onChange={emailChangeHandler}
               value={inputEmail}
            />
         </div>
         {isEmailInvalid && <p className={styles.errorProduct}>Please print Email</p>}
         <div className={`${styles.formBlock} ${isPriceInvalid && styles.invalid}`}>
            <label htmlFor="price">Price product</label>
            <input
               placeholder="Price"
               id="price"
               type="number"
               onBlur={priceLostFocusHandler}
               onChange={priceChangeHandler}
               value={inputPrice} />
         </div>
         {isPriceInvalid && <p className={styles.errorProduct}>Input Price lost focus</p>}
         <button disabled={!isFormValid}>
            {props.loading ? "Loaded propuct" : "Add Product"}
         </button>
      </form>
   );
};

export default ProductForm;