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
    # Exclude the first column assuming it is 'DateTime'
    y_columns = df.columns[1:]  # Dynamically include all columns except 'DateTime'
    
    # Create a line plot with Plotly Express
    fig = px.line(df, y=y_columns, x='DateTime')
    
    # Define a list of colors or use a colormap if you have many lines
    colors = ['green', 'blue', 'red', 'purple', 'orange', 'cyan']  # Add more colors as needed
    
    # Set line colors based on the number of columns
    for i, data in enumerate(fig.data):
        data.line.color = colors[i % len(colors)]  # Cycle through colors if more lines than colors

    # Add title and remove legend title
    fig.update_layout(title='Multipoint Trend', legend_title_text='')

    # Convert the figure to JSON for front-end rendering
    graphJSON = plotly.io.to_json(fig, pretty=True)

    return graphJSON

# Ensure all numpy arrays are converted to lists


def convert_ndarray(obj):
    if isinstance(obj, (list, dict)):
        for key, value in (enumerate(obj) if isinstance(obj, list) else obj.items()):
            obj[key] = convert_ndarray(value)
    elif isinstance(obj, np.ndarray):
        obj = obj.tolist()
    return obj
