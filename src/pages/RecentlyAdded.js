import { useEffect, useState } from "react";
import GameCard from "../components/GameCard.js";
import "./RecentlyAdded.css";
const RecentlyAdded = () => {
  const [recentGames, setRecentGames] = useState([]);
  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((res) => res.json())
      .then((json) => setRecentGames(json));
  }, []);

  return (
    <>
      <header>
        <div
          id="img"
          className="image"
          style={{
            backgroundImage: `url(./images/league.png)`,
          }}
        >
          <h2>Recently Added</h2>
        </div>
      </header>
      <main>
        <div className="gridd">
          {recentGames.map((elt) => (
            <GameCard key={elt.id} {...elt} />
          ))}
        </div>
      </main>
    </>
  );
};

export default RecentlyAdded;
