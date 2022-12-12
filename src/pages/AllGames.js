import { useState, useEffect } from "react";
import "./AllGames.css";
const AllGames = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://www.freetogame.com/api/games")
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(fetchData, []);
  console.log(data);

  return (
    <main>
      <div
        className="image"
        style={{
          backgroundImage: `url(./images/league.png)`,
        }}
      >
        <h2>All Games</h2>
      </div>
    </main>
  );
};

export default AllGames;
