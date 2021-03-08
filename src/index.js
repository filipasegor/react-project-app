import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';

import { useState, useEffect, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";

function App() {
  const [random, setRandom] = useState(Math.random());
  const [coordinates, setCoordinates] = useState();
  const [lngLat, setLngLat] = useState([]);
  const [marker, setMarker] = useState(undefined);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZmlsaXBhcyIsImEiOiJja2x4dTVoZ2kweHAxMndvNjZ2bjVxcThmIn0.RDd66wk54EmYS4TcXnRPIg";

    useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [55.7558, 37.6173],
      zoom: 10
    })


    const market = new mapboxgl.Marker()
    .setLngLat([55.7558, 37.6173])
    .addTo(map)

    setMarker(new mapboxgl.Marker);

  }, [])


  const stores = {
    km20: [55.761994, 37.610641],
    belief: [55.733396, 37.601152],
    brandshop: [55.767839, 37.616812]
  };

  return (
    <>

      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div style={{height:"800px"}} id="map"></div>

      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={e => setMarker(e.target.setLngLat[10, 20])} >
          <option value="km20" >KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>

    </>
  );
}

render(<App />, document.querySelector("#root"));
