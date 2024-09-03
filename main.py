import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from modules.dataPull import *
from modules.plotTrend import *
from modules.dateTime import *
from modules.image_display import *

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def index():
    return "Flask server is running!"

@app.route('/multipoint_trend', methods=['POST'])
def get_multipoint_trend():
    try:
        data = request.json
        station = data.get('station')
        startDateTime_inp = data.get('startDateTime')
        endDateTime_inp = data.get('endDateTime')
        interval_inp = data.get('interval')

        server_name = os.getenv('SERVERNAME')
        pi_server = connect_to_server(server_name)

        start_time = handle_user_input(startDateTime_inp)
        end_time = handle_user_input(endDateTime_inp)
        interval = interval_inp

        df_combined = None

        if station == "11thAve":
            tagname2 = os.getenv('Ave11thNwOF')
            tagname3 = os.getenv('Ave11thWeirLevel')
            data_1 = retrieve_interpolated_to_frame(tagname2, pi_server, start_time, end_time, interval)
            data_2 = retrieve_interpolated_to_frame(tagname3, pi_server, start_time, end_time, interval)
            df_combined = merge_df_on_DateTime(data_1, data_2)

        elif station == "3rdAve":
            tags = ['ThirdAveWeirLevel', 'ThirdAveOverflow', 'ThirdAveTrunkLevel',
                    'ThirdAveAftbay', 'ThirdAveWeirUpstm', 'ThirdAveSiphon']
            data_frames = []
            for tag in tags:
                tagname = os.getenv(tag)
                if not tagname:
                    print(f"Tag name missing for: {tag}")
                    continue
                data = retrieve_interpolated_to_frame(tagname, pi_server, start_time, end_time, interval)
                if data is not None:
                    data_frames.append(data)

            if data_frames:
                df_combined = data_frames[0]
                for df in data_frames[1:]:
                    df_combined = merge_df_on_DateTime(df_combined, df)

        if df_combined is None or df_combined.empty:
            raise ValueError("No data available to plot.")

        plot_data = multipleTrend(df_combined)
        print(f"Serving multipoint trend for {station}")
        return plot_data
    except Exception as e:
        print(f"Error serving multipoint trend: {e}")
        return jsonify({"error": str(e)})

@app.route('/singlepoint_trend', methods=['POST'])
def get_singlepoint_trend():
    try:
        data = request.json
        station = data.get('station')
        startDateTime_inp = data.get('startDateTime')
        endDateTime_inp = data.get('endDateTime')
        interval_inp = data.get('interval')
        selected_value = data.get('type')

        server_name = os.getenv('SERVERNAME')
        pi_server = connect_to_server(server_name)

        tagname = ''
        if station == "11thAve":
            if selected_value == 'FEET':
                tagname = os.getenv('Ave11thWeirLevel')
            elif selected_value == 'mgd':
                tagname = os.getenv('Ave11thNwOF')

        elif station == "3rdAve":
            tag_map = {
                'Level on Weir': 'ThirdAveWeirLevel',
                'Overflow': 'ThirdAveOverflow',
                'Trunk Level': 'ThirdAveTrunkLevel',
                'Aftbay Level': 'ThirdAveAftbay',
                'Weir Upstm': 'ThirdAveWeirUpstm',
                'Overflow mgd': 'ThirdAveSiphon'
            }
            tagname = os.getenv(tag_map.get(selected_value, ''))

        if not tagname:
            raise ValueError(f"Tag name not found for type: {selected_value}")

        start_time = handle_user_input(startDateTime_inp)
        end_time = handle_user_input(endDateTime_inp)
        interval = interval_inp

        data_singleplot = retrieve_interpolated_to_frame(tagname, pi_server, start_time, end_time, interval)
        plot_data = singleTrend(data_singleplot)

        print(f"Serving singlepoint trend data for {station}")
        return plot_data
    except Exception as e:
        print(f"Error serving singlepoint trend: {e}")
        return jsonify({"error": str(e)})
    finally:
        if pi_server:
            pi_server.Disconnect()

@app.route('/schematic/<station>')
def get_schematic(station):
    try:
        # Define the paths based on the station
        schematic_paths = {
            '11thAve': './modules/PI/webparts/CSOSites/11thAveNW',
            '3rdAve': './modules/PI/webparts/CSOSites/3RDAVE'
        }

        schematic_path = schematic_paths.get(station)

        if not schematic_path:
            return jsonify({"error": "Invalid station provided"}), 400

        # Fetch data for tags
        server_name = os.getenv('SERVERNAME')
        pi_server = connect_to_server(server_name)

        # Define tags and their corresponding IDs in the SVG for each station
        if station == '11thAve':
            tags_and_ids = [
                ('Ave11thWeirLevel', 'Value1_pbTextEl', 'FEET'),
                ('Ave11thNwOF', 'Value2_pbTextEl', 'mgd')
            ]
        elif station == '3rdAve':
            # Correct IDs and units
            tags_and_ids = [
                ('ThirdAveWeirLevel', 'WeirLevel_pbTextEl', 'FEET'),   # Level on Weir
                ('ThirdAveOverflow', 'OverflowMgd_pbTextEl', 'mgd'),   # Only MGD tag
                ('ThirdAveTrunkLevel', 'TrunkLevel_pbTextEl', 'FEET'), # Trunk Level
                ('ThirdAveAftbay', 'AftbayLevel_pbTextEl', 'FEET'), # Aftbay Level
                ('ThirdAveWeirUpstm', 'WeirUpstm_pbTextEl', 'FEET'),   # Weir Upstm
                ('ThirdAveSiphon', 'OverflowLevel_pbTextEl', 'FEET') # Should be in FEET
            ]

        for tagname_env, svg_id, unit in tags_and_ids:
            tagname = os.getenv(tagname_env)
            if not tagname:
                print(f"Tag name missing for: {tagname_env}")
                continue

            current_value = fetch_data_from_pi(pi_server, tagname)
            if current_value is None:
                print(f"Could not fetch data for {tagname_env}")
                continue

            new_value = f"{round(current_value, 2)} {unit}"
            update_svg(schematic_path, svg_id, new_value)

        print(f"Serving schematic from {schematic_path}.svg")
        return send_file(f"{schematic_path}.svg", mimetype='image/svg+xml')  # Serve the SVG directly
    except Exception as e:
        print(f"Error serving schematic: {e}")
        return jsonify({"error": str(e)})

@app.route('/test')
def test():
    return jsonify({"status": "Flask server is running"})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
