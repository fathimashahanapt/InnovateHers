// Product Data as an Array
const products = [
    {
        name: "Red Chillie Powder",
        description: "Catch the spicy red chillie powder.",
        price: 59,
        image: "./images/redchillie.avif",
    },
    {
        name: "Turmeric Powder",
        description: "Sampan turmeric powder.",
        price: 80,
        image: "./images/turmeric.avif",
    },
    {
        name: "Coriander Powder",
        description: "Eastern coriander powder.",
        price: 64,
        image: "./images/coriender.avif",
    },
    {
        name: "Pink Salt",
        description: "Himalayan Pink Salt.",
        price: 106,
        image: "./images/pinksalt.avif",
    },
    {
        name: "Curry masala",
        description: "Aachi Curry Masala.",
        price: 30,
        
        image: "./images/curry.jpg",
    },
    {
        name: "Garam Masala",
        description: "sampann Garam Masala.",
        price: 77,
        
        image: "./images/garam.jpg",
    },
    {
        name: "Chicken Masala",
        description: "Everest chicken masala.",
        price: 92,
        
        image: "./images/chicken.jpg",
    },
    {
        name: "Meat Masala",
        description: "Eastern Meat Masala.",
        price: 48,
        
        image: "./images/meat.webp",
    },
    {
        name: "Biriyani Masala",
        description: "Everest Biriyani masala.",
        price: 54,
        
        image: "./images/biriyani.webp",
    },
    {
        name: "Sambhar Masala",
        description: "Everest sambhar masala.",
        price: 49,
        
        image: "./images/sambhar.jpg",
    },
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
