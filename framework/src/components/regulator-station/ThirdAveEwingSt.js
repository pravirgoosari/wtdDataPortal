import React from 'react';
import { Link } from 'react-router-dom';

function ThirdAveEwingSt() {
    return (
        <div className="container text-center">
          {/* Home Button */}
          <div className="text-start mb-3">
            <Link to="/" className="btn btn-primary">Home</Link>
          </div>
    
          <h1>3rd Ave and Ewing St.</h1>
          <p>Hello</p>
        </div>
      );
    }

export default ThirdAveEwingSt;
