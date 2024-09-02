import React from "react";
import './Roadmap.css';
import img from './tuxpi.com.1709921349.jpg'
import { useLocation } from 'react-router-dom';

//import Navbar from './navbar/Nav';
function goToSpots(){
  window.location.href ='/Daysplan'
}
function goToSpots2(){
  window.location.href ='/Daysplan2'
}
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active mx-2"  href="/home">HOME</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#destination" >DESTINATION</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#spots">SPOTS</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#features">FEATURES</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#review">REVIEW</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
function Roadmap()
{
    return(
        <>
            <div className="header">
                <Navbar></Navbar>
            </div>

            
            <div className="roadmap">
                <div className="para"><h2>Here's Your Ultimate Roadmap for Exploring this Destination</h2></div>
                <div className="roadimg"></div>
                </div>


            <div className="plans">
                <h3>Explore Our Roadmaps</h3>
                <div className="planspanel">
                    <div className="plan1">
                    <div className="explorebtn"><button className="explorebtn" onClick={goToSpots}>Explore Roadmap</button></div>
                        <div className="desc">
                            <p className="big">Explore Our <span>3</span> Days Roadmap</p><br></br><p className="small">Discover Kodaikanal's beauty and culture in three days, with highlights including<br></br> Coaker's Walk, the Solar Observatory, and Berijam Lake.</p></div>
                    </div>
                    <div className="plan2">
                    <div className="explorebtn" onClick={goToSpots2}><button className="explorebtn">Explore Roadmap</button></div>
                    <div className="desc">
                        <p className="big">Explore Our <span>5</span> Days Roadmap</p><br></br><p className="small">Discover Kodaikanal's beauty and culture in three days, with highlights including<br></br> Coaker's Walk, the Solar Observatory, and Berijam Lake.</p></div>
                    </div>
                </div>
            </div>


            <div className="events">
                <div className="greyrect">
                    <div className="card1">
                        <div className="card1desc"><h3>Interesting Fact about the <br></br>place.</h3><p>Kodaikanal was established as a refuge for American missionaries and British <br></br>bureaucrats in the 19th century due to its climate resembling their homelands.<br></br> It's also known for its rich biodiversity and the rare Kurinji flower, which blooms<br></br> once every twelve years, covering the hills in a beautiful blue hue.</p></div>
                        <div className="card1bg"></div>
                    </div>
                    <div className="card1">
                    <div className="card2bg"></div>
                        <div className="card1desc"><h3>Cultural Practices in that<br></br>place.</h3><p>The region is home to indigenous tribes like the Paliyans and Pulaiyans,<br></br> who have their own unique customs, rituals, and art forms,<br></br> contributing to the cultural fabric of Kodaikanal.</p></div>
                    </div>
                    <div className="card1">
                        <div className="card1desc"><h3>Interesting Fact about the <br></br>place.</h3><p>Kodaikanal was established as a refuge for American missionaries and British <br></br>bureaucrats in the 19th century due to its climate resembling their homelands.<br></br> It's also known for its rich biodiversity and the rare Kurinji flower, which blooms<br></br> once every twelve years, covering the hills in a beautiful blue hue.</p></div>
                        <div className="card3bg"></div>
                    </div>
                    <div className="card1">
                        <div className="card4bg"></div>
                        <div className="card1desc"><h3>Must Visit <br></br>places.</h3><p>A serene man-made lake offering boating facilities amidst picturesque surroundings.<br></br> It's an ideal spot for leisurely walks and enjoying the scenic beauty.</p></div>
                    </div>
                </div>
            </div>


            <div className="footer-container">
            <div className="img">
                <h2>Logo</h2>
                <div className="content">
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                    <a href="#">Link3</a>
                    <a href="#">Link4</a>
                    <a href="#">Link5</a>
                </div>
                <div className="horizontal-line"></div>
                <div className="sample">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Settings</p>
                </div>
                <footer>&copy;2023 Resume. All rights reserved.</footer>
            </div>
        </div>
        </>
    )
    
}
export default Roadmap;