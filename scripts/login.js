const loginForm = document.getElementById("login");
// console.log('login')
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // display success message to user
  const messageH1 = document.getElementById("message");
  messageH1.textContent = "Login Successful!";

  window.location.replace("profile.html");
});

// write full name function
function fullName(firstName, lastName) {
  // return firstName + lastName;
  return `${firstName} ${lastName}`;
}

const myName = fullName("Micheal", "Hammond");
console.log(myName);
