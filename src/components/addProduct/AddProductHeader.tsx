import Header from "../UI/Header";
import Button from "../UI/Button";

const menu = [
  <Button variant="success" type="submit" form="#product_form">
    Save
  </Button>,
  <Button variant="error">Cancel</Button>,
];

const NewProductHeader = () => {
  return <Header title="Product Add" menuItems={menu} />;
};

export default NewProductHeader;
