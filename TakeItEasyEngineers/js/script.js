//Define an array of quotes
var quotes = [
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs"
];

function generateQuote() {
  let index=Math.floor(Math.random()*quotes.length);
  let quoteOutput=quotes[index];
  document.getElementById("output").innerHTML=quoteOutput;
}
