import "../css/nav.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const navOpenClose = () => {
        let nav_links_phone = document.querySelector(".nav-links-phone");
        if (!open){
            nav_links_phone.style.height= "400px";
            setOpen(true);
        } else if (open) {
            nav_links_phone.style.height = "0";
            setOpen(false);
        }
    }
    return <div className="nav-bar">
        <nav className="nav">
            <h1 className="nav-title"><img src="../src/resources/logo-small.png" width="50" height="50" /><span>SKY</span>PIEA</h1>
            <div className="nav-links-pc">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink className="nav-link" to="/popular">Most Popular</NavLink>
                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                <NavLink className="nav-link" to="/tv">Tv Series</NavLink>
                <NavLink className="nav-link" to="/special">Specials</NavLink>
            </div>
            <form className="nav-search-desktop nav-search" >
                <input type="text" className="nav-search-input" placeholder="Search Anime..." />
                <button className="nav-search-btn"><img src="../src/resources/search.svg" /></button>
            </form>
            <button onClick={() => navOpenClose()} className="nav-btn-mobile"><img src="../src/resources/list.svg" /></button>
        </nav>
        <div className="nav-links-phone">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink className="nav-link" to="/popular">Most Popular</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/tv">Tv Series</NavLink>
            <NavLink className="nav-link" to="/special">Specials</NavLink>
            <br/>
            <form className="nav-search-mobile nav-search" >
                <input type="text" className="nav-search-input" placeholder="Search Anime..." />
                <button className="nav-search-btn"><img src="../src/resources/search.svg" /></button>
            </form>
        </div>
    </div>
    
};

export default Nav;