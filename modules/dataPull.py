from modules.plotTrend import singleTrend, multipleTrend
from OSIsoft.AF.Time import AFTimeRange, AFTimeSpan
from OSIsoft.AF.Data import AFBoundaryType
from OSIsoft.AF.PI import PIServers, PIPoint
from dotenv import load_dotenv

import numpy as np
import datetime as dt
import pandas as pd


load_dotenv()


def connect_to_server(server_name):
    pi_servers = PIServers()
    pi_server = pi_servers[server_name]
    pi_server.Connect(True, None)
    return pi_server


def convert_values_to_frame(pi_data, tagname):
    if pi_data.Count > 0:
        dates = []
        values = []
        for event in pi_data:
            edate = event.Timestamp.LocalTime
            dates.append(pd.to_datetime(edate.ToString(
                'yyyy-MM-dd HH:mm:ss')))
            try:
                if str(event.Value) == '1':
                    values.append(1.0)
                elif str(event.Value) == '0':
                    values.append(0.0)
                else:
                    value = float(event.Value)
                    values.append(value)
            except:
                values.append(np.nan)
        data = pd.DataFrame(index=np.asarray(dates),
                            data=np.asarray(values, dtype=np.float64),
                            columns=[tagname])
        # Convert index to column
        data = data.reset_index()
        data.rename(columns={'index': 'DateTime'}, inplace=True)
        return data
    else:
        return None


def retrieve_recorded_to_frame(tagname, pi_server, start, end, block_length=60):
    point = PIPoint.FindPIPoint(pi_server, tagname)
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
        recorded = point.RecordedValues(af_time_range, AFBoundaryType.Inside, '',
                                        False)
        data = convert_values_to_frame(recorded, tagname)
        if data is None:
            print('No recorded values for {0} between {1} and {2}'.format(
                tagname, start1, end1))
        else:
            df_list.append(data)
        start1 = end1 + dt.timedelta(seconds=1)
        if (end1 + dt.timedelta(days=60) > end_dt) & (start1 < end_dt):
            end1 = end_dt
        else:
            end1 = end1 + dt.timedelta(days=block_length)
    if df_list:
        data = pd.concat(df_list, axis=0)
        return data
    else:
        return None


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


def merge_df_on_DateTime(df1, df2):
    combined_df = pd.merge(df1, df2, on='DateTime')
    return combined_df


# Fetch the current value of a PI Point
def fetch_data_from_pi(pi_server, tagname):
    try:
        point = PIPoint.FindPIPoint(pi_server, tagname)
        last_data = point.Snapshot()
        return last_data.Value
    except Exception as e:
        print(f"Error fetching data for point {tagname}: {e}")
        return None
