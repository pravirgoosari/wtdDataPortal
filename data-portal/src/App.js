import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="App">
      <h1>Data Portal</h1>
      <div>
        <h2>Multipoint Trend</h2>
        <iframe src={multipointSrc} title="Multipoint Trend" width="100%" height="500px" />
      </div>
      <div>
        <h2>Singlepoint Trend</h2>
        <iframe src={singlepointSrc} title="Singlepoint Trend" width="100%" height="500px" />
      </div>
      <div>
        <h2>Schematic</h2>
        <img src={schematicSrc} alt="Schematic" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default App;
