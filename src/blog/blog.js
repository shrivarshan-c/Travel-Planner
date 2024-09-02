import React from "react";
import './Blog.css';
import img1 from './image.png';
import img2 from './image copy 2.png';
import img3 from './image copy 3.png';

function Blog() {
  return (
    <div className="blogs">
      <div className="blog">
        <div className="blog-texts">
          <p>Articles</p>
          <h1>Discover the Best Blogs</h1>
          <h5>Explore our collection of Informative and Engaging Blog Articles.</h5>
        </div>
      </div>
      <div className="box">
        <div className="containers">
          <div className="post">
            <div className="header_post">
              <img src={img1} alt="" />
            </div>

            <div className="body_post">
              <div className="post_content">
                <h1>Discover Coorg: Your Ultimate Travel Companion!</h1>
               
                <div className="container_infos">
                  <div className="postedBy">
                    <span>author</span>
                    <a href="https://medium.com/@thespecialstories/plan-your-next-trip-to-coorg-india-a-complete-guide-4091e550e5f">Waseef Tauqueer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containers">
          <div className="post">
            <div className="header_post">
              <img src={img2} alt="" />
            </div>

            <div className="body_post">
              <div className="post_content">
                <h1>In the city of Mysteries Thanjavur</h1>
              
                <div className="container_infos">
                  <div className="postedBy">
                    <span>author</span>
                    <a href="#">Ruthresh</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containers">
          <div className="post">
            <div className="header_post">
              <img src={img3} alt="" />
            </div>

            <div className="body_post">
              <div className="post_content">
                <h1>Unveiling Kochi: A Journey Beyond Borders!</h1>
              
                <div className="container_infos">
                  <div className="postedBy">
                    <span>author</span>
                    <a href="https://medium.com/paperkin/experiencing-kochi-inside-and-out-f371cfd2d269">Shrivarshan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-texts">
        <button className="viewall">View All</button>
      </div>
    </div>
  );
}

export default Blog;
