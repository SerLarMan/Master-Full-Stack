import "../styles/style.scss";
import { setupProducts } from "./products.js";
import { setupFilterForm } from "./filter.js";
import { productsData as products } from "./productsData.js";

document.querySelector("#app").innerHTML = `
  <section class="filter">
    <h2>FILTROS</h2>
  </section>
  <section class="products">
    <h2>PRODUCTOS</h2>
  </section>
`;

setupFilterForm(document.querySelector(".filter"));
setupProducts(document.querySelector(".products"), products);
