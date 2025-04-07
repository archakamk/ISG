form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    let errors = [];

    const firstname = firstname_input.value;
    const email = username_input.value; // Assuming you're using username for email in this case
    const password = password_input.value;
    const confirmPassword = confirm_password_input.value;

    if(firstname) {
        // If we have a firstname input then we're in the signup
        errors = getSignupFormErrors(firstname, email, password, confirmPassword);
    } else {
        // If we don't have a firstname input then we're in the login
        errors = getLoginFormErrors(email, password);
    }

    if (errors.length > 0) {
        // If there are any errors
        error_message.innerText = errors.join(". ");
    } else {
        // No errors, send the data to the server
        const formData = {
            firstname: firstname,
            email: email,
            password: password
        };

        // Sending the form data to the server using Fetch API
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/Front-End/login.html'; // Redirect to login page on success
            } else {
                error_message.innerText = data.message; // Show error message from server
            }
        })
        .catch(error => {
            error_message.innerText = 'An error occurred. Please try again later.'; // Handle any network errors
        });
    }
});