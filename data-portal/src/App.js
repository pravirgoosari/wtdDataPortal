import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePointTrend from './components/SinglePointTrend';
import MultiPointTrend from './components/MultiPointTrend';
import TrendTimeRange from './components/TrendTimeRange';
import './App.css';

function App() {
  const [multipointPlotData, setMultipointPlotData] = useState({ data: [], layout: {} });
  const [singlepointPlotData, setSinglepointPlotData] = useState({ data: [], layout: {} });
  const [schematicSrc, setSchematicSrc] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        if (response.data.status === 'Flask server is running') {
          setSchematicSrc('http://localhost:5000/schematic');
        }
      })
      .catch(error => {
        console.error("There was an error connecting to the Flask server!", error);
      });
  }, []);


  // Fetch single point plot data based on selected value
  useEffect(() => {
    if (selectedValue) {
      axios.get(`http://localhost:5000/singlepoint_trend?value=${selectedValue}`)
        .then(response => {
          setSinglepointPlotData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching single point plot data!", error);
        });
    }
  }, [selectedValue]);

  const handleSinglepointPlotDataChange = (newPlotData) => {
    setSinglepointPlotData(newPlotData);
  };

  const handleMultipointPlotDataChange = (newPlotData) => {
    setMultipointPlotData(newPlotData);
  };

  const handleClick = (sectionName) => {
    console.log('Clicked on:',sectionName);
    setSelectedValue(sectionName.trim());
  };

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
                <TrendTimeRange onSinglePlotDataChange={handleSinglepointPlotDataChange}
                onMultiPlotDataChange={handleMultipointPlotDataChange}
                onClick={handleClick}
                selectedValue={selectedValue}/>
						  
												
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Schematic</h2>
                  <img src={schematicSrc} alt="Schematic" className="img-fluid" />
                   <div
                  className="clickable-area area1"
                  onClick={() => handleClick('FEET')}
                  title="FEET"
                ></div>
                <div
                  className="clickable-area area2"
                  onClick={() => handleClick(' mgd')}
                  title="mgd"
                ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Single Point Trend</h2>
                           
                  <SinglePointTrend plotData={singlepointPlotData} />
                  
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Multi Point Trend</h2>
                  <MultiPointTrend plotData={multipointPlotData}/>
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
