// JavaScript for simple interactions like cart and login button clicks
document.getElementById("cart-btn").addEventListener("click", function() {
    alert("Your Cart is Empty! Start shopping now.");
});

// document.getElementById("login-btn").addEventListener("click", function() {
//     const userName = prompt("Enter your username to log in:");
//     if (userName) {
//         alert("Welcome, " + userName + "!");
//     } else {
//         alert("Please enter a valid username.");
//     }
// });

// Simple search function (just an example to alert input)
document.getElementById("search").addEventListener("input", function() {
    console.log("Searching for: " + this.value);
});
function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll("#itemList li");

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block"; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
}

// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    // Sample products data
    const products = [
        { name: "Organic Apples", price: "$4.99", image: "https://via.placeholder.com/150" },
        { name: "Whole Wheat Bread", price: "$2.49", image: "https://via.placeholder.com/150" },
        { name: "Fresh Milk", price: "$1.99", image: "https://via.placeholder.com/150" }
    ];

    const productsContainer = document.querySelector(".products-container");
    
    // Load products dynamically
    function loadProducts() {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }
    loadProducts();

    // Handle customer reviews
    const reviews = [
        { text: "The freshest produce I've ever had delivered. Highly recommend!", author: "- Sarah L." },
        { text: "Fast delivery and great quality. Will shop again soon!", author: "- John D." },
        { text: "Fantastic selection of organic groceries. Very satisfied!", author: "- Emma T." }
    ];
    
    const reviewsContainer = document.querySelector(".reviews-container");
    
    function loadReviews() {
        reviewsContainer.innerHTML = "";
        reviews.forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");
            reviewElement.innerHTML = `
                <p>"${review.text}"</p>
                <span>${review.author}</span>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
    loadReviews();

    // Add new review functionality
    document.querySelector("#add-review").addEventListener("click", () => {
        const newReviewText = document.querySelector("#review-text").value;
        const newReviewAuthor = document.querySelector("#review-author").value;
        
        if (newReviewText && newReviewAuthor) {
            reviews.push({ text: newReviewText, author: `- ${newReviewAuthor}` });
            loadReviews();
            document.querySelector("#review-text").value = "";
            document.querySelector("#review-author").value = "";
        }
    });
});
