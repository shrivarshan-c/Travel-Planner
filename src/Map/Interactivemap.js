import React, { useState } from "react";
import Map, { NavigationControl, Marker, Popup } from "react-map-gl";
// import Navbar from "./navbar/navbar.js";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';

import "./Interactivemap.css";
import defaultImage1 from "./WhatsApp Image 2024-03-13 at 20.55.23.jpeg";
import defaultImage2 from "./WhatsApp Image 2024-03-13 at 20.55.24.jpeg";
import defaultImage3 from "./WhatsApp Image 2024-03-13 at 20.55.24(2).jpeg";
import defaultImage4 from "./WhatsApp Image 2024-03-13 at 20.55.24(1).jpeg";
import defaultImage5 from "./WhatsApp Image 2024-03-13 at 20.55.25(1).jpeg";
import defaultImage6 from "./WhatsApp Image 2024-03-13 at 20.55.25.jpeg";

function Interactivemap() {
  const [defaultPopup1, setDefaultPopup1] = useState(true); // Set the defaultPopup state for the first popup
  const [defaultPopup2, setDefaultPopup2] = useState(true); // Set the defaultPopup state for the second popup
  const [defaultPopup3, setDefaultPopup3] = useState(true); // Set the defaultPopup state for the third popup
  const [defaultPopup4, setDefaultPopup4] = useState(true); // Set the defaultPopup state for the fourth popup
  const [defaultPopup5, setDefaultPopup5] = useState(true);
  const [defaultPopup6, setDefaultPopup6] = useState(true); // Set the defaultPopup state for the fifth popup
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMapClick = (event) => {
    // Check if any default popup is open and if the click event doesn't target any default popup
    if (
      (defaultPopup1 ||
        defaultPopup2 ||
        defaultPopup3 ||
        defaultPopup4 ||
        defaultPopup5 ||
        defaultPopup6) &&
      event.target.className !== "mapboxgl-popup-content"
    ) {
      setDefaultPopup1(false); // Close the first default popup
      setDefaultPopup2(false); // Close the second default popup
      setDefaultPopup3(false); // Close the third default popup
      setDefaultPopup4(false); // Close the fourth default popup
      setDefaultPopup5(false);
      setDefaultPopup6(false); // Close the fifth default popup
    }
    setSelectedPlace(null); // Close any other selected popup
  };

  return (
    <div className="App">
      
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 77.44737394915882,
          latitude: 10.212238930399284,
          zoom: 14,
        }}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=KpFr32C3asC9l9tm2vNd"
        onClick={handleMapClick} // Close popups on map click
      >
        <NavigationControl position="top-left" />

        {/* First custom marker with black color */}
        <Marker longitude={77.48918219999996} latitude={10.2381136}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* First default popup */}
        {defaultPopup1 && (
          <Popup
            longitude={77.48918219999996}
            latitude={10.2381136}
            onClose={() => setDefaultPopup1(false)}
          >
            <div>
              <img
                src={defaultImage1}
                alt="Default Place 1"
                style={{ width: "200px", height: "150px" }}
              />
              <p>moir point</p>
            </div>
          </Popup>
        )}

        {/* Second custom marker with black color */}
        <Marker longitude={77.45885298203191} latitude={10.213773054551382}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* Second default popup */}
        {defaultPopup2 && (
          <Popup
            longitude={77.45885298203191}
            latitude={10.213773054551382}
            onClose={() => setDefaultPopup2(false)}
          >
            <div>
              <img
                src={defaultImage2}
                alt="Default Place 2"
                style={{ width: "200px", height: "150px" }}
              />
              <p style={{color:"black"}}>Pine forest</p>
            </div>
          </Popup>
        )}

        {/* Third custom marker with black color */}
        <Marker longitude={77.46522586854098} latitude={10.210068891930904}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* Third default popup */}
        {defaultPopup3 && (
          <Popup
            longitude={77.46522586854098}
            latitude={10.210068891930904}
            onClose={() => setDefaultPopup3(false)}
          >
            <div>
              <img
                src={defaultImage3}
                alt="Default Place 3"
                style={{ width: "200px", height: "150px" }}
              />
              <p style={{color:"black"}}>Pillar Rocks Viewpoint</p>
            </div>
          </Popup>
        )}

        {/* Fourth custom marker with black color */}
        <Marker longitude={77.49184748017723} latitude={10.231143188787552}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* Fourth default popup */}
        {defaultPopup4 && (
          <Popup
            longitude={77.49184748017723}
            latitude={10.231143188787552}
            onClose={() => setDefaultPopup4(false)}
          >
            <div>
              <img
                src={defaultImage4}
                alt="Default Place 4"
                style={{ width: "200px", height: "150px" }}
              />
              <p style={{color:"black"}}>Bryant Park</p>
            </div>
          </Popup>
        )}

        {/* Fifth custom marker with black color */}
        <Marker longitude={77.49184748017723} latitude={10.231143188787552}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* Fifth default popup */}
        {defaultPopup5 && (
          <Popup
            longitude={77.46179835319542}
            latitude={10.210611704121883}
            onClose={() => setDefaultPopup5(false)}
          >
            <div>
              <img
                src={defaultImage5}
                alt="Default Place 5"
                style={{ width: "200px", height: "150px" }}
              />
              <p style={{color:"black"}}>Guna Cave</p>
            </div>
          </Popup>
        )}
        <Marker longitude={77.46179835319542} latitude={10.210611704121883}>
          <div
            className="marker"
            style={{
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          />
        </Marker>
        {/* Fifth default popup */}
        {defaultPopup6 && (
          <Popup
            longitude={77.48918219552287}
            latitude={10.238324749957886}
            onClose={() => setDefaultPopup5(false)}
          >
            <div>
              <img
                src={defaultImage6}
                alt="Default Place 6"
                style={{ width: "200px", height: "150px" }}
              />
              <p  style={{color:"black"}}>Kodaikanal Hill station</p>
            </div>
          </Popup>
        )}

        {/* Selected place popup */}
        {selectedPlace && (
          <Popup
            longitude={selectedPlace.longitude}
            latitude={selectedPlace.latitude}
            onClose={() => setSelectedPlace(null)}
          >
            <div>
              <img
                src={selectedPlace.image}
                alt="Selected Place"
                style={{ width: "200px", height: "150px" }}
              />
              <p>{selectedPlace.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default Interactivemap;
