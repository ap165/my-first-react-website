import "../css/anime.css";
import { Link } from "react-router-dom";

const Anime = ({ id,img_url, title }) => {
    let url = "/anime/" + id

    return <Link className="animeCard" to={ url } >
        <div className="animeCard-img">
            <img src={img_url} alt={title} />
        </div>
        <h3 className="animeCard-title">{title}</h3>
    </Link>
}

export default Anime;