import { Link } from "react-router-dom";

import styles from "./ButtonOrLink.module.css";

interface Props {
  option: "button" | "link";
  children: React.ReactNode;
  to?: string;
  variant?: "default" | "outlined" | "success" | "error";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  id?: string;
  form?: string;
}

const ButtonOrLink = (props: Props) => {
  const { option, children, to, variant, ...params } = props;

  let buttonClasses = styles.button;

  buttonClasses += variant ? ` ${styles[variant]}` : "";

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
