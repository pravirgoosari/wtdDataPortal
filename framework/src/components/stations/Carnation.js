import React from 'react';
import { Link } from 'react-router-dom';

function Carnation() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Carnation Treatment Plant</h1>
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
            <tr><td><Link to="/membrane-train-1">Membrane Train 1</Link></td></tr>
            <tr><td><Link to="/membrane-train-2">Membrane Train 2</Link></td></tr>
            <tr><td><Link to="/membrane-train-3">Membrane Train 3</Link></td></tr>
            <tr><td><Link to="/membrane-train-4">Membrane Train 4</Link></td></tr>
            <tr><td><Link to="/membrane-train-5">Membrane Train 5</Link></td></tr>
            <tr><td><Link to="/production-information">Production Information</Link></td></tr>
            <tr><td><Link to="/uv">UV</Link></td></tr>
            <tr><td><Link to="/trends">Trends</Link></td></tr>
            <tr><td><Link to="/totalizers">Totalizers</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Carnation;