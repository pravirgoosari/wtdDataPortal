station_config = {
    "11thAve": {
        "schematic_path": "./modules/PI/webparts/CSOSites/11thAveNW",
        "multipoint_tags": ["Ave11thNwOF", "Ave11thWeirLevel"],
        "singlepoint_map": {
            "FEET": "Ave11thWeirLevel",
            "mgd": "Ave11thNwOF",
        },
    },
    "3rdAve": {
        "schematic_path": "./modules/PI/webparts/CSOSites/3RDAVE",
        "multipoint_tags": [
            "ThirdAveWeirLevel",
            "ThirdAveOverflow",
            "ThirdAveTrunkLevel",
            "ThirdAveAftbay",
            "ThirdAveWeirUpstm",
            "ThirdAveSiphon",
        ],
        "singlepoint_map": {
            "Level on Weir": "ThirdAveWeirLevel",
            "Overflow mgd": "ThirdAveOverflow",
            "Trunk Level": "ThirdAveTrunkLevel",
            "Aftbay Level": "ThirdAveAftbay",
            "Weir Upstm": "ThirdAveWeirUpstm",
            "Overflow": "ThirdAveSiphon",
        },
    },
    "8thAve": {
        "schematic_path": "./modules/PI/webparts/CSOSites/8thave",
        "multipoint_tags": [
            "8thAveTrunkFlow",
            "8thAveTrunkLevel",
            "8thAveInterceptorFlow",
            "8thAveOutfallFlow",
            "8thAveTideLevel",
            "8thAveInterceptorLevel",
            "8thAveRegulatorGatePos",
            "8thAveOutfallGatePos",
        ],
        "singlepoint_map": {
            "Trunk Flow": "8thAveTrunkFlow",
            "Trunk Level": "8thAveTrunkLevel",
            "Interceptor Flow": "8thAveInterceptorFlow",
            "Outfall Flow": "8thAveOutfallFlow",
            "Tide Level": "8thAveTideLevel",
            "Interceptor Level": "8thAveInterceptorLevel",
            "Regulator Gate Position": "8thAveRegulatorGatePos",
            "Outfall Gate Position": "8thAveOutfallGatePos",
        },
    },
    "Ballard": {
        "schematic_path": "./modules/PI/webparts/CSOSites/Ballard",
        "multipoint_tags": [
            "BallardTrunkLevel",
            "BallardOFGatePosition",
            "BallardCalcFlow",
            "BallardOFFlow",
            "BallardDivertedFlow",
            "BallardRGatePosition",
            "BallardCanalLevel",
            "BallardCalcFlowHigh",
            "BallardIntLevel",
            "BallardCalcFlowLow",
            "BallardDailyRain",
        ],
        "singlepoint_map": {
            "Trunk Level": "BallardTrunkLevel",
            "OF Gate Position": "BallardOFGatePosition",
            "Calc Flow": "BallardCalcFlow",
            "OF Flow": "BallardOFFlow",
            "Diverted Flow": "BallardDivertedFlow",
            "R Gate Position": "BallardRGatePosition",
            "Canal Level": "BallardCanalLevel",
            "Value12": "BallardCalcFlowHigh",
            "Int. Level": "BallardIntLevel",
            "Value7": "BallardCalcFlowLow",
            "Daily Rain": "BallardDailyRain",
        },
    },
    "Brandon": {
        "schematic_path": "./modules/PI/webparts/CSOSites/brandon",
        "multipoint_tags": [
            "BrandonOF",
            "BrandonCalcFlow",
            "BrandonInterceptorFlow",
            "BrandonDivertedFlow",
            "BrandonOverflow",
            "BrandonTideLevel",
            "BrandonTrunkLevel",
            "BrandonInterceptorLevel",
            "BrandonRGatePosition",
            "BrandonOFGatePosition",
        ],
        "singlepoint_map": {
            "OF Flow": "BrandonOF",
            "Calc Flow": "BrandonCalcFlow",
            "Interceptor Flow": "BrandonInterceptorFlow",
            "Calc Diverted Flow": "BrandonDivertedFlow",
            "Overflow Flow": "BrandonOverflow",
            "Tide Level": "BrandonTideLevel",
            "Trunk Level": "BrandonTrunkLevel",
            "Interceptor Level": "BrandonInterceptorLevel",
            "R Gate Position": "BrandonRGatePosition",
            "OF Gate Position": "BrandonOFGatePosition",
        },
    },
    "CanalSt": {
        "schematic_path": "./modules/PI/webparts/CSOSites/lctyTun",
        "multipoint_tags": [
            "CanalStTrunkFlow",
            "CanalStTrunkLevel",
            "CanalStRegulatorGatePos",
            "CanalStInterceptorFlow",
            "CanalStInterceptorLevel",
            "CanalStOutfall",
            "CanalStSiphonFlow",
        ],
        "singlepoint_map": {
            "Trunk Flow": "CanalStTrunkFlow",
            "Trunk Level": "CanalStTrunkLevel",
            "Regulator Gate Position": "CanalStRegulatorGatePos",
            "Interceptor Flow": "CanalStInterceptorFlow",
            "Interceptor Level": "CanalStInterceptorLevel",
            "Outfall": "CanalStOutfall",
            "Siphon Flow": "CanalStSiphonFlow",
        },
    },
    "Chelan": {
        "schematic_path": "./modules/PI/webparts/CSOSites/chelan",
        "multipoint_tags": [
            "ChelanTideLevel",
            "ChelanOutfallFlow",
            "ChelanInterceptorFlow",
            "ChelanTrunkLevel",
            "ChelanTrunkFlow",
            "ChelanInterceptorLevel",
            "ChelanDailyRainfall",
            "ChelanOutfallGatePosition",
            "ChelanRegulatorGatePosition",
        ],
        "singlepoint_map": {
            "Value1": "ChelanOutfallFlow",
            "Value2": "ChelanInterceptorFlow",
            "Value3": "ChelanTrunkFlow",
            "Value4": "ChelanTrunkLevel",
            "Value5": "ChelanInterceptorLevel",
            "Value6": "ChelanTideLevel",
            "Value7": "ChelanOutfallGatePosition",
            "Value8": "ChelanRegulatorGatePosition",
            "Value9": "ChelanDailyRainfall",
        },
    },
    "Connecticut": {
        "schematic_path": "./modules/PI/webparts/CSOSites/connecticut",
        "multipoint_tags": [
            "ConnInterceptorFlow",
            "ConnInterceptorLevelOpenSP",
            "ConnDivFlow",
            "ConnInterceptorLevelCloseSP",
            "ConnTrunkLevel",
            "ConnTrunkFlow",
            "ConnOverflowWeirUpstm",
            "ConnInterceptorLevel",
            "ConnUpstmFlow",
            "KdomOutfallFlow",
            "ConnOverflowWeirDnstm",
            "ConnOutfallFlow",
            "ConnTideLevel",
            "ConnOutfallGatePosition",
            "ConnRegulatorGatePosition",
        ],
        "singlepoint_map": {
            "Value1": "ConnOutfallFlow",
            "Value2": "ConnTrunkLevel",
            "Value3": "ConnTideLevel",
            "Value4": "ConnInterceptorLevel",
            "Value5": "ConnTrunkFlow",
            "Value6": "ConnUpstmFlow",
            "Value7": "ConnInterceptorFlow",
            "Value8": "ConnDivFlow",
            "Value9": "ConnOutfallGatePosition",
            "Value10": "ConnRegulatorGatePosition",
            "Value11": "ConnInterceptorLevelOpenSP",
            "Value12": "ConnInterceptorLevelCloseSP",
            "Value15": "ConnOverflowWeirUpstm",
            "Value16": "ConnOverflowWeirDnstm",
            "Value18": "KdomOutfallFlow",
        },
    },
    "DennyLU": {
        "schematic_path": "./modules/PI/webparts/CSOSites/Denny",
        "multipoint_tags": [
            "DennyTag1",
            "DennyTag2",
            "DennyTag3",
            "DennyTag4",
            "DennyTag5",
            "DennyTag6",
            "DennyTag7",
            "DennyTag8",
            "DennyTag9",
            "DennyTag10",
            "DennyTag11",
            "DennyTag12",
            "DennyTag13",
        ],
        "singlepoint_map": {
            "Value1": "DennyTag11",
            "Value2": "DennyTag5",
            "Value4": "DennyTag1",
            "Value5": "DennyTag13",
            "Value11": "DennyTag6",
            "Value26": "DennyTag10",
            "Value27": "DennyTag4",
            "Value28": "DennyTag9",
            "Value29": "DennyTag7",
            "Value31": "DennyTag12",
            "Value33": "DennyTag2",
            "Value34": "DennyTag8",
            "Value35": "DennyTag3",
        },
    },
    "DennyLocal": {
        "schematic_path": "./modules/PI/webparts/CSOSites/Denny_CSOs",
        "multipoint_tags": [
            "DennyLocalTag1",
            "DennyLocalTag2",
            "DennyLocalTag3",
            "DennyLocalTag4",
            "DennyLocalTag5",
            "DennyLocalTag6",
            "DennyLocalTag7",
            "DennyLocalTag8",
            "DennyLocalTag9",
            "DennyLocalTag10",
            "DennyLocalTag11",
            "DennyLocalTag12",
            "DennyLocalTag13",
        ],
        "singlepoint_map": {
            "Value1": "DennyLocalTag1",
            "Value2": "DennyLocalTag2",
            "Value3": "DennyLocalTag3",
            "Value4": "DennyLocalTag4",
            "Value5": "DennyLocalTag5",
            "Value11": "DennyLocalTag6",
            "Value26": "DennyLocalTag7",
            "Value27": "DennyLocalTag8",
            "Value28": "DennyLocalTag9",
            "Value29": "DennyLocalTag10",
            "Value31": "DennyLocalTag11",
            "Value33": "DennyLocalTag12",
            "Value35": "DennyLocalTag13",
        },
    },
    "Dexter": {
        "schematic_path": "./modules/PI/webparts/CSOSites/dexter",
        "multipoint_tags": [
            "DexterTag1",
            "DexterTag2",
            "DexterTag3",
            "DexterTag4",
            "DexterTag5",
            "DexterTag6",
            "DexterTag7",
            "DexterTag8",
            "DexterTag9",
            "DexterTag10",
            "DexterTag11",
        ],
        "singlepoint_map": {
            "Value1": "DexterTag2",
            "Value2": "DexterTag1",
            "Value3": "DexterTag4",
            "Value4": "DexterTag6",
            "Value5": "DexterTag5",
            "Value6": "DexterTag8",
            "Value7": "DexterTag3",
            "Value8": "DexterTag7",
            "Value11": "DexterTag11",
            "Value12": "DexterTag10",
            "Value13": "DexterTag9",
        },
    },
    "Hanford": {
        "schematic_path": "./modules/PI/webparts/CSOSites/hanford",
        "multipoint_tags": [
            "HanfordTag1",
            "HanfordTag2",
            "HanfordTag3",
            "HanfordTag4",
            "HanfordTag5",
            "HanfordTag6",
            "HanfordTag7",
            "HanfordTag8",
            "HanfordTag9",
        ],
        "singlepoint_map": {
            "Value1": "HanfordTag1",
            "Value2": "HanfordTag2",
            "Value3": "HanfordTag3",
            "Value4": "HanfordTag4",
            "Value5": "HanfordTag5",
            "Value6": "HanfordTag6",
            "Value7": "HanfordTag7",
            "Value8": "HanfordTag8",
            "Value9": "HanfordTag9",
        },
    },
    "Harbor": {
        "schematic_path": "./modules/PI/webparts/CSOSites/harbor",
        "multipoint_tags": [
            "HarborTag1",
            "HarborTag2",
            "HarborTag3",
            "HarborTag4",
            "HarborTag5",
            "HarborTag6",
            "HarborTag7",
            "HarborTag8",
            "HarborTag9",
            "HarborTag10",
        ],
        "singlepoint_map": {
            "Value1": "HarborTag1",
            "Value2": "HarborTag2",
            "Value3": "HarborTag3",
            "Value4": "HarborTag4",
            "Value5": "HarborTag5",
            "Value6": "HarborTag6",
            "Value7": "HarborTag7",
            "Value8": "HarborTag8",
            "Value9": "HarborTag9",
            "Value10": "HarborTag10",
        },
    },
    "King": {
        "schematic_path": "./modules/PI/webparts/CSOSites/king",
        "multipoint_tags": [
            "KingTag1",
            "KingTag2",
            "KingTag3",
            "KingTag4",
            "KingTag5",
            "KingTag6",
            "KingTag7",
            "KingTag8",
            "KingTag9",
            "KingTag10",
            "KingTag11",
        ],
        "singlepoint_map": {
            "Value1": "KingTag1",
            "Value2": "KingTag2",
            "Value3": "KingTag3",
            "Value4": "KingTag4",
            "Value5": "KingTag5",
            "Value6": "KingTag6",
            "Value7": "KingTag7",
            "Value8": "KingTag8",
            "Value9": "KingTag9",
            "Value10": "KingTag10",
            "Value11": "KingTag11",
        },
    },
    "LakeCity": {
        "schematic_path": "./modules/PI/webparts/CSOSites/lctyTun",
        "multipoint_tags": [
            "CanalStTrunkFlow",
            "CanalStTrunkLevel",
            "CanalStRegulatorGatePos",
            "CanalStInterceptorFlow",
            "CanalStInterceptorLevel",
            "CanalStOutfall",
            "CanalStSiphonFlow",
        ],
        "singlepoint_map": {
            "Trunk Flow": "CanalStTrunkFlow",
            "Trunk Level": "CanalStTrunkLevel",
            "Regulator Gate Position": "CanalStRegulatorGatePos",
            "Interceptor Flow": "CanalStInterceptorFlow",
            "Interceptor Level": "CanalStInterceptorLevel",
            "Outfall": "CanalStOutfall",
            "Siphon Flow": "CanalStSiphonFlow",
        },
    },
    "Lander": {
        "schematic_path": "./modules/PI/webparts/CSOSites/lander",
        "multipoint_tags": [
            "LanderTag1",
            "LanderTag2",
            "LanderTag3",
            "LanderTag4",
            "LanderTag5",
            "LanderTag6",
            "LanderTag7",
            "LanderTag8",
            "LanderTag9",
            "LanderTag10",
            "LanderTag11",
        ],
        "singlepoint_map": {
            "Value1": "LanderTag1",
            "Value2": "LanderTag2",
            "Value3": "LanderTag3",
            "Value4": "LanderTag4",
            "Value5": "LanderTag5",
            "Value6": "LanderTag6",
            "Value7": "LanderTag7",
            "Value8": "LanderTag8",
            "Value9": "LanderTag9",
            "Value10": "LanderTag10",
            "Value11": "LanderTag11",
        },
    },
    "MatthewsLakeline": {
        "schematic_path": "./modules/PI/webparts/CSOSites/MatthewsLakeline",
        "multipoint_tags": [
            "MatthewsLakelineTag1",
            "MatthewsLakelineTag2",
            "MatthewsLakelineTag3",
            "MatthewsLakelineTag4",
            "MatthewsLakelineTag5",
            "MatthewsLakelineTag6",
            "MatthewsLakelineTag7",
            "MatthewsLakelineTag8",
            "MatthewsLakelineTag9",
            "MatthewsLakelineTag10",
        ],
        "singlepoint_map": {
            "Value1": "MatthewsLakelineTag1",
            "Value2": "MatthewsLakelineTag6",
            "Value3": "MatthewsLakelineTag5",
            "Value4": "MatthewsLakelineTag4",
            "Value5": "MatthewsLakelineTag7",
            "Value6": "MatthewsLakelineTag8",
            "Value8": "MatthewsLakelineTag9",
            "Value12": "MatthewsLakelineTag10",
            "Rectangle1_MS": "MatthewsLakelineTag2",
            "Rectangle2_MS": "MatthewsLakelineTag3",
        },
    },
    "Montlake": {
        "schematic_path": "./modules/PI/webparts/CSOSites/montlake",
        "multipoint_tags": [
            "MontlakeTag1",
            "MontlakeTag2",
            "MontlakeTag3",
            "MontlakeTag4",
            "MontlakeTag5",
            "MontlakeTag6",
            "MontlakeTag7",
            "MontlakeTag8",
            "MontlakeTag9",
        ],
        "singlepoint_map": {
            "Value1": "MontlakeTag1",
            "Value2": "MontlakeTag2",
            "Value3": "MontlakeTag3",
            "Value4": "MontlakeTag4",
            "Value5": "MontlakeTag5",
            "Value6": "MontlakeTag6",
            "Value7": "MontlakeTag7",
            "Trend1_Plot1": "MontlakeTag8",
            "Trend1_Plot3": "MontlakeTag9",
        },
    },
    "Norfolk": {
        "schematic_path": "./modules/PI/webparts/CSOSites/norfolk",
        "multipoint_tags": [
            "NorfolkTag1",
            "NorfolkTag2",
            "NorfolkTag3",
            "NorfolkTag4",
            "NorfolkTag5",
            "NorfolkTag6",
            "NorfolkTag7",
            "NorfolkTag8",
            "NorfolkTag9",
        ],
        "singlepoint_map": {
            "Value1": "NorfolkTag1",
            "Value2": "NorfolkTag2",
            "Value3": "NorfolkTag3",
            "Value4": "NorfolkTag4",
            "Value5": "NorfolkTag5",
            "Value6": "NorfolkTag6",
            "Value7": "NorfolkTag2",
            "Value8": "NorfolkTag2",
            "Value9": "NorfolkTag7",
            "Value10": "NorfolkTag8",
            "Value11": "NorfolkTag9",
        },
    },
    "SouthMichigan": {
        "schematic_path": "./modules/PI/webparts/CSOSites/smichigan",
        "multipoint_tags": [
            "SouthMichiganTag1",
            "SouthMichiganTag2",
            "SouthMichiganTag3",
            "SouthMichiganTag4",
            "SouthMichiganTag5",
            "SouthMichiganTag6",
            "SouthMichiganTag7",
            "SouthMichiganTag8",
            "SouthMichiganTag9",
            "SouthMichiganTag10",
        ],
        "singlepoint_map": {
            "Value1": "SouthMichiganTag1",
            "Value2": "SouthMichiganTag2",
            "Value3": "SouthMichiganTag3",
            "Value4": "SouthMichiganTag4",
            "Value5": "SouthMichiganTag5",
            "Value6": "SouthMichiganTag6",
            "Value7": "SouthMichiganTag7",
            "Value8": "SouthMichiganTag8",
            "Value9": "SouthMichiganTag9",
            "Value10": "SouthMichiganTag10",
        },
    },
    "University": {
        "schematic_path": "./modules/PI/webparts/CSOSites/university",
        "multipoint_tags": [
            "UniversityTag1",
            "UniversityTag2",
            "UniversityTag3",
            "UniversityTag4",
            "UniversityTag5",
            "UniversityTag6",
            "UniversityTag7",
            "UniversityTag8",
            "UniversityTag9",
            "UniversityTag10",
        ],
        "singlepoint_map": {
            "Value1": "UniversityTag1",
            "Value2": "UniversityTag2",
            "Value3": "UniversityTag3",
            "Value4": "UniversityTag4",
            "Value5": "UniversityTag5",
            "Value6": "UniversityTag6",
            "Value7": "UniversityTag7",
            "Value8": "UniversityTag8",
            "Value9": "UniversityTag9",
            "Value12": "UniversityTag10",
        },
    },
    "WestMichigan": {
        "schematic_path": "./modules/PI/webparts/CSOSites/wmichigan",
        "multipoint_tags": [
            "WestMichiganTag1",
            "WestMichiganTag2",
            "WestMichiganTag3",
            "WestMichiganTag4",
            "WestMichiganTag5",
            "WestMichiganTag6",
            "WestMichiganTag7",
            "WestMichiganTag8",
            "WestMichiganTag9",
        ],
        "singlepoint_map": {
            "Value1": "WestMichiganTag1",
            "Value2": "WestMichiganTag2",
            "Value3": "WestMichiganTag3",
            "Value4": "WestMichiganTag4",
            "Value5": "WestMichiganTag5",
            "Value6": "WestMichiganTag6",
            "Value7": "WestMichiganTag7",
            "Value8": "WestMichiganTag8",
            "Value9": "WestMichiganTag9",
        },
    },
}


def get_station_config(station):
    return station_config.get(station, None)