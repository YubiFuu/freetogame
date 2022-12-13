import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GameDetails.css";

const GameDetails = () => {
    const [gameDetail, setGameDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then((res) => res.json())
            .then((json) => setGameDetail(json));
    }, []);

    console.log(gameDetail);

    return <main></main>;
};

export default GameDetails;
