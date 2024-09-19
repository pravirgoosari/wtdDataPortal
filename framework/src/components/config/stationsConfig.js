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
  },
  {
    path: "/ballard",
    stationName: "Ballard",
    schematicEndpoint: "Ballard",
    clickHandlers: {
      'Value1_pbTextEl': 'Diverted Flow',       
      'Value2_pbTextEl': 'Calc Flow',           
      'Value3_pbTextEl': 'OF Flow',             
      'Value4_pbTextEl': 'Trunk Level',         
      'Value5_pbTextEl': 'Int. Level',          
      'Value6_pbTextEl': 'Canal Level', 
      'Value7_pbTextEl': 'Value7',           
      'Value8_pbTextEl': 'Daily Rain',          
      'Value10_pbTextEl': 'OF Gate Position',   
      'Value11_pbTextEl': 'R Gate Position',    
      'Value12_pbTextEl': 'Value12'  
    }
  },
  {
    path: "/brandon",
    stationName: "Brandon",
    schematicEndpoint: "Brandon",
    clickHandlers: {
        'Value11_pbTextEl': 'OF Flow',             
        'Value1_pbTextEl': 'Calc Flow',         
        'Value12_pbTextEl': 'Interceptor Flow', 
        'Value5_pbTextEl': 'Calc Diverted Flow', 
        'Value2_pbTextEl': 'Overflow Flow',     
        'Value10_pbTextEl': 'Tide Level',       
        'Value6_pbTextEl': 'Trunk Level', 
        'Value7_pbTextEl': 'Interceptor Level',     
        'Value8_pbTextEl': 'R Gate Position',   
        'Value9_pbTextEl': 'OF Gate Position'  
    }
  },
  {
    path: "/canal-st-of-weir",
    stationName: "CanalSt",
    schematicEndpoint: "CanalSt",
    clickHandlers: {
        'Value2_pbTextEl': 'Trunk Flow',            
        'Value5_pbTextEl': 'Trunk Level',           
        'Value6_pbTextEl': 'Regulator Gate Position', 
        'Value8_pbTextEl': 'Interceptor Flow',      
        'Value4_pbTextEl': 'Interceptor Level',     
        'Value3_pbTextEl': 'Outfall',               
        'Value10_pbTextEl': 'Siphon Flow'           
    }
  },
  {
    path: "/chelan",
    stationName: "Chelan",
    schematicEndpoint: "Chelan",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
    }
  },
  {
    path: "/connecticut",
    stationName: "Connecticut",
    schematicEndpoint: "Connecticut",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
      'Value10_pbTextEl': 'Value10', 
      'Value11_pbTextEl': 'Value11', 
      'Value12_pbTextEl': 'Value12', 
      'Value15_pbTextEl': 'Value15', 
      'Value16_pbTextEl': 'Value16', 
      'Value18_pbTextEl': 'Value18', 
    }
  },
  {
    path: "/denny-lu",
    stationName: "Denny",
    schematicEndpoint: "DennyLU",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1',  
      'Value2_pbTextEl': 'Value2',  
      'Value4_pbTextEl': 'Value4',  
      'Value5_pbTextEl': 'Value5',  
      'Value11_pbTextEl': 'Value11',
      'Value26_pbTextEl': 'Value26',
      'Value27_pbTextEl': 'Value27',
      'Value28_pbTextEl': 'Value28',
      'Value29_pbTextEl': 'Value29',
      'Value31_pbTextEl': 'Value31',
      'Value33_pbTextEl': 'Value33',
      'Value34_pbTextEl': 'Value34',
      'Value35_pbTextEl': 'Value35',
    }
  },
  {
    path: "/denny-local",
    stationName: "Denny",
    schematicEndpoint: "DennyLocal",
    clickHandlers: {
        'Value1_pbTextEl': 'Value1',  
        'Value2_pbTextEl': 'Value2',  
        'Value3_pbTextEl': 'Value3',  
        'Value4_pbTextEl': 'Value4',  
        'Value5_pbTextEl': 'Value5',  
        'Value11_pbTextEl': 'Value11',  
        'Value26_pbTextEl': 'Value26',  
        'Value27_pbTextEl': 'Value27',  
        'Value28_pbTextEl': 'Value28',  
        'Value29_pbTextEl': 'Value29',  
        'Value31_pbTextEl': 'Value31',  
        'Value33_pbTextEl': 'Value33',  
        'Value35_pbTextEl': 'Value35',  
    }
  },
  {
    path: "/dexter",
    stationName: "Dexter",
    schematicEndpoint: "Dexter",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value11_pbTextEl': 'Value11', 
      'Value12_pbTextEl': 'Value12', 
      'Value13_pbTextEl': 'Value13', 
    }
  },
  {
    path: "/hanford",
    stationName: "Hanford",
    schematicEndpoint: "Hanford",
    clickHandlers: {
        'Value1_pbTextEl': 'Value1', 
        'Value2_pbTextEl': 'Value2', 
        'Value3_pbTextEl': 'Value3', 
        'Value4_pbTextEl': 'Value4', 
        'Value5_pbTextEl': 'Value5', 
        'Value6_pbTextEl': 'Value6', 
        'Value7_pbTextEl': 'Value7', 
        'Value8_pbTextEl': 'Value8', 
        'Value9_pbTextEl': 'Value9', 
    }
  },
  {
    path: "/harbor",
    stationName: "Harbor",
    schematicEndpoint: "Harbor",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
      'Value10_pbTextEl': 'Value10', 
    }
  },
  {
    path: "/king",
    stationName: "King",
    schematicEndpoint: "King",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
      'Value10_pbTextEl': 'Value10', 
      'Value11_pbTextEl': 'Value11', 
    }
  },
  {
    path: "/lake-city",
    stationName: "LakeCity",
    schematicEndpoint: "CanalSt",
    clickHandlers: {
        'Value2_pbTextEl': 'Trunk Flow',            
        'Value5_pbTextEl': 'Trunk Level',           
        'Value6_pbTextEl': 'Regulator Gate Position', 
        'Value8_pbTextEl': 'Interceptor Flow',      
        'Value4_pbTextEl': 'Interceptor Level',     
        'Value3_pbTextEl': 'Outfall',               
        'Value10_pbTextEl': 'Siphon Flow'           
    }
  },
  {
    path: "/lander",
    stationName: "Lander",
    schematicEndpoint: "Lander",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
      'Value10_pbTextEl': 'Value10', 
      'Value11_pbTextEl': 'Value11', 
    }
  },
  {
    path: "/matthewslakeline",
    stationName: "MatthewsLakeline",
    schematicEndpoint: "MatthewsLakeline",
    clickHandlers: {
        'Value1_pbTextEl': 'Value1', 
        'Value2_pbTextEl': 'Value2', 
        'Value3_pbTextEl': 'Value3', 
        'Value4_pbTextEl': 'Value4', 
        'Value5_pbTextEl': 'Value5', 
        'Value6_pbTextEl': 'Value6', 
        'Value8_pbTextEl': 'Value8', 
        'Value12_pbTextEl': 'Value12', 
        'Rectangle1_MS': 'Rectangle1_MS', 
        'Rectangle2_MS': 'Rectangle2_MS', 
    }
  },
  {
    path: "/montlake",
    stationName: "Montlake",
    schematicEndpoint: "Montlake",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1',  
      'Value2_pbTextEl': 'Value2',  
      'Value3_pbTextEl': 'Value3',  
      'Value4_pbTextEl': 'Value4',  
      'Value5_pbTextEl': 'Value5',  
      'Value6_pbTextEl': 'Value6',  
      'Value7_pbTextEl': 'Value7',  
      'Trend1_Plot1': 'Trend1_Plot1',     
      'Trend1_Plot3': 'Trend1_Plot3',     
    }
  },
  {
    path: "/norfolk",
    stationName: "Norfolk",
    schematicEndpoint: "Norfolk",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
      'Value10_pbTextEl': 'Value10', 
      'Value11_pbTextEl': 'Value11', 
    }
  },
  {
    path: "/southmichigan",
    stationName: "South Michigan",
    schematicEndpoint: "SouthMichigan",
    clickHandlers: {
        'Value1_pbTextEl': 'Value1', 
        'Value2_pbTextEl': 'Value2', 
        'Value3_pbTextEl': 'Value3', 
        'Value4_pbTextEl': 'Value4', 
        'Value5_pbTextEl': 'Value5', 
        'Value6_pbTextEl': 'Value6', 
        'Value7_pbTextEl': 'Value7', 
        'Value8_pbTextEl': 'Value8', 
        'Value9_pbTextEl': 'Value9', 
        'Value10_pbTextEl': 'Value10', 
    }
  },
  {
    path: "/university",
    stationName: "University",
    schematicEndpoint: "University",
    clickHandlers: {
        'Value1_pbTextEl': 'Value1', 
        'Value2_pbTextEl': 'Value2', 
        'Value3_pbTextEl': 'Value3', 
        'Value4_pbTextEl': 'Value4', 
        'Value5_pbTextEl': 'Value5', 
        'Value6_pbTextEl': 'Value6', 
        'Value7_pbTextEl': 'Value7', 
        'Value8_pbTextEl': 'Value8', 
        'Value9_pbTextEl': 'Value9', 
        'Value12_pbTextEl': 'Value12', 
    }
  },
  {
    path: "/westmichigan",
    stationName: "WestMichigan",
    schematicEndpoint: "WestMichigan",
    clickHandlers: {
      'Value1_pbTextEl': 'Value1', 
      'Value2_pbTextEl': 'Value2', 
      'Value3_pbTextEl': 'Value3', 
      'Value4_pbTextEl': 'Value4', 
      'Value5_pbTextEl': 'Value5', 
      'Value6_pbTextEl': 'Value6', 
      'Value7_pbTextEl': 'Value7', 
      'Value8_pbTextEl': 'Value8', 
      'Value9_pbTextEl': 'Value9', 
    }
  },
];

export default stations;