import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const SinglePointTrend = ({ src }) => {
  const [plotData, setPlotData] = useState({ data: [], layout: {} });

  useEffect(() => {
    if (src) {
      axios.get(src)
        .then(response => {
          console.log('Response data:', response.data);
          const data = response.data;
          if (data && Array.isArray(data.data) && typeof data.layout === 'object') {
            setPlotData(data);
          } else {
            console.error('Unexpected response format:', data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the singlepoint trend data!", error);
        });
    }
  }, [src]);

 // useEffect(() => {
 //   console.log('Plot data state:', plotData);
 // }, [plotData]);

  return (
    <div className='content'>
      <h2>Single Point Trend</h2>
      {plotData.data.length > 0 ? (
        <Plot data={plotData.data} layout={plotData.layout} />
      ) : (
        <p>Loading plot data...</p>
      )}
    </div>
  );
};

export default SinglePointTrend;
