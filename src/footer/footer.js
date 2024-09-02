import React from 'react';
import './footer.css'; 
import img from './tuxpi.com.1709921349.jpg';

function Footer() {
    return (
        <div className="footer-container">
            <div className="black">
                <h6>KEEP ADVENTURING FORWARD</h6>
            </div>
            <div className="img">
                <img src={img} alt="image" />
                <h2>Logo</h2>
                <div className="content">ls
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                    <a href="#">Link3</a>
                    <a href="#">Link4</a>
                    <a href="#">Link5</a>
                    <a href='#'></a>
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
    );
}

export default Footer;