import AddProductHeader from "../components/addProduct/AddProductHeader";
import AddProductForm from "../components/addProduct/AddProductForm";

import styles from "./Main.module.css";

const AddProduct = () => {
  return (
    <>
      <AddProductHeader />
      <main className={styles.main}>
        <AddProductForm />
      </main>
    </>
  );
};

export default AddProduct;
