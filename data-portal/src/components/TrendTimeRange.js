// components/TrendTimeRange.js
import React from 'react';
import './css/TrendTimeRange.css'; 

const TrendTimeRange = () => {
    const applyFilters = () => {
        const startDateTime = document.getElementById('startDateTime').value;
        const endDateTime = document.getElementById('endDateTime').value;
        const interval = document.getElementById('interval').value;
    
        if (!startDateTime || !endDateTime || !interval) {
          alert('Please fill in all fields.');
          return;
        }
    
        console.log('Start DateTime:', startDateTime);
        console.log('End DateTime:', endDateTime);
        console.log('Interval:', interval);
      };
    
      const refreshPage = () => {
        document.getElementById('inputForm').reset();
      };
    
      return (
        <div className="trend-time-range">
          <h2>Trend Time Range</h2>
          <form id="inputForm">
            <div className="form-group">
              <label htmlFor="startDateTime">Start Date & Time: </label>
              <input type="datetime-local" id="startDateTime" name="startDateTime" required />
            </div>
            <div className="form-group">
              <label htmlFor="endDateTime">End Date & Time : </label>
              <input type="datetime-local" id="endDateTime" name="endDateTime" required />
            </div>
            <div className="form-group">
              <label htmlFor="interval">Interval : </label>
              <input type="number" id="interval" name="interval" min="1" required />
            </div>
            <div className="form-group">
              <button type="button" onClick={applyFilters}>Apply</button>
              <button type="button" onClick={refreshPage}>Refresh</button>
            </div>
          </form>
        </div>
      );
    
};

export default TrendTimeRange;
