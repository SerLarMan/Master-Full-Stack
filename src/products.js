export function setupProducts(element, products, sugeridos = false) {
  element.textContent = "";

  const h2 = document.createElement("h2");
  h2.textContent = "PRODUCTOS";

  element.append(h2);

  if (sugeridos) {
    const divAviso = document.createElement("div");
    divAviso.classList.add("divAviso");

    const i = document.createElement("i");
    i.className = "fas fa-circle-info";

    const span = document.createElement("span");
    span.textContent =
      "Parece que no se han encontrado productos que coincidan con la búsqueda. No dejes de mirar nuestros productos sugeridos.";

    divAviso.append(i);
    divAviso.append(span);

    const h3 = document.createElement("h3");
    h3.textContent = "Productos sugeridos";

    element.append(divAviso);
    element.append(h3);
  }

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cardsContainer");

  products.forEach((product) =>
    cardsContainer.append(createProductCard(product))
  );

  element.append(cardsContainer);
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("card");

  // Imagen del producto
  const image = document.createElement("img");
  image.src = product.image;

  const div = document.createElement("div");
  div.classList.add("container");

  // Seller del producto
  const sellerDiv = document.createElement("div");
  const seller = document.createElement("span");
  seller.textContent = product.seller;
  sellerDiv.append(seller);
  sellerDiv.classList.add("sellerChip");

  // Estrellas del producto
  const starsContainer = document.createElement("div");
  createProductStars(product.stars, starsContainer);

  // Nombre del producto
  const name = document.createElement("span");
  name.textContent = product.name;

  // Precio del producto
  const price = document.createElement("span");
  price.textContent = `${product.price}€`;

  div.append(sellerDiv);
  div.append(starsContainer);
  div.append(name);
  div.append(price);
  article.append(image);
  article.append(div);

  return article;
}

function createProductStars(stars, container) {
  if (stars > 0) {
    for (let i = 0; i < stars; i++) {
      const star = document.createElement("i");
      star.className = "fas fa-star";

      container.append(star);
    }
  }

  const emptyStars = 5 - stars;
  if (emptyStars > 0) {
    for (let i = 0; i < emptyStars; i++) {
      const star = document.createElement("i");
      star.className = "fa-regular fa-star";

      container.append(star);
    }
  }
}
