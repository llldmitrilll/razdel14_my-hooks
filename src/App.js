import React, { useEffect, useState } from 'react';
import './App.css';
import NewProduct from './components/NewProruct/NewProduct';
import Products from './components/Products/Products';
import useHttp from './hooks/use-http';

function App() {
  const [productsArray, setProductArray] = useState([])
  const httpRequestData = useHttp();
  const { isLoading, error, sendHttpRequest: getProducts } = httpRequestData;

  useEffect(() => {
    const manageProducts = (productsData) => {
      let products = []

      for (const key in productsData) {
        products.push({ id: key, name: productsData[key].name, price: productsData[key].price });
      }
      setProductArray(products)
    }
    getProducts({
      endpoint: 'https://react-course-http-f59d2-default-rtdb.firebaseio.com/products.json'
    }, manageProducts);
  }, [getProducts])

  function addProductHandler(product) {
    setProductArray((prevProducts) => prevProducts.concat(product));
  }

  return (
    <React.Fragment>
      <NewProduct onAddProduct={addProductHandler} />
      <Products
        productsArray={productsArray}
        isLoading={isLoading}
        error={error}
        getProducts={getProducts}
      />
      <div className="App">
        {/* {!isLoading && productsArray.length > 0 && productsArray[3].name} */}
      </div>
    </React.Fragment>

  );
}

export default App;
