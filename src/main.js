document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    localStorage.setItem('signupEmail', email);
    alert(`Email ${email} has been saved!`);
});

const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords dont match")
    } else {
        confirm_password.setCustomValidity("")
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
