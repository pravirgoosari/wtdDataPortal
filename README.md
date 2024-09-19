# WTD Data Portal Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Project Structure](#project-structure)
4. [Backend Components](#backend-components)
5. [Frontend Components](#frontend-components)
6. [API Endpoints](#api-endpoints)
7. [Data Flow](#data-flow)
8. [Setup Instructions and Prerequisites](#setup-instructions-and-prerequisites)
9. [Configuration and Environment Setup](#configuration-and-environment-setup)
10. [Error Handling and Security](#error-handling-and-security)
11. [Code Examples and Explanations](#code-examples-and-explanations)
12. [Expansion](#expansion)
13. [Deployment and Maintenance](#deployment-and-maintenance)

## 1. Project Overview
The WTD Data Portal is a comprehensive web application designed for data visualization of water treatment systems. It replaces the outdated Sharepoint-based system that used Pi Webparts. The new portal utilizes a Flask backend with a React frontend to provide real-time and historical data retrieval, visualization, and analysis capabilities for wastewater facility stations. This project will be found at https://github.com/lizaclark/wtd_tools.git/tree/wtdDataPortal.

Key Features:
- Retrieves data from PI Server using the PI SDK
- Generates single and multi-point trend plots for various data points
- Provides API endpoints for trend data and schematics
- Visualizes regulator station schematics with real-time data
- Offers a user-friendly interface for selecting time ranges and data types

## 2. System Architecture
The WTD Data Portal follows a modern client-server architecture:

- Backend: Flask server (Python)
  - Handles data retrieval from PI Server
  - Processes and prepares data for frontend consumption
  - Provides RESTful API endpoints
- Frontend: React application (JavaScript)
  - Renders user interface components
  - Manages state and user interactions
  - Communicates with backend via API calls
- Data Source: PI Server
  - Stores historical and real-time data from water treatment facilities

The backend communicates with the PI Server to fetch data, processes it, and serves it to the frontend through RESTful API endpoints. The frontend renders the data and provides user interaction capabilities, allowing for a responsive and dynamic user experience.

## 3. Project Structure
```
wtdDataPortal/
├── .env
├── main.py
├── requirements.txt
├── __pycache__/
│   └── plotTrend.cpython-312.pyc
├── framework/
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── components/
│           ├── MultiPointTrend.js
│           ├── SinglePointTrend.js
│           ├── TrendPlot.js
│           ├── TrendTimeRange.js
│           ├── config/
│           │   └──stationsConfig.js
│           └── css/
│               ├── TrendTimeRange.css
│           └── stations/
│               ├── Brightwater.js
│               ├── Carnation.js
│               ├── EastSidePumpStations.js
│               ├── Help.js
│               ├── OffsiteFacilities.js
│               ├── RegulatorStations.js
│               ├── SouthTreatmentPlants.js
│               ├── Station.js
│               ├── TreatmentPlants.js
│               ├── WestSidePumpStations.js
├── modules/
│   ├── __init__.py
│   ├── dataPull.py
│   ├── dateTime.py
│   ├── image_display.py
│   ├── plotTrend.py
│   ├── stationsConfig.py
│   ├── PI/
│   │   └── webparts/
│   │       └── CSOSites/
│   │           ├── 11thAveNW.svg
│   │           └── XXX.svg
│   └── __pycache__/
│       ├── __init__.cpython-311.pyc
│       ├── __init__.cpython-312.pyc
│       ├── dataPull.cpython-311.pyc
│       ├── dataPull.cpython-312.pyc
│       ├── dateTime.cpython-311.pyc
│       ├── dateTime.cpython-312.pyc
│       ├── image_display.cpython-311.pyc
│       ├── image_display.cpython-312.pyc
│       ├── plotTrend.cpython-311.pyc
│       └── plotTrend.cpython-312.pyc
└── README.md
```

## 4. Backend Components
The backend is built using Flask and consists of several key modules:

- `main.py`: The main Flask application file
  - Sets up the Flask app and defines API routes
  - Handles CORS and error responses
- `dataPull.py`: Handles data retrieval from PI Server
  - Connects to PI Server
  - Retrieves and processes data
- `plotTrend.py`: Manages data visualization
  - Creates Plotly figures for single and multi-point trends
- `dateTime.py`: Utilities for date and time operations
  - Handles time range calculations and formatting
- `image_display.py`: Handles schematic image processing
  - Converts and updates SVG schematics with real-time data
- `stationsConfig.py`: Handles Pi tags for all stations as variable names for singlepoint and multipoint trend passing

### Key Backend Functions

#### Data Retrieval
```python
def connect_to_server(server_name):
    pi_servers = PIServers()
    pi_server = pi_servers[server_name]
    pi_server.Connect(True, None)
    return pi_server
```
This function establishes a connection to the PI Server, allowing for subsequent data retrieval operations.

#### Data Processing
```python
def retrieve_interpolated_to_frame(tagname, pi_server, start, end, interval, block_length=60):
    point = PIPoint.FindPIPoint(pi_server, tagname)
    af_time_span = AFTimeSpan.Parse(interval)
    start_dt = pd.to_datetime(start)
    end_dt = pd.to_datetime(end)
    df_list = []
    start1 = start_dt
    end1 = start_dt + dt.timedelta(days=block_length)
    if end1 > end_dt:
        end1 = end_dt
    while end1 < end_dt + dt.timedelta(days=block_length):
        print('Retrieve {0} to {1}'.format(start1, end1))
        af_time_range = AFTimeRange(start1.strftime('%Y-%m-%d %H:%M:%S'),
                                    end1.strftime('%Y-%m-%d %H:%M:%S'))
        interpolated = point.InterpolatedValues(af_time_range, af_time_span, '',
                                                False)
        data = convert_values_to_frame(interpolated, tagname)
        if data is None:
            print('No interpolated values for {0} between {1} and {2}'.format(
                tagname, start1, end1))
        else:
            df_list.append(data)
        start1 = end1 + pd.Timedelta(interval)
        if (end1 + dt.timedelta(days=60) > end_dt) & (start1 < end_dt):
            end1 = end_dt
        else:
            end1 = end1 + dt.timedelta(days=block_length)
    data = pd.concat(df_list, axis=0)
    if data is None:
        print('No interpolated values for {0} between {1} and {2}'.format(
            tagname, start, end))
    else:
        return data
```
This function retrieves interpolated data from the PI Server for a specific tag and time range, converting it to a pandas DataFrame for easy manipulation and analysis.

## 5. Frontend Components
The frontend is built using React and consists of several components:

- `App.js`: The main React component
  - Handles routing and overall application structure
- `stationsConfig.js`: Stores data specific to each station
- `Station.js`: Component for dynamically handling each station page by passing in data from stationsConfig.js
- `TrendTimeRange.js`: Component for handling time range selection and data fetching

### Key Frontend Functions

#### Data Fetching
```javascript
const applyFilters = async () => {
    try {
      if (!startDateTime || !endDateTime) {
        alert('Please fill in start DateTime/end DateTime fields.');
        return;
      }
      const startDateTimeFormatted = startDateTime.replace('T', ' ') + ':00';
      const endDateTimeFormatted = endDateTime.replace('T', ' ') + ':00';

      console.log("Applying filters with the following parameters:");
      console.log("Start DateTime:", startDateTimeFormatted);
      console.log("End DateTime:", endDateTimeFormatted);
      console.log("Interval:", interval);
      console.log("Station:", stationName);

      const singlePointResponse = await axios.post('http://localhost:5000/singlepoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
        type: selectedValue,
        station: stationName,
      });

      console.log("Single Point Trend Response:", singlePointResponse.data);

      const multiPointResponse = await axios.post('http://localhost:5000/multipoint_trend', {
        startDateTime: startDateTimeFormatted,
        endDateTime: endDateTimeFormatted,
        interval: interval,
        station: stationName,
      });

      console.log("Multi Point Trend Response:", multiPointResponse.data);

      onSinglePlotDataChange(singlePointResponse.data);
      onMultiPlotDataChange(multiPointResponse.data);

    } catch (error) {
      console.error('Error interpreting datetime:', error);
      alert('Error interpreting datetime');
    }
  };
```
This function in `TrendTimeRange.js` fetches trend data from the backend based on user-selected parameters, handling both single-point and multi-point trend requests.

## 6. API Endpoints
The backend provides several RESTful API endpoints:

- `/multipoint_trend` (POST): Retrieves multi-point trend data
  - Accepts start time, end time, interval, and station name
  - Returns JSON data for plotting multiple trends
- `/singlepoint_trend` (POST): Retrieves single-point trend data
  - Accepts start time, end time, interval, data type, and station name
  - Returns JSON data for plotting a single trend
- `/schematic/<station>` (GET): Retrieves schematic data for a specific station
  - Returns an updated SVG image with real-time data

Example API call:
```javascript
const response = await axios.post('http://localhost:5000/singlepoint_trend', {
    startDateTime: startDateTimeFormatted,
    endDateTime: endDateTimeFormatted,
    interval: interval,
    type: selectedValue,
    station: stationName,
});
```

## 7. Data Flow
1. User selects parameters (time range, interval, station) in the frontend
2. Frontend sends a request to the backend API
3. Backend connects to PI Server and retrieves raw data
4. Data is processed and converted to appropriate format (e.g., interpolation, aggregation)
5. Backend sends processed data back to frontend
6. Frontend renders the data as plots or updates schematics
7. User can interact with the visualizations

## 8. Setup Instructions and Prerequisites
To set up the WTD Data Portal, ensure you have the following prerequisites:

- Node.js and npm (for the frontend)
- Python 3.7+ and pip (for the backend)
- Git for version control

Installation steps:
1. Clone the repository: `git clone https://github.com/lizaclark/wtd_tools.git/tree/wtdDataPortal.`
2. Set up the backend:
   ```
   cd wtd-data-portal/backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   ```
4. Configure environment variables (see Configuration section)
5. Start the backend server: `python main.py`
6. Start the frontend development server: `npm start`

## 9. Configuration and Environment Setup
The application uses environment variables and a configuration file:

- `.env`: Contains sensitive information like server names and tag names
- `stationsConfig.py`: Handles Pi tags for all stations as variable names for singlepoint and multipoint trend passing
- `stationsConfig.js`: Stores data specific to each station

Example `.env` file:
```
SERVERNAME = pi_server_name
TAG_STATION1 = tag_name_for_station1
TAG_STATION2 = tag_name_for_station2
```

Example `stationsConfig.py`:
```python
  "Station": {
      "schematic_path": "./modules/PI/webparts/CSOSites Station",
        "multipoint_tags": [
          "TAG_STATION1",
          "TAG_STATION2"
        ],
        "singlepoint_map": {
          "Value1": "TAG_STATION1",
          "Value2": " TAG_STATION2",
        },
  },
```

Example `stationsConfig.js`:
```javascript
  {
    path: "/station-name",
    stationName: "Station",
    schematicEndpoint: "Station",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1',
      'Value2_pbTextEl': 'Value2',
    }
  },
```

## 10. Error Handling and Security
- The application uses try-catch blocks for error handling in both frontend and backend
- CORS is enabled for all routes in the Flask application to allow frontend access
- Sensitive information is stored in environment variables, not in the codebase
- Input validation is performed on both client and server side
- API endpoints use appropriate HTTP methods and status codes

## 11. Code Examples and Explanations

### Backend: Multipoint Trend API
```python
@app.route('/multipoint_trend', methods=['POST'])
def get_multipoint_trend():
    try:
        data = request.json
        station = data.get('station')

        if station not in config:
            return jsonify({"error": "Invalid station provided"}), 400

        station_config = config[station]

        # Retrieve and process data from PI Server
        # ... (rest of the function)

        return plot_data
    except Exception as e:
        print(f"Error serving multipoint trend: {e}")
        return jsonify({"error": str(e)}), 500
```
This function handles the multipoint trend API endpoint. It retrieves station-specific configuration, fetches data from the PI Server, processes it, and returns the plot data in a format suitable for frontend visualization.

### Frontend: Trend Time Range Component
```javascript
const TrendTimeRange = ({ onSinglePlotDataChange, onMultiPlotDataChange, selectedValue, stationName }) => {
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [interval, setInterval] = useState('15s');

    const applyFilters = async () => {
        // Fetch single and multi-point trend data
        // Update parent component state
    };

    const handleCSVDownload = async () => {
        // Request CSV data from backend and trigger download
    };

    return (
        <>
            <h2>Time Trend Range</h2>
            <form>
                {/* Time range and interval input fields */}
                <button type="button" onClick={applyFilters}>Apply</button>
                <button type="button" onClick={handleCSVDownload}>Download CSV</button>
            </form>
        </>
    );
};
```
This React component handles user input for time range selection and initiates data fetching and CSV download operations. It demonstrates how user interactions are managed and how data is requested from the backend.

## 12. Expansion
To expand to more stations, follow these steps:                                  * Consider automation for these steps
1.	Gather the Pi Tags for the chosen station *
2.	Write them in ‘.env’ with corresponding variables *
3.	Fill out station information in ‘stationsConfig.py’ with svg path, ‘.env’ variables for multipoint mapping, and svg ID values for singlepoint mapping *
4.	Fill out station information in ‘stationsConfig.js’ and map singlepoint values from ‘stationsConfig.py’ to corresponding value IDs in svg (see svg code for corresponding Pi tags, typically at top) *
5.	Convert corresponding jpg image to svg (recommend using https://webutility.io/image-to-svg-converter)
6.	Navigate to an online svg compiler (recommend using https://www.svgviewer.dev)
7.	Copy paste original svg file into compiler
8.	At top, change fill to “none"
9.	Search for “jpg” and delete entire image component
10.	Search for first mention of “xlink:xid="">” and right after, copy paste svg code from step 5 there
11.	Delete the svg component of the code before and after the link, leaving only the image component and dimensions
12.	Change the image dimensions to match the rest of the frame (can be found at top of svg file)
13.	Upload new svg code to “./modules/PI/webparts/CSOSites/…”
14.	Edit link routes under the page(s) of which the station is located if needed
15.	Save and run code

## 13. Deployment and Maintenance
- The application can be deployed on a web server with Python and Node.js support
- Use a process manager like PM2 for the Node.js frontend
- Use Gunicorn or uWSGI as a WSGI server for the Flask backend
- Set up a reverse proxy (e.g., Nginx) to handle incoming requests
- Implement logging for both frontend and backend for easier debugging and monitoring
- Regularly update dependencies and check for security vulnerabilities
- Implement automated testing and continuous integration/deployment (CI/CD) pipelines

---

This documentation provides a comprehensive overview of the WTD Data Portal project, its architecture, key components, and functionalities. For more detailed information on specific components or functions, please refer to the inline comments in the respective source files or consult the development team.
