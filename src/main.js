document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    localStorage.setItem('signupEmail', email);
    alert(`Email ${email} has been saved!`);
});
