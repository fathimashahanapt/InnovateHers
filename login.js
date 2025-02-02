function login() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found! Please sign up first.");
        return;
    }

    // Check if email and password match
    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful! Redirecting...");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid email or password!");
    }
}
