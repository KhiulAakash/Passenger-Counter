// Selecting elements
const countEl = document.querySelector("#count-el");
const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
const saveEl = document.querySelector("#save-el");

let count = 0;
const saveHistory = []; // Array to store the last 3 counts

// Function to increment count and update count display
function incrementCount() {
    count++;
    countEl.textContent = count;
}

// Function to save count
function saveCount() {
    if (saveHistory.length === 3) {
        saveHistory.shift(); // Remove the oldest count if there are already 3 counts
    }
    saveHistory.push(count); // Add the new count to the history

    // Display the last 3 counts in the save element
    saveEl.textContent = saveHistory.join(" - ");
    count=0;
    countEl.textContent = count;
}

// Event listeners
incrementBtn.addEventListener("click", incrementCount);
saveBtn.addEventListener("click", saveCount);
