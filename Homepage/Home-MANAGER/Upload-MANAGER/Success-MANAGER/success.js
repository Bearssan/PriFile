// Function to get the secret key from the URL
function getSecretKeyFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('key');
}

// Get the secret key from the URL and display it
const secretKey = getSecretKeyFromURL();
if (secretKey) {
  document.getElementById('secret-key').value = secretKey;
} else {
  document.getElementById('secret-key').value = "No secret key found.";
}

// Function to copy the secret key to the clipboard
document.getElementById('copy-btn').addEventListener('click', function() {
  const secretKeyInput = document.getElementById('secret-key');
  secretKeyInput.select();  // Select the text inside the input field
  document.execCommand('copy');  // Copy the selected text to clipboard

  alert("Secret key copied to clipboard!");
});

// Function to navigate to the home page
document.getElementById('home-btn').addEventListener('click', function() {
  window.location.href = 'manager.html';  // Redirect to the homepage
});
