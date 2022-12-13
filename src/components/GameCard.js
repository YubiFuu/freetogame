import "./GameCard.css";
import { Link } from "react-router-dom";

const GameCard = (props) => {
    return (
        <div className="card-template">
            <img src={props.thumbnail} alt={props.thumbnail} />
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.short_description}</p>
                    <Link to="/"> Read More </Link>
                </div>
                <hr />
                <div>
                    {props.platform == "PC (Windows)" ? (
                        <img className="platform" src="./images/Windows.svg" />
                    ) : (
                        <img className="platform" src="./images/Browser.svg" />
                    )}
                    <p>{props.genre}</p>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
