import "./SingleCard.css"

export default function SingleCard({ card, flipped, handleChoice }) {

    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card" key={card.id}>
            <div className={flipped ? "flipped" : ""}>
                <img className="back" src="/img/cover.jpg" alt="back" onClick={handleClick} />
                <img className="front" src={card.src} alt="front" />
            </div>
        </div>
    )
}
