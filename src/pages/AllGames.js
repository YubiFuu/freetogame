import { useState, useEffect, useContext } from "react";
import GameCard from "../components/GameCard";
import AppContext from "../components/AppContext";
import "./AllGames.css";
const AllGames = () => {
  const context = useContext(AppContext);
  console.log(context.nameContext);
  console.log(document.querySelector(".card-template"));
  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("all");
  const [data, setData] = useState([]);
  let fetchUrl = `https://www.freetogame.com/api/games?&platform=${platform}${genre}&sort-by=${sort}`;
  const readInputPlatform = (event) => {
    setPlatform(event.target.id);
    fetchData();
  };
  const readInputSort = (event) => {
    setSort(event.target.id);
    fetchData();
  };
  const readInputGenre = (event) => {
    setGenre(`&category=${event.target.id}`);
    fetchData();
  };
  const fetchData = () => {
    fetch(`${fetchUrl}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(fetchData, [platform, sort, genre]);
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
          <h2>All Games</h2>
        </div>
      </header>
      <main>
        <form className="filter">
          <div className="dropdown">
            <div className="dropbtn">
              <h2>Platform</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="all"
                  value="1"
                />
                <label htmlFor="all">All Platforms</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="pc"
                  value="1"
                />
                <label htmlFor="windwos">Windwos (pc)</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="browser"
                  value="1"
                />
                <label htmlFor="browser">Browser (Web)</label>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>Genre/Tag</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="mmorpg"
                  value="MMOPRG"
                />
                <label htmlFor="mmoprg">MMORPG</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="shooter"
                />
                <label htmlFor="schooter">Shooter</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="strategy"
                />
                <label htmlFor="strategy">Strategy</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="moba"
                />
                <label htmlFor="moba">Moba</label>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>Sort by</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="relevance"
                />
                <label htmlFor="all">Relevance</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="popularity"
                />
                <label>Popularity</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="release-date"
                />
                <label htmlFor="all">Release Date</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="alphabetical"
                />
                <label htmlFor="all">Alphabetical</label>
              </div>
            </div>
          </div>
        </form>

        <div className="gridd">
          {data.map((elt, index) => (
            <GameCard
              key={index}
              title={elt.title}
              platform={elt.platform}
              genre={elt.genre}
              thumbnail={elt.thumbnail}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default AllGames;
