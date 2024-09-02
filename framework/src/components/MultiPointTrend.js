import React from 'react';
import Plot from 'react-plotly.js';

const MultiPointTrend = ({ plotData }) => {
  return (
    <div className='content'>
      {/* Add a check to ensure plotData.data is defined */}
      {plotData?.data && plotData.data.length > 0 ? (
        <Plot data={plotData.data} layout={plotData.layout} />
      ) : (
        <p>Loading plot data...</p>
      )}
    </div>
  );
};

export default MultiPointTrend;
