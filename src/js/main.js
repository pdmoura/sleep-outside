import { updateCartCount } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productsList = new ProductList("tents", dataSource, listElement);



// Run the function on page load
updateCartCount();
productsList.init();