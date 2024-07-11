import os
from modules.dataPull import *
from modules.plotTrend import *

if __name__ == "__main__":
    server_name = os.getenv('SERVERNAME')
    tagname1 = os.getenv('pumpStationpump1')  # PI tag name (string)
    tagname2 = os.getenv('Ave11thNwOF')
    tagname3 = os.getenv('Ave11thWeirLevel')
    pi_server = connect_to_server(server_name)

    # Input from user
    start_time = "2024-07-08 17:19:00"  # "2024-07-08 17:19:00"
    end_time = "2024-07-08 08:19:00"  # "2024-07-08 08:19:00"
    # sample interval(string: examples: 1w=1 week, 1d=1 day, 1h=1 hour, 1m=1 minute, 1s=1 second)
    interval = "1m"

    # retrieve_recorded_to_frame(tagname, pi_server, start_time, end_time)
    data1 = retrieve_interpolated_to_frame(
        tagname1, pi_server, start_time, end_time, interval)
    data2 = retrieve_interpolated_to_frame(
        tagname2, pi_server, start_time, end_time, interval)
    data3 = retrieve_interpolated_to_frame(
        tagname3, pi_server, start_time, end_time, interval)

    # if data3 is not None:
    #    print(data3)
    # else:
    #    print(f"No data found for tag {tagname3} between {start_time} and {end_time}.")

    #    singleTrend PLOT
    # singleTrend(data3)

    #   multipleTrend PLOT
    # Combine DataFrames
    df_combined = merge_df_on_DateTime(data2, data3)
    # print(df_combined)
    multipleTrend(df_combined)
