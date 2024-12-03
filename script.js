// Form Validation for Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email.value || !email.value.includes('@')) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
});

// Form Validation for Registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    let valid = true;

    if (!name.value) {
        name.classList.add('is-invalid');
        valid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    if (!email.value || !email.value.includes('@')) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        valid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (valid) {
        // Proceed with form submission (e.g., send data to the server)
        alert('Registration successful!');
    }
});
