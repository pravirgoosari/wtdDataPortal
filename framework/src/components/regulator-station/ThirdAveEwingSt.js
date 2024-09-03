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
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [interval, setInterval] = useState('');

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
    if (selectedValue && startDateTime && endDateTime) {
      applyFilters();  // Call applyFilters when a value is selected and dates are provided
    }
  }, [selectedValue, startDateTime, endDateTime, interval]);

  const applyFilters = async () => {
    try {
      // Ensure that startDateTime, endDateTime, and interval are provided from TrendTimeRange component
      if (!startDateTime || !endDateTime) {
        alert('Please fill in start DateTime/end DateTime fields.');
        return;
      }

      const singlePointResponse = await axios.post('http://localhost:5000/singlepoint_trend', {
        startDateTime,
        endDateTime,
        interval,
        type: selectedValue,
        station: '3rdAve' // Correctly specify the station
      });

      const multiPointResponse = await axios.post('http://localhost:5000/multipoint_trend', {
        startDateTime,
        endDateTime,
        interval,
        station: '3rdAve' // Correctly specify the station
      });

      setSinglepointPlotData(singlePointResponse.data);
      setMultipointPlotData(multiPointResponse.data);

    } catch (error) {
      console.error('Error fetching trend data:', error);
      alert('Error fetching trend data');
    }
  };

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
                    setStartDateTime={setStartDateTime}
                    setEndDateTime={setEndDateTime}
                    setInterval={setInterval}
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
                      <text x="500" y="220" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
                    </g>
                    <g onClick={() => handleClick('Overflow')}>
                      <rect x="200" y="100" width="100" height="50" fill="transparent" />
                      <text x="230" y="342" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
                    </g>
                    <g onClick={() => handleClick('Trunk Level')}>
                      <rect x="350" y="150" width="100" height="50" fill="transparent" />
                      <text x="230" y="362" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
                    </g>
                    <g onClick={() => handleClick('Aftbay Level')}>
                      <rect x="500" y="200" width="100" height="50" fill="transparent" />
                      <text x="335" y="123" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
                    </g>
                    <g onClick={() => handleClick('Weir Upstm')}>
                      <rect x="650" y="250" width="100" height="50" fill="transparent" />
                      <text x="335" y="270" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
                    </g>
                    <g onClick={() => handleClick('Overflow mgd')}>
                      <rect x="100" y="300" width="100" height="50" fill="transparent" />
                      <text x="560" y="290" textAnchor="middle" fill="black" fillOpacity="0" fontSize="20"></text>
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
