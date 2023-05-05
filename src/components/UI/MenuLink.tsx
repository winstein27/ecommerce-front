import React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuLink.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
}

const MenuList = (props: Props) => {
  return (
    <Link to={props.to} className={styles.link}>
      {props.children}
    </Link>
  );
};

export default MenuList;
