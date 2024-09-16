// Get form element by id
const registerForm = document.getElementById('register');
// Handle form submit event
registerForm.onsubmit = function(event) {
    event.preventDefault();
    console.log(event);
}