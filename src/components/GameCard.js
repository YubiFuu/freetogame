import "./GameCard.css";
import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <div>
      <img src={props.thumbnail.src} alt={props.thumbnail.alt} />
      <h2>{props.title}</h2>
      <p>{props.short_description}</p>
      <Link to="/"> Read More </Link>
      <hr />
      <p>{props.platform}</p>
      <p>{props.genre}</p>
    </div>
  );
};

export default GameCard;
