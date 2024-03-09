import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import ProductForm from "./ProductForm";

const NewProduct = (props) => {
   const { isLoading, error, sendHttpRequest: sendProduct } = useHttp();


   const addProductHandler = async (product) => {

      const createProduct = (product, productData) => {
         const generatedId = productData.name;
         product = { ...product, id: generatedId }
         props.onAddProduct(product)
      }

      sendProduct({
         endpoint: 'https://react-course-http-f59d2-default-rtdb.firebaseio.com/products.json',
         method: 'POST',
         body: product,
         headers: {
            "Content-Type": "application/json",
         }

      }, createProduct)
   }

   // async function addProductHandler(product) {
   //    setIsLoading(true);
   //    setError(null);
   //    try {
   //       const response = await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/products.json', {
   //          method: "POST",
   //          body: JSON.stringify(product),
   //          headers: {
   //             "Content-Type": "application/json",
   //          },
   //       });
   //       if (!response.ok) throw new Error("Somesing error.")

   //       const data = await response.json()

   //       const generatedId = data.name;
   //       product = { ...product, id: generatedId }
   //       setIsLoading(false);
   //       props.onAddProduct(product)

   //    } catch (error) {
   //       setError(error.mesage || "Response error.")
   //    }

   // }
   return (
      <Section>
         <ProductForm addProduct={addProductHandler} loading={isLoading} />
         {error && <p>{error}</p>}
      </Section>
   );
};

export default NewProduct;