import Button from "../UI/Button";
import MenuLink from "../UI/MenuLink";
import Header from "../UI/Header";

const menu = [
  <MenuLink to="newProduct">ADD</MenuLink>,
  <Button type="button" variant="error">
    MASS DELETE
  </Button>,
];

const ProductsHeader = () => {
  return <Header title="Product list" menuItems={menu} />;
};

export default ProductsHeader;
