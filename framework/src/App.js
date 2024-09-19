import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Help from './components/stations/Help';
import RegulatorStations from './components/stations/RegulatorStations';
import WestSidePumpStations from './components/stations/WestSidePumpStations';
import EastSidePumpStations from './components/stations/EastSidePumpStations';
import TreatmentPlants from './components/stations/TreatmentPlants';
import SouthTreatmentPlant from './components/stations/SouthTreatmentPlant';
import Brightwater from './components/stations/Brightwater';
import Carnation from './components/stations/Carnation';
import OffsiteFacilities from './components/stations/OffsiteFacilities';
import Station from './components/stations/Station';
import stations from './components/config/stationsConfig';

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
            <td><Link to="/help">Help</Link></td>
              <td>FOR NEW VISITORS, PLEASE READ BEFORE BROWSING THE SITE!!</td>
            </tr>
            <tr>
              <td><Link to="/offsite-facilities">All Offsite Facilities</Link></td>
              <td>Select an offsite facility for information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/treatment-plants">Treatment Plants/Storages/Sub Systems</Link></td>
              <td>Select a treatment plant for information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/carnation">Carnation Treatment Plant</Link></td>  {/* Added Carnation link */}
              <td>Carnation Treatment Plant information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/brightwater">Brightwater</Link></td>
              <td>Brightwater WWTP information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/south-treatment-plant">South Treatment Plant</Link></td>
              <td>South Treatment Plant information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/regulator-stations">Regulator Stations</Link></td>
              <td>Regulator Station information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/westside-pumpstations">West Side Offsite Pump Stations</Link></td>
              <td>West Side Offsite Pump Stations information and data retrieval</td>
            </tr>
            <tr>
              <td><Link to="/eastside-pumpstations">East Side Offsite Pump Stations</Link></td>
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
        <Route path="/help" element={<Help />} />
        <Route path="/regulator-stations" element={<RegulatorStations />} />
        <Route path="/westside-pumpstations" element={<WestSidePumpStations />} />
        <Route path="/eastside-pumpstations" element={<EastSidePumpStations />} />
        <Route path="/treatment-plants" element={<TreatmentPlants />} />
        <Route path="/south-treatment-plant" element={<SouthTreatmentPlant />} />
        <Route path="/brightwater" element={<Brightwater />} />
        <Route path="/offsite-facilities" element={<OffsiteFacilities />} />
        <Route path="/carnation" element={<Carnation />} /> {/* Added Carnation route */}

        {stations.map((station, index) => (
          <Route
            key={index}
            path={station.path}
            element={
              <Station
                stationName={station.stationName}
                schematicEndpoint={station.schematicEndpoint}
                clickHandlers={station.clickHandlers}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;