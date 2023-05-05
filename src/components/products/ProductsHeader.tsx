import Button from "../UI/Button";
import MenuLink from "../UI/MenuLink";
import Header from "../UI/Header";

const menu = [
  <MenuLink to="addproduct">ADD</MenuLink>,
  <Button type="button" variant="error" id="delete-product-btn">
    MASS DELETE
  </Button>,
];

const ProductsHeader = () => {
  return <Header title="Product List" menuItems={menu} />;
};

export default ProductsHeader;
