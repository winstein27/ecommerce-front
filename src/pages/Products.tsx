import { useState, useEffect } from "react";

import ProductsHeader from "../components/products/ProductsHeader";
import ProductsList from "../components/products/ProductsList";

import useFetch from "../hooks/useFetch";

import Product from "../types/Product";

import styles from "./Main.module.css";

const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState([] as Product[]);
  const { sendRequest: fetchProducts } = useFetch();
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    const loadProducts = (data: any) => {
      const loadedProducts = [] as Product[];

      data.forEach((product: any) => {
        loadedProducts.push({
          id: product.id,
          sku: product.sku,
          name: product.name,
          price: product.price,
          type: product.type,
          weight: product.weight,
          size: product.size,
          height: product.height,
          width: product.width,
          length: product.length,
        });
      });

      setProducts(loadedProducts);
    };

    fetchProducts({}, loadProducts);
  }, [fetchProducts]);

  const addOrRemoveFromList = (product: Product) => {
    setSelectedProducts((products) => {
      products.find((p) => p.id === product.id)
        ? products.splice(products.indexOf(product), 1)
        : products.push(product);
      return products;
    });
  };

  return (
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
