import plotly.express as px
import numpy as np
import plotly  # check


def singleTrend(df):
    column_name = df.columns[1]
    fig = px.line(df, x=df['DateTime'], y=df[column_name],
                  title='Time Series Plot of ' + column_name)
    fig.update_layout(title='Singlepoint Trend', legend_title_text='')

    # fig.show()
    # -----------
    # Convert the Plotly figure to JSON
    # fig_json = fig.to_plotly_json()

    # Ensure all numpy arrays are converted to lists
    # fig_json = convert_ndarray(fig_json)
    # -----------

    graohJSON = plotly.io.to_json(fig, pretty=True)

    return graohJSON  # fig_json


def multipleTrend(df):
    column_name1 = df.columns[1]
    column_name2 = df.columns[2]
    fig = px.line(df, y=[column_name1, column_name2], x='DateTime')
    fig.data[0].line.color = 'green'
    fig.data[1].line.color = 'blue'
    # Add title and remove legend title
    fig.update_layout(title='Multipoint Trend', legend_title_text='')
    # fig1.show()
    graohJSON = plotly.io.to_json(fig, pretty=True)

    return graohJSON

# Ensure all numpy arrays are converted to lists


def convert_ndarray(obj):
    if isinstance(obj, (list, dict)):
        for key, value in (enumerate(obj) if isinstance(obj, list) else obj.items()):
            obj[key] = convert_ndarray(value)
    elif isinstance(obj, np.ndarray):
        obj = obj.tolist()
    return obj
