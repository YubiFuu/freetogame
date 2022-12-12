import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GameDetails from "./components/GameDetails";
import AllGames from "./pages/AllGames";
import Home from "./pages/Home";
import RecentlyAdded from "./pages/RecentlyAdded";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Header />
        <Routes>
          <Route path="/games" element={<Home />}></Route>
          <Route path="/" element={<AllGames />}></Route>
          <Route path="/recentgames" element={<RecentlyAdded />}></Route>
          <Route path="/games/:id" element={<GameDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
