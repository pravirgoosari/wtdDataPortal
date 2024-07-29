import re
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta

# Define reference abbreviations and their meanings


def get_ref_times():
    now = datetime.now()
    ref_times = {
        '*': now,
        't': now.replace(hour=0, minute=0, second=0, microsecond=0),
        'y': (now - timedelta(days=1)).replace(hour=0, minute=0, second=0, microsecond=0),
    }

    # Add days of the week
    days_of_week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    for i, day in enumerate(days_of_week):
        ref_times[day] = (now - timedelta(days=(now.weekday() - i) %
                          7)).replace(hour=0, minute=0, second=0, microsecond=0)

    # Add months of the year
    months_of_year = ['jan', 'feb', 'mar', 'apr', 'may',
                      'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    for i, month in enumerate(months_of_year):
        ref_times[month] = now.replace(
            month=i+1, day=1, hour=0, minute=0, second=0, microsecond=0)

    return ref_times


ref_times = get_ref_times()

# Define units for time offsets
time_units = {
    's': 'seconds',
    'second': 'seconds',
    'seconds': 'seconds',
    'm': 'minutes',
    'minute': 'minutes',
    'minutes': 'minutes',
    'h': 'hours',
    'hour': 'hours',
    'hours': 'hours',
    'd': 'days',
    'day': 'days',
    'days': 'days',
    'w': 'weeks',
    'week': 'weeks',
    'weeks': 'weeks',
    'mo': 'months',
    'month': 'months',
    'months': 'months',
    'y': 'years',
    'year': 'years',
    'years': 'years'
}

# Regex pattern to match datetime format "YYYY-MM-DD HH:MM:SS"
datetime_pattern = re.compile(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$")


def validate_datetime_format(input_str):
    """Validate if the input string matches the datetime format YYYY-MM-DD HH:MM:SS."""
    return bool(datetime_pattern.match(input_str))


def interpret_datetime(input_str):
    ref_abbrev, operator, time_offset = None, None, None

    # Determine operation type and split input_str into components
    if '+' in input_str:
        ref_abbrev, time_offset = input_str.split('+')
        operator = '+'
    elif '-' in input_str:
        ref_abbrev, time_offset = input_str.split('-')
        operator = '-'
    else:
        ref_abbrev = input_str

    # Determine reference time based on abbreviation
    if ref_abbrev in ref_times:
        ref_time = ref_times[ref_abbrev]
    else:
        raise ValueError(f"Unknown reference abbreviation '{ref_abbrev}'")

    # If no operator found, return the reference time directly
    if operator is None:
        return ref_time

    # Determine time delta based on offset
    time_offset_parts = re.findall(r'(\d+\.?\d*)([a-zA-Z]+)', time_offset)
    if not time_offset_parts:
        raise ValueError(f"Invalid time offset '{time_offset}'")

    result_datetime = ref_time
    for part in time_offset_parts:
        num = float(part[0])
        unit = part[1]

        if unit in time_units:
            delta_unit = time_units[unit]
        else:
            raise ValueError(f"Unknown time unit '{unit}'")

        if delta_unit in ['months', 'years']:
            if delta_unit == 'months':
                result_datetime += relativedelta(months=int(num))
            elif delta_unit == 'years':
                result_datetime += relativedelta(years=int(num))
        else:
            delta_args = {delta_unit: num}
            result_datetime += timedelta(**delta_args)

    return result_datetime


def handle_user_input(input_str):
    if validate_datetime_format(input_str):
        print(input_str)
        # Input is already in the correct format
        result_datetime = datetime.strptime(input_str, "%Y-%m-%d %H:%M:%S")
        return result_datetime

    else:
        # Input is an abbreviation or invalid
        try:
            result_datetime = interpret_datetime(input_str)
            return result_datetime
        except ValueError as e:
            print(f"Input: {input_str} is invalid -> Error: {e}")


"""if __name__ == '__main__':

    ### check on different time input on start and end
    # Input from user
    start_time = "2024-07-08 17:19:00"  # "YYYY-MM-DD HH:MM:SS"
    end_time = "t-8h"  # Abbreviation example

    # Handle start time input
    print(handle_user_input(start_time))

    # Handle end time input
    print(handle_user_input(end_time))


    #
    ###
    # Variation of inputs that workkk!

    input_str = '*'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    # Example usage
    input_str = 't+8h'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    input_str = '*-30m'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    input_str = 'y+8h'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    input_str = 't'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    input_str = 'y-2y'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")

    input_str = 'y-8h'
    result_datetime = interpret_datetime(input_str)
    print(f"Input: {input_str} -> Result DateTime: {result_datetime}")
"""
