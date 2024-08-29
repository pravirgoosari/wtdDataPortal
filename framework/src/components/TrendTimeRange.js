import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/TrendTimeRange.css';

const TrendTimeRange = ({ onSinglePlotDataChange, onMultiPlotDataChange, selectedValue }) => {
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [interval, setInterval] = useState('15s');

  useEffect(() => {
    if (selectedValue) {
      console.log(selectedValue)
      applyFilters();
    }
  }, [selectedValue]);


  const applyFilters = async () => {
    try {
      if (!startDateTime || !endDateTime) {
        alert('Please fill in start DateTime/end DateTime fields.');
        return;
      }
      // Convert startDateTime and endDateTime to desired format
      const startDateTimeFormatted = startDateTime.replace('T', ' ') + ':00';
      const endDateTimeFormatted = endDateTime.replace('T', ' ') + ':00';

      const singlePointResponse = await axios.post('http://localhost:5000/singlepoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
        type: selectedValue,
      });
      const multiPointResponse = await axios.post('http://localhost:5000/multipoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval
      });

      // Pass the response data to the parent component
      onSinglePlotDataChange(singlePointResponse.data);
      onMultiPlotDataChange(multiPointResponse.data);

    } catch (error) {
      console.error('Error interpreting datetime:', error);
      alert('Error interpreting datetime');
    }
  };

  const handleCSVDownload = async () => {
    try {
      if (!startDateTime || !endDateTime) {
        alert('Please fill in start DateTime/end DateTime fields.');
        return;
      }
      const startDateTimeFormatted = startDateTime.replace('T', ' ') + ':00';
      const endDateTimeFormatted = endDateTime.replace('T', ' ') + ':00';

      const response = await axios.post('http://localhost:5000/download_csv', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
        type: selectedValue
      }, { responseType: 'blob' });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${selectedValue}_data.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading CSV:', error);
      alert('Error downloading CSV');
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
    <>
      <h2>Time Trend Range</h2>
      <form>
        <div className="form-group">
          <label htmlFor="startDateTime">Start Time:</label>
          <input type="datetime-local" id="startDateTime" className="form-control" value={startDateTime} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="endDateTime">End Time:</label>
          <input type="datetime-local" id="endDateTime" className="form-control" value={endDateTime} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="interval">Interval:</label>
          <input type="number" id="interval" className="form-control" value={interval} onChange={handleInputChange} required/>
        </div>
        <button type="button" className="btn btn-primary mr-2" onClick={applyFilters}>Apply</button>
        <button type="button" className="btn btn-secondary mr-2" onClick={refreshPage}>Refresh</button>
        <button type="button" className="btn btn-success" onClick={handleCSVDownload}>Download CSV</button>
      </form>
    </>
  );
};

export default TrendTimeRange;
