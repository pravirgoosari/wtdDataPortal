import React from 'react';
import { Link } from 'react-router-dom';

function WestSidePumpStations() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>West Side Offsite Pump Stations</h1>
      <h2>Select a Station</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Station</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/30th-ave">30TH AVE</Link></td></tr>
            <tr><td><Link to="/53rd-ave">53RD AVE</Link></td></tr>
            <tr><td><Link to="/63rd-ave">63RD AVE PS</Link></td></tr>
            <tr><td><Link to="/barton">BARTON</Link></td></tr>
            <tr><td><Link to="/belvoir">BELVOIR</Link></td></tr>
            <tr><td><Link to="/carkeek">CARKEEK</Link></td></tr>
            <tr><td><Link to="/densmore">DENSMORE</Link></td></tr>
            <tr><td><Link to="/duwamish">DUWAMISH</Link></td></tr>
            <tr><td><Link to="/emarginal-wy-s">E MARGINAL WY S</Link></td></tr>
            <tr><td><Link to="/east-pine">EAST PINE</Link></td></tr>
            <tr><td><Link to="/henderson">HENDERSON</Link></td></tr>
            <tr><td><Link to="/hidden-lake">HIDDEN LAKE</Link></td></tr>
            <tr><td><Link to="/interbay">INTERBAY</Link></td></tr>
            <tr><td><Link to="/kenmore">KENMORE</Link></td></tr>
            <tr><td><Link to="/lake-ballinger">LAKE BALLINGER</Link></td></tr>
            <tr><td><Link to="/matthews-park">MATTHEWS PARK</Link></td></tr>
            <tr><td><Link to="/murray">MURRAY</Link></td></tr>
            <tr><td><Link to="/north-beach">NORTH BEACH</Link></td></tr>
            <tr><td><Link to="/north-creek">NORTH CREEK</Link></td></tr>
            <tr><td><Link to="/rainier">RAINIER</Link></td></tr>
            <tr><td><Link to="/richmond-beach">RICHMOND BEACH</Link></td></tr>
            <tr><td><Link to="/wmarginal-wy-s">W MARGINAL WY S</Link></td></tr>
            <tr><td><Link to="/west-seattle">WEST SEATTLE</Link></td></tr>
            <tr><td><Link to="/woodinville">WOODINVILLE</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WestSidePumpStations;