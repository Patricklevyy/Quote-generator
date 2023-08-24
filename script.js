// const { response } = require("express");

function CopyQuote() {
    var copyText = document.getElementById("quote");

    if (copyText) {
        var range = document.createRange();
        range.selectNode(copyText);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error("Erreur lors de la copie du texte : ", err);
        }

        selection.removeAllRanges();
    }
}

const authors = document.getElementById("author-name");
const quote = document.getElementById("quote");
const api_url = "https://api.quotable.io/random";

async function GetRandomQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();
    authors.innerHTML = data.author;
    quote.innerHTML = data.content;
}

GetRandomQuotes(api_url);