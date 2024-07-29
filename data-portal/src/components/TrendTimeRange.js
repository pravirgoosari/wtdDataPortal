import React, { useState } from 'react';
import axios from 'axios';
import './css/TrendTimeRange.css'; 

const TrendTimeRange = ({ onSinglePlotDataChange, onMultiPlotDataChange }) => {
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [interval, setInterval] = useState('15s');

  const applyFilters = async () => {
    try {
      if (!startDateTime || !endDateTime ) {
        alert('Please fill in start DateTime/end DateTime fields.');
        return;
      }
      // Convert startDateTime and endDateTime to desired format
      const startDateTimeFormatted = startDateTime.replace('T', ' ') + ':00';
      const endDateTimeFormatted = endDateTime.replace('T', ' ')+ ':00';
      
      const singlePointResponse = await axios.post('http://localhost:5000/singlepoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
      });
      const multiPointResponse = await axios.post('http://localhost:5000/multipoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
      });

      // Pass the response data to the parent component
      onSinglePlotDataChange(singlePointResponse.data);
      onMultiPlotDataChange(multiPointResponse.data);
      
    } catch (error) {
      console.error('Error interpreting datetime:', error);
      alert('Error interpreting datetime');
    }
  };

  const refreshPage = () => {
    setStartDateTime('');
    setEndDateTime('');
    setInterval('15s');
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'startDateTime') {
      setStartDateTime(value);
    } else if (id === 'endDateTime') {
      setEndDateTime(value);
    } else if (id === 'interval') {
      setInterval(value);
    }
  };

  return (
    <div className="trend-time-range">
      <h2>Trend Time Range</h2>
      <form id="inputForm">
        <div className="form-group">
          <label htmlFor="startDateTime">Start Date & Time: </label>
          <br />
          <input
            type="datetime-local"
            id="startDateTime"
            name="startDateTime"
            value={startDateTime}
            onChange={handleInputChange}
            className="datetime-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDateTime">End Date & Time : </label>
          <br />
          <input
            type="datetime-local"
            id="endDateTime"
            name="endDateTime"
            value={endDateTime}
            onChange={handleInputChange}
            className="datetime-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interval">Interval : </label>
          <input
            type="text"
            id="interval"
            name="interval"
            value={interval}
            onChange={handleInputChange}
            placeholder="Enter interval like 1s, 5s, 5m"
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={applyFilters}>
            Apply
          </button>
          <button type="button" onClick={refreshPage}>
            Refresh
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrendTimeRange;
