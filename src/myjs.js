//for scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Trending products in my home page
const products = [
  {
    name: "Adidas Ultra Boost",
    price: "125",
    imageSrc: "../assets/shoes1.png",
    link: "products.html",
  },
  {
    name: "Nike Air Max",
    price: "125",
    imageSrc: "../assets/shoes2.png",
    link: "products.html",
  },
  {
    name: "Reebok Classic",
    price: "125",
    imageSrc: "../assets/shoes3.png",
    link: "products.html",
  },
  {
    name: "Reebok Classic",
    price: "125",
    imageSrc: "../assets/shoes3.png",
    link: "products.html",
  },
];

//Creating a card with the product details for each product
// first row is creaed then columns are created for eact product then cards are added in columns for each product
function createProductCards() {
  const productContainer = document.getElementById("productContainer");
  const row = productContainer.querySelector(".row");
  products.forEach((product) => {
    const col = document.createElement("div");
    col.classList.add("col-lg-4", "col-md-6", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card", "bg-light");

    const cardLink = document.createElement("a");
    cardLink.href = product.link; // Link to product details or page

    const img = document.createElement("img");
    img.src = product.imageSrc;
    img.classList.add("card-img");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.textContent = product.name;
    title.classList.add(
      "card-title",
      "text-center",
      "text-dark",
      "fw-bold",
      "fs-2"
    );

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.classList.add("card-text", "text-center", "text-primary", "fw-bold");

    cardBody.appendChild(title);
    cardBody.appendChild(price);

    cardLink.appendChild(img);
    cardLink.appendChild(cardBody);

    card.appendChild(cardLink);
    col.appendChild(card);
    row.appendChild(col);
  });
}
