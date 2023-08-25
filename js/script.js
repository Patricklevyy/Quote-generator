const authors = document.getElementById("author-name");
const quote = document.getElementById("quote");

function CopyQuote() {
    if (quote && authors) {
        const quoteText = quote.textContent;
        const authorText = authors.textContent;

        const copyText = quoteText + " --- by " + authorText;

        const textArea = document.createElement("textarea");
        textArea.value = copyText;
        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand('copy');

        document.body.removeChild(textArea);
    }
}


const api_url = "https://api.quotable.io/random";

async function GetRandomQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();
    authors.innerHTML = data.author;
    quote.innerHTML = data.content;
}

GetRandomQuotes(api_url);

function MakeaTweet() {
    var tweetText = encodeURIComponent(quote.innerHTML + "\n" + " ---- by " + authors.innerHTML);
    var twitterURL = "https://twitter.com/intent/tweet?text=" + tweetText;

    window.open(twitterURL, "TweeterWindow", "width=800, height=600");
}
