//for scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Trending products in my home page
function createProductCards( type, myid) {
  const productContainer = document.getElementById(myid);
  const row = productContainer.querySelector(".row");


  // Loop through the products based on the input number
  for (let i = 0; i < products.length; i++) {
    const product = products[i]; // Get the product at index i

    if (product.type === type){
      const col = document.createElement("div");
    col.classList.add("col-lg-4", "col-md-6", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card", "shadow-sm", "h-80");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("text-center", "p-3");

    const img = document.createElement("img");
    img.src = product.imageSrc;
    img.classList.add("img-fluid", "shoe-image");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.textContent = product.name;
    title.classList.add("card-title", "text-center", "text-dark", "fw-bold");

    const details = document.createElement("p");
    details.innerHTML = `<strong>Price:</strong> $${product.price}<br><strong>Color:</strong> ${product.color}<br><strong>Size:</strong> ${product.size}`;
    details.classList.add("card-text", "text-center");

    const addToCart = document.createElement("button");
    addToCart.innerHTML = '<i class="fas fa-plus"></i> Add to Cart';
    addToCart.classList.add("btn", "btn-warning", "btn-sm", "w-100", "mt-2");
    addToCart.addEventListener("click", function() {
      // Add to cart functionality here
      alert("Added to cart: " + product.name);
    });

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    cardBody.appendChild(title);
    cardBody.appendChild(details);
    cardBody.appendChild(addToCart);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);


    }
    
  }
}

// Sample products data with additional details like color and size
const products = [
  {
    name: "Adidas Ultra Boost",
    price: "125",
    color: "Black",
    size: "10",
    imageSrc: "../assets/shoes1.png",
    link: "products.html",
    type:"trending",
  },
  {
    name: "Nike Air Max",
    price: "125",
    color: "White",
    size: "9",
    imageSrc: "../assets/shoes2.png",
    link: "products.html",
    type:"trending",
  },
  {
    name:"boot",
    price:"249",
    size:"8",
    imageSrc: "../assets/shoes3.png",
    link:"products.html",
    type:"trending",
  },

  {
    name: "Reebok Classic",
    price: "125",
    color: "Blue",
    size: "8",
    imageSrc: "../assets/shoes4.png",
    link: "products.html",
    type:"trending",
  },
  {
    name: "Reebok Classic",
    price: "125",
    color: "Blue",
    size: "8",
    imageSrc: "../assets/shoe m1.png",
    link: "products.html",
    type:"men",
  },
  {
    name:"boot",
    price:"249",
    size:"8",
    imageSrc: "../assets/shoes3.png",
    link:"products.html",
    type:"women",
  },
  {
    name:"boot",
    price:"249",
    size:"8",
    imageSrc: "../assets/shoes3.png",
    link:"products.html",
    type:"women",
  },
];
