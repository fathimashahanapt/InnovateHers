function signup() {
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validation checks
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store user data in localStorage (mock database)
    const user = {
        username: username,
        email: email,
        password: password, // In a real app, never store passwords in plain text
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign-up successful! Redirecting to home page.");

    // Redirect to home page
    window.location.href = "home.html";
}
