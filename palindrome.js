// Function to check if the entered string is a palindrome
function checkPalindrome() {
    // Retrieve input and remove spaces
    const input = document.getElementById("userInput").value.toLowerCase().replace(/ /g, "");

    // Reverse the string and compare with the original
    const reversed = input.split('').reverse().join('');
    
    // Display the result
    if (input === reversed) {
        document.getElementById("result").innerText = "It's a palindrome!";
    } else {
        document.getElementById("result").innerText = "Not a palindrome.";
    }
}

// Function to reset input field and result for another entry
function reset() {
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerText = "";
}
// Function to check if a word or phrase is a palindrome
function checkPalindrome() {
    // Retrieve input and format it by converting to lowercase and removing spaces
    const input = document.getElementById("userInput").value.toLowerCase().replace(/ /g, "");

    // Reverse the formatted input to check if it matches the original
    const reversed = input.split('').reverse().join('');

    // Display message based on the comparison
    if (input === reversed) {
        document.getElementById("result").innerText = "It's a palindrome!";
    } else {
        document.getElementById("result").innerText = "Not a palindrome.";
    }
}
