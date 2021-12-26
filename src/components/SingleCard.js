import "./SingleCard.css"

export default function SingleCard({ card }) {
    return (
        <div className="card">
            <div className="">
                <img className="back" src="/img/cover.jpg" alt="back" />
                <img className="front" src={card.src} alt="front" />
            </div>
        </div>
    )
}
