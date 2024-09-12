const stations = [
    {
      path: "/11th-ave-nw-of",
      stationName: "11thAve",
      schematicEndpoint: "11thAve",
      clickHandlers: {
        'Value1_pbTextEl': 'FEET',
        'Value2_pbTextEl': 'mgd',
      }
    },
    {
      path: "/3rd-ave-ewing-st",
      stationName: "3rdAve",
      schematicEndpoint: "3rdAve",
      clickHandlers: {
        'WeirLevel_pbTextEl': 'Level on Weir',
        'OverflowMgd_pbTextEl': 'Overflow mgd',
        'AftbayLevel_pbTextEl': 'Aftbay Level',
        'TrunkLevel_pbTextEl': 'Trunk Level',
        'WeirUpstm_pbTextEl': 'Weir Upstm',
        'OverflowLevel_pbTextEl': 'Overflow',
      }
    },
    {
      path: "/8th-ave",
      stationName: "8thAve",
      schematicEndpoint: "8thAve",
      clickHandlers: {
        'Value4_pbTextEl': 'Trunk Flow',
        'Value1_pbTextEl': 'Trunk Level',
        'Value5_pbTextEl': 'Interceptor Flow',
        'Value6_pbTextEl': 'Outfall Flow',
        'Value3_pbTextEl': 'Tide Level',
        'Value2_pbTextEl': 'Interceptor Level',
        'Value7_pbTextEl': 'Regulator Gate Position',
        'Value8_pbTextEl': 'Outfall Gate Position',
      }
    }
  ];
  
  export default stations;
  