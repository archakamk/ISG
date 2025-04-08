const form = document.getElementById('loginForm');
const username_input = document.getElementById('loginUsername');
const password_input = document.getElementById('loginPassword');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = username_input.value.trim();
  const password = password_input.value.trim();

  if (!username || !password) {
    error_message.style.color = 'red';
    error_message.innerText = 'Username and password are required.';
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      error_message.style.color = 'red';
      error_message.innerText = data.message || 'Login failed';
    } else {
      error_message.style.color = 'green';
      error_message.innerText = 'Login successful!';
    }
  } catch (err) {
    console.error('Login failed:', err);
    error_message.innerText = 'Failed to connect to the server.';
  }
});