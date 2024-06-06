import { productsData as products } from "./productsData";
import { setupProducts } from "./products.js";

export function setupFilterForm(element) {
  const form = document.createElement("form");
  form.classList.add("filterForm");

  const button = document.createElement("button");
  button.textContent = "Buscar";
  button.type = "button";
  button.classList.add("chip");
  button.addEventListener("click", () => search());

  form.append(createSelect());
  form.append(createInput());
  form.append(button);
  element.append(form);
}

function createSelect() {
  const div = document.createElement("div");

  const selectLabel = document.createElement("label");
  selectLabel.textContent = "Vendedores:";
  selectLabel.for = "vendedoresSelect";

  const select = document.createElement("select");
  select.id = "vendedoresSelect";

  // Opción vacía para buscar por "todos" los productos
  const allOption = document.createElement("option");
  allOption.value = "todos";
  allOption.textContent = "Todos";
  select.append(allOption);

  const sellers = new Set();

  // Se añaden los sellers de los productos a un Set para que no se repitan
  products.forEach((product) => {
    sellers.add(product.seller);
  });

  // Se crean option con los seller para añadirlos al select
  sellers.forEach((seller) => {
    const option = document.createElement("option");
    option.value = seller;
    option.textContent = seller;

    select.append(option);
  });

  div.append(selectLabel);
  div.append(select);

  return div;
}

function createInput() {
  const div = document.createElement("div");

  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Precio:";
  inputLabel.for = "inputForm";

  const input = document.createElement("input");
  input.type = "number";
  input.id = "inputForm";

  div.append(inputLabel);
  div.append(input);

  return div;
}

export function search() {
  const select = document.querySelector(".filterForm select").value;
  const price = document.querySelector(".filterForm input").value;

  let filteredProducts = products;

  if (select != "todos") {
    filteredProducts = filteredProducts.filter(
      (product) => product.seller == select
    );
  }

  if (price && price > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= price
    );
  }

  setupProducts(document.querySelector(".products"), filteredProducts);
}
