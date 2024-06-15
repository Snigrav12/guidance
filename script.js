document.addEventListener('DOMContentLoaded', () => {
    // Retrieve accounts from local storage or initialize an empty array
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Handle the Create Account form submission
    document.getElementById('box1').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Basic validation (ensure fields are not empty)
        if (username && email && password) {
            // Check if the username already exists
            const existingAccount = accounts.find(account => account.username === username);
            if (existingAccount) {
                alert('Username already exists. Please choose another username.');
            } else {
                // Store account details
                accounts.push({ username, email, password });
                localStorage.setItem('accounts', JSON.stringify(accounts)); // Save to local storage
                alert(`Account created successfully for ${username}!`);
                // Reset the form
                event.target.reset();
            }
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle the Login form submission
    document.getElementById('box2').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Basic validation (ensure fields are not empty)
        if (username && password) {
            // Check if the provided credentials match any stored account details
            const account = accounts.find(account => account.username === username && account.password === password);
            if (account) {
                // Store the logged-in user in local storage
                localStorage.setItem('loggedInUser', username);
                // Redirect to page2.html
                window.location.assign('page2.html');
                // Reset the form
                event.target.reset();
            } else {
                alert('Incorrect username or password.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
});


