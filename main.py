import os
from modules.dataPull import *
from modules.plotTrend import *
from modules.dateTime import *
from modules.image_display import *

if __name__ == "__main__":
    server_name = os.getenv('SERVERNAME')
    tagname1 = os.getenv('pumpStationpump1')  # PI tag name (string)
    tagname2 = os.getenv('Ave11thNwOF')
    tagname3 = os.getenv('Ave11thWeirLevel')
    pi_server = connect_to_server(server_name)

    # Input from user
    start_time = handle_user_input(
        str("mon-8h"))  # "XXXX-XX-XX XX:XX:XX"
    end_time = handle_user_input("mon")  # "XXXX-XX-XX XX:XX:XX" # t-8h
    # sample interval(string: examples: 1w=1 week, 1d=1 day, 1h=1 hour, 1m=1 minute, 1s=1 second)
    interval = "15s"

    # retrieve_recorded_to_frame(tagname, pi_server, start_time, end_time)
    data_PumpStationpump1 = retrieve_interpolated_to_frame(
        tagname1, pi_server, start_time, end_time, interval)
    data_Ave11thNwOF = retrieve_interpolated_to_frame(
        tagname2, pi_server, start_time, end_time, interval)
    data_Ave11thWeirLevel = retrieve_interpolated_to_frame(
        tagname3, pi_server, start_time, end_time, interval)

    # if data# is not None:
    #    print(data#)
    # else:
    #    print(f"No data found for tag {tagname3} between {start_time} and {end_time}.")

    #    singleTrend PLOT
    singleTrend(data_Ave11thWeirLevel)

    #   multipleTrend PLOT
    # Combine DataFrames
    df_combined = merge_df_on_DateTime(data_Ave11thNwOF, data_Ave11thWeirLevel)
    # print(df_combined)
    multipleTrend(df_combined)

    Ave11th_image_path = './modules/PI/webparts/CSOSites/11thAveNW'
    image = convert_svg_to_png(Ave11th_image_path)
    # To open the image
    # open_image_with_pillow(image)
