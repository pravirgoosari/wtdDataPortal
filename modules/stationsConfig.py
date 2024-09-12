station_config = {
    '11thAve': {
        'schematic_path': './modules/PI/webparts/CSOSites/11thAveNW',
        'multipoint_tags': ['Ave11thNwOF', 'Ave11thWeirLevel'],
        'singlepoint_map': {
            'FEET': 'Ave11thWeirLevel',
            'mgd': 'Ave11thNwOF',
        },
    },
    '3rdAve': {
        'schematic_path': './modules/PI/webparts/CSOSites/3RDAVE',
        'multipoint_tags': ['ThirdAveWeirLevel', 'ThirdAveOverflow', 'ThirdAveTrunkLevel', 'ThirdAveAftbay', 'ThirdAveWeirUpstm', 'ThirdAveSiphon'],
        'singlepoint_map': {
            'Level on Weir': 'ThirdAveWeirLevel',
            'Overflow mgd': 'ThirdAveOverflow',
            'Trunk Level': 'ThirdAveTrunkLevel',
            'Aftbay Level': 'ThirdAveAftbay',
            'Weir Upstm': 'ThirdAveWeirUpstm',
            'Overflow': 'ThirdAveSiphon',
        },
    },
    '8thAve': {
        'schematic_path': './modules/PI/webparts/CSOSites/8thave',
        'multipoint_tags': ['8thAveTrunkFlow', '8thAveTrunkLevel', '8thAveInterceptorFlow', '8thAveOutfallFlow', '8thAveTideLevel', '8thAveInterceptorLevel', '8thAveRegulatorGatePos', '8thAveOutfallGatePos'],
        'singlepoint_map': {
            'Trunk Flow': '8thAveTrunkFlow',
            'Trunk Level': '8thAveTrunkLevel',
            'Interceptor Flow': '8thAveInterceptorFlow',
            'Outfall Flow': '8thAveOutfallFlow',
            'Tide Level': '8thAveTideLevel',
            'Interceptor Level': '8thAveInterceptorLevel',
            'Regulator Gate Position': '8thAveRegulatorGatePos',
            'Outfall Gate Position': '8thAveOutfallGatePos',
        },
    },
}

def get_station_config(station):
    return station_config.get(station, None)