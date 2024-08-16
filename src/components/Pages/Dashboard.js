import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, VideoOverlay } from 'react-leaflet';
import { Chart } from 'react-google-charts'; // Import Chart component from react-google-charts
import L from 'leaflet'; // Import leaflet directly to access marker icon
import 'leaflet/dist/leaflet.css';
import './Dashboard.css'; // Import CSS file for styling

// Define custom marker icon
const locationIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Dashboard = () => {
  // Define coordinates for Gandhipuram, Peelamedu, and Ukkadam
  const coordinates = [
    [11.0183, 76.9558], // Gandhipuram
    [11.0319, 77.0387], // Peelamedu
  ];

  // Data for pie Chart
  const piechart = [
    ["Task", "Hours per Day"],
    ["tank1", 11],
    ["tank2", 2],
    ["tank3", 2],
   // CSS-style declaration
  ];

  const options = {
    title: " Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };

  const data = [
    ["Year", "Tank A", "Tank B", "Tank C"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  // barchart
  const option = {
    chart: {
      title: "water quality ",
      subtitle: "ph ",
    },
    colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"],
  };

  return (
    <div className="grid-container">
      {/* First row */}
      <div className="row">
        <div className="water-quantity">
          {/* Water Quantity Levels */}
          <h2>Water Quantity</h2>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={piechart}
            options={options}
          />
        </div>
        <div className="quality-section">
          {/* Quality Section */}
          <h2>Water Quality Monitoring Points</h2>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={piechart}
            options={option}
          />
        </div>
      </div>

      {/* Second row */}
      <div className="row">
        <h2>Maintenance</h2>
        <div className="safety-regulation">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
        <div className="source-diagram">
          {/* Source Diagram */}
          <h2>Source Diagram</h2>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={[
              ["Tank", "Water Quantity"],
              ["Tank X", 800],
              ["Tank Y", 600],
              ["Tank Z", 400]
            ]}
            options={{
              title: "Water Quantity in Tanks",
              pieHole: 0.4,
              is3D: true,
              colors: ['#4CAF50', '#FFC107', '#2196F3'],
            }}
          />
        </div>
      </div>

      {/* Map section */}
      <div className="map-section">
        {/* Coimbatore Interactive Map Section */}
        <h2>Coimbatore Interactive Map</h2>
        <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ height: '860px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Markers for locations */}
          {coordinates.map((coord, index) => (
            <Marker key={index} position={coord} icon={locationIcon}>
              <Popup>
                {/* Popup content */}
              </Popup>
            </Marker>
          ))}
          {/* Polygon connecting locations */}
          <Polygon positions={coordinates} pathOptions={{ color: 'blue' }} />
          {/* Video overlay */}
          <VideoOverlay
            bounds={coordinates}
            url="https://www.example.com/video.mp4"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
