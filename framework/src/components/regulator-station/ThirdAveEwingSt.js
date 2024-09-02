import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SinglePointTrend from '../SinglePointTrend';
import MultiPointTrend from '../MultiPointTrend';
import TrendTimeRange from '../TrendTimeRange';
import '../../App.css';

const ThirdAveEwingSt = () => {
  const [multipointPlotData, setMultipointPlotData] = useState({ data: [], layout: {} });
  const [singlepointPlotData, setSinglepointPlotData] = useState({ data: [], layout: {} });
  const [schematicSvg, setSchematicSvg] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        if (response.data.status === 'Flask server is running') {
          axios.get('http://localhost:5000/schematic/3rdAve', { responseType: 'text' })
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
      axios.post(`http://localhost:5000/singlepoint_trend`, {
        station: "3rdAve",
        type: selectedValue,
        startDateTime: "2024-08-01T00:00:00Z", // Example: replace with actual date
        endDateTime: "2024-08-02T00:00:00Z",   // Example: replace with actual date
        interval: "1h"                        // Example: replace with actual interval
      })
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
                    <g onClick={() => handleClick('Level on Weir')}>
                      <rect x="50" y="50" width="100" height="50" fill="transparent" />
                      <text x="100" y="75" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Level on Weir</text>
                    </g>
                    <g onClick={() => handleClick('Overflow')}>
                      <rect x="200" y="100" width="100" height="50" fill="transparent" />
                      <text x="250" y="125" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Overflow</text>
                    </g>
                    <g onClick={() => handleClick('Trunk Level')}>
                      <rect x="350" y="150" width="100" height="50" fill="transparent" />
                      <text x="400" y="175" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Trunk Level</text>
                    </g>
                    <g onClick={() => handleClick('Aftbay Level')}>
                      <rect x="500" y="200" width="100" height="50" fill="transparent" />
                      <text x="550" y="225" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Aftbay Level</text>
                    </g>
                    <g onClick={() => handleClick('Weir Upstm')}>
                      <rect x="650" y="250" width="100" height="50" fill="transparent" />
                      <text x="700" y="275" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Weir Upstm</text>
                    </g>
                    <g onClick={() => handleClick('Overflow mgd')}>
                      <rect x="100" y="300" width="100" height="50" fill="transparent" />
                      <text x="150" y="325" textAnchor="middle" fill="black" fillOpacity="0.5" fontSize="20">Overflow mgd</text>
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

export default ThirdAveEwingSt;
