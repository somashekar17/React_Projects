//Create a component that displays a random quote each time it is a rendered.
//import React from 'react'
import './Eleven.css'

function Eleven() {
  const quotes = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "There were waves of genocide that overcame indigenous populations of Oceania and do we have a library of books or films to tell our story? No. We have tourist hula shows and commercials where the 'natives' tend to tourists like indentured servants with plastic, lifeless smiles. It’s not such a charming picture, is it? The truth is ugly, but so is ignorance or denial of such atrocities and pain.",
    "McGregor went on to say, 'Hamish, take word of this situation directly to Robert de Bruce, who is currently in the Glasgow area. Let him know that the Sassenach queen is at Tynemouth Priory and that we are going to capture her! She will fetch us a high ransom price from the Sassenach king!'",
    "A basic principle of data processing teaches the folly of trying to maintain independent files in synchronism.",
    "Historical gap is created due to missing written records.",
    " Failure Isn't Proof that you're a loser, A MESS-UP, Or someone who will NEVER GET IT TOGETHER, ON THE CONTRARY, FAILURE is evidence that you're trying"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div className="centerd">
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
      </div>
    </div>
  );
}

export default Eleven;
