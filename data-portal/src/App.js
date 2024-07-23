import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePointTrend from './components/SinglePointTrend';
import MultiPointTrend from './components/MultiPointTrend';
import TrendTimeRange from './components/TrendTimeRange';
import './App.css';

function App() {
  const [multipointSrc, setMultipointSrc] = useState('');
  const [singlepointSrc, setSinglepointSrc] = useState('');
  const [schematicSrc, setSchematicSrc] = useState('');
  const [plot, setPlot] = useState(0);

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

//*<div className="App">
//<DateIntervalForm />
//</div> */


  return (
    <div className="App">
      <h1>Data Portal</h1>

      <div className="row">
        <div className="schematic-image">
          <div>
          <h2>Regulator Station Schematic</h2>
          <img src={schematicSrc} alt="Schematic" style={{ width: '50%' }} />
          </div>
        </div>
        <div className="schematic-input-form">
          <TrendTimeRange /> {/* Embed the TrendTimeRange component */}
        </div>
      </div>

      <div className="plot-row">
        <div className="schematic-plot">
          {/*<h2>Single Plot</h2>*/}
          {singlepointSrc && <SinglePointTrend src={singlepointSrc} />}
        </div>
        <div className="schematic-plot">
          {/*<h2>Multi Plot</h2>*/}
          {multipointSrc && <MultiPointTrend src={multipointSrc} />}
        </div>
      </div>
    </div>
  );
}

export default App;
