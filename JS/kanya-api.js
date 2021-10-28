const loadQuotes = () => {
 fetch('https://api.kanye.rest/')
 .then(res => res.json())
 .then(data => showQuotes(data))
}
loadQuotes()
const showQuotes = quote => {
    console.log(quote)
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote;
}