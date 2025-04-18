function fetchFile() {
    const secretKey = document.getElementById('secret-key').value;

    if (!secretKey) {
        alert("Please insert a secret key!");
        return;
    }

    // Send the secret key to the backend for verification
    fetch('backend.php', {
        method: 'POST',
        body: JSON.stringify({ secretKey }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Display the file table with action buttons
            document.getElementById('file-table').style.display = 'table';
            const fileTableBody = document.getElementById('file-list');
            fileTableBody.innerHTML = '';  // Clear any previous data

            data.files.forEach(file => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td>
                        <button class="view-btn" onclick="viewFile('${file.name}')">View</button>
                        <button class="download-btn" onclick="downloadFile('${file.name}')">Download</button>
                    </td>
                `;
                fileTableBody.appendChild(row);
            });
        } else {
            alert("Invalid secret key or no files found.");
        }
    })
    .catch(error => console.error('Error:', error));
}

function viewFile(fileName) {
    alert(`Viewing ${fileName}`);
    // You can add more logic here to actually show the file content.
}

function downloadFile(fileName) {
    alert(`Downloading ${fileName}`);
    // Add logic to trigger the file download (e.g., using an anchor tag or other method)
}
