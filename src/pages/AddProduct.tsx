import AddProductHeader from "../components/addProduct/AddProductHeader";
import AddProductForm from "../components/addProduct/AddProductForm";

import styles from "./Main.module.css";

import useFetch from "../hooks/useFetch";

import Product from "../types/Product";

const AddProduct = () => {
  const { isLoading, sendRequest } = useFetch();

  const addProduct = (product: Product) => {
    sendRequest({ method: "POST", body: product }, () => {
      console.log("added");
    });
  };

  return (
    <>
      <AddProductHeader />
      <main className={styles.main}>
        <AddProductForm onProductAdd={addProduct} />
      </main>
    </>
  );
};

export default AddProduct;
