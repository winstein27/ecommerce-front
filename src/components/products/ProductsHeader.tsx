import { useNavigate } from "react-router-dom";

import Header from "../UI/Header";
import ButtonOrLink from "../UI/ButtonOrLink";

import Product from "../../types/Product";

import useFetch from "../../hooks/useFetch";

interface Props {
  selectedProducts: Product[];
}

const ProductsHeader = (props: Props) => {
  const { sendRequest } = useFetch();
  const navigate = useNavigate();

  const massDeleteClickHandler = () => {
    const idsArray = props.selectedProducts.map((product) => +product.id);
    console.log(idsArray);

    sendRequest(
      {
        method: "DELETE",
        body: idsArray,
      },
      (data) => {
        if (data.success) {
          navigate(0);
        }
      }
    );
  };

  const menu = [
    <ButtonOrLink option="link" to="add-product">
      ADD
    </ButtonOrLink>,
    <ButtonOrLink
      option="button"
      type="button"
      variant="error"
      id="#delete-product-btn"
      onClick={massDeleteClickHandler}
    >
      MASS DELETE
    </ButtonOrLink>,
  ];

  return <Header title="Product List" menuItems={menu} />;
};

export default ProductsHeader;
