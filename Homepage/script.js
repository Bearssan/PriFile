function redirectTo(role) {
    alert('Redirecting to ' + role + ' login page');
    // Example redirection logic:
    // window.location.href = role + "_login.html";
}

fetch('http://localhost/my-project/backend-laravel/public/api')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
