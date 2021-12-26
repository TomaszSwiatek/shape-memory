import { useState, useEffect } from 'react';
// styles
import './App.css';
import SingleCard from './components/SingleCard';

const images = [
  { "src": "/img/1.jpg", matched: false },
  { "src": "/img/2.jpg", matched: false },
  { "src": "/img/3.jpg", matched: false },
  { "src": "/img/4.jpg", matched: false },
  { "src": "/img/5.jpg", matched: false },
  { "src": "/img/6.jpg", matched: false }
]

function App() {

  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {

    // double card images, then sort them, and and random id number to key property.
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 10000) }));

    // reset choice from previous game
    setChoiceOne(null)
    setChoiceTwo(null)
    // shuffle cards
    setCards(shuffledCards)
    // reset turns
    setTurns(0);
  }

  const handleChoice = (card) => {
    // logic on clicking on cards:  save click as "choice two" if user clicked "choice one" before. if not save as "choice one"
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setTurns(prevTurn => prevTurn++)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // if two cards match map through each item, and if src property is equal to choiceOne/choiceTwo(same) then change matched property to true
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => prevCards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        }
        ))
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }

    console.log(cards)
    // console.log("choice one:" + choiceOne, "choice two:" + choiceTwo)
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h2>Shape memory</h2>
      <button className="new-game" onClick={shuffleCards}>New game</button>
      <div className="card-grid">

        {/* render cards */}
        {
          cards.map((card) => (
            <SingleCard
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              handleChoice={handleChoice}
            />
          ))
        }

      </div>
      <p>turns: {turns}</p>
    </div>
  );
}

export default App;
