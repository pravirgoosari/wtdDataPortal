import React from 'react';

const TrendPlot = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
};

export default TrendPlot;