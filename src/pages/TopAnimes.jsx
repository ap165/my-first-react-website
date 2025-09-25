import { AniAPI } from "../js/api.js";
import { useState, useEffect } from 'react';
import Anime from "../components/animeCard.jsx";

const TopAnimes = ({anime_type}) => {
    
    const [animes, setAnimes] = useState([]);
    const [pages, setPages] = useState([]);
    useEffect(() => {
      let navLinksPhone = document.querySelector(".nav-links-phone");
      navLinksPhone.style.height = "0px";
      const api = new AniAPI();
      api.getTopAnimes(({anime_type}.anime_type)).then((result) => {
          setAnimes(result["items"]);
          setPages(result["pagination"]);
      }).catch((err) => {
          console.error(err);
      })
    }, []);
    
    return (
  <div>
    
    {animes.length === 0 ? <div>Loading...</div> : 
      animes.map(anime => (
        <Anime key={anime.mal_id} id={anime.mal_id} img_url={anime.imgs.jpg.medium} title={anime.title} />
      ))}
  </div>
);
}

export default TopAnimes;