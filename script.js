// Make sure the page loads before the JavaScript
$(document).ready(() => {

// Translate button functionality
$("#translate-button").on("click", () => {
    // get the selected language value
    const language = $("#langVal").val();
    console.log(language);
    // get the input text value 
    const inputText = $("#inputText").val();
    console.log(inputText);

}); // closing brackets for translate button

}); // closing brackets for document.ready