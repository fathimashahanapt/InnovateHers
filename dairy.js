// Product Data as an Array
const products = [
    {
        name: "Britannia",
        description: "Britannia milk bread.",
        price: 55,
        image: "./images/Bread1.webp",
    },
    {
        name: "Amul",
        description: "Amul moti toned milk",
        price: 30 ,
        image: "./images/milk1.jpg",
    },
    {
        name: "Egg",
        description: "Fresh white Egg.",
        price: 7,
        image: "./images/egg.jpg",
    },
    {
        name: "Milkymist",
        description: "Milky mist curd pouch.",
        price: 41,
        image: "./images/curd.jpg",
    },
    {
        name: "D'lecta",
        description: "cream cheese.",
        price: 684,
        
        image: "./images/cheese.jpg",
    },
    {
        name: "Nandini",
        description: "nandini salted butter.",
        price: 530,
        
        image: "./images/butter.webp",
    },
    {
        name: "Zero maida bread",
        description: "the health factory multigrain bread.",
        price: 65,
       
        image: "./images/bread2.avif",
    },
    {
        name: "Paneer",
        description: "Heritage fresh paneer.",
        price: 92,
        
        image: "./images/paneer.jpg",
    },
    {
        name: "Nestle",
        description: "Nestle A+ slim skimmed milk.",
        price: 90,
       
        image: "./images/milk2.avif",
    },
    {
        name: "Milky mist",
        description: "Milky mist cream.",
        price: 75,
        
        image: "./images/cream.webp",
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