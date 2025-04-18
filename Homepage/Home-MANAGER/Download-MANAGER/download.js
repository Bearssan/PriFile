// Fetch files from the cloud database (This might be global files without secret key)
async function fetchFiles() {
    const response = await fetch("http://localhost:5000/files");
    const files = await response.json();
    
    let tableBody = "";
    files.forEach(file => {
        tableBody += `
            <tr>
                <td>${file.name}</td>
                <td>
                    <button class="view-btn" onclick="viewFile('${file.url}')">View</button>
                    <button class="download-btn" onclick="downloadFile('${file.url}')">Download</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("file-table").innerHTML = tableBody;
}

// View file in a new tab
function viewFile(url) {
    window.open(url, "_blank");
}

// Download file
function downloadFile(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop(); // Extract filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fetch and display files based on the secret key
function fetchFile() {
    const secretKey = document.getElementById("secret-key").value;

    // Ensure secret key is not empty
    if (!secretKey) {
        alert("Please enter a secret key.");
        return;
    }

    // Send the secret key to PHP via fetch API
    fetch("fetchFiles.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret-key=${secretKey}`
    })
    .then(response => response.json())
    .then(data => {
        const fileTable = document.getElementById("file-table");
        const fileList = document.getElementById("file-list");

        // Clear previous data
        fileList.innerHTML = "";

        if (data.success && data.files.length > 0) {
            // Show the file table
            fileTable.style.display = "block";

            // Populate the table with available files
            data.files.forEach(file => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td><a href="${file.cloud_url}" target="_blank">Download</a></td>
                `;
                fileList.appendChild(row);
            });
        } else {
            alert("No files found or invalid secret key.");
        }
    })
    .catch(error => {
        console.error("Error fetching files:", error);
    });
}

// Home Button Click Event
document.getElementById("home-btn").addEventListener("click", function () {
    window.location.href = "/Homepage/Home-MANAGER/manager.html"; // Change this path if needed
});

// Load files on page load
window.onload = fetchFiles;
