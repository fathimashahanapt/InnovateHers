document.getElementById("chat-btn").addEventListener("click", function() {
    alert("Chat support is currently unavailable. Please try again later.");
});
// JavaScript for simple interactions like cart and login button clicks
document.getElementById("cart-btn").addEventListener("click", function() {
    alert("Your Cart is Empty! Start shopping now.");
});

document.getElementById("login-btn").addEventListener("click", function() {
    const userName = prompt("Enter your username to log in:");
    if (userName) {
        alert("Welcome, " + userName + "!");
    } else {
        alert("Please enter a valid username.");
    }
});

// Simple search function (just an example to alert input)
document.getElementById("search").addEventListener("input", function() {
    console.log("Searching for: " + this.value);
});