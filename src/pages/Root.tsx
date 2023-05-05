import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.body}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
