// Make sure the page loads before the JavaScript
$(document).ready(() => {

// Translate button functionality
$("#translate-button").on("click", () => {
    // get the selected language value
    const selLanguage = $("#langVal").val();
    console.log(selLanguage);
    // get the input text value 
    const inputText = $("#inputText").val();
    console.log(inputText);
    // call function for API call
    makeCall(selLanguage, inputText)

}); // closing brackets for translate button

// make api call
makeCall = (language, text) => {
    $.ajax({
        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200328T161314Z.bcd4843be4019ae7.a951bdf2b7f5fbb7821f0f8421561bb28404dea0&lang=" + language + "&text=" + text,
        method: "GET"
    }).then((response) => $("#outputText").val(JSON.parse(JSON.stringify(response)).text));

}; // closing bracket for makeCall

}); // closing brackets for document.ready