import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SinglePointTrend from '../SinglePointTrend';
import MultiPointTrend from '../MultiPointTrend';
import TrendTimeRange from '../TrendTimeRange';
import '../../App.css';
import parse from 'html-react-parser';

const EighthAve = () => {
  const [multipointPlotData, setMultipointPlotData] = useState({ data: [], layout: {} });
  const [singlepointPlotData, setSinglepointPlotData] = useState({ data: [], layout: {} });
  const [schematicSvg, setSchematicSvg] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        if (response.data.status === 'Flask server is running') {
          axios.get('http://localhost:5000/schematic/8thAve', { responseType: 'text' })
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

  // Function to add click handlers to specific elements in the parsed SVG
  const addClickHandlersToSVG = (svgString) => {
    // Parse the SVG string into JSX elements
    return parse(svgString, {
      replace: (domNode) => {
        if (domNode.name === 'text') {
          // Add click handlers based on specific IDs
          if (domNode.attribs && domNode.attribs.id === 'Value4_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Trunk Flow')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value1_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Trunk Level')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value5_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Interceptor Flow')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value6_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Outfall Flow')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value3_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Tide Level')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value2_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Interceptor Level')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value7_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Regulator Gate Position')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'Value8_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Outfall Gate Position')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
        }
      },
    });
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
                    station="8thAve" // Pass the station name dynamically here
                  />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2>Schematic</h2>
                  {schematicSvg && addClickHandlersToSVG(schematicSvg)}
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

export default EighthAve;
