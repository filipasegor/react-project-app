import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { useState, useEffect, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";

function App() {
  const [lngLat, setLngLat] = useState([]);
  const [marker, setMarker] = useState(undefined);
  const [map, setMap] = useState(undefined)

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZmlsaXBhcyIsImEiOiJja2x4dTVoZ2kweHAxMndvNjZ2bjVxcThmIn0.RDd66wk54EmYS4TcXnRPIg";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.6173, 55.7558],
      zoom: 20
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([37.6173, 55.7558])
      .addTo(map);

    setMarker(marker);
    setMap(map);
  }, []);

  function handleMarkerMove(e) {
    console.log("fdsfdf");
    marker.setLngLat(stores[e.target.value]);
    map.flyTo({
      center: (stores[e.target.value]),
      speed: 3,
      curve: 1
    });
  }
  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  return (
    <>
      <div style={{ height: "700px" }} id="map"></div>

      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleMarkerMove}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
