// Make sure the page loads before the JavaScript
$(document).ready(() => {

// Translate button functionality
$("#translate-button").on("click", () => {
    // clear books info
    $("#book-section-header").empty();
    $(".books").empty();
    // get the selected language value
    const selLanguage = $("#langVal").val();
    // get the input text value 
    const inputText = $("#inputText").val();
    // get the language name from selected dropdown
    const langName = $("#langVal option:selected").text();
    // validate there is input to translate
    if ($("#inputText").val() === "") {
        // make a modal appear
        $("#myModal").modal();
    } 
    // if we do have text then we translate
    if ($("#inputText").val() !== "") {
        // call function for translation API call
        translateCall(selLanguage, inputText);
        // call function for books API call
        booksCall(langName);
    }
    
}); // closing brackets for translate button

// clear all button
$("#clear-button").on("click", () => {
    // clear the input text
    $("#inputText").val("");
    // clear the translation
    $("#outputText").val("");
    // clear the books
    $("#book-section-header").empty();
    $(".books").empty();

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

}; // closing bracket for translateCall

// function for getting books about the language
booksCall = (language) => {
    $.ajax({
        url:  "https://www.googleapis.com/books/v1/volumes?q=learning" + language,
        method: "GET"
    }).then((response) => {
        // take the paramter and response then build a card section
        // make a header from function parameter
        $("<h3>").text("Interested in learning more about " + language + "?").appendTo("#book-section-header");
        $("<h5>").text("(If empty, no learning books with cover images)").appendTo("#book-section-header");
        // make up to 6 cards of books from the response
        for (var i = 0; i < 6; i++) {
            // defining card components
            var card = $("<div>").addClass("card col-lg-2 col-sm-4 col-xs-6");
            var cardBody = $("<div>").addClass("card-body d-flex flex-column justify-content-start align-items-stretch");
            var thumbnail = $("<img>").addClass("card-img-top").attr("src", response.items[i].volumeInfo.imageLinks.thumbnail);
            var bookTitle = $("<h5>").addClass("card-title").text(response.items[i].volumeInfo.title);
            var preview = $("<a>").addClass("card-text").text("Preview");
            // build the card
            $(preview).attr({"href": response.items[i].volumeInfo.previewLink, "target": "_blank"});
            $(cardBody).append(bookTitle, preview);
            $(card).append(thumbnail, cardBody);
            $(".books").append(card);

        }; // closing bracket of for loop

    }); // end of .then()

}; // closing bracket for booksCall

}); // closing brackets for document.ready