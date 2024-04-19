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
    details.innerHTML = `<strong>Price:</strong> $${product.price}}`;
    details.classList.add("card-text", "text-center");

if (product.color) {
  details.innerHTML += `<br><strong>Color:</strong> ${product.color} <br><strong>Size:</strong> ${product.size}`;
}

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

// Function to create the list of products
function createProductList(products) {
  const productList = document.getElementById("productList");
  
  // Clear any existing items
  productList.innerHTML = "";

  // Loop through the products and create list items
  products.forEach(product => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.classList.add("list-group-item-info");
      listItem.textContent = `${product.name} - Price: ${product.price}`;
      productList.appendChild(listItem);
  });
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
  //  men product
  {
    name: "Glaxy 6m",
    price: "89.96",
    color: "Navy",
    size: "42",
    imageSrc: "../assets/shoe m1.png",
    link: "products.html",
    type:"men",
  },
  {
    name: "Reebok Court Advance",
    price: "90.99",
    color: "White",
    size: "36",
    imageSrc: "../assets/shoe m2.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Hush Puppies",
    price: "60.59",
    color: "Brown",
    size: "42",
    imageSrc: "../assets/shoe m3.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "RBD Game law",
    price: "107.96",
    color: "red/White",
    size: "44",
    imageSrc: "../assets/shoe m4.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Puma Canven 2.0",
    price: "98.96",
    color: "Navy",
    size: "42",
    imageSrc: "../assets/shoe m5.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Julius Marlow",
    price: "161.96",
    color: "Black",
    size: "42",
    imageSrc: "../assets/shoe m6.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Adilette Comfort",
    price: "52.59",
    color: "Navy/White",
    size: "38",
    imageSrc: "../assets/shoe m7.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Adidas",
    price: "80.95",
    color: "White/Scarlet/ Indigo",
    size: "40",
    imageSrc: "../assets/shoe m8.jpg",
    link: "products.html",
    type:"men",
  },
  {
    name: "Skechers",
    price: "89.96",
    color: "Light Brown",
    size: "44",
    imageSrc: "../assets/shoe m9.jpg",
    link: "products.html",
    type:"men",
  },
  // women product
  {
    name:"Aerocushion",
    color:"Black",
    price:"53.96",
    size:"38",
    imageSrc: "../assets/shoe w1.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Wonder",
    price:"89.96",
    color:"Black",
    size:"38",
    imageSrc: "../assets/shoe w2.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Noxos",
    color:"Whiskey",
    price:"179.89",
    size:"42",
    imageSrc: "../assets/shoe w3.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Bare Traps",
    color:"White",
    price:"62.96",
    size:"34",
    imageSrc: "../assets/shoe w4.jpg",
    link:"products.html",
    type:"women",
  },{
    name:"UNO- Night Shades",
    color:"Purple",
    price:"143.96",
    size:"38",
    imageSrc: "../assets/shoe w5.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Kakado",
    price:"80.96",
    color:"Wine",
    size:"40",
    imageSrc: "../assets/shoe w6.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Stellar",
    color:"Blue",
    price:"40.49",
    size:"36",
    imageSrc: "../assets/shoe w7.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"pyro",
    color:"Black",
    price:"98.96",
    size:"35",
    imageSrc: "../assets/shoe w8.jpg",
    link:"products.html",
    type:"women",
  },
  {
    name:"Step On Air",
    color:"Camel",
    price:"70.89",
    size:"36",
    imageSrc: "../assets/shoe w9.jpg",
    link:"products.html",
    type:"women",
  },
  // kids product
  {
    name:"Clarks Dale",
    color:"Navy/white",
    size:"20",
    price:"65.95",
    imageSrc: "../assets/shoe k1.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Clark North",
    color:"Light Mauve/ Coral Multi",
    size:"20",
    price:"49.95",
    imageSrc: "../assets/shoe k2.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Clark Jazzie",
    color:"Black",
    size:"11",
    price:"70.49",
    imageSrc: "../assets/shoe k3.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Betty",
    color:"Pink Shimmer",
    size:"05",
    price:"62.98",
    imageSrc: "../assets/shoe k4.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Grosby",
    color:"Natural",
    size:"08",
    price:"49.50",
    imageSrc: "../assets/shoe k5.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Clarks Dale",
    color:"Black/Red",
    size:"22",
    price:"65.95",
    imageSrc: "../assets/shoe k6.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Uno-Lite",
    color:"Pink Multi",
    size:"12",
    price:"98.98",
    imageSrc: "../assets/shoe k7.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Unicorn Brust",
    color:"Blue/Multi",
    size:"10",
    price:"80.99",
    imageSrc: "../assets/shoe k9.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Clark Manuela",
    color:"light Tan",
    size:"10",
    price:"79.99",
    imageSrc: "../assets/shoe k8.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Lighting Bolt",
    color:"Red Multi",
    size:"09",
    price:"49.49",
    imageSrc: "../assets/shoe k10.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Reebok Royal",
    color:"White/Vector Blue/yellow",
    size:"14",
    price:"72.99",
    imageSrc: "../assets/shoe k11.jpg",
    link:"products.html",
    type:"kids",
  },
  {
    name:"Adidas",
    color:"White",
    size:"13",
    price:"55.65",
    imageSrc: "../assets/shoe k12.jpg",
    link:"products.html",
    type:"kids",
  },
  // accessories
  {
    name:"Sd Odour Stop Insoles Care",
    price:"9.95",
    imageSrc: "../assets/accessories1.jpg",
    link:"products.html",
    type:"accessories",
  },
  {
    name:"Instant shine Sponge Care",
    price:"5.95",
    imageSrc: "../assets/accessories6.jpg",
    link:"products.html",
    type:"accessories",
  },
  {
    name:"Shoe Laces waxthinrd Care",
    price:"5.95",
    color:"Light Brown",
    size:"90 cm",
    imageSrc: "../assets/accessories3.jpg",
    link:"products.html",
    type:"accessories",
  },
  {
    name:"Shoe Laces waxthinrd Care",
    price:"5.95",
    color:"Black",
    size:"90 cm",
    imageSrc: "../assets/accessories5.jpg",
    link:"products.html",
    type:"accessories",
  },
  {
    name:"Cosmetic Bag",
    price:"49.95",
    color:"Tan",
    imageSrc: "../assets/accessories4.jpg",
    link:"products.html",
    type:"accessories",
    size:"L"
  },
  {
    name:"Card Holder",
    price:"29.95",
    color:"Black",
    imageSrc: "../assets/accessories2.jpg",
    link:"products.html",
    type:"accessories",
    size: "M"
  },

  
];
