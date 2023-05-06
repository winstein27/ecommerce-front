import Header from "../UI/Header";
import ButtonOrLink from "../UI/ButtonOrLink";

const menu = [
  <ButtonOrLink option="link" to="add-product">
    ADD
  </ButtonOrLink>,
  <ButtonOrLink
    option="button"
    type="button"
    variant="error"
    id="#delete-product-btn"
  >
    MASS DELETE
  </ButtonOrLink>,
];

const ProductsHeader = () => {
  return <Header title="Product List" menuItems={menu} />;
};

export default ProductsHeader;
