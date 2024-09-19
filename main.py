import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from modules.dataPull import *
from modules.plotTrend import *
from modules.dateTime import *
from modules.image_display import *
from modules.stationsConfig import get_station_config

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "Flask server is running!"


def connect_to_pi_server():
    server_name = os.getenv("SERVERNAME")
    return connect_to_server(server_name)


@app.route("/multipoint_trend", methods=["POST"])
def get_multipoint_trend():
    try:
        data = request.json
        station = data.get("station")
        startDateTime_inp = data.get("startDateTime")
        endDateTime_inp = data.get("endDateTime")
        interval_inp = data.get("interval")

        config = get_station_config(station)
        if not config:
            return jsonify({"error": "Invalid station provided"}), 400

        pi_server = connect_to_pi_server()
        start_time = handle_user_input(startDateTime_inp)
        end_time = handle_user_input(endDateTime_inp)
        interval = interval_inp

        tags = config["multipoint_tags"]
        data_frames = []

        for tag in tags:
            tagname = os.getenv(tag)
            if not tagname:
                print(f"Tag name missing for: {tag}")
                continue
            data = retrieve_interpolated_to_frame(
                tagname, pi_server, start_time, end_time, interval
            )
            if data is not None:
                data_frames.append(data)

        if not data_frames:
            raise ValueError("No data available to plot.")

        df_combined = data_frames[0]
        for df in data_frames[1:]:
            df_combined = merge_df_on_DateTime(df_combined, df)

        plot_data = multipleTrend(df_combined)
        print(f"Serving multipoint trend for {station}")
        return plot_data

    except Exception as e:
        print(f"Error serving multipoint trend: {e}")
        return jsonify({"error": str(e)})


@app.route("/singlepoint_trend", methods=["POST"])
def get_singlepoint_trend():
    try:
        data = request.json
        station = data.get("station")
        startDateTime_inp = data.get("startDateTime")
        endDateTime_inp = data.get("endDateTime")
        interval_inp = data.get("interval")
        selected_value = data.get("type")

        config = get_station_config(station)
        if not config:
            return jsonify({"error": "Invalid station provided"}), 400

        pi_server = connect_to_pi_server()
        start_time = handle_user_input(startDateTime_inp)
        end_time = handle_user_input(endDateTime_inp)
        interval = interval_inp

        tag_map = config["singlepoint_map"]
        tagname = os.getenv(tag_map.get(selected_value, ""))

        if not tagname:
            raise ValueError(f"Tag name not found for type: {selected_value}")

        data_singleplot = retrieve_interpolated_to_frame(
            tagname, pi_server, start_time, end_time, interval
        )
        plot_data = singleTrend(data_singleplot)

        print(f"Serving singlepoint trend data for {station}")
        return plot_data

    except Exception as e:
        print(f"Error serving singlepoint trend: {e}")
        return jsonify({"error": str(e)})

    finally:
        if pi_server:
            pi_server.Disconnect()


@app.route("/schematic/<station>")
def get_schematic(station):
    try:
        config = get_station_config(station)
        if not config:
            return jsonify({"error": "Invalid station provided"}), 400

        schematic_path = config["schematic_path"]
        pi_server = connect_to_pi_server()

        tags_and_ids = [
            (os.getenv(tag), svg_id, unit)
            for tag, svg_id, unit in config.get("tags_and_ids", [])
        ]

        for tagname, svg_id, unit in tags_and_ids:
            if not tagname:
                print(f"Tag name missing for: {tagname}")
                continue

            current_value = fetch_data_from_pi(pi_server, tagname)
            if current_value is None:
                print(f"Could not fetch data for {tagname}")
                continue

            new_value = f"{round(current_value, 2)} {unit}"
            update_svg(schematic_path, svg_id, new_value)

        print(f"Serving schematic from {schematic_path}.svg")
        return send_file(f"{schematic_path}.svg", mimetype="image/svg+xml")
    except Exception as e:
        print(f"Error serving schematic: {e}")
        return jsonify({"error": str(e)})


@app.route("/test")
def test():
    return jsonify({"status": "Flask server is running"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)