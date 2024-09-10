import React from 'react';
import { Link } from 'react-router-dom';

function RegulatorStations() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Regulator Stations</h1>
      <h2>Select a Station</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Station</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/11th-ave-nw-of">11th Ave. NW O.F.</Link></td></tr>
            <tr><td><Link to="/3rd-ave-ewing-st">3rd Ave and Ewing St.</Link></td></tr>
            <tr><td><Link to="/8th-ave">8th Ave.</Link></td></tr> {/* Link to the new page */}
            <tr><td>Ballard R.S.</td></tr>
            <tr><td>Brandon R.S.</td></tr>
            <tr><td>Canal St. OF Weir</td></tr>
            <tr><td>Chelan Ave. R.S</td></tr>
            <tr><td>Connecticut. R.S.</td></tr>
            <tr><td>Denny Way - LU R.S.</td></tr>
            <tr><td>Denny Way Local R.S.</td></tr>
            <tr><td>Dexter Ave. R.S.</td></tr>
            <tr><td>Hanford #1 R.S.</td></tr>
            <tr><td>Hanford #2 R.S.</td></tr>
            <tr><td>Harbor Ave. R.S.</td></tr>
            <tr><td>King St. R.S.</td></tr>
            <tr><td>Lake City Tunnel R.S.</td></tr>
            <tr><td>Lander R.S.</td></tr>
            <tr><td>Matthews Lakeline</td></tr>
            <tr><td>Montlake R.S.</td></tr>
            <tr><td>Norfolk St. R.S.</td></tr>
            <tr><td>S Michigan St. R.S.</td></tr>
            <tr><td>University R.S.</td></tr>
            <tr><td>West Michigan St. R.S</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegulatorStations;
