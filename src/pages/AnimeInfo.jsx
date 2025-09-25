import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AniAPI } from "../js/api.js";
import "../css/animeinfo.css"

const AnimePage = ({ anime }) => {
  // Helper to remove brackets in URLs
  const cleanUrl = (url) => {
    try{ return url.replace(/[\[\]]/g, '')}
    catch(err){return url}
  };

  return (
    <div className="anime-page">
      <img
        src={cleanUrl(anime.imgs?.jpg?.large || anime.imgs?.jpg?.medium)}
        alt={anime.title}
        className="anime-image"
      />
      <h1 className="anime-title">{anime.title}</h1>

      <p className="anime-description">{anime.description}</p>

      <section className="section external-links">
        <h2>External Links</h2>
        <ul>
          {anime.external_links && anime.external_links.map((link, idx) => (
            <li key={idx}>
              <a href={cleanUrl(link.data)} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section related-animes">
        <h2>Related Animes</h2>
        <div>
          {anime.related_animes && anime.related_animes.map((rel, idx) => (
            <a
              key={idx}
              href={cleanUrl(rel.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="related-anime-card"
            >
              <img src={cleanUrl(rel.img)} alt={rel.name.trim()} />
              <div>{rel.name.trim()}</div>
              <div className="related-anime-type">{rel.type.trim()}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section theme-songs">
        <h2>Theme Songs</h2>
        <div>
          <h3>Opening</h3>
          <ul>
            {anime.theme_songs?.opening?.map((song, idx) => (
              <li key={idx}>{song.name.trim()}</li>
            ))}
          </ul>
          <h3>Ending</h3>
          <ul>
            {anime.theme_songs?.ending?.map((song, idx) => (
              <li key={idx}>{song.name.trim()}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="official-page">
        <a href={cleanUrl(anime.url)} target="_blank" rel="noopener noreferrer">
          Official Page
        </a>
      </section>
    </div>
  );
};

const AnimeInfo = () => {

    const [animeInfo, setAnimeInfo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
    const api = new AniAPI();
    api.getAnimeInfoByID(id)
    .then((result) => {setAnimeInfo(result)})
    .catch((err) => {console.error(err);});
    }, []);

    return <AnimePage anime={animeInfo} />
}

export default AnimeInfo;
