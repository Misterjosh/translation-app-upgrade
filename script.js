// Make sure the page loads before the JavaScript
$(document).ready(() => {

// Translate button functionality
$("#translate-button").on("click", () => {
    // get the selected language value
    const selLanguage = $("#langVal").val();
    // get the input text value 
    const inputText = $("#inputText").val();
    // get the language name from selected dropdown
    const langName = $("#langVal option:selected").text();
    // call function for API call
    translateCall(selLanguage, inputText);
    
}); // closing brackets for translate button

// clear all button
$("#clear-button").on("click", () => {
    // clear the input text
    $("#inputText").val("");
    // clear the translation
    $("#outputText").val("");

}); // closing bracket for clear button

// copy text button
$("#copy-button").on("click", () => {
    // validate if there is anything to copy
    const copyText = $("#outputText");
    if (copyText !== "") {
        copyText.select();
        document.execCommand("copy");
    }

}); // closing bracket for copy button

// function to make api call
translateCall = (language, text) => {
    $.ajax({
        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200328T161314Z.bcd4843be4019ae7.a951bdf2b7f5fbb7821f0f8421561bb28404dea0&lang=" + language + "&text=" + text,
        method: "GET"
    }).then((response) => $("#outputText").val(JSON.parse(JSON.stringify(response)).text));

}; // closing bracket for makeCall

}); // closing brackets for document.ready