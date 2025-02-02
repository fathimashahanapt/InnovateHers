const products = [
    { name: "Tomato", description: "Juicy and tangy, perfect for curries.",
         price: 9, oldPrice: 21, discount: "57% OFF", image: "./images/tomato.jpg" },
    { name: "Cauliflower", description: "Mild and versatile, great for roasting or curries.",
         price: 17, oldPrice: 24, discount: "29% OFF", image: "./images/Cauliflower.png" },
    { name: "Onion", description: "Crisp and pungent, adds depth to a dish.",
         price: 9, oldPrice: 11, discount: "19% OFF", image: "./images/onions.jpg" },
    { name: "Potato", description: "Tender and starchy, great for curries and roasting.",
         price: 17, oldPrice: 24, discount: "31% OFF", image: "./images/potato.jpg" },
    { name: "Beetroot", description: "Eat raw for a healthy heart.",
        
        price: 26, oldPrice: 33, discount: "21% OFF", image: "./images/betroot.jpg" },
    { name: "Cabbage", description: "Crisp and mild, perfect for salad or stir-fries.", 
        price: 20, oldPrice: 25, discount: "20% OFF", image: "./images/cabbage.jpg" },
    { name: "Carrot", description: "Rich in vitamins, aids digestion and promotes eye health.",
         price: 25, oldPrice: 31, discount: "19% OFF", image: "./images/carrot.avif" },
    { name: "Brinjal", description: "For stir fry, sambar.",
         price: 26, oldPrice: 33, discount: "20% OFF", image: "./images/Brinjal.png" },
    { name: "Beans", description: "For regular cooking.",
         price: 32, oldPrice: 40, discount: "20% OFF", image: "./images/beans.jpg" },
    { name: "Shallots", description: "Small onion, adds flavor and aids digestion.",
         price: 36, oldPrice: 45, discount: "20% OFF", image: "./images/shallot.jpg" }
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