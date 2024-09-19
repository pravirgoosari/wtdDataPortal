import React from 'react';
import { Link } from 'react-router-dom';

function Brightwater() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Brightwater</h1>
      <h2>Select a link</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/overview">Overview</Link></td></tr>
            <tr><td><Link to="/hydraulic-profile">Hydraulic Profile</Link></td></tr>
            <tr><td><Link to="/conveyance">Conveyance</Link></td></tr>
            <tr><td><Link to="/process-overview">Process Overview</Link></td></tr>
            <tr><td><Link to="/ips-flows-levels">IPS Flows and Levels</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brightwater;