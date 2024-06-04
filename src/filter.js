import { productsData as products } from "./productsData";

export function setupFilterForm(element) {
  const form = document.createElement("form");

  const select = document.createElement("select");

  // Opción vacía para buscar por "todos" los productos
  const emptyOption = document.createElement("option");
  emptyOption.value = "empty";
  emptyOption.textContent = "-";
  select.append(emptyOption);

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

  const input = document.createElement("input");
  input.type = "number";

  const button = document.createElement("button");
  button.textContent = "Buscar";
  button.addEventListener("click", () => search());

  form.append(select);
  form.append(input);
  form.append(button);
  element.append(form);
}

export function search() {
  const select = document.querySelector("form select").value;
  const price = document.querySelector("form input").value;
  const returnProducts = products

  return returnProducts.filter((product) => {
    return product.seller == select && product.price <= price;
  });
}
