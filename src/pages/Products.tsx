import { useState } from "react";

import ProductsHeader from "../components/products/ProductsHeader";
import ProductsList from "../components/products/ProductsList";

import useFetch from "../hooks/useFetch";

import Product from "../types/Product";

import styles from "./Main.module.css";

const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState([] as Product[]);
  const { data: products, isLoading } = useFetch();

  const addOrRemoveFromList = (product: Product) => {
    setSelectedProducts((products) => {
      products.find((p) => p.id === product.id)
        ? products.splice(products.indexOf(product), 1)
        : products.push(product);
      return products;
    });
  };

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <ProductsHeader selectedProducts={selectedProducts} />
      <main className={styles.main}>
        <ProductsList
          products={products}
          addOrRemoveFromList={addOrRemoveFromList}
        />
      </main>
    </>
  );
};

export default Products;
