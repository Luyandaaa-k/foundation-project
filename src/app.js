// 1. Identify the 'Plates' on the Porch
const nameDisplay = document.getElementById('message');
const statusDisplay = document.getElementById('system-status');

// 2. Fetch the data from the Pantry
fetch('../data/user-pantry.json')
    .then(response => response.json())
    .then(data => {
        // 3. Deliver the data to the Porch
        nameDisplay.innerText = "Welcome back, " + data.username;
        statusDisplay.innerText = "Level: " + data.accessLevel + " | Status: " + data.projectStatus;
        
        console.log("Data successfully retrieved from the Pantry.");
    })
    .catch(error => console.log("The Pantry door is locked:", error));