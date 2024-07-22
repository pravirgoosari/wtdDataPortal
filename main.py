import os
from flask import Flask, send_file, jsonify
from modules.dataPull import *
from modules.plotTrend import *
from modules.dateTime import *
from modules.image_display import *

app = Flask(__name__)

@app.route('/')
def index():
    return "Flask server is running!"

@app.route('/multipoint_trend')
def get_multipoint_trend():
    try:
        server_name = os.getenv('SERVERNAME')
        tagname1 = os.getenv('pumpStationpump1')
        tagname2 = os.getenv('Ave11thNwOF')
        tagname3 = os.getenv('Ave11thWeirLevel')
        pi_server = connect_to_server(server_name)

        start_time = handle_user_input(str("mon-8h"))
        end_time = handle_user_input("mon")
        interval = "15s"

        data_Ave11thNwOF = retrieve_interpolated_to_frame(
            tagname2, pi_server, start_time, end_time, interval)
        data_Ave11thWeirLevel = retrieve_interpolated_to_frame(
            tagname3, pi_server, start_time, end_time, interval)

        df_combined = merge_df_on_DateTime(data_Ave11thNwOF, data_Ave11thWeirLevel)
        plot_path = multipleTrend(df_combined)
        print(f"Serving multipoint trend from {plot_path}")
        return send_file(plot_path, mimetype='text/html')
    except Exception as e:
        print(f"Error serving multipoint trend: {e}")
        return jsonify({"error": str(e)})

@app.route('/singlepoint_trend')
def get_singlepoint_trend():
    try:
        server_name = os.getenv('SERVERNAME')
        tagname3 = os.getenv('Ave11thWeirLevel')
        pi_server = connect_to_server(server_name)

        start_time = handle_user_input(str("mon-8h"))
        end_time = handle_user_input("mon")
        interval = "15s"

        data_Ave11thWeirLevel = retrieve_interpolated_to_frame(
            tagname3, pi_server, start_time, end_time, interval)
        plot_path = singleTrend(data_Ave11thWeirLevel)
        print(f"Serving singlepoint trend from {plot_path}")
        return send_file(plot_path, mimetype='text/html')
    except Exception as e:
        print(f"Error serving singlepoint trend: {e}")
        return jsonify({"error": str(e)})

@app.route('/schematic')
def get_schematic():
    try:
        schematic_path = './modules/PI/webparts/CSOSites/11thAveNW'
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
    app.run(debug=True)
