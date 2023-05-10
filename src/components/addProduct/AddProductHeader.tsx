import Header from "../UI/Header";
import ButtonOrLink from "../UI/ButtonOrLink";

const menu = [
  <ButtonOrLink
    option="button"
    variant="success"
    type="submit"
    form="product_form"
  >
    Save
  </ButtonOrLink>,
  <ButtonOrLink option="link" to="/" variant="error">
    Cancel
  </ButtonOrLink>,
];

const NewProductHeader = () => {
  return <Header title="Product Add" menuItems={menu} />;
};

export default NewProductHeader;
