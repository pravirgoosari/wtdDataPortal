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
            <tr><td><Link to="/8th-ave">8th Ave.</Link></td></tr>
            <tr><td><Link to="/ballard">Ballard R.S.</Link></td></tr>
            <tr><td><Link to="/brandon">Brandon R.S.</Link></td></tr>
            <tr><td><Link to="/canal-st-of-weir">Canal St. OF Weir</Link></td></tr>
            <tr><td><Link to="/chelan">Chelan Ave. R.S</Link></td></tr>
            <tr><td><Link to="/connecticut">Connecticut. R.S.</Link></td></tr>
            <tr><td><Link to="/denny-lu">Denny Way - LU R.S.</Link></td></tr>
            <tr><td><Link to="/denny-local">Denny Way Local R.S.</Link></td></tr>
            <tr><td><Link to="/dexter">Dexter Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/hanford">Hanford #2 R.S.</Link></td></tr>
            <tr><td><Link to="/harbor">Harbor Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/king">King St. R.S.</Link></td></tr>
            <tr><td><Link to="/lake-city">Lake City Tunnel R.S.</Link></td></tr>
            <tr><td><Link to="/lander">Lander R.S.</Link></td></tr>
            <tr><td><Link to="/matthewslakeline">Matthews Lakeline</Link></td></tr>
            <tr><td><Link to="/montlake">Montlake R.S.</Link></td></tr>
            <tr><td><Link to="/norfolk">Norfolk St. R.S.</Link></td></tr>
            <tr><td><Link to="/southmichigan">S Michigan St. R.S.</Link></td></tr>
            <tr><td><Link to="/university">University R.S.</Link></td></tr>
            <tr><td><Link to="/westmichigan">West Michigan St. R.S</Link></td></tr> {/* Link to the new page */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegulatorStations;