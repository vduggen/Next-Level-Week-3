import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import mapMarkerImg from "../assets/map-marker.svg";

import { Map, TileLayer } from "react-leaflet";

import "../styles/pages/orphanages-map.css";

import "leaflet/dist/leaflet.css";

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-26.8563409, -49.2391894]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
