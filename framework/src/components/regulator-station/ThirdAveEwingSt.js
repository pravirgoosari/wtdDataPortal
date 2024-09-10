import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SinglePointTrend from '../SinglePointTrend';
import MultiPointTrend from '../MultiPointTrend';
import TrendTimeRange from '../TrendTimeRange';
import '../../App.css';
import parse from 'html-react-parser';

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
          if (domNode.attribs && domNode.attribs.id === 'WeirLevel_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Level on Weir')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'OverflowMgd_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Overflow mgd')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'AftbayLevel_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Aftbay Level')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'TrunkLevel_pbTextEl') {
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
          if (domNode.attribs && domNode.attribs.id === 'WeirUpstm_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Weir Upstm')}
                style={{ cursor: 'pointer', fill: '#0000FF' }}
              >
                {domNode.children[0].data}
              </text>
            );
          }
          if (domNode.attribs && domNode.attribs.id === 'OverflowLevel_pbTextEl') {
            return (
              <text
                {...domNode.attribs}
                onClick={() => handleClick('Overflow')}
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
                    station="3rdAve"
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

export default ThirdAveEwingSt;
