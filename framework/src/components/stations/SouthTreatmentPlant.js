import React from 'react';
import { Link } from 'react-router-dom';

function SouthTreatmentPlant() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>South Treatment Plant</h1>
      <h2>Select a link</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/influent-effluent">Influent-Effluent</Link></td></tr>
            <tr><td><Link to="/hydraulic-profile">Hydraulic Profile</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SouthTreatmentPlant;