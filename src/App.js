import { useState } from 'react';
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

  const shuffleCards = () => {

    // double card images, then sort them, and and random id number to key property.
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 10000) }))


    setCards(shuffledCards)
    setTurns(0);
  }

  console.log(cards)

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
              flipped={true}
            />
          ))
        }

      </div>
      <p>turns: {turns}</p>
    </div>
  );
}

export default App;
