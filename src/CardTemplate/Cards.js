import React, { useState } from "react";
import './Cards.css';

import vector1 from './ei_arrow-up.png'
import vector2 from './tabler_dots.png'
import vector3 from './solar_bookmark-circle-broken.png'
import Roadmap from "../SpotDetails/Roadmap";

function Cards() {
    const [showAll, setShowAll] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleSearch = () => {
        const input = document.getElementsByClassName('hello')[0].value.toLowerCase();
        setSearchTerm(input);
    };

    const filteredCards = () => {
        if (!searchTerm) {
            return showAll ? ["card3", "card4", "card5"] : ["card1", "card2"];
        }

        const cards = showAll ? ["COCHIN", "OOTY", "KODAIKANAL"] : ["THANJAVUR", "COORG"];

        return cards.filter(card => card.toLowerCase().includes(searchTerm)).map(card => {
            switch (card) {
                case "THANJAVUR":
                    return "card1";
                case "COORG":
                    return "card2";
                case "COCHIN":
                    return "card3";
                case "OOTY":
                    return "card4";
                case "KODAIKANAL":
                    return "card5";
                default:
                    return "";
            }
        });
    };
      function handleClick(){
        window.location.href='Roadmap';
      }
    return (
        <div className="cards">
            <div className="card">
                <div className="desc1">
                    <div className="desc2">
                        <p className="sub">Discover</p>
                        <p className="main1">Uncover the hidden gems<br></br> of our country</p>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="Enter Location" className="hello"></input>
                        <button className="search" onClick={handleSearch}>Search</button>
                    </div>
                </div>

                <div className="allcards">
                    <div className="viewmore" onClick={toggleShowAll}>
                        <p>View More</p>
                        <img src={vector1} alt="View More" />
                    </div>
                    {filteredCards().map((card, index) => (
                        <div key={index} className={card}>
                            <div className="vectors"><img src={vector2} alt="Vector 2" /><img src={vector3} alt="Vector 3" /></div>
                            <p>{card === "card1" ? "OOTY"  : card === "card2" ? "COORG" : card === "card3" ? "COCHIN" : card === "card4" ?  "THANJAVUR": "KODAIKANAL"}</p>
                            <button onClick={handleClick}>View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
