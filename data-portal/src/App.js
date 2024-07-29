import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [multipointSrc, setMultipointSrc] = useState('');
  const [singlepointSrc, setSinglepointSrc] = useState('');
  const [schematicSrc, setSchematicSrc] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        if (response.data.status === 'Flask server is running') {
          setMultipointSrc('http://localhost:5000/multipoint_trend');
          setSinglepointSrc('http://localhost:5000/singlepoint_trend');
          setSchematicSrc('http://localhost:5000/schematic');
        }
      })
      .catch(error => {
        console.error("There was an error connecting to the Flask server!", error);
      });
  }, []);

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar">
          <h1>Data Portal</h1>
          <h2>Regulator Stations</h2>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link" href="#">11th Ave. NW O.F.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">3rd Ave and Ewing St.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">8th Ave.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ballard R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Brandon R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Canal St. OF Weir</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Chelan Ave. R.S</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Connecticut. R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Denny Way - LU R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Denny Way Local R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Dexter Ave. R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Hanford #1 R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Hanford #2 R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Harbor Ave. R.S.</a></li>
            <li className="nav-item"><a className="nav-link" href="#">King St. R.S.</a></li>
          </ul>
        </div>
        <div className="col-md-9 main-content">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Time Trend Range</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="startDateTime">Start Time:</label>
                      <input type="datetime-local" id="startDateTime" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endDateTime">End Time:</label>
                      <input type="datetime-local" id="endDateTime" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="interval">Interval:</label>
                      <input type="number" id="interval" className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary mr-2">Apply</button>
                    <button type="button" className="btn btn-secondary">Refresh</button>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Schematic</h2>
                  <img src={schematicSrc} alt="Schematic" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Single Point Trend</h2>
                  <iframe src={singlepointSrc} title="Singlepoint Trend" className="w-100" style={{ height: '300px', border: 'none' }} />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Multi Point Trend</h2>
                  <iframe src={multipointSrc} title="Multipoint Trend" className="w-100" style={{ height: '300px', border: 'none' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
