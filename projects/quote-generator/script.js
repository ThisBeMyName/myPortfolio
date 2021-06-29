const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show Loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
	if (!loader.hidden) {
		quoteContainer.hidden = false;
		loader.hidden = true;
	}
}

// Get quote from API
async function getQuote() {
	// Start loader
	loading();
    // Load quote
    try {
		const response = await fetch(
			"https://bodybuilding-quotes.p.rapidapi.com/random-quote",
			{
				method: "GET",
				headers: {
					"x-api-key": "{{api-key}}",
					"x-rapidapi-key":
						"ac767eaaebmsh7dc74d302067561p12be44jsn14d52ca7a997",
					"x-rapidapi-host": "bodybuilding-quotes.p.rapidapi.com",
				},
			}
		);
		const data = await response.json();

		// If author is blank, add 'Unknown' to the author text
		if (data.author === "") {
			authorText.innerText = "Unknown";
		} else {
			authorText.innerText = data.author;
		}
		// Reduce font size for long quotes
		if (data.quote.length > 120) {
			quoteText.classList.add("long-quote");
		} else {
			quoteText.classList.remove("long-quote");
		}
		quoteText.innerText = data.quote;
		// Stop loader, show quote
        complete();
        // Checks for errors
	} catch (error) {
		getQuote();
		console.log("whoops, no quote. ", error);
	}
}

// Tweet Quote
function tweetQuote() {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
