import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Updated import paths
import RegulatorStations from './components/regulator-station/RegulatorStations';
import EleventhAveNW from './components/regulator-station/EleventhAveNW';
import ThirdAveEwingSt from './components/regulator-station/ThirdAveEwingSt';
import EighthAve from './components/regulator-station/EighthAve';

function Home() {
  return (
    <div className="container text-center">
      <h1>WTD INTRANET SITE</h1>
      <h2>Real Time & Historical Data Pages</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">Help</a></td>
              <td>FOR NEW VISITORS, PLEASE READ BEFORE BROWSING THE SITE!!</td>
            </tr>
            <tr>
              <td><a href="#">CSO Status Map</a></td>
              <td>Display CSO status by changing color of the locations</td>
            </tr>
            <tr>
              <td><a href="#">Cumulative Rainfall Map</a></td>
              <td>Map with color-coded cumulative rainfall since midnight</td>
            </tr>
            <tr>
              <td><a href="#">All Offsite Facilities</a></td>
              <td>Select an offsite facility for information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">Treatment Plants/Storages/Sub Systems</a></td>
              <td>Select a treatment plant for information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">Carnation Treatment Plant</a></td>
              <td>Carnation Treatment Plant information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">Brightwater WWTP</a></td>
              <td>Brightwater WWTP information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">South Treatment Plant</a></td>
              <td>South Treatment Plant information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/regulator-stations">Regulator Stations</Link></td>
              <td>Regulator Station information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">West Side Offsite Pump Stations</a></td>
              <td>West Side Offsite Pump Stations information and data retrieval</td>
            </tr>
            <tr>
              <td><a href="#">East Side Offsite Pump Stations</a></td>
              <td>East Side Offsite Pump Stations information and data retrieval</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulator-stations" element={<RegulatorStations />} />
        {/* Below route will include the logic to fetch and display data */}
        <Route path="/11th-ave-nw-of" element={<EleventhAveNW />} />
        <Route path="/3rd-ave-ewing-st" element={<ThirdAveEwingSt />} />
        <Route path="/8th-ave" element={<EighthAve />} />
      </Routes>
    </Router>
  );
}

export default App;
