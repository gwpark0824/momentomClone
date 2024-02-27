//setting quote array
const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "-Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "-Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "-Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "-Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "-James Cameron"
    },
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: "-John Lennon"
    },
    {
        quote: "Well done is better than well said.",
        author: "-Benjamin Franklin"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "-Aristotle"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "-Oscar Wilde"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//choosing random quote using math.floor
const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

//filling tag
quote.innerText = randomquote.quote;
author.innerText = randomquote.author;