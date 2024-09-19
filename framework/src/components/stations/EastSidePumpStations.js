import React from 'react';
import { Link } from 'react-router-dom';

function EastSidePumpStations() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>East Side Offsite Pump Stations</h1>
      <h2>Select a Station</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Station</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/bellevue">BELLEVUE</Link></td></tr>
            <tr><td><Link to="/black-diamond">BLACK DIAMOND</Link></td></tr>
            <tr><td><Link to="/heathfield">HEATHFIELD</Link></td></tr>
            <tr><td><Link to="/hollywood">HOLLYWOOD</Link></td></tr>
            <tr><td><Link to="/juanita-bay">JUANITA BAY</Link></td></tr>
            <tr><td><Link to="/kirkland">KIRKLAND</Link></td></tr>
            <tr><td><Link to="/lakeland-hills">LAKELAND HILLS</Link></td></tr>
            <tr><td><Link to="/medina">MEDINA</Link></td></tr>
            <tr><td><Link to="/north-mercer">N. MERCER</Link></td></tr>
            <tr><td><Link to="/new-interurban">NEW INTERURBAN</Link></td></tr>
            <tr><td><Link to="/pacific">PACIFIC</Link></td></tr>
            <tr><td><Link to="/south-mercer">S. MERCER</Link></td></tr>
            <tr><td><Link to="/sunset">SUNSET</Link></td></tr>
            <tr><td><Link to="/sweyolocken">SWEYOLOCKEN</Link></td></tr>
            <tr><td><Link to="/wilburton">WILBURTON</Link></td></tr>
            <tr><td><Link to="/yarrow-bay">YARROW BAY</Link></td></tr>
            <tr><td><Link to="/york">YORK</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EastSidePumpStations;