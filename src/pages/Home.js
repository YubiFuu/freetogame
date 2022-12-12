import { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://www.freetogame.com/api/games?category=shooter ")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <main>
      {/* <div
                className="image"
                style={{
                    backgroundImage: `url(https://de.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_league_of_legends_131_2560x1080.jpg&height=506&sharpen)`,
                }}
            >
                <h2>Find & Track the best Free-To-Play Games!</h2>
            </div> */}
    </main>
  );
};

export default Home;
