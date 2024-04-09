// Define the Home function to handle checkbox click event
function Home(checkbox) {
    let emailDiv = document.getElementById("emailDiv");
    if (checkbox.checked) {
        emailDiv.style.display = "block"; // Show the input field
    } else {
        emailDiv.style.display = "none"; // Hide the input field
    }
}

// Add event listener to the checkbox when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("subscribe");

    checkbox.addEventListener("click", function() {
        Home(checkbox); // Call the Home function passing the checkbox
    });
});