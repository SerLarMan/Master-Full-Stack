import "../styles/style.scss";
import { setupProducts } from "./products.js";
import { setupFilterForm } from "./filter.js";
import { productsData as products } from "./productsData.js";

document.querySelector("#app").innerHTML = `
  <section class="filter">
  </section>
  <section class="products">
  </section>
`;

setupFilterForm(document.querySelector(".filter"));
setupProducts(document.querySelector(".products"), products);
