import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SinglePointTrend from '../SinglePointTrend';
import MultiPointTrend from '../MultiPointTrend';
import TrendTimeRange from '../TrendTimeRange';
import '../../App.css';

const EleventhAveNW = () => {
  const [multipointPlotData, setMultipointPlotData] = useState({ data: [], layout: {} });
  const [singlepointPlotData, setSinglepointPlotData] = useState({ data: [], layout: {} });
  const [schematicSvg, setSchematicSvg] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        if (response.data.status === 'Flask server is running') {
          axios.get('http://localhost:5000/schematic', { responseType: 'text' })
            .then(svgResponse => {
              setSchematicSvg(svgResponse.data);
            })
            .catch(error => {
              console.error("Error fetching SVG:", error);
            });
        }
      })
      .catch(error => {
        console.error("There was an error connecting to the Flask server!", error);
      });
  }, []);

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
    console.log('Clicked on:', sectionName);
    setSelectedValue(sectionName.trim());
  };

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
          <Link to="/" className="btn btn-primary mt-3">Home</Link>
        </div>
        <div className="col-md-9 main-content">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <TrendTimeRange
                    onSinglePlotDataChange={handleSinglepointPlotDataChange}
                    onMultiPlotDataChange={handleMultipointPlotDataChange}
                    selectedValue={selectedValue}
                  />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Schematic</h2>
                  <div dangerouslySetInnerHTML={{ __html: schematicSvg }} />
                  <svg width="100%" height="100%" viewBox="0 0 800 600" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <g onClick={() => handleClick('FEET')}>
                      <rect x="450" y="257" width="100" height="50" fill="transparent" />
                      <text x="500" y="282" textAnchor="middle" fill="black" fillOpacity="0" fontSize="40"></text>
                    </g>
                    <g onClick={() => handleClick('mgd')}>
                      <rect x="300" y="550" width="100" height="50" fill="transparent" />
                      <text x="350" y="575" textAnchor="middle" fill="black" fillOpacity="0" fontSize="40"></text>
                    </g>
                  </svg>
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
                  <MultiPointTrend plotData={multipointPlotData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EleventhAveNW;
