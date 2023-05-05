import React from "react";

import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outlined" | "success" | "error";
  id?: string;
}

const Button = (props: Props) => {
  let buttonClasses = styles.button;

  buttonClasses += props?.variant ? ` ${styles[props.variant]}` : "";

  return (
    <button
      className={buttonClasses}
      type={props?.type || "button"}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
