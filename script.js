document.addEventListener('DOMContentLoaded', (event) => {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote-button");
    const searchAuthorButton = document.getElementById("search-author-button");
    const api = "https://api.quotable.io/random";

    async function getQuote(url) {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }

    async function searchByAuthor() {
        const authorName = document.getElementById("authorName").value;
        const searchApi = `https://api.quotable.io/quotes?author=${authorName}`;
        const response = await fetch(searchApi);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const quoteData = data.results[0];
            quote.innerHTML = quoteData.content;
            author.innerHTML = quoteData.author;
        } else {
            quote.innerHTML = "No quotes found for this author.";
            author.innerHTML = "";
        }
    }

    newQuoteButton.addEventListener('click', () => getQuote(api));
    searchAuthorButton.addEventListener('click', searchByAuthor);

    getQuote(api);
});
