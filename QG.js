const quotes = [
  "The only way to do great work is to love what you do.- Steve Jobs",
  "The way to get started is to quit talking and begin doing. -Walt Disney", 
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon", 
  "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far. - Swami Vivekananda", 
  "How deeply you touch another life is how rich your life is. -Sadhguru", 
  "Don't cry because it's over, smile because it happened.- Dr. Seuss", 
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.- Charles Darwin", 
  "The best revenge is massive success.- Frank Sinatra", 
  "You must expect great things of yourself before you can do them.- Michael Jordan", 
  "The successful warrior is the average man, with laser-like focus.- Bruce Lee",
  

  
    
  ];
   
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("new-quote");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function changeBackgroundColor() {
    const colors = ["#FFF3DA", "#ADC4CE6", "#116A7B", "#A4BC92", "#CEEDC7","#CYEDC7" ];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColorIndex];
  }
  
  newQuoteButton.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
    changeBackgroundColor();
  });
  
  // Initial quote and background color change
  newQuoteButton.click();