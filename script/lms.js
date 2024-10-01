document.addEventListener('DOMContentLoaded', function() {
    const formOverlay = document.getElementById('formOverlay');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const closeBtn = document.getElementById('closeBtn');

    // Open the login form when the login button is clicked
    document.getElementById('openLoginForm').addEventListener('click', function() {
        formOverlay.style.display = 'flex'; // Show the overlay
        loginForm.style.display = 'flex'; // Show the login form
        signupForm.style.display = 'none'; // Hide the signup form
    });

    // Show the signup form when the "Signup here" link is clicked
    document.getElementById('showSignup').addEventListener('click', function() {
        loginForm.style.display = 'none'; // Hide the login form
        signupForm.style.display = 'flex'; // Show the signup form
    });

    // Show the login form when the "Login here" link is clicked
    document.getElementById('showLogin').addEventListener('click', function() {
        signupForm.style.display = 'none'; // Hide the signup form
        loginForm.style.display = 'flex'; // Show the login form
    });

    // Close the overlay when the close button is clicked
    closeBtn.addEventListener('click', function() {
        formOverlay.style.display = 'none'; // Hide the overlay
    });

    // Close the overlay when clicking outside the form container
    formOverlay.addEventListener('click', function(event) {
        if (event.target === formOverlay) {
            formOverlay.style.display = 'none'; // Hide the overlay
        }
    });
});
