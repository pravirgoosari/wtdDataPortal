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
        # print('Received POST data:', data)
        # Data contains startDateTime, endDateTime, and interval
        startDateTime_inp = data.get('startDateTime')
        endDateTime_inp = data.get('endDateTime')
        interval_inp = data.get('interval')

        server_name = os.getenv('SERVERNAME')
        # tagname1 = os.getenv('pumpStationpump1')
        tagname2 = os.getenv('Ave11thNwOF')
        tagname3 = os.getenv('Ave11thWeirLevel')
        pi_server = connect_to_server(server_name)

        start_time = handle_user_input(startDateTime_inp)  # str("mon-8h"))  #
        end_time = handle_user_input(endDateTime_inp)  # "mon")  #
        interval = interval_inp  # '15s'  # interval_inp

        data_Ave11thNwOF = retrieve_interpolated_to_frame(
            tagname2, pi_server, start_time, end_time, interval)
        data_Ave11thWeirLevel = retrieve_interpolated_to_frame(
            tagname3, pi_server, start_time, end_time, interval)

        df_combined = merge_df_on_DateTime(
            data_Ave11thNwOF, data_Ave11thWeirLevel)
        plot_data = multipleTrend(df_combined)
        print(f"Serving multipoint trend")
        return plot_data
        # send_file(plot_path, mimetype='text/html')
    except Exception as e:
        print(f"Error serving multipoint trend: {e}")
        return jsonify({"error": str(e)})


@app.route('/singlepoint_trend', methods=['POST'])
def get_singlepoint_trend():
    try:
        data = request.json
        print('Received POST data:', data)
        # Data contains startDateTime, endDateTime, and interval
        startDateTime_inp = data.get('startDateTime')
        endDateTime_inp = data.get('endDateTime')
        interval_inp = data.get('interval')
        selected_value = data.get('type')
        tagname = ''
        if selected_value == 'FEET':
            tagname = os.getenv('Ave11thNwOF')
        elif selected_value == 'mgd':
            tagname = os.getenv('Ave11thWeirLevel')
        print("Tagname"+tagname)
        print("selectedvalue"+selected_value)
        server_name = os.getenv('SERVERNAME')
        # tagname3 = os.getenv('Ave11thWeirLevel')
        pi_server = connect_to_server(server_name)

        start_time = handle_user_input(startDateTime_inp)  # str("mon-8h"))  #
        end_time = handle_user_input(endDateTime_inp)  # "mon")  #
        interval = interval_inp  # '15s'  # interval_inp

        print(start_time, ":", end_time, ":", interval)
        data_singleplot = retrieve_interpolated_to_frame(
            tagname, pi_server, start_time, end_time, interval)
        plot_data = singleTrend(data_singleplot)

        print(f"Serving singlepoint trend data ")
        return plot_data  # jsonify(plot_data)
        # send_file(plot_path, mimetype='text/html')
    except Exception as e:
        print(f"Error serving singlepoint trend: {e}")
        return jsonify({"error": str(e)})
    finally:
        if (pi_server):
            pi_server.Disconnect()


@app.route('/schematic')
def get_schematic():
    try:
        schematic_path = './modules/PI/webparts/CSOSites/11thAveNW'

        # Fetch data for tags
        server_name = os.getenv('SERVERNAME')
        pi_server = connect_to_server(server_name)

        # Define tags and their corresponding IDs in the SVG
        tags_and_ids = [
            ('Ave11thWeirLevel', 'Value1_pbTextEl', 'FEET'),
            ('Ave11thNwOF', 'Value2_pbTextEl', 'mgd')
        ]

        for tagname_env, svg_id, unit in tags_and_ids:
            tagname = os.getenv(tagname_env)
            current_value = fetch_data_from_pi(pi_server, tagname)
            new_value = f"{round(current_value, 2)} {unit}"
            update_svg(schematic_path, svg_id, new_value)
        print("am here")
        image = convert_svg_to_png(schematic_path)
        print(f"Serving schematic from {image}")
        return send_file(image, mimetype='image/png')
    except Exception as e:
        print(f"Error serving schematic: {e}")
        return jsonify({"error": str(e)})


@app.route('/test')
def test():
    return jsonify({"status": "Flask server is running"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
