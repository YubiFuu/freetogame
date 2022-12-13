import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import "./Home.css";
const Home = () => {
    const [recentGames, setRecentGames] = useState([]);
    const [topPc, setTopPc] = useState([]);

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?sort-by=release-date")
            .then((res) => res.json())
            .then((json) => setRecentGames(json));
    }, []);

    useEffect(() => {
        fetch(
            "https://www.freetogame.com/api/games?platform=pc&category=mmorpg&sort-by=popularity"
        )
            .then((res) => res.json())
            .then((json) => setTopPc(json));
    }, []);

    return (
        <main className="home">
            <div
                className="image"
                style={{
                    backgroundImage: `url(https://de.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_league_of_legends_131_2560x1080.jpg&height=506&sharpen)`,
                }}
            >
                <h2>Find & Track the best Free-To-Play Games!</h2>
            </div>
            <div>
                <h3>Recently Added</h3>
                <div className="recent-grid">
                    {recentGames.slice(0, 4).map((e) => (
                        <GameCard {...e} />
                    ))}
                </div>
                <Link to="/recentgames">Show More</Link>
            </div>
            <div>
                <h3>Top 4 Games for PC</h3>
                <div className="toppc-grid">
                    {topPc.slice(0, 4).map((e) => (
                        <GameCard {...e} />
                    ))}
                </div>
                <Link to="/recentgames">Show More</Link>
            </div>
        </main>
    );
};

export default Home;
