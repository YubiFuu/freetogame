import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import "./AllGames.css";
const AllGames = () => {
  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState("games?");
  const [sort, setSort] = useState("all");
  const [data, setData] = useState([]);
  const readInputPlatform = (event) => {
    setPlatform(event.target.id);
  };
  const Relevance = (event) => {
    setSort(event.target.id);
  };
  const fetchData = () => {
    console.log(platform);
    fetch(
      `https://www.freetogame.com/api/${genre}&platform=${platform}&sort-by=${sort}`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  console.log(genre);

  useEffect(fetchData, [platform]);
  //   console.log(data);

  return (
    <>
      <header>
        <div
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
                  //   onClick={readInput}
                  type="checkbox"
                  name="mmoprg"
                  id="mmoprg"
                  value="MMOPRG"
                />
                <label htmlFor="mmoprg">MMOPRG</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="schooter" id="schooter" />
                <label htmlFor="schooter">Schooter</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="strategy" id="strategy" />
                <label htmlFor="strategy">Strategy</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="moba" id="moba" />
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
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Relevance</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Popularity</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Release Date</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Alphabetical</label>
              </div>
            </div>
          </div>
          <button className="searchbtn">search</button>
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
