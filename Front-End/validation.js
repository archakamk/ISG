const form = document.getElementById('loginForm');
const firstname_input = document.getElementById('name');
const username_input = document.getElementById('loginUsername');
const password_input = document.getElementById('loginPassword');
const confirm_password_input = document.getElementById('confirmLoginPassword');
const error_message = document.getElementById('error-message');

// Clear error styles
function clearErrorStyles() {
  const inputs = [firstname_input, username_input, password_input, confirm_password_input];
  inputs.forEach(input => {
    if (input && input.parentElement) {
      input.parentElement.classList.remove('incorrect');
    }
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submit

  clearErrorStyles(); // Reset previous errors
  let errors = [];

  const firstname = firstname_input?.value?.trim();
  const username = username_input?.value?.trim();
  const password = password_input?.value?.trim();
  const confirmPassword = confirm_password_input?.value?.trim();

  // Validation (for signup form)
  if (firstname_input) {
    if (!firstname) {
      errors.push('First Name is required');
      firstname_input.parentElement.classList.add('incorrect');
    }
    if (!username) {
      errors.push('Username is required');
      username_input.parentElement.classList.add('incorrect');
    }
    if (!password) {
      errors.push('Password is required');
      password_input.parentElement.classList.add('incorrect');
    }
    if (password && password.length < 8) {
      errors.push('Password must be at least 8 characters');
      password_input.parentElement.classList.add('incorrect');
    }
    if (password !== confirmPassword) {
      errors.push('Passwords do not match');
      confirm_password_input.parentElement.classList.add('incorrect');
    }

    if (errors.length > 0) {
      error_message.innerText = errors.join('. ');
      return;
    }

    // Submit to backend
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: firstname,
          username: username,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        error_message.style.color = 'red';
        error_message.innerText = data.message || 'Signup failed';
      } else {
        error_message.style.color = 'green';
        error_message.innerText = data.message;
      }

    } catch (err) {
      console.error('Signup request failed:', err);
      error_message.innerText = 'Failed to connect to the server.';
    }
  }
});