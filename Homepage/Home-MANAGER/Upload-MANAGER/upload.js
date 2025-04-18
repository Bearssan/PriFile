document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Gather form data
    const fileName = document.getElementById("fileName").value;
    const fileDesc = document.getElementById("fileDesc").value;
    const fileInput = document.getElementById("fileInput").files[0];
  
    if (!fileInput) {
      alert("Please select a file to upload.");
      return;
    }
  
    // Generate a random secret key for encryption (16-byte key)
    const secretKey = CryptoJS.lib.WordArray.random(16); // 16-byte key
    
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const fileData = event.target.result;
      const encryptedData = CryptoJS.AES.encrypt(fileData, secretKey).toString();
      const previewText = fileData.substring(0, 100) + "...";
      document.getElementById("filePreview").innerText = previewText;
      console.log("Encrypted file data:", encryptedData);
  
      window.location.href = "Success-MANAGER/success.html?key=" + encodeURIComponent(secretKey.toString(CryptoJS.enc.Base64));
    };
  
    // Read the file as binary string
    reader.readAsBinaryString(fileInput);
  });
  document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput").files[0];

    if (!fileInput) {
        alert("Please select a file to upload.");
        return;
    }

    // Generate a random secret key for encryption (16-byte key)
    const secretKey = CryptoJS.lib.WordArray.random(16); // 16-byte key

    const reader = new FileReader();

    reader.onload = function(event) {
        const fileData = event.target.result;
        const encryptedData = CryptoJS.AES.encrypt(fileData, secretKey).toString();

        const previewText = fileData.substring(0, 100) + "...";
        document.getElementById("filePreview").innerText = previewText;
        console.log("Encrypted file data:", encryptedData);

        const encryptedBlob = new Blob([encryptedData], { type: "application/octet-stream" });
        const encryptedFileLink = document.createElement("a");
        encryptedFileLink.href = URL.createObjectURL(encryptedBlob);
        encryptedFileLink.download = fileInput.name + ".enc"; 
        encryptedFileLink.textContent = "Download Encrypted File";

       
        const keyBlob = new Blob([secretKey.toString(CryptoJS.enc.Base64)], { type: "text/plain" });
        const keyFileLink = document.createElement("a");
        keyFileLink.href = URL.createObjectURL(keyBlob);
        keyFileLink.download = fileInput.name + "_key.txt"; 
        keyFileLink.textContent = "Download Encryption Key";

        // Append the links to the DOM
        document.getElementById("downloadLinks").innerHTML = ''; 
        document.getElementById("downloadLinks").appendChild(encryptedFileLink);
        document.getElementById("downloadLinks").appendChild(document.createElement("br"));
        document.getElementById("downloadLinks").appendChild(keyFileLink);
    };

    // Read the file as binary string
    reader.readAsBinaryString(fileInput);
});
