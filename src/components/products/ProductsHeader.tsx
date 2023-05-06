import Header from "../UI/Header";
import ButtonOrLink from "../UI/ButtonOrLink";

import Product from "../../types/Product";

interface Props {
  selectedProducts: Product[];
}

const ProductsHeader = (props: Props) => {
  const massDeleteClickHandler = () => {
    console.log(props.selectedProducts);
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
