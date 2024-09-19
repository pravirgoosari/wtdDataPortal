import React from 'react';
import Plot from 'react-plotly.js';

const SinglePointTrend = ({ plotData }) => {''
  const data = plotData && plotData.data ? plotData.data : [];
  const layout = plotData && plotData.layout ? plotData.layout : {};
  
  return (
    <div className='content'>
      {data.length > 0 ? (
        <Plot data={data} layout={layout} />
      ) : (
        <p>Loading plot data...</p>
      )}
    </div>
  );
};

export default SinglePointTrend;