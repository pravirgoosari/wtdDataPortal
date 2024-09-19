import React from 'react';
import { Link } from 'react-router-dom';

function TreatmentPlants() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Treatment Plants/Storages/Sub Systems</h1>
      <h2>Select a Facility</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Facility</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/alki-plant">Alki Plant</Link></td></tr>
            <tr><td><Link to="/brightwater">Brightwater</Link></td></tr>
            <tr><td><Link to="/carkeek-plant">Carkeek Plant</Link></td></tr>
            <tr><td><Link to="/central-seattle-area">Central Seattle Area</Link></td></tr>
            <tr><td><Link to="/east-west-side">East and West Side</Link></td></tr>
            <tr><td><Link to="/elliott-west-facility">Elliott West Facility</Link></td></tr>
            <tr><td><Link to="/logboom-storage">Logboom Storage</Link></td></tr>
            <tr><td><Link to="/mlk-henderson">MLK/Henderson Facility</Link></td></tr>
            <tr><td><Link to="/north-creek-storage">North Creek Storage</Link></td></tr>
            <tr><td><Link to="/north-seattle-area">North Seattle Area</Link></td></tr>
            <tr><td><Link to="/south-plant">South Plant</Link></td></tr>
            <tr><td><Link to="/south-plant-hydraulic-profile">South Plant Hydraulic Profile</Link></td></tr>
            <tr><td><Link to="/south-seattle-area">South Seattle Area</Link></td></tr>
            <tr><td><Link to="/vashon-tp">Vashon TP</Link></td></tr>
            <tr><td><Link to="/west-point">West Point</Link></td></tr>
            <tr><td><Link to="/west-seattle-system">West Seattle System</Link></td></tr>
            <tr><td><Link to="/west-seattle-tunnel">West Seattle Tunnel</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TreatmentPlants;