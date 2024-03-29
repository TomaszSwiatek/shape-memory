import "./SingleCard.css"

export default function SingleCard({ card, flipped, handleChoice, disabled }) {

    const handleClick = () => {
        !disabled && handleChoice(card);
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="back" src="/img/cover.jpg" alt="back" onClick={handleClick} />
                <img className="front" src={card.src} alt="front" />
            </div>
        </div>
    )
}
