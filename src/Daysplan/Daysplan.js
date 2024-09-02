import React  from 'react';
import './Daysplan.css'
import axios from "axios";
import planimg1 from './icons8-back-button-50.png';
import planimg2 from './icons8-share-50.png'
import Interactivemap from '../Map/Interactivemap';

function Daysplan()
{

    const handleShare = () => {
        const ourl = 'http://localhost:3000/Daysplan'
        if (navigator.share) {
            navigator.share({
                title: 'Your Itneraries',
                text: 'Explore the roadmap',
                url: ourl
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        }
    }

    return(
        
        <>
        <div className='total-plan'>
        {/* Main half div */}
        <div className='half2-plan'><Interactivemap></Interactivemap></div>
        <div className='half-plan'>

            {/* Photo div */}
            <div className='photo-plan'>
                <div className='icons-plan'>
                    <a href='/Roadmap'><img src={planimg1}></img></a>
                    <h3>Travel Planner</h3>
                    <a href='' onClick={handleShare}><img src={planimg2}></img></a>
                </div>

                {/* Photo Desc Div */}
                <div className='loc-plan'><p>Kodaikanal</p><p className='days-plan'>3 Days</p></div>
            </div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 1</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Brutorn Resorts</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Vivera Highlands</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'><p>4.4 ⭐</p></div>
                    <p>The Heritage Bunglow</p>
                    <p>The best hotel at Kodaikanal to visit with family</p>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><p>Moir Point</p><p>This popular destination with a watchtower offers scenic views of the the valley & mountains.</p><div className='loc1time-plan'>8:00 Am - 10:00Pm</div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 2</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Brutorn Resorts</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Vivera Highlands</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'><p>4.4 ⭐</p></div>
                    <p>The Heritage Bunglow</p>
                    <p>The best hotel at Kodaikanal to visit with family</p>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><p>Moir Point</p><p>This popular destination with a watchtower offers scenic views of the the valley & mountains.</p><div className='loc1time-plan'>8:00 Am - 10:00Pm</div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 3</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Brutorn Resorts</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'><p>4.4 ⭐</p></div>
                        <p>Vivera Highlands</p>
                        <p>The best hotel at Kodaikanal to visit with family</p>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'><p>4.4 ⭐</p></div>
                    <p>The Heritage Bunglow</p>
                    <p>The best hotel at Kodaikanal to visit with family</p>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><p>Moir Point</p><p>This popular destination with a watchtower offers scenic views of the the valley & mountains.</p><div className='loc1time-plan'>8:00 Am - 10:00Pm</div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>
            
            
        </div>
        </div>
        

        </>
    )
}
export default Daysplan;