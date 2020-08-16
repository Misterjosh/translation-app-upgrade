// Make sure the page loads before the JavaScript
$(document).ready(() => {

    const language = $("#langVal").val()

$("#translate-button").on("click", () => {
    console.log(language);
}); // closing brackets for translate button

}); // closing brackets for document.ready