import { useNavigate } from "react-router-dom";

import AddProductHeader from "../components/addProduct/AddProductHeader";
import AddProductForm from "../components/addProduct/AddProductForm";

import styles from "./Main.module.css";

import useFetch from "../hooks/useFetch";

import Product from "../types/Product";

const AddProduct = () => {
  const navigate = useNavigate();
  const { sendRequest } = useFetch();

  const addProduct = (product: Product) => {
    sendRequest({ method: "POST", body: product }, (data) => {
      if (data.id) {
        navigate("/");
      }
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
