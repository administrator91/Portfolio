document.getElementById("openLoginForm").addEventListener("click", function() {
    document.getElementById("formOverlay").style.display = "flex"; // Show the form overlay
});

// Close the form
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("formOverlay").style.display = "none"; // Hide the form overlay
});

// Toggle between login and signup forms
document.getElementById("showSignup").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none"; // Hide login form
    document.getElementById("signupForm").style.display = "flex"; // Show signup form
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("signupForm").style.display = "none"; // Hide signup form
    document.getElementById("loginForm").style.display = "flex"; // Show login form
});

// Login validation
document.getElementById("loginSubmit").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    // Clear previous messages only if the validation is successful
    loginMessage.textContent = ""; 

    // Check if fields are filled
    if (!email) {
        loginMessage.textContent = "Please enter your email.";
        return;
    }
    if (!password) {
        loginMessage.textContent = "Please enter your password.";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        loginMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Simulate login success or failure (replace with your actual logic)
    if (email === "test@example.com" && password === "password123") {
        // Successful login
        alert("Login successful!");
        // Redirect to another page or do something else
    } else {
        loginMessage.textContent = "Incorrect email or password.";
    }
});

// Signup validation
document.getElementById("signupSubmit").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("signupName").value;
    const mobile = document.getElementById("signupMobile").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const signupMessage = document.getElementById("signupMessage");

    // Clear previous messages only if the validation is successful
    signupMessage.textContent = ""; 

    // Check if fields are filled
    if (!name) {
        signupMessage.textContent = "Please enter your full name.";
        return;
    }
    if (!mobile) {
        signupMessage.textContent = "Please enter your mobile number.";
        return;
    }
    if (!email) {
        signupMessage.textContent = "Please enter your email.";
        return;
    }
    if (!password) {
        signupMessage.textContent = "Please enter your password.";
        return;
    }
    if (!confirmPassword) {
        signupMessage.textContent = "Please confirm your password.";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        signupMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate mobile number
    if (mobile.length !== 10 || isNaN(mobile)) {
        signupMessage.textContent = "Mobile number must be exactly 10 digits.";
        return;
    }

    // Validate password strength
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    if (!strongPasswordPattern.test(password)) {
        signupMessage.textContent = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        return;
    }

    // If all validations pass, redirect to working.html
    window.location.href = "working.html"; // Redirect to working.html
});
