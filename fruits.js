const products = [
    { name: "Grapes", 
        description: "Vibrant mix of juicy, sweet, and crisp trio",
         price: 99,
          oldPrice: 148,
           discount: "33% OFF",
          image: "./images/grapes.jpg" },
    { name: "Pomegranate",
         description: "Bright red, juicy seeds, antioxidant-packed",
          price: 159,
           oldPrice: 230,
            discount: "30% OFF",
             image: "./images/pomegranates.jpg" },
    { name: "Apple",
         description: "Bright red, crisp, and sweet with a smooth texture",
          price: 95,
           oldPrice: 144,
            discount: "34% OFF",
             image: "./images/apple.jpg" },
    { name: "Watermelon",
         description: "Sweet and juicy, great for hydration",
          price: 85,
           oldPrice: 106,
            discount: "19% OFF",
             image: "./images/watermelon.webp" },
    { name: "Banana",
         description: "Sweet bananas, kid-friendly snack",
          price: 31,
           oldPrice: 39,
            discount: "20% OFF",
             image: "./images/banana.jpg" },
    { name: "Mango",
         description: "Early season",
          price: 100,
           oldPrice: 125,
            discount: "20% OFF",
             image: "./images/mango.avif" },
    { name: "Kiwi",
         description: "Tangy, juicy fruit loaded with vitamin C",
          price: 95,
           oldPrice: 154,
            discount: "38% OFF",
             image: "./images/kiwi.jpg" },
    { name: "Avocado",
         description: "Creamy and soft, great for spreads or salad",
          price: 171,
           oldPrice: 218,
            discount: "21% OFF",
             image: "./images/avocado.jpg" },
    { name: "Cherry",
         description: "Firm, sweet dessert",
          price: 299,
           oldPrice: 374,
            discount: "20% OFF",
             image: "./images/cherry.jpg" },
    { name: "Orange",
         description: "Sweet, juicy mini delights",
          price: 96,
           oldPrice: 120,
            discount: "20% OFF",
             image: "./images/orange.jpg" }
];

// Function to Display Products
function displayProducts(filteredProducts) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear previous products

    filteredProducts.forEach((product) => {
        productContainer.innerHTML += `
            <div class="product">
                ${product.discount ? `<span class="discount">${product.discount}</span>` : ""}
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">₹${product.price} 
                ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ""}
                </p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}

// Display All Products Initially
displayProducts(products);

// Search Feature
document.getElementById("search").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
});

