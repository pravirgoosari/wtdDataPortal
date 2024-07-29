import React from 'react';
import Plot from 'react-plotly.js';

const SinglePointTrend = ({ plotData }) => {
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
