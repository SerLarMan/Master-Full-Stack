export function setupProducts(element, products) {
  const div = document.createElement("div");
  div.classList.add("cardsContainer");

  products.forEach((product) => div.append(createProductCard(product)));

  element.append(div);
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
  const seller = document.createElement("span");
  seller.textContent = product.seller;

  // Estrellas del producto
  const starsContainer = document.createElement("div");
  createProductStars(product.stars, starsContainer);

  // Nombre del producto
  const name = document.createElement("span");
  name.textContent = product.name;

  // Precio del producto
  const price = document.createElement("span");
  price.textContent = `${product.price}€`;

  div.append(seller);
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
