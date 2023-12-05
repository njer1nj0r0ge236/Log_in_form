// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      // Get input values
      const email = emailInput.value;
      const password = passwordInput.value;

      // For validation
      if (email.trim() === '' || password.trim() === '') {
          alert('Please enter both email and password.');
      } else {
          alert('Login successful!');
      }
  });
});  
  

