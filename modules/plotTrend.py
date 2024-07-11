import plotly.express as px


def singleTrend(df):
    column_name = df.columns[1]
    fig = px.line(df, x=df['DateTime'], y=df[column_name],
                  title='Time Series Plot of ' + column_name)
    fig.update_layout(title='Singlepoint Trend', legend_title_text='')

    fig.show()


def multipleTrend(df):
    column_name1 = df.columns[1]
    column_name2 = df.columns[2]
    fig1 = px.line(df, y=[column_name1, column_name2], x='DateTime')
    fig1.data[0].line.color = 'green'
    fig1.data[1].line.color = 'blue'
    # Add title and remove legend title
    fig1.update_layout(title='Multipoint Trend', legend_title_text='')
    fig1.show()
