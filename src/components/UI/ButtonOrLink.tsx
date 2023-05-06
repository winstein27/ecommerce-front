import { Link } from "react-router-dom";

import styles from "./ButtonOrLink.module.css";

interface Props {
  option: "button" | "link";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outlined" | "success" | "error";
  id?: string;
  form?: string;
  to?: string;
}

const ButtonOrLink = (props: Props) => {
  const { option, children, to, ...params } = props;

  let buttonClasses = styles.button;

  buttonClasses += props?.variant ? ` ${styles[props.variant]}` : "";

  return option === "link" && to !== undefined ? (
    <Link to={to} {...params} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button {...params} className={buttonClasses}>
      {children}
    </button>
  );
};

export default ButtonOrLink;
