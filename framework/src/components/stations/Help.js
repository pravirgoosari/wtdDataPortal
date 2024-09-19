import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Help</h1>

      <div className="main-content">
        <p>
          Define start and end time intervals in the bar and click apply to load multipoint trend for the selected station.
        </p>
        <p>
          Double click on a trend to isolate it. Single click on a trend to get rid of it.
        </p>
        <p>
          Click on the schematic to load up single-point trend for whichever part of the schematic is clicked.
        </p>
        <p>
          Autoscale, zoom in, zoom out, and download plot as .png functions are available.
        </p>
        <p>
          To learn more about this project, visit{' '}
          <a href="https://github.com/lizaclark/wtd_tools.git/tree/wtdDataPortal" target="_blank" rel="noopener noreferrer">
            https://github.com/lizaclark/wtd_tools.git/tree/wtdDataPortal
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Help;