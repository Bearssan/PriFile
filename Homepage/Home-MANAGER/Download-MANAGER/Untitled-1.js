document.getElementById("decryptForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput").files[0];
    const keyInput = document.getElementById("keyInput").files[0];

    if (!fileInput || !keyInput) {
        alert("Please select both the encrypted file and the key file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const encryptedData = event.target.result;

        const keyReader = new FileReader();
        keyReader.onload = function(keyEvent) {
            const secretKey = CryptoJS.enc.Base64.parse(keyEvent.target.result);

            const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey);
            const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);

            if (!decryptedText) {
                alert("Decryption failed. Please check the key and the file.");
                return;
            }

          
            const previewText = decryptedText.substring(0, 100) + "...";
            document.getElementById("filePreview").innerText = previewText;

            // Create a Blob for the decrypted data and a link for download
            const decryptedBlob = new Blob([decryptedText], { type: "text/plain" });
            const decryptedFileLink = document.createElement("a");
            decryptedFileLink.href = URL.createObjectURL(decryptedBlob);
            decryptedFileLink.download = fileInput.name.replace(".enc", "");
            decryptedFileLink.textContent = "Download Decrypted File";

            // Append the link to the DOM
            document.getElementById("downloadLinks").innerHTML = ''; // Clear previous links
            document.getElementById("downloadLinks").appendChild(decryptedFileLink);
        };

        // Read the key file as text (Base64 encoded)
        keyReader.readAsText(keyInput);
    };

    // Read the encrypted file as binary string
    reader.readAsBinaryString(fileInput);
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === "manager@prifile.com" && password === "manager123") {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('tacForm').style.display = 'block';
        const generatedTAC = Math.floor(1000 + Math.random() * 9000); 
        console.log("Generated TAC: " + generatedTAC); 
        sessionStorage.setItem('generatedTAC', generatedTAC);

    } else {
        alert("Invalid Email or Password");
    }
});

document.getElementById('tacForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input for TAC
    const enteredTAC = document.getElementById('tacInput').value;
    const generatedTAC = sessionStorage.getItem('generatedTAC');

    if (enteredTAC === generatedTAC) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard (you can modify this URL)
    } else {
        alert("Invalid TAC. Please try again.");
    }
});

