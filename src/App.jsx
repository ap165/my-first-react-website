import Nav from './components/Nav.jsx';
import './css/index.css';
import { Routes, Route } from "react-router-dom";
import TopAnimes from "./pages/TopAnimes.jsx";
import AnimeInfo from "./pages/AnimeInfo.jsx";


const App = () => {


  return <>
    <div className="body">
      <Nav />
      <br/>
      <br/>
      <br/>
      <Routes>
        <Route path="/" element={<TopAnimes anime_type="airing" key="airing" />} />
        <Route path="/popular" element={<TopAnimes anime_type="bypopularity" key="bypopularity" />} />
        <Route path="/movies" element={<TopAnimes anime_type="movie" key="movie" />} />
        <Route path="/tv" element={<TopAnimes anime_type="tv" key="tv" />} />
        <Route path="/special" element={<TopAnimes anime_type="special" key="special" />} />
        <Route path="/anime/:id" element={<AnimeInfo />}/>
      </Routes>
    </div>
  </> 
}

export default App