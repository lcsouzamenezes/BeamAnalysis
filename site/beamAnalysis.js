var beam = (function (exports) {
  'use strict';

  const sections = Object.freeze(JSON.parse(`{
"W44X335": { "selfWeight": 335, "I": 31100 },
"W44X290": { "selfWeight": 290, "I": 27000 },
"W44X262": { "selfWeight": 262, "I": 24100 },
"W44X230": { "selfWeight": 230, "I": 20800 },
"W40X655": { "selfWeight": 655, "I": 56500 },
"W40X593": { "selfWeight": 593, "I": 50400 },
"W40X503": { "selfWeight": 503, "I": 41600 },
"W40X431": { "selfWeight": 431, "I": 34800 },
"W40X397": { "selfWeight": 397, "I": 32000 },
"W40X372": { "selfWeight": 372, "I": 29600 },
"W40X362": { "selfWeight": 362, "I": 28900 },
"W40X324": { "selfWeight": 324, "I": 25600 },
"W40X297": { "selfWeight": 297, "I": 23200 },
"W40X277": { "selfWeight": 277, "I": 21900 },
"W40X249": { "selfWeight": 249, "I": 19600 },
"W40X215": { "selfWeight": 215, "I": 16700 },
"W40X199": { "selfWeight": 199, "I": 14900 },
"W40X392": { "selfWeight": 392, "I": 29900 },
"W40X331": { "selfWeight": 331, "I": 24700 },
"W40X327": { "selfWeight": 327, "I": 24500 },
"W40X294": { "selfWeight": 294, "I": 21900 },
"W40X278": { "selfWeight": 278, "I": 20500 },
"W40X264": { "selfWeight": 264, "I": 19400 },
"W40X235": { "selfWeight": 235, "I": 17400 },
"W40X211": { "selfWeight": 211, "I": 15500 },
"W40X183": { "selfWeight": 183, "I": 13200 },
"W40X167": { "selfWeight": 167, "I": 11600 },
"W40X149": { "selfWeight": 149, "I": 9800 },
"W36X925": { "selfWeight": 925, "I": 73000 },
"W36X853": { "selfWeight": 853, "I": 70000 },
"W36X802": { "selfWeight": 802, "I": 64800 },
"W36X723": { "selfWeight": 723, "I": 57300 },
"W36X652": { "selfWeight": 652, "I": 50600 },
"W36X529": { "selfWeight": 529, "I": 39600 },
"W36X487": { "selfWeight": 487, "I": 36000 },
"W36X441": { "selfWeight": 441, "I": 32100 },
"W36X395": { "selfWeight": 395, "I": 28500 },
"W36X361": { "selfWeight": 361, "I": 25700 },
"W36X330": { "selfWeight": 330, "I": 23300 },
"W36X302": { "selfWeight": 302, "I": 21100 },
"W36X282": { "selfWeight": 282, "I": 19600 },
"W36X262": { "selfWeight": 262, "I": 17900 },
"W36X247": { "selfWeight": 247, "I": 16700 },
"W36X231": { "selfWeight": 231, "I": 15600 },
"W36X256": { "selfWeight": 256, "I": 16800 },
"W36X232": { "selfWeight": 232, "I": 15000 },
"W36X210": { "selfWeight": 210, "I": 13200 },
"W36X194": { "selfWeight": 194, "I": 12100 },
"W36X182": { "selfWeight": 182, "I": 11300 },
"W36X170": { "selfWeight": 170, "I": 10500 },
"W36X160": { "selfWeight": 160, "I": 9760 },
"W36X150": { "selfWeight": 150, "I": 9040 },
"W36X135": { "selfWeight": 135, "I": 7800 },
"W33X387": { "selfWeight": 387, "I": 24300 },
"W33X354": { "selfWeight": 354, "I": 22000 },
"W33X318": { "selfWeight": 318, "I": 19500 },
"W33X291": { "selfWeight": 291, "I": 17700 },
"W33X263": { "selfWeight": 263, "I": 15900 },
"W33X241": { "selfWeight": 241, "I": 14200 },
"W33X221": { "selfWeight": 221, "I": 12900 },
"W33X201": { "selfWeight": 201, "I": 11600 },
"W33X169": { "selfWeight": 169, "I": 9290 },
"W33X152": { "selfWeight": 152, "I": 8160 },
"W33X141": { "selfWeight": 141, "I": 7450 },
"W33X130": { "selfWeight": 130, "I": 6710 },
"W33X118": { "selfWeight": 118, "I": 5900 },
"W30X391": { "selfWeight": 391, "I": 20700 },
"W30X357": { "selfWeight": 357, "I": 18700 },
"W30X326": { "selfWeight": 326, "I": 16800 },
"W30X292": { "selfWeight": 292, "I": 14900 },
"W30X261": { "selfWeight": 261, "I": 13100 },
"W30X235": { "selfWeight": 235, "I": 11700 },
"W30X211": { "selfWeight": 211, "I": 10300 },
"W30X191": { "selfWeight": 191, "I": 9200 },
"W30X173": { "selfWeight": 173, "I": 8230 },
"W30X148": { "selfWeight": 148, "I": 6680 },
"W30X132": { "selfWeight": 132, "I": 5770 },
"W30X124": { "selfWeight": 124, "I": 5360 },
"W30X116": { "selfWeight": 116, "I": 4930 },
"W30X108": { "selfWeight": 108, "I": 4470 },
"W30X99": { "selfWeight": 99.0, "I": 3990 },
"W30X90": { "selfWeight": 90.0, "I": 3610 },
"W27X539": { "selfWeight": 539, "I": 25600 },
"W27X368": { "selfWeight": 368, "I": 16200 },
"W27X336": { "selfWeight": 336, "I": 14600 },
"W27X307": { "selfWeight": 307, "I": 13100 },
"W27X281": { "selfWeight": 281, "I": 11900 },
"W27X258": { "selfWeight": 258, "I": 10800 },
"W27X235": { "selfWeight": 235, "I": 9700 },
"W27X217": { "selfWeight": 217, "I": 8910 },
"W27X194": { "selfWeight": 194, "I": 7860 },
"W27X178": { "selfWeight": 178, "I": 7020 },
"W27X161": { "selfWeight": 161, "I": 6310 },
"W27X146": { "selfWeight": 146, "I": 5660 },
"W27X129": { "selfWeight": 129, "I": 4760 },
"W27X114": { "selfWeight": 114, "I": 4080 },
"W27X102": { "selfWeight": 102, "I": 3620 },
"W27X94": { "selfWeight": 94.0, "I": 3270 },
"W27X84": { "selfWeight": 84.0, "I": 2850 },
"W24X370": { "selfWeight": 370, "I": 13400 },
"W24X335": { "selfWeight": 335, "I": 11900 },
"W24X306": { "selfWeight": 306, "I": 10700 },
"W24X279": { "selfWeight": 279, "I": 9600 },
"W24X250": { "selfWeight": 250, "I": 8490 },
"W24X229": { "selfWeight": 229, "I": 7650 },
"W24X207": { "selfWeight": 207, "I": 6820 },
"W24X192": { "selfWeight": 192, "I": 6260 },
"W24X176": { "selfWeight": 176, "I": 5680 },
"W24X162": { "selfWeight": 162, "I": 5170 },
"W24X146": { "selfWeight": 146, "I": 4580 },
"W24X131": { "selfWeight": 131, "I": 4020 },
"W24X117": { "selfWeight": 117, "I": 3540 },
"W24X104": { "selfWeight": 104, "I": 3100 },
"W24X103": { "selfWeight": 103, "I": 3000 },
"W24X94": { "selfWeight": 94.0, "I": 2700 },
"W24X84": { "selfWeight": 84.0, "I": 2370 },
"W24X76": { "selfWeight": 76.0, "I": 2100 },
"W24X68": { "selfWeight": 68.0, "I": 1830 },
"W24X62": { "selfWeight": 62.0, "I": 1550 },
"W24X55": { "selfWeight": 55.0, "I": 1350 },
"W21X275": { "selfWeight": 275, "I": 7690 },
"W21X248": { "selfWeight": 248, "I": 6830 },
"W21X223": { "selfWeight": 223, "I": 6080 },
"W21X201": { "selfWeight": 201, "I": 5310 },
"W21X182": { "selfWeight": 182, "I": 4730 },
"W21X166": { "selfWeight": 166, "I": 4280 },
"W21X147": { "selfWeight": 147, "I": 3630 },
"W21X132": { "selfWeight": 132, "I": 3220 },
"W21X122": { "selfWeight": 122, "I": 2960 },
"W21X111": { "selfWeight": 111, "I": 2670 },
"W21X101": { "selfWeight": 101, "I": 2420 },
"W21X93": { "selfWeight": 93.0, "I": 2070 },
"W21X83": { "selfWeight": 83.0, "I": 1830 },
"W21X73": { "selfWeight": 73.0, "I": 1600 },
"W21X68": { "selfWeight": 68.0, "I": 1480 },
"W21X62": { "selfWeight": 62.0, "I": 1330 },
"W21X55": { "selfWeight": 55.0, "I": 1140 },
"W21X48": { "selfWeight": 48.0, "I": 959 },
"W21X57": { "selfWeight": 57.0, "I": 1170 },
"W21X50": { "selfWeight": 50.0, "I": 984 },
"W21X44": { "selfWeight": 44.0, "I": 843 },
"W18X311": { "selfWeight": 311, "I": 6970 },
"W18X283": { "selfWeight": 283, "I": 6170 },
"W18X258": { "selfWeight": 258, "I": 5510 },
"W18X234": { "selfWeight": 234, "I": 4900 },
"W18X211": { "selfWeight": 211, "I": 4330 },
"W18X192": { "selfWeight": 192, "I": 3870 },
"W18X175": { "selfWeight": 175, "I": 3450 },
"W18X158": { "selfWeight": 158, "I": 3060 },
"W18X143": { "selfWeight": 143, "I": 2750 },
"W18X130": { "selfWeight": 130, "I": 2460 },
"W18X119": { "selfWeight": 119, "I": 2190 },
"W18X106": { "selfWeight": 106, "I": 1910 },
"W18X97": { "selfWeight": 97.0, "I": 1750 },
"W18X86": { "selfWeight": 86.0, "I": 1530 },
"W18X76": { "selfWeight": 76.0, "I": 1330 },
"W18X71": { "selfWeight": 71.0, "I": 1170 },
"W18X65": { "selfWeight": 65.0, "I": 1070 },
"W18X60": { "selfWeight": 60.0, "I": 984 },
"W18X55": { "selfWeight": 55.0, "I": 890 },
"W18X50": { "selfWeight": 50.0, "I": 800 },
"W18X46": { "selfWeight": 46.0, "I": 712 },
"W18X40": { "selfWeight": 40.0, "I": 612 },
"W18X35": { "selfWeight": 35.0, "I": 510 },
"W16X100": { "selfWeight": 100, "I": 1490 },
"W16X89": { "selfWeight": 89.0, "I": 1300 },
"W16X77": { "selfWeight": 77.0, "I": 1110 },
"W16X67": { "selfWeight": 67.0, "I": 954 },
"W16X57": { "selfWeight": 57.0, "I": 758 },
"W16X50": { "selfWeight": 50.0, "I": 659 },
"W16X45": { "selfWeight": 45.0, "I": 586 },
"W16X40": { "selfWeight": 40.0, "I": 518 },
"W16X36": { "selfWeight": 36.0, "I": 448 },
"W16X31": { "selfWeight": 31.0, "I": 375 },
"W16X26": { "selfWeight": 26.0, "I": 301 },
"W14X873": { "selfWeight": 873, "I": 18100 },
"W14X808": { "selfWeight": 808, "I": 15900 },
"W14X730": { "selfWeight": 730, "I": 14300 },
"W14X665": { "selfWeight": 665, "I": 12400 },
"W14X605": { "selfWeight": 605, "I": 10800 },
"W14X550": { "selfWeight": 550, "I": 9430 },
"W14X500": { "selfWeight": 500, "I": 8210 },
"W14X455": { "selfWeight": 455, "I": 7190 },
"W14X426": { "selfWeight": 426, "I": 6600 },
"W14X398": { "selfWeight": 398, "I": 6000 },
"W14X370": { "selfWeight": 370, "I": 5440 },
"W14X342": { "selfWeight": 342, "I": 4900 },
"W14X311": { "selfWeight": 311, "I": 4330 },
"W14X283": { "selfWeight": 283, "I": 3840 },
"W14X257": { "selfWeight": 257, "I": 3400 },
"W14X233": { "selfWeight": 233, "I": 3010 },
"W14X211": { "selfWeight": 211, "I": 2660 },
"W14X193": { "selfWeight": 193, "I": 2400 },
"W14X176": { "selfWeight": 176, "I": 2140 },
"W14X159": { "selfWeight": 159, "I": 1900 },
"W14X145": { "selfWeight": 145, "I": 1710 },
"W14X132": { "selfWeight": 132, "I": 1530 },
"W14X120": { "selfWeight": 120, "I": 1380 },
"W14X109": { "selfWeight": 109, "I": 1240 },
"W14X99": { "selfWeight": 99.0, "I": 1110 },
"W14X90": { "selfWeight": 90.0, "I": 999 },
"W14X82": { "selfWeight": 82.0, "I": 881 },
"W14X74": { "selfWeight": 74.0, "I": 795 },
"W14X68": { "selfWeight": 68.0, "I": 722 },
"W14X61": { "selfWeight": 61.0, "I": 640 },
"W14X53": { "selfWeight": 53.0, "I": 541 },
"W14X48": { "selfWeight": 48.0, "I": 484 },
"W14X43": { "selfWeight": 43.0, "I": 428 },
"W14X38": { "selfWeight": 38.0, "I": 385 },
"W14X34": { "selfWeight": 34.0, "I": 340 },
"W14X30": { "selfWeight": 30.0, "I": 291 },
"W14X26": { "selfWeight": 26.0, "I": 245 },
"W14X22": { "selfWeight": 22.0, "I": 199 },
"W12X336": { "selfWeight": 336, "I": 4060 },
"W12X305": { "selfWeight": 305, "I": 3550 },
"W12X279": { "selfWeight": 279, "I": 3110 },
"W12X252": { "selfWeight": 252, "I": 2720 },
"W12X230": { "selfWeight": 230, "I": 2420 },
"W12X210": { "selfWeight": 210, "I": 2140 },
"W12X190": { "selfWeight": 190, "I": 1890 },
"W12X170": { "selfWeight": 170, "I": 1650 },
"W12X152": { "selfWeight": 152, "I": 1430 },
"W12X136": { "selfWeight": 136, "I": 1240 },
"W12X120": { "selfWeight": 120, "I": 1070 },
"W12X106": { "selfWeight": 106, "I": 933 },
"W12X96": { "selfWeight": 96.0, "I": 833 },
"W12X87": { "selfWeight": 87.0, "I": 740 },
"W12X79": { "selfWeight": 79.0, "I": 662 },
"W12X72": { "selfWeight": 72.0, "I": 597 },
"W12X65": { "selfWeight": 65.0, "I": 533 },
"W12X58": { "selfWeight": 58.0, "I": 475 },
"W12X53": { "selfWeight": 53.0, "I": 425 },
"W12X50": { "selfWeight": 50.0, "I": 391 },
"W12X45": { "selfWeight": 45.0, "I": 348 },
"W12X40": { "selfWeight": 40.0, "I": 307 },
"W12X35": { "selfWeight": 35.0, "I": 285 },
"W12X30": { "selfWeight": 30.0, "I": 238 },
"W12X26": { "selfWeight": 26.0, "I": 204 },
"W12X22": { "selfWeight": 22.0, "I": 156 },
"W12X19": { "selfWeight": 19.0, "I": 130 },
"W12X16": { "selfWeight": 16.0, "I": 103 },
"W12X14": { "selfWeight": 14.0, "I": 88.6 },
"W10X112": { "selfWeight": 112, "I": 716 },
"W10X100": { "selfWeight": 100, "I": 623 },
"W10X88": { "selfWeight": 88.0, "I": 534 },
"W10X77": { "selfWeight": 77.0, "I": 455 },
"W10X68": { "selfWeight": 68.0, "I": 394 },
"W10X60": { "selfWeight": 60.0, "I": 341 },
"W10X54": { "selfWeight": 54.0, "I": 303 },
"W10X49": { "selfWeight": 49.0, "I": 272 },
"W10X45": { "selfWeight": 45.0, "I": 248 },
"W10X39": { "selfWeight": 39.0, "I": 209 },
"W10X33": { "selfWeight": 33.0, "I": 171 },
"W10X30": { "selfWeight": 30.0, "I": 170 },
"W10X26": { "selfWeight": 26.0, "I": 144 },
"W10X22": { "selfWeight": 22.0, "I": 118 },
"W10X19": { "selfWeight": 19.0, "I": 96.3 },
"W10X17": { "selfWeight": 17.0, "I": 81.9 },
"W10X15": { "selfWeight": 15.0, "I": 68.9 },
"W10X12": { "selfWeight": 12.0, "I": 53.8 },
"W8X67": { "selfWeight": 67.0, "I": 272 },
"W8X58": { "selfWeight": 58.0, "I": 228 },
"W8X48": { "selfWeight": 48.0, "I": 184 },
"W8X40": { "selfWeight": 40.0, "I": 146 },
"W8X35": { "selfWeight": 35.0, "I": 127 },
"W8X31": { "selfWeight": 31.0, "I": 110 },
"W8X28": { "selfWeight": 28.0, "I": 98.0 },
"W8X24": { "selfWeight": 24.0, "I": 82.7 },
"W8X21": { "selfWeight": 21.0, "I": 75.3 },
"W8X18": { "selfWeight": 18.0, "I": 61.9 },
"W8X15": { "selfWeight": 15.0, "I": 48.0 },
"W8X13": { "selfWeight": 13.0, "I": 39.6 },
"W8X10": { "selfWeight": 10.0, "I": 30.8 },
"W6X25": { "selfWeight": 25.0, "I": 53.4 },
"W6X20": { "selfWeight": 20.0, "I": 41.4 },
"W6X15": { "selfWeight": 15.0, "I": 29.1 },
"W6X16": { "selfWeight": 16.0, "I": 32.1 },
"W6X12": { "selfWeight": 12.0, "I": 22.1 },
"W6X9": { "selfWeight": 9.00, "I": 16.4 },
"W6X8.5": { "selfWeight": 8.50, "I": 14.9 },
"W5X19": { "selfWeight": 19.0, "I": 26.3 },
"W5X16": { "selfWeight": 16.0, "I": 21.4 },
"W4X13": { "selfWeight": 13.0, "I": 11.3 },
"M12.5X12.4": { "selfWeight": 12.4, "I": 89.3 },
"M12.5X11.6": { "selfWeight": 11.6, "I": 80.3 },
"M12X11.8": { "selfWeight": 11.8, "I": 72.2 },
"M12X10.8": { "selfWeight": 10.8, "I": 66.7 },
"M12X10": { "selfWeight": 10.0, "I": 61.7 },
"M10X9": { "selfWeight": 9.00, "I": 39.0 },
"M10X8": { "selfWeight": 8.00, "I": 34.6 },
"M10X7.5": { "selfWeight": 7.50, "I": 33.0 },
"M8X6.5": { "selfWeight": 6.50, "I": 18.5 },
"M8X6.2": { "selfWeight": 6.20, "I": 17.6 },
"M6X4.4": { "selfWeight": 4.40, "I": 7.23 },
"M6X3.7": { "selfWeight": 3.70, "I": 5.96 },
"M5X18.9": { "selfWeight": 18.9, "I": 24.2 },
"M4X6": { "selfWeight": 6.00, "I": 4.72 },
"M4X4.08": { "selfWeight": 4.08, "I": 3.53 },
"M4X3.45": { "selfWeight": 3.45, "I": 2.86 },
"M4X3.2": { "selfWeight": 3.20, "I": 2.86 },
"M3X2.9": { "selfWeight": 2.90, "I": 1.50 },
"S24X121": { "selfWeight": 121, "I": 3160 },
"S24X106": { "selfWeight": 106, "I": 2940 },
"S24X100": { "selfWeight": 100, "I": 2380 },
"S24X90": { "selfWeight": 90.0, "I": 2250 },
"S24X80": { "selfWeight": 80.0, "I": 2100 },
"S20X96": { "selfWeight": 96.0, "I": 1670 },
"S20X86": { "selfWeight": 86.0, "I": 1570 },
"S20X75": { "selfWeight": 75.0, "I": 1280 },
"S20X66": { "selfWeight": 66.0, "I": 1190 },
"S18X70": { "selfWeight": 70.0, "I": 923 },
"S18X54.7": { "selfWeight": 54.7, "I": 801 },
"S15X50": { "selfWeight": 50.0, "I": 485 },
"S15X42.9": { "selfWeight": 42.9, "I": 446 },
"S12X50": { "selfWeight": 50.0, "I": 303 },
"S12X40.8": { "selfWeight": 40.8, "I": 270 },
"S12X35": { "selfWeight": 35.0, "I": 228 },
"S12X31.8": { "selfWeight": 31.8, "I": 217 },
"S10X35": { "selfWeight": 35.0, "I": 147 },
"S10X25.4": { "selfWeight": 25.4, "I": 123 },
"S8X23": { "selfWeight": 23.0, "I": 64.7 },
"S8X18.4": { "selfWeight": 18.4, "I": 57.5 },
"S6X17.25": { "selfWeight": 17.25, "I": 26.2 },
"S6X12.5": { "selfWeight": 12.5, "I": 22.0 },
"S5X10": { "selfWeight": 10.0, "I": 12.3 },
"S4X9.5": { "selfWeight": 9.50, "I": 6.76 },
"S4X7.7": { "selfWeight": 7.70, "I": 6.05 },
"S3X7.5": { "selfWeight": 7.50, "I": 2.91 },
"S3X5.7": { "selfWeight": 5.70, "I": 2.50 },
"HP18X204": { "selfWeight": 204, "I": 3480 },
"HP18X181": { "selfWeight": 181, "I": 3020 },
"HP18X157": { "selfWeight": 157, "I": 2570 },
"HP18X135": { "selfWeight": 135, "I": 2200 },
"HP16X183": { "selfWeight": 183, "I": 2510 },
"HP16X162": { "selfWeight": 162, "I": 2190 },
"HP16X141": { "selfWeight": 141, "I": 1870 },
"HP16X121": { "selfWeight": 121, "I": 1590 },
"HP16X101": { "selfWeight": 101, "I": 1300 },
"HP16X88": { "selfWeight": 88.0, "I": 1110 },
"HP14X117": { "selfWeight": 117, "I": 1220 },
"HP14X102": { "selfWeight": 102, "I": 1050 },
"HP14X89": { "selfWeight": 89.0, "I": 904 },
"HP14X73": { "selfWeight": 73.0, "I": 729 },
"HP12X89": { "selfWeight": 89.0, "I": 693 },
"HP12X84": { "selfWeight": 84.0, "I": 650 },
"HP12X74": { "selfWeight": 74.0, "I": 569 },
"HP12X63": { "selfWeight": 63.0, "I": 472 },
"HP12X53": { "selfWeight": 53.0, "I": 393 },
"HP10X57": { "selfWeight": 57.0, "I": 294 },
"HP10X42": { "selfWeight": 42.0, "I": 210 },
"HP8X36": { "selfWeight": 36.0, "I": 119 },
"C15X50": { "selfWeight": 50.0, "I": 404 },
"C15X40": { "selfWeight": 40.0, "I": 348 },
"C15X33.9": { "selfWeight": 33.9, "I": 315 },
"C12X30": { "selfWeight": 30.0, "I": 162 },
"C12X25": { "selfWeight": 25.0, "I": 144 },
"C12X20.7": { "selfWeight": 20.7, "I": 129 },
"C10X30": { "selfWeight": 30.0, "I": 103 },
"C10X25": { "selfWeight": 25.0, "I": 91.1 },
"C10X20": { "selfWeight": 20.0, "I": 78.9 },
"C10X15.3": { "selfWeight": 15.3, "I": 67.3 },
"C9X20": { "selfWeight": 20.0, "I": 60.9 },
"C9X15": { "selfWeight": 15.0, "I": 51.0 },
"C9X13.4": { "selfWeight": 13.4, "I": 47.8 },
"C8X18.75": { "selfWeight": 18.75, "I": 43.9 },
"C8X13.75": { "selfWeight": 13.75, "I": 36.1 },
"C8X11.5": { "selfWeight": 11.5, "I": 32.5 },
"C7X14.75": { "selfWeight": 14.75, "I": 27.2 },
"C7X12.25": { "selfWeight": 12.25, "I": 24.2 },
"C7X9.8": { "selfWeight": 9.80, "I": 21.2 },
"C6X13": { "selfWeight": 13.0, "I": 17.3 },
"C6X10.5": { "selfWeight": 10.5, "I": 15.1 },
"C6X8.2": { "selfWeight": 8.20, "I": 13.1 },
"C5X9": { "selfWeight": 9.00, "I": 8.89 },
"C5X6.7": { "selfWeight": 6.70, "I": 7.48 },
"C4X7.25": { "selfWeight": 7.25, "I": 4.58 },
"C4X6.25": { "selfWeight": 6.25, "I": 4.19 },
"C4X5.4": { "selfWeight": 5.40, "I": 3.85 },
"C4X4.5": { "selfWeight": 4.50, "I": 3.53 },
"C3X6": { "selfWeight": 6.00, "I": 2.07 },
"C3X5": { "selfWeight": 5.00, "I": 1.85 },
"C3X4.1": { "selfWeight": 4.10, "I": 1.65 },
"C3X3.5": { "selfWeight": 3.50, "I": 1.57 },
"MC18X58": { "selfWeight": 58.0, "I": 675 },
"MC18X51.9": { "selfWeight": 51.9, "I": 627 },
"MC18X45.8": { "selfWeight": 45.8, "I": 578 },
"MC18X42.7": { "selfWeight": 42.7, "I": 554 },
"MC13X50": { "selfWeight": 50.0, "I": 314 },
"MC13X40": { "selfWeight": 40.0, "I": 273 },
"MC13X35": { "selfWeight": 35.0, "I": 252 },
"MC13X31.8": { "selfWeight": 31.8, "I": 239 },
"MC12X50": { "selfWeight": 50.0, "I": 269 },
"MC12X45": { "selfWeight": 45.0, "I": 251 },
"MC12X40": { "selfWeight": 40.0, "I": 234 },
"MC12X35": { "selfWeight": 35.0, "I": 216 },
"MC12X31": { "selfWeight": 31.0, "I": 202 },
"MC12X14.3": { "selfWeight": 14.3, "I": 76.1 },
"MC12X10.6": { "selfWeight": 10.6, "I": 55.3 },
"MC10X41.1": { "selfWeight": 41.1, "I": 157 },
"MC10X33.6": { "selfWeight": 33.6, "I": 139 },
"MC10X28.5": { "selfWeight": 28.5, "I": 126 },
"MC10X25": { "selfWeight": 25.0, "I": 110 },
"MC10X22": { "selfWeight": 22.0, "I": 102 },
"MC10X8.4": { "selfWeight": 8.40, "I": 31.9 },
"MC10X6.5": { "selfWeight": 6.50, "I": 22.9 },
"MC9X25.4": { "selfWeight": 25.4, "I": 87.9 },
"MC9X23.9": { "selfWeight": 23.9, "I": 84.9 },
"MC8X22.8": { "selfWeight": 22.8, "I": 63.8 },
"MC8X21.4": { "selfWeight": 21.4, "I": 61.5 },
"MC8X20": { "selfWeight": 20.0, "I": 54.4 },
"MC8X18.7": { "selfWeight": 18.7, "I": 52.4 },
"MC8X8.5": { "selfWeight": 8.50, "I": 23.3 },
"MC7X22.7": { "selfWeight": 22.7, "I": 47.4 },
"MC7X19.1": { "selfWeight": 19.1, "I": 43.1 },
"MC6X18": { "selfWeight": 18.0, "I": 29.7 },
"MC6X15.3": { "selfWeight": 15.3, "I": 25.3 },
"MC6X16.3": { "selfWeight": 16.3, "I": 26.0 },
"MC6X15.1": { "selfWeight": 15.1, "I": 24.9 },
"MC6X12": { "selfWeight": 12.0, "I": 18.7 },
"MC6X7": { "selfWeight": 7.00, "I": 11.4 },
"MC6X6.5": { "selfWeight": 6.50, "I": 11.0 },
"MC4X13.8": { "selfWeight": 13.8, "I": 8.85 },
"MC3X7.1": { "selfWeight": 7.10, "I": 2.72 },
"L12X12X1-3/8": { "selfWeight": 105, "I": 413 },
"L12X12X1-1/4": { "selfWeight": 96.4, "I": 381 },
"L12X12X1-1/8": { "selfWeight": 87.2, "I": 350 },
"L12X12X1": { "selfWeight": 77.8, "I": 315 },
"L10X10X1-3/8": { "selfWeight": 87.1, "I": 231 },
"L10X10X1-1/4": { "selfWeight": 79.9, "I": 213 },
"L10X10X1-1/8": { "selfWeight": 72.3, "I": 196 },
"L10X10X1": { "selfWeight": 64.7, "I": 177 },
"L10X10X7/8": { "selfWeight": 56.9, "I": 158 },
"L10X10X3/4": { "selfWeight": 49.1, "I": 139 },
"L8X8X1-1/8": { "selfWeight": 56.9, "I": 98.1 },
"L8X8X1": { "selfWeight": 51.0, "I": 89.1 },
"L8X8X7/8": { "selfWeight": 45.0, "I": 79.7 },
"L8X8X3/4": { "selfWeight": 38.9, "I": 69.9 },
"L8X8X5/8": { "selfWeight": 32.7, "I": 59.6 },
"L8X8X9/16": { "selfWeight": 29.6, "I": 54.2 },
"L8X8X1/2": { "selfWeight": 26.4, "I": 48.8 },
"L8X6X1": { "selfWeight": 44.2, "I": 80.9 },
"L8X6X7/8": { "selfWeight": 39.1, "I": 72.4 },
"L8X6X3/4": { "selfWeight": 33.8, "I": 63.5 },
"L8X6X5/8": { "selfWeight": 28.5, "I": 54.2 },
"L8X6X9/16": { "selfWeight": 25.7, "I": 49.4 },
"L8X6X1/2": { "selfWeight": 23.0, "I": 44.4 },
"L8X6X7/16": { "selfWeight": 20.2, "I": 39.3 },
"L8X4X1": { "selfWeight": 37.4, "I": 69.7 },
"L8X4X7/8": { "selfWeight": 33.1, "I": 62.6 },
"L8X4X3/4": { "selfWeight": 28.7, "I": 55.0 },
"L8X4X5/8": { "selfWeight": 24.2, "I": 47.0 },
"L8X4X9/16": { "selfWeight": 21.9, "I": 42.9 },
"L8X4X1/2": { "selfWeight": 19.6, "I": 38.6 },
"L8X4X7/16": { "selfWeight": 17.2, "I": 34.2 },
"L7X4X3/4": { "selfWeight": 26.2, "I": 37.8 },
"L7X4X5/8": { "selfWeight": 22.1, "I": 32.4 },
"L7X4X1/2": { "selfWeight": 17.9, "I": 26.6 },
"L7X4X7/16": { "selfWeight": 15.7, "I": 23.6 },
"L7X4X3/8": { "selfWeight": 13.6, "I": 20.5 },
"L6X6X1": { "selfWeight": 37.4, "I": 35.4 },
"L6X6X7/8": { "selfWeight": 33.1, "I": 31.9 },
"L6X6X3/4": { "selfWeight": 28.7, "I": 28.1 },
"L6X6X5/8": { "selfWeight": 24.2, "I": 24.1 },
"L6X6X9/16": { "selfWeight": 21.9, "I": 22.0 },
"L6X6X1/2": { "selfWeight": 19.6, "I": 19.9 },
"L6X6X7/16": { "selfWeight": 17.2, "I": 17.6 },
"L6X6X3/8": { "selfWeight": 14.9, "I": 15.4 },
"L6X6X5/16": { "selfWeight": 12.4, "I": 13.0 },
"L6X4X7/8": { "selfWeight": 27.2, "I": 27.7 },
"L6X4X3/4": { "selfWeight": 23.6, "I": 24.5 },
"L6X4X5/8": { "selfWeight": 20.0, "I": 21.0 },
"L6X4X9/16": { "selfWeight": 18.1, "I": 19.2 },
"L6X4X1/2": { "selfWeight": 16.2, "I": 17.3 },
"L6X4X7/16": { "selfWeight": 14.3, "I": 15.4 },
"L6X4X3/8": { "selfWeight": 12.3, "I": 13.4 },
"L6X4X5/16": { "selfWeight": 10.3, "I": 11.4 },
"L6X3-1/2X1/2": { "selfWeight": 15.3, "I": 16.6 },
"L6X3-1/2X3/8": { "selfWeight": 11.7, "I": 12.9 },
"L6X3-1/2X5/16": { "selfWeight": 9.80, "I": 10.9 },
"L5X5X7/8": { "selfWeight": 27.2, "I": 17.8 },
"L5X5X3/4": { "selfWeight": 23.6, "I": 15.7 },
"L5X5X5/8": { "selfWeight": 20.0, "I": 13.6 },
"L5X5X1/2": { "selfWeight": 16.2, "I": 11.3 },
"L5X5X7/16": { "selfWeight": 14.3, "I": 10.0 },
"L5X5X3/8": { "selfWeight": 12.3, "I": 8.76 },
"L5X5X5/16": { "selfWeight": 10.3, "I": 7.44 },
"L5X3-1/2X3/4": { "selfWeight": 19.8, "I": 13.9 },
"L5X3-1/2X5/8": { "selfWeight": 16.8, "I": 12.0 },
"L5X3-1/2X1/2": { "selfWeight": 13.6, "I": 10.0 },
"L5X3-1/2X3/8": { "selfWeight": 10.4, "I": 7.75 },
"L5X3-1/2X5/16": { "selfWeight": 8.70, "I": 6.58 },
"L5X3-1/2X1/4": { "selfWeight": 7.00, "I": 5.36 },
"L5X3X1/2": { "selfWeight": 12.8, "I": 9.43 },
"L5X3X7/16": { "selfWeight": 11.3, "I": 8.41 },
"L5X3X3/8": { "selfWeight": 9.80, "I": 7.35 },
"L5X3X5/16": { "selfWeight": 8.20, "I": 6.24 },
"L5X3X1/4": { "selfWeight": 6.60, "I": 5.09 },
"L4X4X3/4": { "selfWeight": 18.5, "I": 7.62 },
"L4X4X5/8": { "selfWeight": 15.7, "I": 6.62 },
"L4X4X1/2": { "selfWeight": 12.8, "I": 5.52 },
"L4X4X7/16": { "selfWeight": 11.3, "I": 4.93 },
"L4X4X3/8": { "selfWeight": 9.80, "I": 4.32 },
"L4X4X5/16": { "selfWeight": 8.20, "I": 3.67 },
"L4X4X1/4": { "selfWeight": 6.60, "I": 3.00 },
"L4X3-1/2X1/2": { "selfWeight": 11.9, "I": 5.30 },
"L4X3-1/2X3/8": { "selfWeight": 9.10, "I": 4.15 },
"L4X3-1/2X5/16": { "selfWeight": 7.70, "I": 3.53 },
"L4X3-1/2X1/4": { "selfWeight": 6.20, "I": 2.89 },
"L4X3X5/8": { "selfWeight": 13.6, "I": 6.01 },
"L4X3X1/2": { "selfWeight": 11.1, "I": 5.02 },
"L4X3X3/8": { "selfWeight": 8.50, "I": 3.94 },
"L4X3X5/16": { "selfWeight": 7.20, "I": 3.36 },
"L4X3X1/4": { "selfWeight": 5.80, "I": 2.75 },
"L3-1/2X3-1/2X1/2": { "selfWeight": 11.1, "I": 3.63 },
"L3-1/2X3-1/2X7/16": { "selfWeight": 9.80, "I": 3.25 },
"L3-1/2X3-1/2X3/8": { "selfWeight": 8.50, "I": 2.86 },
"L3-1/2X3-1/2X5/16": { "selfWeight": 7.20, "I": 2.44 },
"L3-1/2X3-1/2X1/4": { "selfWeight": 5.80, "I": 2.00 },
"L3-1/2X3X1/2": { "selfWeight": 10.2, "I": 3.45 },
"L3-1/2X3X7/16": { "selfWeight": 9.10, "I": 3.10 },
"L3-1/2X3X3/8": { "selfWeight": 7.90, "I": 2.73 },
"L3-1/2X3X5/16": { "selfWeight": 6.60, "I": 2.33 },
"L3-1/2X3X1/4": { "selfWeight": 5.40, "I": 1.92 },
"L3-1/2X2-1/2X1/2": { "selfWeight": 9.40, "I": 3.24 },
"L3-1/2X2-1/2X3/8": { "selfWeight": 7.20, "I": 2.56 },
"L3-1/2X2-1/2X5/16": { "selfWeight": 6.10, "I": 2.20 },
"L3-1/2X2-1/2X1/4": { "selfWeight": 4.90, "I": 1.81 },
"L3X3X1/2": { "selfWeight": 9.40, "I": 2.20 },
"L3X3X7/16": { "selfWeight": 8.30, "I": 1.98 },
"L3X3X3/8": { "selfWeight": 7.20, "I": 1.75 },
"L3X3X5/16": { "selfWeight": 6.10, "I": 1.50 },
"L3X3X1/4": { "selfWeight": 4.90, "I": 1.23 },
"L3X3X3/16": { "selfWeight": 3.71, "I": 0.948 },
"L3X2-1/2X1/2": { "selfWeight": 8.50, "I": 2.07 },
"L3X2-1/2X7/16": { "selfWeight": 7.60, "I": 1.87 },
"L3X2-1/2X3/8": { "selfWeight": 6.60, "I": 1.65 },
"L3X2-1/2X5/16": { "selfWeight": 5.60, "I": 1.41 },
"L3X2-1/2X1/4": { "selfWeight": 4.50, "I": 1.16 },
"L3X2-1/2X3/16": { "selfWeight": 3.39, "I": 0.899 },
"L3X2X1/2": { "selfWeight": 7.70, "I": 1.92 },
"L3X2X3/8": { "selfWeight": 5.90, "I": 1.54 },
"L3X2X5/16": { "selfWeight": 5.00, "I": 1.32 },
"L3X2X1/4": { "selfWeight": 4.10, "I": 1.09 },
"L3X2X3/16": { "selfWeight": 3.07, "I": 0.847 },
"L2-1/2X2-1/2X1/2": { "selfWeight": 7.70, "I": 1.22 },
"L2-1/2X2-1/2X3/8": { "selfWeight": 5.90, "I": 0.972 },
"L2-1/2X2-1/2X5/16": { "selfWeight": 5.00, "I": 0.837 },
"L2-1/2X2-1/2X1/4": { "selfWeight": 4.10, "I": 0.692 },
"L2-1/2X2-1/2X3/16": { "selfWeight": 3.07, "I": 0.535 },
"L2-1/2X2X3/8": { "selfWeight": 5.30, "I": 0.914 },
"L2-1/2X2X5/16": { "selfWeight": 4.50, "I": 0.790 },
"L2-1/2X2X1/4": { "selfWeight": 3.62, "I": 0.656 },
"L2-1/2X2X3/16": { "selfWeight": 2.75, "I": 0.511 },
"L2-1/2X1-1/2X1/4": { "selfWeight": 3.19, "I": 0.594 },
"L2-1/2X1-1/2X3/16": { "selfWeight": 2.44, "I": 0.464 },
"L2X2X3/8": { "selfWeight": 4.70, "I": 0.476 },
"L2X2X5/16": { "selfWeight": 3.92, "I": 0.414 },
"L2X2X1/4": { "selfWeight": 3.19, "I": 0.346 },
"L2X2X3/16": { "selfWeight": 2.44, "I": 0.271 },
"L2X2X1/8": { "selfWeight": 1.65, "I": 0.189 },
"WT22X167.5": { "selfWeight": 167.5, "I": 2170 },
"WT22X145": { "selfWeight": 145, "I": 1830 },
"WT22X131": { "selfWeight": 131, "I": 1640 },
"WT22X115": { "selfWeight": 115, "I": 1440 },
"WT20X327.5": { "selfWeight": 327.5, "I": 3730 },
"WT20X296.5": { "selfWeight": 296.5, "I": 3310 },
"WT20X251.5": { "selfWeight": 251.5, "I": 2730 },
"WT20X215.5": { "selfWeight": 215.5, "I": 2290 },
"WT20X198.5": { "selfWeight": 198.5, "I": 2070 },
"WT20X186": { "selfWeight": 186, "I": 1930 },
"WT20X181": { "selfWeight": 181, "I": 1870 },
"WT20X162": { "selfWeight": 162, "I": 1650 },
"WT20X148.5": { "selfWeight": 148.5, "I": 1500 },
"WT20X138.5": { "selfWeight": 138.5, "I": 1360 },
"WT20X124.5": { "selfWeight": 124.5, "I": 1210 },
"WT20X107.5": { "selfWeight": 107.5, "I": 1030 },
"WT20X99.5": { "selfWeight": 99.5, "I": 988 },
"WT20X196": { "selfWeight": 196, "I": 2270 },
"WT20X165.5": { "selfWeight": 165.5, "I": 1880 },
"WT20X163.5": { "selfWeight": 163.5, "I": 1840 },
"WT20X147": { "selfWeight": 147, "I": 1630 },
"WT20X139": { "selfWeight": 139, "I": 1550 },
"WT20X132": { "selfWeight": 132, "I": 1450 },
"WT20X117.5": { "selfWeight": 117.5, "I": 1260 },
"WT20X105.5": { "selfWeight": 105.5, "I": 1120 },
"WT20X91.5": { "selfWeight": 91.5, "I": 955 },
"WT20X83.5": { "selfWeight": 83.5, "I": 899 },
"WT20X74.5": { "selfWeight": 74.5, "I": 815 },
"WT18X462.5": { "selfWeight": 462.5, "I": 5130 },
"WT18X426.5": { "selfWeight": 426.5, "I": 4480 },
"WT18X401": { "selfWeight": 401, "I": 4110 },
"WT18X361.5": { "selfWeight": 361.5, "I": 3610 },
"WT18X326": { "selfWeight": 326, "I": 3160 },
"WT18X264.5": { "selfWeight": 264.5, "I": 2440 },
"WT18X243.5": { "selfWeight": 243.5, "I": 2220 },
"WT18X220.5": { "selfWeight": 220.5, "I": 1980 },
"WT18X197.5": { "selfWeight": 197.5, "I": 1740 },
"WT18X180.5": { "selfWeight": 180.5, "I": 1570 },
"WT18X165": { "selfWeight": 165, "I": 1410 },
"WT18X151": { "selfWeight": 151, "I": 1280 },
"WT18X141": { "selfWeight": 141, "I": 1190 },
"WT18X131": { "selfWeight": 131, "I": 1110 },
"WT18X123.5": { "selfWeight": 123.5, "I": 1040 },
"WT18X115.5": { "selfWeight": 115.5, "I": 978 },
"WT18X128": { "selfWeight": 128, "I": 1210 },
"WT18X116": { "selfWeight": 116, "I": 1080 },
"WT18X105": { "selfWeight": 105, "I": 985 },
"WT18X97": { "selfWeight": 97.0, "I": 901 },
"WT18X91": { "selfWeight": 91.0, "I": 845 },
"WT18X85": { "selfWeight": 85.0, "I": 786 },
"WT18X80": { "selfWeight": 80.0, "I": 740 },
"WT18X75": { "selfWeight": 75.0, "I": 698 },
"WT18X67.5": { "selfWeight": 67.5, "I": 637 },
"WT16.5X193.5": { "selfWeight": 193.5, "I": 1460 },
"WT16.5X177": { "selfWeight": 177, "I": 1320 },
"WT16.5X159": { "selfWeight": 159, "I": 1160 },
"WT16.5X145.5": { "selfWeight": 145.5, "I": 1060 },
"WT16.5X131.5": { "selfWeight": 131.5, "I": 943 },
"WT16.5X120.5": { "selfWeight": 120.5, "I": 872 },
"WT16.5X110.5": { "selfWeight": 110.5, "I": 799 },
"WT16.5X100.5": { "selfWeight": 100.5, "I": 725 },
"WT16.5X84.5": { "selfWeight": 84.5, "I": 649 },
"WT16.5X76": { "selfWeight": 76.0, "I": 592 },
"WT16.5X70.5": { "selfWeight": 70.5, "I": 552 },
"WT16.5X65": { "selfWeight": 65.0, "I": 513 },
"WT16.5X59": { "selfWeight": 59.0, "I": 469 },
"WT15X195.5": { "selfWeight": 195.5, "I": 1220 },
"WT15X178.5": { "selfWeight": 178.5, "I": 1090 },
"WT15X163": { "selfWeight": 163, "I": 981 },
"WT15X146": { "selfWeight": 146, "I": 861 },
"WT15X130.5": { "selfWeight": 130.5, "I": 765 },
"WT15X117.5": { "selfWeight": 117.5, "I": 674 },
"WT15X105.5": { "selfWeight": 105.5, "I": 610 },
"WT15X95.5": { "selfWeight": 95.5, "I": 549 },
"WT15X86.5": { "selfWeight": 86.5, "I": 497 },
"WT15X74": { "selfWeight": 74.0, "I": 466 },
"WT15X66": { "selfWeight": 66.0, "I": 421 },
"WT15X62": { "selfWeight": 62.0, "I": 396 },
"WT15X58": { "selfWeight": 58.0, "I": 373 },
"WT15X54": { "selfWeight": 54.0, "I": 349 },
"WT15X49.5": { "selfWeight": 49.5, "I": 322 },
"WT15X45": { "selfWeight": 45.0, "I": 290 },
"WT13.5X269.5": { "selfWeight": 269.5, "I": 1530 },
"WT13.5X184": { "selfWeight": 184, "I": 939 },
"WT13.5X168": { "selfWeight": 168, "I": 839 },
"WT13.5X153.5": { "selfWeight": 153.5, "I": 753 },
"WT13.5X140.5": { "selfWeight": 140.5, "I": 677 },
"WT13.5X129": { "selfWeight": 129, "I": 613 },
"WT13.5X117.5": { "selfWeight": 117.5, "I": 556 },
"WT13.5X108.5": { "selfWeight": 108.5, "I": 502 },
"WT13.5X97": { "selfWeight": 97.0, "I": 444 },
"WT13.5X89": { "selfWeight": 89.0, "I": 414 },
"WT13.5X80.5": { "selfWeight": 80.5, "I": 372 },
"WT13.5X73": { "selfWeight": 73.0, "I": 336 },
"WT13.5X64.5": { "selfWeight": 64.5, "I": 323 },
"WT13.5X57": { "selfWeight": 57.0, "I": 289 },
"WT13.5X51": { "selfWeight": 51.0, "I": 258 },
"WT13.5X47": { "selfWeight": 47.0, "I": 239 },
"WT13.5X42": { "selfWeight": 42.0, "I": 216 },
"WT12X185": { "selfWeight": 185, "I": 779 },
"WT12X167.5": { "selfWeight": 167.5, "I": 686 },
"WT12X153": { "selfWeight": 153, "I": 611 },
"WT12X139.5": { "selfWeight": 139.5, "I": 546 },
"WT12X125": { "selfWeight": 125, "I": 478 },
"WT12X114.5": { "selfWeight": 114.5, "I": 431 },
"WT12X103.5": { "selfWeight": 103.5, "I": 382 },
"WT12X96": { "selfWeight": 96.0, "I": 350 },
"WT12X88": { "selfWeight": 88.0, "I": 319 },
"WT12X81": { "selfWeight": 81.0, "I": 293 },
"WT12X73": { "selfWeight": 73.0, "I": 264 },
"WT12X65.5": { "selfWeight": 65.5, "I": 238 },
"WT12X58.5": { "selfWeight": 58.5, "I": 212 },
"WT12X52": { "selfWeight": 52.0, "I": 189 },
"WT12X51.5": { "selfWeight": 51.5, "I": 204 },
"WT12X47": { "selfWeight": 47.0, "I": 186 },
"WT12X42": { "selfWeight": 42.0, "I": 166 },
"WT12X38": { "selfWeight": 38.0, "I": 151 },
"WT12X34": { "selfWeight": 34.0, "I": 137 },
"WT12X31": { "selfWeight": 31.0, "I": 131 },
"WT12X27.5": { "selfWeight": 27.5, "I": 117 },
"WT10.5X137.5": { "selfWeight": 137.5, "I": 420 },
"WT10.5X124": { "selfWeight": 124, "I": 368 },
"WT10.5X111.5": { "selfWeight": 111.5, "I": 324 },
"WT10.5X100.5": { "selfWeight": 100.5, "I": 285 },
"WT10.5X91": { "selfWeight": 91.0, "I": 253 },
"WT10.5X83": { "selfWeight": 83.0, "I": 226 },
"WT10.5X73.5": { "selfWeight": 73.5, "I": 204 },
"WT10.5X66": { "selfWeight": 66.0, "I": 181 },
"WT10.5X61": { "selfWeight": 61.0, "I": 166 },
"WT10.5X55.5": { "selfWeight": 55.5, "I": 150 },
"WT10.5X50.5": { "selfWeight": 50.5, "I": 135 },
"WT10.5X46.5": { "selfWeight": 46.5, "I": 144 },
"WT10.5X41.5": { "selfWeight": 41.5, "I": 127 },
"WT10.5X36.5": { "selfWeight": 36.5, "I": 110 },
"WT10.5X34": { "selfWeight": 34.0, "I": 103 },
"WT10.5X31": { "selfWeight": 31.0, "I": 93.8 },
"WT10.5X27.5": { "selfWeight": 27.5, "I": 84.4 },
"WT10.5X24": { "selfWeight": 24.0, "I": 74.9 },
"WT10.5X28.5": { "selfWeight": 28.5, "I": 90.4 },
"WT10.5X25": { "selfWeight": 25.0, "I": 80.3 },
"WT10.5X22": { "selfWeight": 22.0, "I": 71.1 },
"WT9X155.5": { "selfWeight": 155.5, "I": 383 },
"WT9X141.5": { "selfWeight": 141.5, "I": 337 },
"WT9X129": { "selfWeight": 129, "I": 298 },
"WT9X117": { "selfWeight": 117, "I": 261 },
"WT9X105.5": { "selfWeight": 105.5, "I": 229 },
"WT9X96": { "selfWeight": 96.0, "I": 202 },
"WT9X87.5": { "selfWeight": 87.5, "I": 181 },
"WT9X79": { "selfWeight": 79.0, "I": 160 },
"WT9X71.5": { "selfWeight": 71.5, "I": 142 },
"WT9X65": { "selfWeight": 65.0, "I": 127 },
"WT9X59.5": { "selfWeight": 59.5, "I": 119 },
"WT9X53": { "selfWeight": 53.0, "I": 104 },
"WT9X48.5": { "selfWeight": 48.5, "I": 93.8 },
"WT9X43": { "selfWeight": 43.0, "I": 82.4 },
"WT9X38": { "selfWeight": 38.0, "I": 71.8 },
"WT9X35.5": { "selfWeight": 35.5, "I": 78.2 },
"WT9X32.5": { "selfWeight": 32.5, "I": 70.7 },
"WT9X30": { "selfWeight": 30.0, "I": 64.7 },
"WT9X27.5": { "selfWeight": 27.5, "I": 59.5 },
"WT9X25": { "selfWeight": 25.0, "I": 53.5 },
"WT9X23": { "selfWeight": 23.0, "I": 52.1 },
"WT9X20": { "selfWeight": 20.0, "I": 44.8 },
"WT9X17.5": { "selfWeight": 17.5, "I": 40.1 },
"WT8X50": { "selfWeight": 50.0, "I": 76.8 },
"WT8X44.5": { "selfWeight": 44.5, "I": 67.2 },
"WT8X38.5": { "selfWeight": 38.5, "I": 56.9 },
"WT8X33.5": { "selfWeight": 33.5, "I": 48.6 },
"WT8X28.5": { "selfWeight": 28.5, "I": 48.7 },
"WT8X25": { "selfWeight": 25.0, "I": 42.3 },
"WT8X22.5": { "selfWeight": 22.5, "I": 37.8 },
"WT8X20": { "selfWeight": 20.0, "I": 33.1 },
"WT8X18": { "selfWeight": 18.0, "I": 30.6 },
"WT8X15.5": { "selfWeight": 15.5, "I": 27.5 },
"WT8X13": { "selfWeight": 13.0, "I": 23.5 },
"WT7X436.5": { "selfWeight": 436.5, "I": 1040 },
"WT7X404": { "selfWeight": 404, "I": 898 },
"WT7X365": { "selfWeight": 365, "I": 739 },
"WT7X332.5": { "selfWeight": 332.5, "I": 622 },
"WT7X302.5": { "selfWeight": 302.5, "I": 524 },
"WT7X275": { "selfWeight": 275, "I": 442 },
"WT7X250": { "selfWeight": 250, "I": 375 },
"WT7X227.5": { "selfWeight": 227.5, "I": 321 },
"WT7X213": { "selfWeight": 213, "I": 287 },
"WT7X199": { "selfWeight": 199, "I": 257 },
"WT7X185": { "selfWeight": 185, "I": 229 },
"WT7X171": { "selfWeight": 171, "I": 203 },
"WT7X155.5": { "selfWeight": 155.5, "I": 176 },
"WT7X141.5": { "selfWeight": 141.5, "I": 153 },
"WT7X128.5": { "selfWeight": 128.5, "I": 133 },
"WT7X116.5": { "selfWeight": 116.5, "I": 116 },
"WT7X105.5": { "selfWeight": 105.5, "I": 102 },
"WT7X96.5": { "selfWeight": 96.5, "I": 89.8 },
"WT7X88": { "selfWeight": 88.0, "I": 80.5 },
"WT7X79.5": { "selfWeight": 79.5, "I": 70.2 },
"WT7X72.5": { "selfWeight": 72.5, "I": 62.5 },
"WT7X66": { "selfWeight": 66.0, "I": 57.8 },
"WT7X60": { "selfWeight": 60.0, "I": 51.7 },
"WT7X54.5": { "selfWeight": 54.5, "I": 45.3 },
"WT7X49.5": { "selfWeight": 49.5, "I": 40.9 },
"WT7X45": { "selfWeight": 45.0, "I": 36.5 },
"WT7X41": { "selfWeight": 41.0, "I": 41.2 },
"WT7X37": { "selfWeight": 37.0, "I": 36.0 },
"WT7X34": { "selfWeight": 34.0, "I": 32.6 },
"WT7X30.5": { "selfWeight": 30.5, "I": 28.9 },
"WT7X26.5": { "selfWeight": 26.5, "I": 27.6 },
"WT7X24": { "selfWeight": 24.0, "I": 24.9 },
"WT7X21.5": { "selfWeight": 21.5, "I": 21.9 },
"WT7X19": { "selfWeight": 19.0, "I": 23.3 },
"WT7X17": { "selfWeight": 17.0, "I": 20.9 },
"WT7X15": { "selfWeight": 15.0, "I": 19.0 },
"WT7X13": { "selfWeight": 13.0, "I": 17.3 },
"WT7X11": { "selfWeight": 11.0, "I": 14.8 },
"WT6X168": { "selfWeight": 168, "I": 190 },
"WT6X152.5": { "selfWeight": 152.5, "I": 162 },
"WT6X139.5": { "selfWeight": 139.5, "I": 141 },
"WT6X126": { "selfWeight": 126, "I": 121 },
"WT6X115": { "selfWeight": 115, "I": 106 },
"WT6X105": { "selfWeight": 105, "I": 92.1 },
"WT6X95": { "selfWeight": 95.0, "I": 79.0 },
"WT6X85": { "selfWeight": 85.0, "I": 67.8 },
"WT6X76": { "selfWeight": 76.0, "I": 58.5 },
"WT6X68": { "selfWeight": 68.0, "I": 50.6 },
"WT6X60": { "selfWeight": 60.0, "I": 43.4 },
"WT6X53": { "selfWeight": 53.0, "I": 36.3 },
"WT6X48": { "selfWeight": 48.0, "I": 32.0 },
"WT6X43.5": { "selfWeight": 43.5, "I": 28.9 },
"WT6X39.5": { "selfWeight": 39.5, "I": 25.8 },
"WT6X36": { "selfWeight": 36.0, "I": 23.2 },
"WT6X32.5": { "selfWeight": 32.5, "I": 20.6 },
"WT6X29": { "selfWeight": 29.0, "I": 19.1 },
"WT6X26.5": { "selfWeight": 26.5, "I": 17.7 },
"WT6X25": { "selfWeight": 25.0, "I": 18.7 },
"WT6X22.5": { "selfWeight": 22.5, "I": 16.6 },
"WT6X20": { "selfWeight": 20.0, "I": 14.4 },
"WT6X17.5": { "selfWeight": 17.5, "I": 16.0 },
"WT6X15": { "selfWeight": 15.0, "I": 13.5 },
"WT6X13": { "selfWeight": 13.0, "I": 11.7 },
"WT6X11": { "selfWeight": 11.0, "I": 11.7 },
"WT6X9.5": { "selfWeight": 9.50, "I": 10.1 },
"WT6X8": { "selfWeight": 8.00, "I": 8.70 },
"WT6X7": { "selfWeight": 7.00, "I": 7.67 },
"WT5X56": { "selfWeight": 56.0, "I": 28.6 },
"WT5X50": { "selfWeight": 50.0, "I": 24.5 },
"WT5X44": { "selfWeight": 44.0, "I": 20.8 },
"WT5X38.5": { "selfWeight": 38.5, "I": 17.4 },
"WT5X34": { "selfWeight": 34.0, "I": 14.9 },
"WT5X30": { "selfWeight": 30.0, "I": 12.9 },
"WT5X27": { "selfWeight": 27.0, "I": 11.1 },
"WT5X24.5": { "selfWeight": 24.5, "I": 10.0 },
"WT5X22.5": { "selfWeight": 22.5, "I": 10.2 },
"WT5X19.5": { "selfWeight": 19.5, "I": 8.84 },
"WT5X16.5": { "selfWeight": 16.5, "I": 7.71 },
"WT5X15": { "selfWeight": 15.0, "I": 9.28 },
"WT5X13": { "selfWeight": 13.0, "I": 7.86 },
"WT5X11": { "selfWeight": 11.0, "I": 6.88 },
"WT5X9.5": { "selfWeight": 9.50, "I": 6.68 },
"WT5X8.5": { "selfWeight": 8.50, "I": 6.06 },
"WT5X7.5": { "selfWeight": 7.50, "I": 5.45 },
"WT5X6": { "selfWeight": 6.00, "I": 4.35 },
"WT4X33.5": { "selfWeight": 33.5, "I": 10.9 },
"WT4X29": { "selfWeight": 29.0, "I": 9.12 },
"WT4X24": { "selfWeight": 24.0, "I": 6.85 },
"WT4X20": { "selfWeight": 20.0, "I": 5.73 },
"WT4X17.5": { "selfWeight": 17.5, "I": 4.82 },
"WT4X15.5": { "selfWeight": 15.5, "I": 4.28 },
"WT4X14": { "selfWeight": 14.0, "I": 4.23 },
"WT4X12": { "selfWeight": 12.0, "I": 3.53 },
"WT4X10.5": { "selfWeight": 10.5, "I": 3.90 },
"WT4X9": { "selfWeight": 9.00, "I": 3.41 },
"WT4X7.5": { "selfWeight": 7.50, "I": 3.28 },
"WT4X6.5": { "selfWeight": 6.50, "I": 2.89 },
"WT4X5": { "selfWeight": 5.00, "I": 2.15 },
"WT3X12.5": { "selfWeight": 12.5, "I": 2.29 },
"WT3X10": { "selfWeight": 10.0, "I": 1.76 },
"WT3X7.5": { "selfWeight": 7.50, "I": 1.41 },
"WT3X8": { "selfWeight": 8.00, "I": 1.69 },
"WT3X6": { "selfWeight": 6.00, "I": 1.32 },
"WT3X4.5": { "selfWeight": 4.50, "I": 0.950 },
"WT3X4.25": { "selfWeight": 4.25, "I": 0.905 },
"WT2.5X9.5": { "selfWeight": 9.50, "I": 1.01 },
"WT2.5X8": { "selfWeight": 8.00, "I": 0.845 },
"WT2X6.5": { "selfWeight": 6.50, "I": 0.526 },
"MT6.25X6.2": { "selfWeight": 6.20, "I": 7.29 },
"MT6.25X5.8": { "selfWeight": 5.80, "I": 6.94 },
"MT6X5.9": { "selfWeight": 5.90, "I": 6.61 },
"MT6X5.4": { "selfWeight": 5.40, "I": 6.03 },
"MT6X5": { "selfWeight": 5.00, "I": 5.62 },
"MT5X4.5": { "selfWeight": 4.50, "I": 3.47 },
"MT5X4": { "selfWeight": 4.00, "I": 3.08 },
"MT5X3.75": { "selfWeight": 3.75, "I": 2.91 },
"MT4X3.25": { "selfWeight": 3.25, "I": 1.57 },
"MT4X3.1": { "selfWeight": 3.10, "I": 1.50 },
"MT3X2.2": { "selfWeight": 2.20, "I": 0.579 },
"MT3X1.85": { "selfWeight": 1.85, "I": 0.483 },
"MT2.5X9.45": { "selfWeight": 9.45, "I": 1.05 },
"MT2X3": { "selfWeight": 3.00, "I": 0.208 },
"ST12X60.5": { "selfWeight": 60.5, "I": 259 },
"ST12X53": { "selfWeight": 53.0, "I": 216 },
"ST12X50": { "selfWeight": 50.0, "I": 215 },
"ST12X45": { "selfWeight": 45.0, "I": 190 },
"ST12X40": { "selfWeight": 40.0, "I": 162 },
"ST10X48": { "selfWeight": 48.0, "I": 143 },
"ST10X43": { "selfWeight": 43.0, "I": 124 },
"ST10X37.5": { "selfWeight": 37.5, "I": 109 },
"ST10X33": { "selfWeight": 33.0, "I": 92.9 },
"ST9X35": { "selfWeight": 35.0, "I": 84.5 },
"ST9X27.35": { "selfWeight": 27.35, "I": 62.3 },
"ST7.5X25": { "selfWeight": 25.0, "I": 40.5 },
"ST7.5X21.45": { "selfWeight": 21.45, "I": 32.9 },
"ST6X25": { "selfWeight": 25.0, "I": 25.1 },
"ST6X20.4": { "selfWeight": 20.4, "I": 18.9 },
"ST6X17.5": { "selfWeight": 17.5, "I": 17.2 },
"ST6X15.9": { "selfWeight": 15.9, "I": 14.8 },
"ST5X17.5": { "selfWeight": 17.5, "I": 12.5 },
"ST5X12.7": { "selfWeight": 12.7, "I": 7.79 },
"ST4X11.5": { "selfWeight": 11.5, "I": 5.00 },
"ST4X9.2": { "selfWeight": 9.20, "I": 3.49 },
"ST3X8.6": { "selfWeight": 8.60, "I": 2.12 },
"ST3X6.25": { "selfWeight": 6.25, "I": 1.26 },
"ST2.5X5": { "selfWeight": 5.00, "I": 0.671 },
"ST2X4.75": { "selfWeight": 4.75, "I": 0.462 },
"ST2X3.85": { "selfWeight": 3.85, "I": 0.307 },
"ST1.5X3.75": { "selfWeight": 3.75, "I": 0.200 },
"ST1.5X2.85": { "selfWeight": 2.85, "I": 0.114 },
"2L12X12X1-3/8": { "selfWeight": 210, "I": 826 },
"2L12X12X1-3/8X3/4": { "selfWeight": 210, "I": 826 },
"2L12X12X1-3/8X1-1/2": { "selfWeight": 210, "I": 826 },
"2L12X12X1-1/4": { "selfWeight": 193, "I": 762 },
"2L12X12X1-1/4X3/4": { "selfWeight": 193, "I": 762 },
"2L12X12X1-1/4X1-1/2": { "selfWeight": 193, "I": 762 },
"2L12X12X1-1/8": { "selfWeight": 174, "I": 700 },
"2L12X12X1-1/8X3/4": { "selfWeight": 174, "I": 700 },
"2L12X12X1-1/8X1-1/2": { "selfWeight": 174, "I": 700 },
"2L12X12X1": { "selfWeight": 156, "I": 630 },
"2L12X12X1X3/4": { "selfWeight": 156, "I": 630 },
"2L12X12X1X1-1/2": { "selfWeight": 156, "I": 630 },
"2L10X10X1-3/8": { "selfWeight": 174, "I": 462 },
"2L10X10X1-3/8X3/4": { "selfWeight": 174, "I": 462 },
"2L10X10X1-3/8X1-1/2": { "selfWeight": 174, "I": 462 },
"2L10X10X1-1/4": { "selfWeight": 160, "I": 426 },
"2L10X10X1-1/4X3/4": { "selfWeight": 160, "I": 426 },
"2L10X10X1-1/4X1-1/2": { "selfWeight": 160, "I": 426 },
"2L10X10X1-1/8": { "selfWeight": 145, "I": 392 },
"2L10X10X1-1/8X3/4": { "selfWeight": 145, "I": 392 },
"2L10X10X1-1/8X1-1/2": { "selfWeight": 145, "I": 392 },
"2L10X10X1": { "selfWeight": 129, "I": 354 },
"2L10X10X1X3/4": { "selfWeight": 129, "I": 354 },
"2L10X10X1X1-1/2": { "selfWeight": 129, "I": 354 },
"2L10X10X7/8": { "selfWeight": 114, "I": 316 },
"2L10X10X7/8X3/4": { "selfWeight": 114, "I": 316 },
"2L10X10X7/8X1-1/2": { "selfWeight": 114, "I": 316 },
"2L10X10X3/4": { "selfWeight": 98.2, "I": 278 },
"2L10X10X3/4X3/4": { "selfWeight": 98.2, "I": 278 },
"2L10X10X3/4X1-1/2": { "selfWeight": 98.2, "I": 278 },
"2L8X8X1-1/8": { "selfWeight": 114, "I": 196 },
"2L8X8X1-1/8X3/8": { "selfWeight": 114, "I": 196 },
"2L8X8X1-1/8X3/4": { "selfWeight": 114, "I": 196 },
"2L8X8X1": { "selfWeight": 102, "I": 178 },
"2L8X8X1X3/8": { "selfWeight": 102, "I": 178 },
"2L8X8X1X3/4": { "selfWeight": 102, "I": 178 },
"2L8X8X7/8": { "selfWeight": 90.0, "I": 159 },
"2L8X8X7/8X3/8": { "selfWeight": 90.0, "I": 159 },
"2L8X8X7/8X3/4": { "selfWeight": 90.0, "I": 159 },
"2L8X8X3/4": { "selfWeight": 77.8, "I": 140 },
"2L8X8X3/4X3/8": { "selfWeight": 77.8, "I": 140 },
"2L8X8X3/4X3/4": { "selfWeight": 77.8, "I": 140 },
"2L8X8X5/8": { "selfWeight": 65.4, "I": 119 },
"2L8X8X5/8X3/8": { "selfWeight": 65.4, "I": 119 },
"2L8X8X5/8X3/4": { "selfWeight": 65.4, "I": 119 },
"2L8X8X9/16": { "selfWeight": 59.2, "I": 108 },
"2L8X8X9/16X3/8": { "selfWeight": 59.2, "I": 108 },
"2L8X8X9/16X3/4": { "selfWeight": 59.2, "I": 108 },
"2L8X8X1/2": { "selfWeight": 52.8, "I": 97.6 },
"2L8X8X1/2X3/8": { "selfWeight": 52.8, "I": 97.6 },
"2L8X8X1/2X3/4": { "selfWeight": 52.8, "I": 97.6 },
"2L6X6X1": { "selfWeight": 74.8, "I": 70.8 },
"2L6X6X1X3/8": { "selfWeight": 74.8, "I": 70.8 },
"2L6X6X1X3/4": { "selfWeight": 74.8, "I": 70.8 },
"2L6X6X7/8": { "selfWeight": 66.2, "I": 63.8 },
"2L6X6X7/8X3/8": { "selfWeight": 66.2, "I": 63.8 },
"2L6X6X7/8X3/4": { "selfWeight": 66.2, "I": 63.8 },
"2L6X6X3/4": { "selfWeight": 57.4, "I": 56.2 },
"2L6X6X3/4X3/8": { "selfWeight": 57.4, "I": 56.2 },
"2L6X6X3/4X3/4": { "selfWeight": 57.4, "I": 56.2 },
"2L6X6X5/8": { "selfWeight": 48.4, "I": 48.2 },
"2L6X6X5/8X3/8": { "selfWeight": 48.4, "I": 48.2 },
"2L6X6X5/8X3/4": { "selfWeight": 48.4, "I": 48.2 },
"2L6X6X9/16": { "selfWeight": 43.8, "I": 44.0 },
"2L6X6X9/16X3/8": { "selfWeight": 43.8, "I": 44.0 },
"2L6X6X9/16X3/4": { "selfWeight": 43.8, "I": 44.0 },
"2L6X6X1/2": { "selfWeight": 39.2, "I": 39.8 },
"2L6X6X1/2X3/8": { "selfWeight": 39.2, "I": 39.8 },
"2L6X6X1/2X3/4": { "selfWeight": 39.2, "I": 39.8 },
"2L6X6X7/16": { "selfWeight": 34.4, "I": 35.2 },
"2L6X6X7/16X3/8": { "selfWeight": 34.4, "I": 35.2 },
"2L6X6X7/16X3/4": { "selfWeight": 34.4, "I": 35.2 },
"2L6X6X3/8": { "selfWeight": 29.8, "I": 30.8 },
"2L6X6X3/8X3/8": { "selfWeight": 29.8, "I": 30.8 },
"2L6X6X3/8X3/4": { "selfWeight": 29.8, "I": 30.8 },
"2L6X6X5/16": { "selfWeight": 24.8, "I": 26.0 },
"2L6X6X5/16X3/8": { "selfWeight": 24.8, "I": 26.0 },
"2L6X6X5/16X3/4": { "selfWeight": 24.8, "I": 26.0 },
"2L5X5X7/8": { "selfWeight": 54.4, "I": 35.6 },
"2L5X5X7/8X3/8": { "selfWeight": 54.4, "I": 35.6 },
"2L5X5X7/8X3/4": { "selfWeight": 54.4, "I": 35.6 },
"2L5X5X3/4": { "selfWeight": 47.2, "I": 31.4 },
"2L5X5X3/4X3/8": { "selfWeight": 47.2, "I": 31.4 },
"2L5X5X3/4X3/4": { "selfWeight": 47.2, "I": 31.4 },
"2L5X5X5/8": { "selfWeight": 40.0, "I": 27.2 },
"2L5X5X5/8X3/8": { "selfWeight": 40.0, "I": 27.2 },
"2L5X5X5/8X3/4": { "selfWeight": 40.0, "I": 27.2 },
"2L5X5X1/2": { "selfWeight": 32.4, "I": 22.6 },
"2L5X5X1/2X3/8": { "selfWeight": 32.4, "I": 22.6 },
"2L5X5X1/2X3/4": { "selfWeight": 32.4, "I": 22.6 },
"2L5X5X7/16": { "selfWeight": 28.6, "I": 20.0 },
"2L5X5X7/16X3/8": { "selfWeight": 28.6, "I": 20.0 },
"2L5X5X7/16X3/4": { "selfWeight": 28.6, "I": 20.0 },
"2L5X5X3/8": { "selfWeight": 24.6, "I": 17.5 },
"2L5X5X3/8X3/8": { "selfWeight": 24.6, "I": 17.5 },
"2L5X5X3/8X3/4": { "selfWeight": 24.6, "I": 17.5 },
"2L5X5X5/16": { "selfWeight": 20.6, "I": 14.9 },
"2L5X5X5/16X3/8": { "selfWeight": 20.6, "I": 14.9 },
"2L5X5X5/16X3/4": { "selfWeight": 20.6, "I": 14.9 },
"2L4X4X3/4": { "selfWeight": 37.0, "I": 15.2 },
"2L4X4X3/4X3/8": { "selfWeight": 37.0, "I": 15.2 },
"2L4X4X3/4X3/4": { "selfWeight": 37.0, "I": 15.2 },
"2L4X4X5/8": { "selfWeight": 31.4, "I": 13.2 },
"2L4X4X5/8X3/8": { "selfWeight": 31.4, "I": 13.2 },
"2L4X4X5/8X3/4": { "selfWeight": 31.4, "I": 13.2 },
"2L4X4X1/2": { "selfWeight": 25.6, "I": 11.0 },
"2L4X4X1/2X3/8": { "selfWeight": 25.6, "I": 11.0 },
"2L4X4X1/2X3/4": { "selfWeight": 25.6, "I": 11.0 },
"2L4X4X7/16": { "selfWeight": 22.6, "I": 9.86 },
"2L4X4X7/16X3/8": { "selfWeight": 22.6, "I": 9.86 },
"2L4X4X7/16X3/4": { "selfWeight": 22.6, "I": 9.86 },
"2L4X4X3/8": { "selfWeight": 19.6, "I": 8.64 },
"2L4X4X3/8X3/8": { "selfWeight": 19.6, "I": 8.64 },
"2L4X4X3/8X3/4": { "selfWeight": 19.6, "I": 8.64 },
"2L4X4X5/16": { "selfWeight": 16.4, "I": 7.34 },
"2L4X4X5/16X3/8": { "selfWeight": 16.4, "I": 7.34 },
"2L4X4X5/16X3/4": { "selfWeight": 16.4, "I": 7.34 },
"2L4X4X1/4": { "selfWeight": 13.2, "I": 6.00 },
"2L4X4X1/4X3/8": { "selfWeight": 13.2, "I": 6.00 },
"2L4X4X1/4X3/4": { "selfWeight": 13.2, "I": 6.00 },
"2L3-1/2X3-1/2X1/2": { "selfWeight": 22.2, "I": 7.26 },
"2L3-1/2X3-1/2X1/2X3/8": { "selfWeight": 22.2, "I": 7.26 },
"2L3-1/2X3-1/2X1/2X3/4": { "selfWeight": 22.2, "I": 7.26 },
"2L3-1/2X3-1/2X7/16": { "selfWeight": 19.6, "I": 6.50 },
"2L3-1/2X3-1/2X7/16X3/8": { "selfWeight": 19.6, "I": 6.50 },
"2L3-1/2X3-1/2X7/16X3/4": { "selfWeight": 19.6, "I": 6.50 },
"2L3-1/2X3-1/2X3/8": { "selfWeight": 17.0, "I": 5.72 },
"2L3-1/2X3-1/2X3/8X3/8": { "selfWeight": 17.0, "I": 5.72 },
"2L3-1/2X3-1/2X3/8X3/4": { "selfWeight": 17.0, "I": 5.72 },
"2L3-1/2X3-1/2X5/16": { "selfWeight": 14.4, "I": 4.88 },
"2L3-1/2X3-1/2X5/16X3/8": { "selfWeight": 14.4, "I": 4.88 },
"2L3-1/2X3-1/2X5/16X3/4": { "selfWeight": 14.4, "I": 4.88 },
"2L3-1/2X3-1/2X1/4": { "selfWeight": 11.6, "I": 4.00 },
"2L3-1/2X3-1/2X1/4X3/8": { "selfWeight": 11.6, "I": 4.00 },
"2L3-1/2X3-1/2X1/4X3/4": { "selfWeight": 11.6, "I": 4.00 },
"2L3X3X1/2": { "selfWeight": 18.8, "I": 4.40 },
"2L3X3X1/2X3/8": { "selfWeight": 18.8, "I": 4.40 },
"2L3X3X1/2X3/4": { "selfWeight": 18.8, "I": 4.40 },
"2L3X3X7/16": { "selfWeight": 16.6, "I": 3.96 },
"2L3X3X7/16X3/8": { "selfWeight": 16.6, "I": 3.96 },
"2L3X3X7/16X3/4": { "selfWeight": 16.6, "I": 3.96 },
"2L3X3X3/8": { "selfWeight": 14.4, "I": 3.50 },
"2L3X3X3/8X3/8": { "selfWeight": 14.4, "I": 3.50 },
"2L3X3X3/8X3/4": { "selfWeight": 14.4, "I": 3.50 },
"2L3X3X5/16": { "selfWeight": 12.2, "I": 3.00 },
"2L3X3X5/16X3/8": { "selfWeight": 12.2, "I": 3.00 },
"2L3X3X5/16X3/4": { "selfWeight": 12.2, "I": 3.00 },
"2L3X3X1/4": { "selfWeight": 9.80, "I": 2.46 },
"2L3X3X1/4X3/8": { "selfWeight": 9.80, "I": 2.46 },
"2L3X3X1/4X3/4": { "selfWeight": 9.80, "I": 2.46 },
"2L3X3X3/16": { "selfWeight": 7.42, "I": 1.90 },
"2L3X3X3/16X3/8": { "selfWeight": 7.42, "I": 1.90 },
"2L3X3X3/16X3/4": { "selfWeight": 7.42, "I": 1.90 },
"2L2-1/2X2-1/2X1/2": { "selfWeight": 15.4, "I": 2.44 },
"2L2-1/2X2-1/2X1/2X3/8": { "selfWeight": 15.4, "I": 2.44 },
"2L2-1/2X2-1/2X1/2X3/4": { "selfWeight": 15.4, "I": 2.44 },
"2L2-1/2X2-1/2X3/8": { "selfWeight": 11.8, "I": 1.94 },
"2L2-1/2X2-1/2X3/8X3/8": { "selfWeight": 11.8, "I": 1.94 },
"2L2-1/2X2-1/2X3/8X3/4": { "selfWeight": 11.8, "I": 1.94 },
"2L2-1/2X2-1/2X5/16": { "selfWeight": 10.0, "I": 1.67 },
"2L2-1/2X2-1/2X5/16X3/8": { "selfWeight": 10.0, "I": 1.67 },
"2L2-1/2X2-1/2X5/16X3/4": { "selfWeight": 10.0, "I": 1.67 },
"2L2-1/2X2-1/2X1/4": { "selfWeight": 8.20, "I": 1.38 },
"2L2-1/2X2-1/2X1/4X3/8": { "selfWeight": 8.20, "I": 1.38 },
"2L2-1/2X2-1/2X1/4X3/4": { "selfWeight": 8.20, "I": 1.38 },
"2L2-1/2X2-1/2X3/16": { "selfWeight": 6.14, "I": 1.07 },
"2L2-1/2X2-1/2X3/16X3/8": { "selfWeight": 6.14, "I": 1.07 },
"2L2-1/2X2-1/2X3/16X3/4": { "selfWeight": 6.14, "I": 1.07 },
"2L2X2X3/8": { "selfWeight": 9.40, "I": 0.952 },
"2L2X2X3/8X3/8": { "selfWeight": 9.40, "I": 0.952 },
"2L2X2X3/8X3/4": { "selfWeight": 9.40, "I": 0.952 },
"2L2X2X5/16": { "selfWeight": 7.84, "I": 0.828 },
"2L2X2X5/16X3/8": { "selfWeight": 7.84, "I": 0.828 },
"2L2X2X5/16X3/4": { "selfWeight": 7.84, "I": 0.828 },
"2L2X2X1/4": { "selfWeight": 6.38, "I": 0.692 },
"2L2X2X1/4X3/8": { "selfWeight": 6.38, "I": 0.692 },
"2L2X2X1/4X3/4": { "selfWeight": 6.38, "I": 0.692 },
"2L2X2X3/16": { "selfWeight": 4.88, "I": 0.542 },
"2L2X2X3/16X3/8": { "selfWeight": 4.88, "I": 0.542 },
"2L2X2X3/16X3/4": { "selfWeight": 4.88, "I": 0.542 },
"2L2X2X1/8": { "selfWeight": 3.30, "I": 0.378 },
"2L2X2X1/8X3/8": { "selfWeight": 3.30, "I": 0.378 },
"2L2X2X1/8X3/4": { "selfWeight": 3.30, "I": 0.378 },
"2L8X6X1LLBB": { "selfWeight": 88.4, "I": 162 },
"2L8X6X1X3/8LLBB": { "selfWeight": 88.4, "I": 162 },
"2L8X6X1X3/4LLBB": { "selfWeight": 88.4, "I": 162 },
"2L8X6X7/8LLBB": { "selfWeight": 78.2, "I": 145 },
"2L8X6X7/8X3/8LLBB": { "selfWeight": 78.2, "I": 145 },
"2L8X6X7/8X3/4LLBB": { "selfWeight": 78.2, "I": 145 },
"2L8X6X3/4LLBB": { "selfWeight": 67.6, "I": 127 },
"2L8X6X3/4X3/8LLBB": { "selfWeight": 67.6, "I": 127 },
"2L8X6X3/4X3/4LLBB": { "selfWeight": 67.6, "I": 127 },
"2L8X6X5/8LLBB": { "selfWeight": 57.0, "I": 108 },
"2L8X6X5/8X3/8LLBB": { "selfWeight": 57.0, "I": 108 },
"2L8X6X5/8X3/4LLBB": { "selfWeight": 57.0, "I": 108 },
"2L8X6X9/16LLBB": { "selfWeight": 51.4, "I": 98.8 },
"2L8X6X9/16X3/8LLBB": { "selfWeight": 51.4, "I": 98.8 },
"2L8X6X9/16X3/4LLBB": { "selfWeight": 51.4, "I": 98.8 },
"2L8X6X1/2LLBB": { "selfWeight": 46.0, "I": 88.8 },
"2L8X6X1/2X3/8LLBB": { "selfWeight": 46.0, "I": 88.8 },
"2L8X6X1/2X3/4LLBB": { "selfWeight": 46.0, "I": 88.8 },
"2L8X6X7/16LLBB": { "selfWeight": 40.4, "I": 78.6 },
"2L8X6X7/16X3/8LLBB": { "selfWeight": 40.4, "I": 78.6 },
"2L8X6X7/16X3/4LLBB": { "selfWeight": 40.4, "I": 78.6 },
"2L8X4X1LLBB": { "selfWeight": 74.8, "I": 139 },
"2L8X4X1X3/8LLBB": { "selfWeight": 74.8, "I": 139 },
"2L8X4X1X3/4LLBB": { "selfWeight": 74.8, "I": 139 },
"2L8X4X7/8LLBB": { "selfWeight": 66.2, "I": 125 },
"2L8X4X7/8X3/8LLBB": { "selfWeight": 66.2, "I": 125 },
"2L8X4X7/8X3/4LLBB": { "selfWeight": 66.2, "I": 125 },
"2L8X4X3/4LLBB": { "selfWeight": 57.4, "I": 110 },
"2L8X4X3/4X3/8LLBB": { "selfWeight": 57.4, "I": 110 },
"2L8X4X3/4X3/4LLBB": { "selfWeight": 57.4, "I": 110 },
"2L8X4X5/8LLBB": { "selfWeight": 48.4, "I": 94.0 },
"2L8X4X5/8X3/8LLBB": { "selfWeight": 48.4, "I": 94.0 },
"2L8X4X5/8X3/4LLBB": { "selfWeight": 48.4, "I": 94.0 },
"2L8X4X9/16LLBB": { "selfWeight": 43.8, "I": 85.8 },
"2L8X4X9/16X3/8LLBB": { "selfWeight": 43.8, "I": 85.8 },
"2L8X4X9/16X3/4LLBB": { "selfWeight": 43.8, "I": 85.8 },
"2L8X4X1/2LLBB": { "selfWeight": 39.2, "I": 77.2 },
"2L8X4X1/2X3/8LLBB": { "selfWeight": 39.2, "I": 77.2 },
"2L8X4X1/2X3/4LLBB": { "selfWeight": 39.2, "I": 77.2 },
"2L8X4X7/16LLBB": { "selfWeight": 34.4, "I": 68.4 },
"2L8X4X7/16X3/8LLBB": { "selfWeight": 34.4, "I": 68.4 },
"2L8X4X7/16X3/4LLBB": { "selfWeight": 34.4, "I": 68.4 },
"2L7X4X3/4LLBB": { "selfWeight": 52.4, "I": 75.6 },
"2L7X4X3/4X3/8LLBB": { "selfWeight": 52.4, "I": 75.6 },
"2L7X4X3/4X3/4LLBB": { "selfWeight": 52.4, "I": 75.6 },
"2L7X4X5/8LLBB": { "selfWeight": 44.2, "I": 64.8 },
"2L7X4X5/8X3/8LLBB": { "selfWeight": 44.2, "I": 64.8 },
"2L7X4X5/8X3/4LLBB": { "selfWeight": 44.2, "I": 64.8 },
"2L7X4X1/2LLBB": { "selfWeight": 35.8, "I": 53.2 },
"2L7X4X1/2X3/8LLBB": { "selfWeight": 35.8, "I": 53.2 },
"2L7X4X1/2X3/4LLBB": { "selfWeight": 35.8, "I": 53.2 },
"2L7X4X7/16LLBB": { "selfWeight": 31.4, "I": 47.2 },
"2L7X4X7/16X3/8LLBB": { "selfWeight": 31.4, "I": 47.2 },
"2L7X4X7/16X3/4LLBB": { "selfWeight": 31.4, "I": 47.2 },
"2L7X4X3/8LLBB": { "selfWeight": 27.2, "I": 41.0 },
"2L7X4X3/8X3/8LLBB": { "selfWeight": 27.2, "I": 41.0 },
"2L7X4X3/8X3/4LLBB": { "selfWeight": 27.2, "I": 41.0 },
"2L6X4X7/8LLBB": { "selfWeight": 54.4, "I": 55.4 },
"2L6X4X7/8X3/8LLBB": { "selfWeight": 54.4, "I": 55.4 },
"2L6X4X7/8X3/4LLBB": { "selfWeight": 54.4, "I": 55.4 },
"2L6X4X3/4LLBB": { "selfWeight": 47.2, "I": 49.0 },
"2L6X4X3/4X3/8LLBB": { "selfWeight": 47.2, "I": 49.0 },
"2L6X4X3/4X3/4LLBB": { "selfWeight": 47.2, "I": 49.0 },
"2L6X4X5/8LLBB": { "selfWeight": 40.0, "I": 42.0 },
"2L6X4X5/8X3/8LLBB": { "selfWeight": 40.0, "I": 42.0 },
"2L6X4X5/8X3/4LLBB": { "selfWeight": 40.0, "I": 42.0 },
"2L6X4X9/16LLBB": { "selfWeight": 36.2, "I": 38.4 },
"2L6X4X9/16X3/8LLBB": { "selfWeight": 36.2, "I": 38.4 },
"2L6X4X9/16X3/4LLBB": { "selfWeight": 36.2, "I": 38.4 },
"2L6X4X1/2LLBB": { "selfWeight": 32.4, "I": 34.6 },
"2L6X4X1/2X3/8LLBB": { "selfWeight": 32.4, "I": 34.6 },
"2L6X4X1/2X3/4LLBB": { "selfWeight": 32.4, "I": 34.6 },
"2L6X4X7/16LLBB": { "selfWeight": 28.6, "I": 30.8 },
"2L6X4X7/16X3/8LLBB": { "selfWeight": 28.6, "I": 30.8 },
"2L6X4X7/16X3/4LLBB": { "selfWeight": 28.6, "I": 30.8 },
"2L6X4X3/8LLBB": { "selfWeight": 24.6, "I": 26.8 },
"2L6X4X3/8X3/8LLBB": { "selfWeight": 24.6, "I": 26.8 },
"2L6X4X3/8X3/4LLBB": { "selfWeight": 24.6, "I": 26.8 },
"2L6X4X5/16LLBB": { "selfWeight": 20.6, "I": 22.8 },
"2L6X4X5/16X3/8LLBB": { "selfWeight": 20.6, "I": 22.8 },
"2L6X4X5/16X3/4LLBB": { "selfWeight": 20.6, "I": 22.8 },
"2L6X3-1/2X1/2LLBB": { "selfWeight": 30.6, "I": 33.2 },
"2L6X3-1/2X1/2X3/8LLBB": { "selfWeight": 30.6, "I": 33.2 },
"2L6X3-1/2X1/2X3/4LLBB": { "selfWeight": 30.6, "I": 33.2 },
"2L6X3-1/2X3/8LLBB": { "selfWeight": 23.4, "I": 25.8 },
"2L6X3-1/2X3/8X3/8LLBB": { "selfWeight": 23.4, "I": 25.8 },
"2L6X3-1/2X3/8X3/4LLBB": { "selfWeight": 23.4, "I": 25.8 },
"2L6X3-1/2X5/16LLBB": { "selfWeight": 19.6, "I": 21.8 },
"2L6X3-1/2X5/16X3/8LLBB": { "selfWeight": 19.6, "I": 21.8 },
"2L6X3-1/2X5/16X3/4LLBB": { "selfWeight": 19.6, "I": 21.8 },
"2L5X3-1/2X3/4LLBB": { "selfWeight": 39.6, "I": 27.8 },
"2L5X3-1/2X3/4X3/8LLBB": { "selfWeight": 39.6, "I": 27.8 },
"2L5X3-1/2X3/4X3/4LLBB": { "selfWeight": 39.6, "I": 27.8 },
"2L5X3-1/2X5/8LLBB": { "selfWeight": 33.6, "I": 24.0 },
"2L5X3-1/2X5/8X3/8LLBB": { "selfWeight": 33.6, "I": 24.0 },
"2L5X3-1/2X5/8X3/4LLBB": { "selfWeight": 33.6, "I": 24.0 },
"2L5X3-1/2X1/2LLBB": { "selfWeight": 27.2, "I": 20.0 },
"2L5X3-1/2X1/2X3/8LLBB": { "selfWeight": 27.2, "I": 20.0 },
"2L5X3-1/2X1/2X3/4LLBB": { "selfWeight": 27.2, "I": 20.0 },
"2L5X3-1/2X3/8LLBB": { "selfWeight": 20.8, "I": 15.5 },
"2L5X3-1/2X3/8X3/8LLBB": { "selfWeight": 20.8, "I": 15.5 },
"2L5X3-1/2X3/8X3/4LLBB": { "selfWeight": 20.8, "I": 15.5 },
"2L5X3-1/2X5/16LLBB": { "selfWeight": 17.4, "I": 13.2 },
"2L5X3-1/2X5/16X3/8LLBB": { "selfWeight": 17.4, "I": 13.2 },
"2L5X3-1/2X5/16X3/4LLBB": { "selfWeight": 17.4, "I": 13.2 },
"2L5X3-1/2X1/4LLBB": { "selfWeight": 14.0, "I": 10.7 },
"2L5X3-1/2X1/4X3/8LLBB": { "selfWeight": 14.0, "I": 10.7 },
"2L5X3-1/2X1/4X3/4LLBB": { "selfWeight": 14.0, "I": 10.7 },
"2L5X3X1/2LLBB": { "selfWeight": 25.6, "I": 18.9 },
"2L5X3X1/2X3/8LLBB": { "selfWeight": 25.6, "I": 18.9 },
"2L5X3X1/2X3/4LLBB": { "selfWeight": 25.6, "I": 18.9 },
"2L5X3X7/16LLBB": { "selfWeight": 22.6, "I": 16.8 },
"2L5X3X7/16X3/8LLBB": { "selfWeight": 22.6, "I": 16.8 },
"2L5X3X7/16X3/4LLBB": { "selfWeight": 22.6, "I": 16.8 },
"2L5X3X3/8LLBB": { "selfWeight": 19.6, "I": 14.7 },
"2L5X3X3/8X3/8LLBB": { "selfWeight": 19.6, "I": 14.7 },
"2L5X3X3/8X3/4LLBB": { "selfWeight": 19.6, "I": 14.7 },
"2L5X3X5/16LLBB": { "selfWeight": 16.4, "I": 12.5 },
"2L5X3X5/16X3/8LLBB": { "selfWeight": 16.4, "I": 12.5 },
"2L5X3X5/16X3/4LLBB": { "selfWeight": 16.4, "I": 12.5 },
"2L5X3X1/4LLBB": { "selfWeight": 13.2, "I": 10.2 },
"2L5X3X1/4X3/8LLBB": { "selfWeight": 13.2, "I": 10.2 },
"2L5X3X1/4X3/4LLBB": { "selfWeight": 13.2, "I": 10.2 },
"2L4X3-1/2X1/2LLBB": { "selfWeight": 23.8, "I": 10.6 },
"2L4X3-1/2X1/2X3/8LLBB": { "selfWeight": 23.8, "I": 10.6 },
"2L4X3-1/2X1/2X3/4LLBB": { "selfWeight": 23.8, "I": 10.6 },
"2L4X3-1/2X3/8LLBB": { "selfWeight": 18.2, "I": 8.30 },
"2L4X3-1/2X3/8X3/8LLBB": { "selfWeight": 18.2, "I": 8.30 },
"2L4X3-1/2X3/8X3/4LLBB": { "selfWeight": 18.2, "I": 8.30 },
"2L4X3-1/2X5/16LLBB": { "selfWeight": 15.4, "I": 7.06 },
"2L4X3-1/2X5/16X3/8LLBB": { "selfWeight": 15.4, "I": 7.06 },
"2L4X3-1/2X5/16X3/4LLBB": { "selfWeight": 15.4, "I": 7.06 },
"2L4X3-1/2X1/4LLBB": { "selfWeight": 12.4, "I": 5.78 },
"2L4X3-1/2X1/4X3/8LLBB": { "selfWeight": 12.4, "I": 5.78 },
"2L4X3-1/2X1/4X3/4LLBB": { "selfWeight": 12.4, "I": 5.78 },
"2L4X3X5/8LLBB": { "selfWeight": 27.2, "I": 12.0 },
"2L4X3X5/8X3/8LLBB": { "selfWeight": 27.2, "I": 12.0 },
"2L4X3X5/8X3/4LLBB": { "selfWeight": 27.2, "I": 12.0 },
"2L4X3X1/2LLBB": { "selfWeight": 22.2, "I": 10.0 },
"2L4X3X1/2X3/8LLBB": { "selfWeight": 22.2, "I": 10.0 },
"2L4X3X1/2X3/4LLBB": { "selfWeight": 22.2, "I": 10.0 },
"2L4X3X3/8LLBB": { "selfWeight": 17.0, "I": 7.88 },
"2L4X3X3/8X3/8LLBB": { "selfWeight": 17.0, "I": 7.88 },
"2L4X3X3/8X3/4LLBB": { "selfWeight": 17.0, "I": 7.88 },
"2L4X3X5/16LLBB": { "selfWeight": 14.4, "I": 6.72 },
"2L4X3X5/16X3/8LLBB": { "selfWeight": 14.4, "I": 6.72 },
"2L4X3X5/16X3/4LLBB": { "selfWeight": 14.4, "I": 6.72 },
"2L4X3X1/4LLBB": { "selfWeight": 11.6, "I": 5.50 },
"2L4X3X1/4X3/8LLBB": { "selfWeight": 11.6, "I": 5.50 },
"2L4X3X1/4X3/4LLBB": { "selfWeight": 11.6, "I": 5.50 },
"2L3-1/2X3X1/2LLBB": { "selfWeight": 20.4, "I": 6.90 },
"2L3-1/2X3X1/2X3/8LLBB": { "selfWeight": 20.4, "I": 6.90 },
"2L3-1/2X3X1/2X3/4LLBB": { "selfWeight": 20.4, "I": 6.90 },
"2L3-1/2X3X7/16LLBB": { "selfWeight": 18.2, "I": 6.20 },
"2L3-1/2X3X7/16X3/8LLBB": { "selfWeight": 18.2, "I": 6.20 },
"2L3-1/2X3X7/16X3/4LLBB": { "selfWeight": 18.2, "I": 6.20 },
"2L3-1/2X3X3/8LLBB": { "selfWeight": 15.8, "I": 5.46 },
"2L3-1/2X3X3/8X3/8LLBB": { "selfWeight": 15.8, "I": 5.46 },
"2L3-1/2X3X3/8X3/4LLBB": { "selfWeight": 15.8, "I": 5.46 },
"2L3-1/2X3X5/16LLBB": { "selfWeight": 13.2, "I": 4.66 },
"2L3-1/2X3X5/16X3/8LLBB": { "selfWeight": 13.2, "I": 4.66 },
"2L3-1/2X3X5/16X3/4LLBB": { "selfWeight": 13.2, "I": 4.66 },
"2L3-1/2X3X1/4LLBB": { "selfWeight": 10.8, "I": 3.84 },
"2L3-1/2X3X1/4X3/8LLBB": { "selfWeight": 10.8, "I": 3.84 },
"2L3-1/2X3X1/4X3/4LLBB": { "selfWeight": 10.8, "I": 3.84 },
"2L3-1/2X2-1/2X1/2LLBB": { "selfWeight": 18.8, "I": 6.48 },
"2L3-1/2X2-1/2X1/2X3/8LLBB": { "selfWeight": 18.8, "I": 6.48 },
"2L3-1/2X2-1/2X1/2X3/4LLBB": { "selfWeight": 18.8, "I": 6.48 },
"2L3-1/2X2-1/2X3/8LLBB": { "selfWeight": 14.4, "I": 5.12 },
"2L3-1/2X2-1/2X3/8X3/8LLBB": { "selfWeight": 14.4, "I": 5.12 },
"2L3-1/2X2-1/2X3/8X3/4LLBB": { "selfWeight": 14.4, "I": 5.12 },
"2L3-1/2X2-1/2X5/16LLBB": { "selfWeight": 12.2, "I": 4.40 },
"2L3-1/2X2-1/2X5/16X3/8LLBB": { "selfWeight": 12.2, "I": 4.40 },
"2L3-1/2X2-1/2X5/16X3/4LLBB": { "selfWeight": 12.2, "I": 4.40 },
"2L3-1/2X2-1/2X1/4LLBB": { "selfWeight": 9.80, "I": 3.62 },
"2L3-1/2X2-1/2X1/4X3/8LLBB": { "selfWeight": 9.80, "I": 3.62 },
"2L3-1/2X2-1/2X1/4X3/4LLBB": { "selfWeight": 9.80, "I": 3.62 },
"2L3X2-1/2X1/2LLBB": { "selfWeight": 17.0, "I": 4.14 },
"2L3X2-1/2X1/2X3/8LLBB": { "selfWeight": 17.0, "I": 4.14 },
"2L3X2-1/2X1/2X3/4LLBB": { "selfWeight": 17.0, "I": 4.14 },
"2L3X2-1/2X7/16LLBB": { "selfWeight": 15.2, "I": 3.74 },
"2L3X2-1/2X7/16X3/8LLBB": { "selfWeight": 15.2, "I": 3.74 },
"2L3X2-1/2X7/16X3/4LLBB": { "selfWeight": 15.2, "I": 3.74 },
"2L3X2-1/2X3/8LLBB": { "selfWeight": 13.2, "I": 3.30 },
"2L3X2-1/2X3/8X3/8LLBB": { "selfWeight": 13.2, "I": 3.30 },
"2L3X2-1/2X3/8X3/4LLBB": { "selfWeight": 13.2, "I": 3.30 },
"2L3X2-1/2X5/16LLBB": { "selfWeight": 11.2, "I": 2.82 },
"2L3X2-1/2X5/16X3/8LLBB": { "selfWeight": 11.2, "I": 2.82 },
"2L3X2-1/2X5/16X3/4LLBB": { "selfWeight": 11.2, "I": 2.82 },
"2L3X2-1/2X1/4LLBB": { "selfWeight": 9.00, "I": 2.32 },
"2L3X2-1/2X1/4X3/8LLBB": { "selfWeight": 9.00, "I": 2.32 },
"2L3X2-1/2X1/4X3/4LLBB": { "selfWeight": 9.00, "I": 2.32 },
"2L3X2-1/2X3/16LLBB": { "selfWeight": 6.78, "I": 1.80 },
"2L3X2-1/2X3/16X3/8LLBB": { "selfWeight": 6.78, "I": 1.80 },
"2L3X2-1/2X3/16X3/4LLBB": { "selfWeight": 6.78, "I": 1.80 },
"2L3X2X1/2LLBB": { "selfWeight": 15.4, "I": 3.84 },
"2L3X2X1/2X3/8LLBB": { "selfWeight": 15.4, "I": 3.84 },
"2L3X2X1/2X3/4LLBB": { "selfWeight": 15.4, "I": 3.84 },
"2L3X2X3/8LLBB": { "selfWeight": 11.8, "I": 3.08 },
"2L3X2X3/8X3/8LLBB": { "selfWeight": 11.8, "I": 3.08 },
"2L3X2X3/8X3/4LLBB": { "selfWeight": 11.8, "I": 3.08 },
"2L3X2X5/16LLBB": { "selfWeight": 10.0, "I": 2.64 },
"2L3X2X5/16X3/8LLBB": { "selfWeight": 10.0, "I": 2.64 },
"2L3X2X5/16X3/4LLBB": { "selfWeight": 10.0, "I": 2.64 },
"2L3X2X1/4LLBB": { "selfWeight": 8.20, "I": 2.18 },
"2L3X2X1/4X3/8LLBB": { "selfWeight": 8.20, "I": 2.18 },
"2L3X2X1/4X3/4LLBB": { "selfWeight": 8.20, "I": 2.18 },
"2L3X2X3/16LLBB": { "selfWeight": 6.14, "I": 1.69 },
"2L3X2X3/16X3/8LLBB": { "selfWeight": 6.14, "I": 1.69 },
"2L3X2X3/16X3/4LLBB": { "selfWeight": 6.14, "I": 1.69 },
"2L2-1/2X2X3/8LLBB": { "selfWeight": 10.6, "I": 1.83 },
"2L2-1/2X2X3/8X3/8LLBB": { "selfWeight": 10.6, "I": 1.83 },
"2L2-1/2X2X3/8X3/4LLBB": { "selfWeight": 10.6, "I": 1.83 },
"2L2-1/2X2X5/16LLBB": { "selfWeight": 9.00, "I": 1.58 },
"2L2-1/2X2X5/16X3/8LLBB": { "selfWeight": 9.00, "I": 1.58 },
"2L2-1/2X2X5/16X3/4LLBB": { "selfWeight": 9.00, "I": 1.58 },
"2L2-1/2X2X1/4LLBB": { "selfWeight": 7.24, "I": 1.31 },
"2L2-1/2X2X1/4X3/8LLBB": { "selfWeight": 7.24, "I": 1.31 },
"2L2-1/2X2X1/4X3/4LLBB": { "selfWeight": 7.24, "I": 1.31 },
"2L2-1/2X2X3/16LLBB": { "selfWeight": 5.50, "I": 1.02 },
"2L2-1/2X2X3/16X3/8LLBB": { "selfWeight": 5.50, "I": 1.02 },
"2L2-1/2X2X3/16X3/4LLBB": { "selfWeight": 5.50, "I": 1.02 },
"2L2-1/2X1-1/2X1/4LLBB": { "selfWeight": 6.38, "I": 1.19 },
"2L2-1/2X1-1/2X1/4X3/8LLBB": { "selfWeight": 6.38, "I": 1.19 },
"2L2-1/2X1-1/2X1/4X3/4LLBB": { "selfWeight": 6.38, "I": 1.19 },
"2L2-1/2X1-1/2X3/16LLBB": { "selfWeight": 4.88, "I": 0.928 },
"2L2-1/2X1-1/2X3/16X3/8LLBB": { "selfWeight": 4.88, "I": 0.928 },
"2L2-1/2X1-1/2X3/16X3/4LLBB": { "selfWeight": 4.88, "I": 0.928 },
"2L8X6X1SLBB": { "selfWeight": 88.4, "I": 77.6 },
"2L8X6X1X3/8SLBB": { "selfWeight": 88.4, "I": 77.6 },
"2L8X6X1X3/4SLBB": { "selfWeight": 88.4, "I": 77.6 },
"2L8X6X7/8SLBB": { "selfWeight": 78.2, "I": 69.8 },
"2L8X6X7/8X3/8SLBB": { "selfWeight": 78.2, "I": 69.8 },
"2L8X6X7/8X3/4SLBB": { "selfWeight": 78.2, "I": 69.8 },
"2L8X6X3/4SLBB": { "selfWeight": 67.6, "I": 61.5 },
"2L8X6X3/4X3/8SLBB": { "selfWeight": 67.6, "I": 61.5 },
"2L8X6X3/4X3/4SLBB": { "selfWeight": 67.6, "I": 61.5 },
"2L8X6X5/8SLBB": { "selfWeight": 57.0, "I": 52.8 },
"2L8X6X5/8X3/8SLBB": { "selfWeight": 57.0, "I": 52.8 },
"2L8X6X5/8X3/4SLBB": { "selfWeight": 57.0, "I": 52.8 },
"2L8X6X9/16SLBB": { "selfWeight": 51.4, "I": 48.2 },
"2L8X6X9/16X3/8SLBB": { "selfWeight": 51.4, "I": 48.2 },
"2L8X6X9/16X3/4SLBB": { "selfWeight": 51.4, "I": 48.2 },
"2L8X6X1/2SLBB": { "selfWeight": 46.0, "I": 43.5 },
"2L8X6X1/2X3/8SLBB": { "selfWeight": 46.0, "I": 43.5 },
"2L8X6X1/2X3/4SLBB": { "selfWeight": 46.0, "I": 43.5 },
"2L8X6X7/16SLBB": { "selfWeight": 40.4, "I": 38.6 },
"2L8X6X7/16X3/8SLBB": { "selfWeight": 40.4, "I": 38.6 },
"2L8X6X7/16X3/4SLBB": { "selfWeight": 40.4, "I": 38.6 },
"2L8X4X1SLBB": { "selfWeight": 74.8, "I": 23.3 },
"2L8X4X1X3/8SLBB": { "selfWeight": 74.8, "I": 23.3 },
"2L8X4X1X3/4SLBB": { "selfWeight": 74.8, "I": 23.3 },
"2L8X4X7/8SLBB": { "selfWeight": 66.2, "I": 21.1 },
"2L8X4X7/8X3/8SLBB": { "selfWeight": 66.2, "I": 21.1 },
"2L8X4X7/8X3/4SLBB": { "selfWeight": 66.2, "I": 21.1 },
"2L8X4X3/4SLBB": { "selfWeight": 57.4, "I": 18.7 },
"2L8X4X3/4X3/8SLBB": { "selfWeight": 57.4, "I": 18.7 },
"2L8X4X3/4X3/4SLBB": { "selfWeight": 57.4, "I": 18.7 },
"2L8X4X5/8SLBB": { "selfWeight": 48.4, "I": 16.2 },
"2L8X4X5/8X3/8SLBB": { "selfWeight": 48.4, "I": 16.2 },
"2L8X4X5/8X3/4SLBB": { "selfWeight": 48.4, "I": 16.2 },
"2L8X4X9/16SLBB": { "selfWeight": 43.8, "I": 14.9 },
"2L8X4X9/16X3/8SLBB": { "selfWeight": 43.8, "I": 14.9 },
"2L8X4X9/16X3/4SLBB": { "selfWeight": 43.8, "I": 14.9 },
"2L8X4X1/2SLBB": { "selfWeight": 39.2, "I": 13.5 },
"2L8X4X1/2X3/8SLBB": { "selfWeight": 39.2, "I": 13.5 },
"2L8X4X1/2X3/4SLBB": { "selfWeight": 39.2, "I": 13.5 },
"2L8X4X7/16SLBB": { "selfWeight": 34.4, "I": 12.1 },
"2L8X4X7/16X3/8SLBB": { "selfWeight": 34.4, "I": 12.1 },
"2L8X4X7/16X3/4SLBB": { "selfWeight": 34.4, "I": 12.1 },
"2L7X4X3/4SLBB": { "selfWeight": 52.4, "I": 18.0 },
"2L7X4X3/4X3/8SLBB": { "selfWeight": 52.4, "I": 18.0 },
"2L7X4X3/4X3/4SLBB": { "selfWeight": 52.4, "I": 18.0 },
"2L7X4X5/8SLBB": { "selfWeight": 44.2, "I": 15.6 },
"2L7X4X5/8X3/8SLBB": { "selfWeight": 44.2, "I": 15.6 },
"2L7X4X5/8X3/4SLBB": { "selfWeight": 44.2, "I": 15.6 },
"2L7X4X1/2SLBB": { "selfWeight": 35.8, "I": 13.0 },
"2L7X4X1/2X3/8SLBB": { "selfWeight": 35.8, "I": 13.0 },
"2L7X4X1/2X3/4SLBB": { "selfWeight": 35.8, "I": 13.0 },
"2L7X4X7/16SLBB": { "selfWeight": 31.4, "I": 11.6 },
"2L7X4X7/16X3/8SLBB": { "selfWeight": 31.4, "I": 11.6 },
"2L7X4X7/16X3/4SLBB": { "selfWeight": 31.4, "I": 11.6 },
"2L7X4X3/8SLBB": { "selfWeight": 27.2, "I": 10.1 },
"2L7X4X3/8X3/8SLBB": { "selfWeight": 27.2, "I": 10.1 },
"2L7X4X3/8X3/4SLBB": { "selfWeight": 27.2, "I": 10.1 },
"2L6X4X7/8SLBB": { "selfWeight": 54.4, "I": 19.4 },
"2L6X4X7/8X3/8SLBB": { "selfWeight": 54.4, "I": 19.4 },
"2L6X4X7/8X3/4SLBB": { "selfWeight": 54.4, "I": 19.4 },
"2L6X4X3/4SLBB": { "selfWeight": 47.2, "I": 17.3 },
"2L6X4X3/4X3/8SLBB": { "selfWeight": 47.2, "I": 17.3 },
"2L6X4X3/4X3/4SLBB": { "selfWeight": 47.2, "I": 17.3 },
"2L6X4X5/8SLBB": { "selfWeight": 40.0, "I": 15.0 },
"2L6X4X5/8X3/8SLBB": { "selfWeight": 40.0, "I": 15.0 },
"2L6X4X5/8X3/4SLBB": { "selfWeight": 40.0, "I": 15.0 },
"2L6X4X9/16SLBB": { "selfWeight": 36.2, "I": 13.7 },
"2L6X4X9/16X3/8SLBB": { "selfWeight": 36.2, "I": 13.7 },
"2L6X4X9/16X3/4SLBB": { "selfWeight": 36.2, "I": 13.7 },
"2L6X4X1/2SLBB": { "selfWeight": 32.4, "I": 12.4 },
"2L6X4X1/2X3/8SLBB": { "selfWeight": 32.4, "I": 12.4 },
"2L6X4X1/2X3/4SLBB": { "selfWeight": 32.4, "I": 12.4 },
"2L6X4X7/16SLBB": { "selfWeight": 28.6, "I": 11.1 },
"2L6X4X7/16X3/8SLBB": { "selfWeight": 28.6, "I": 11.1 },
"2L6X4X7/16X3/4SLBB": { "selfWeight": 28.6, "I": 11.1 },
"2L6X4X3/8SLBB": { "selfWeight": 24.6, "I": 9.72 },
"2L6X4X3/8X3/8SLBB": { "selfWeight": 24.6, "I": 9.72 },
"2L6X4X3/8X3/4SLBB": { "selfWeight": 24.6, "I": 9.72 },
"2L6X4X5/16SLBB": { "selfWeight": 20.6, "I": 8.26 },
"2L6X4X5/16X3/8SLBB": { "selfWeight": 20.6, "I": 8.26 },
"2L6X4X5/16X3/4SLBB": { "selfWeight": 20.6, "I": 8.26 },
"2L6X3-1/2X1/2SLBB": { "selfWeight": 30.6, "I": 8.47 },
"2L6X3-1/2X1/2X3/8SLBB": { "selfWeight": 30.6, "I": 8.47 },
"2L6X3-1/2X1/2X3/4SLBB": { "selfWeight": 30.6, "I": 8.47 },
"2L6X3-1/2X3/8SLBB": { "selfWeight": 23.4, "I": 6.65 },
"2L6X3-1/2X3/8X3/8SLBB": { "selfWeight": 23.4, "I": 6.65 },
"2L6X3-1/2X3/8X3/4SLBB": { "selfWeight": 23.4, "I": 6.65 },
"2L6X3-1/2X5/16SLBB": { "selfWeight": 19.6, "I": 5.68 },
"2L6X3-1/2X5/16X3/8SLBB": { "selfWeight": 19.6, "I": 5.68 },
"2L6X3-1/2X5/16X3/4SLBB": { "selfWeight": 19.6, "I": 5.68 },
"2L5X3-1/2X3/4SLBB": { "selfWeight": 39.6, "I": 11.0 },
"2L5X3-1/2X3/4X3/8SLBB": { "selfWeight": 39.6, "I": 11.0 },
"2L5X3-1/2X3/4X3/4SLBB": { "selfWeight": 39.6, "I": 11.0 },
"2L5X3-1/2X5/8SLBB": { "selfWeight": 33.6, "I": 9.60 },
"2L5X3-1/2X5/8X3/8SLBB": { "selfWeight": 33.6, "I": 9.60 },
"2L5X3-1/2X5/8X3/4SLBB": { "selfWeight": 33.6, "I": 9.60 },
"2L5X3-1/2X1/2SLBB": { "selfWeight": 27.2, "I": 8.04 },
"2L5X3-1/2X1/2X3/8SLBB": { "selfWeight": 27.2, "I": 8.04 },
"2L5X3-1/2X1/2X3/4SLBB": { "selfWeight": 27.2, "I": 8.04 },
"2L5X3-1/2X3/8SLBB": { "selfWeight": 20.8, "I": 6.31 },
"2L5X3-1/2X3/8X3/8SLBB": { "selfWeight": 20.8, "I": 6.31 },
"2L5X3-1/2X3/8X3/4SLBB": { "selfWeight": 20.8, "I": 6.31 },
"2L5X3-1/2X5/16SLBB": { "selfWeight": 17.4, "I": 5.38 },
"2L5X3-1/2X5/16X3/8SLBB": { "selfWeight": 17.4, "I": 5.38 },
"2L5X3-1/2X5/16X3/4SLBB": { "selfWeight": 17.4, "I": 5.38 },
"2L5X3-1/2X1/4SLBB": { "selfWeight": 14.0, "I": 4.40 },
"2L5X3-1/2X1/4X3/8SLBB": { "selfWeight": 14.0, "I": 4.40 },
"2L5X3-1/2X1/4X3/4SLBB": { "selfWeight": 14.0, "I": 4.40 },
"2L5X3X1/2SLBB": { "selfWeight": 25.6, "I": 5.10 },
"2L5X3X1/2X3/8SLBB": { "selfWeight": 25.6, "I": 5.10 },
"2L5X3X1/2X3/4SLBB": { "selfWeight": 25.6, "I": 5.10 },
"2L5X3X7/16SLBB": { "selfWeight": 22.6, "I": 4.58 },
"2L5X3X7/16X3/8SLBB": { "selfWeight": 22.6, "I": 4.58 },
"2L5X3X7/16X3/4SLBB": { "selfWeight": 22.6, "I": 4.58 },
"2L5X3X3/8SLBB": { "selfWeight": 19.6, "I": 4.02 },
"2L5X3X3/8X3/8SLBB": { "selfWeight": 19.6, "I": 4.02 },
"2L5X3X3/8X3/4SLBB": { "selfWeight": 19.6, "I": 4.02 },
"2L5X3X5/16SLBB": { "selfWeight": 16.4, "I": 3.44 },
"2L5X3X5/16X3/8SLBB": { "selfWeight": 16.4, "I": 3.44 },
"2L5X3X5/16X3/4SLBB": { "selfWeight": 16.4, "I": 3.44 },
"2L5X3X1/4SLBB": { "selfWeight": 13.2, "I": 2.82 },
"2L5X3X1/4X3/8SLBB": { "selfWeight": 13.2, "I": 2.82 },
"2L5X3X1/4X3/4SLBB": { "selfWeight": 13.2, "I": 2.82 },
"2L4X3-1/2X1/2SLBB": { "selfWeight": 23.8, "I": 7.53 },
"2L4X3-1/2X1/2X3/8SLBB": { "selfWeight": 23.8, "I": 7.53 },
"2L4X3-1/2X1/2X3/4SLBB": { "selfWeight": 23.8, "I": 7.53 },
"2L4X3-1/2X3/8SLBB": { "selfWeight": 18.2, "I": 5.92 },
"2L4X3-1/2X3/8X3/8SLBB": { "selfWeight": 18.2, "I": 5.92 },
"2L4X3-1/2X3/8X3/4SLBB": { "selfWeight": 18.2, "I": 5.92 },
"2L4X3-1/2X5/16SLBB": { "selfWeight": 15.4, "I": 5.05 },
"2L4X3-1/2X5/16X3/8SLBB": { "selfWeight": 15.4, "I": 5.05 },
"2L4X3-1/2X5/16X3/4SLBB": { "selfWeight": 15.4, "I": 5.05 },
"2L4X3-1/2X1/4SLBB": { "selfWeight": 12.4, "I": 4.13 },
"2L4X3-1/2X1/4X3/8SLBB": { "selfWeight": 12.4, "I": 4.13 },
"2L4X3-1/2X1/4X3/4SLBB": { "selfWeight": 12.4, "I": 4.13 },
"2L4X3X5/8SLBB": { "selfWeight": 27.2, "I": 5.70 },
"2L4X3X5/8X3/8SLBB": { "selfWeight": 27.2, "I": 5.70 },
"2L4X3X5/8X3/4SLBB": { "selfWeight": 27.2, "I": 5.70 },
"2L4X3X1/2SLBB": { "selfWeight": 22.2, "I": 4.79 },
"2L4X3X1/2X3/8SLBB": { "selfWeight": 22.2, "I": 4.79 },
"2L4X3X1/2X3/4SLBB": { "selfWeight": 22.2, "I": 4.79 },
"2L4X3X3/8SLBB": { "selfWeight": 17.0, "I": 3.79 },
"2L4X3X3/8X3/8SLBB": { "selfWeight": 17.0, "I": 3.79 },
"2L4X3X3/8X3/4SLBB": { "selfWeight": 17.0, "I": 3.79 },
"2L4X3X5/16SLBB": { "selfWeight": 14.4, "I": 3.24 },
"2L4X3X5/16X3/8SLBB": { "selfWeight": 14.4, "I": 3.24 },
"2L4X3X5/16X3/4SLBB": { "selfWeight": 14.4, "I": 3.24 },
"2L4X3X1/4SLBB": { "selfWeight": 11.6, "I": 2.66 },
"2L4X3X1/4X3/8SLBB": { "selfWeight": 11.6, "I": 2.66 },
"2L4X3X1/4X3/4SLBB": { "selfWeight": 11.6, "I": 2.66 },
"2L3-1/2X3X1/2SLBB": { "selfWeight": 20.4, "I": 4.65 },
"2L3-1/2X3X1/2X3/8SLBB": { "selfWeight": 20.4, "I": 4.65 },
"2L3-1/2X3X1/2X3/4SLBB": { "selfWeight": 20.4, "I": 4.65 },
"2L3-1/2X3X7/16SLBB": { "selfWeight": 18.2, "I": 4.18 },
"2L3-1/2X3X7/16X3/8SLBB": { "selfWeight": 18.2, "I": 4.18 },
"2L3-1/2X3X7/16X3/4SLBB": { "selfWeight": 18.2, "I": 4.18 },
"2L3-1/2X3X3/8SLBB": { "selfWeight": 15.8, "I": 3.69 },
"2L3-1/2X3X3/8X3/8SLBB": { "selfWeight": 15.8, "I": 3.69 },
"2L3-1/2X3X3/8X3/4SLBB": { "selfWeight": 15.8, "I": 3.69 },
"2L3-1/2X3X5/16SLBB": { "selfWeight": 13.2, "I": 3.16 },
"2L3-1/2X3X5/16X3/8SLBB": { "selfWeight": 13.2, "I": 3.16 },
"2L3-1/2X3X5/16X3/4SLBB": { "selfWeight": 13.2, "I": 3.16 },
"2L3-1/2X3X1/4SLBB": { "selfWeight": 10.8, "I": 2.61 },
"2L3-1/2X3X1/4X3/8SLBB": { "selfWeight": 10.8, "I": 2.61 },
"2L3-1/2X3X1/4X3/4SLBB": { "selfWeight": 10.8, "I": 2.61 },
"2L3-1/2X2-1/2X1/2SLBB": { "selfWeight": 18.8, "I": 2.72 },
"2L3-1/2X2-1/2X1/2X3/8SLBB": { "selfWeight": 18.8, "I": 2.72 },
"2L3-1/2X2-1/2X1/2X3/4SLBB": { "selfWeight": 18.8, "I": 2.72 },
"2L3-1/2X2-1/2X3/8SLBB": { "selfWeight": 14.4, "I": 2.17 },
"2L3-1/2X2-1/2X3/8X3/8SLBB": { "selfWeight": 14.4, "I": 2.17 },
"2L3-1/2X2-1/2X3/8X3/4SLBB": { "selfWeight": 14.4, "I": 2.17 },
"2L3-1/2X2-1/2X5/16SLBB": { "selfWeight": 12.2, "I": 1.87 },
"2L3-1/2X2-1/2X5/16X3/8SLBB": { "selfWeight": 12.2, "I": 1.87 },
"2L3-1/2X2-1/2X5/16X3/4SLBB": { "selfWeight": 12.2, "I": 1.87 },
"2L3-1/2X2-1/2X1/4SLBB": { "selfWeight": 9.80, "I": 1.55 },
"2L3-1/2X2-1/2X1/4X3/8SLBB": { "selfWeight": 9.80, "I": 1.55 },
"2L3-1/2X2-1/2X1/4X3/4SLBB": { "selfWeight": 9.80, "I": 1.55 },
"2L3X2-1/2X1/2SLBB": { "selfWeight": 17.0, "I": 2.58 },
"2L3X2-1/2X1/2X3/8SLBB": { "selfWeight": 17.0, "I": 2.58 },
"2L3X2-1/2X1/2X3/4SLBB": { "selfWeight": 17.0, "I": 2.58 },
"2L3X2-1/2X7/16SLBB": { "selfWeight": 15.2, "I": 2.33 },
"2L3X2-1/2X7/16X3/8SLBB": { "selfWeight": 15.2, "I": 2.33 },
"2L3X2-1/2X7/16X3/4SLBB": { "selfWeight": 15.2, "I": 2.33 },
"2L3X2-1/2X3/8SLBB": { "selfWeight": 13.2, "I": 2.06 },
"2L3X2-1/2X3/8X3/8SLBB": { "selfWeight": 13.2, "I": 2.06 },
"2L3X2-1/2X3/8X3/4SLBB": { "selfWeight": 13.2, "I": 2.06 },
"2L3X2-1/2X5/16SLBB": { "selfWeight": 11.2, "I": 1.78 },
"2L3X2-1/2X5/16X3/8SLBB": { "selfWeight": 11.2, "I": 1.78 },
"2L3X2-1/2X5/16X3/4SLBB": { "selfWeight": 11.2, "I": 1.78 },
"2L3X2-1/2X1/4SLBB": { "selfWeight": 9.00, "I": 1.47 },
"2L3X2-1/2X1/4X3/8SLBB": { "selfWeight": 9.00, "I": 1.47 },
"2L3X2-1/2X1/4X3/4SLBB": { "selfWeight": 9.00, "I": 1.47 },
"2L3X2-1/2X3/16SLBB": { "selfWeight": 6.78, "I": 1.14 },
"2L3X2-1/2X3/16X3/8SLBB": { "selfWeight": 6.78, "I": 1.14 },
"2L3X2-1/2X3/16X3/4SLBB": { "selfWeight": 6.78, "I": 1.14 },
"2L3X2X1/2SLBB": { "selfWeight": 15.4, "I": 1.33 },
"2L3X2X1/2X3/8SLBB": { "selfWeight": 15.4, "I": 1.33 },
"2L3X2X1/2X3/4SLBB": { "selfWeight": 15.4, "I": 1.33 },
"2L3X2X3/8SLBB": { "selfWeight": 11.8, "I": 1.08 },
"2L3X2X3/8X3/8SLBB": { "selfWeight": 11.8, "I": 1.08 },
"2L3X2X3/8X3/4SLBB": { "selfWeight": 11.8, "I": 1.08 },
"2L3X2X5/16SLBB": { "selfWeight": 10.0, "I": 0.935 },
"2L3X2X5/16X3/8SLBB": { "selfWeight": 10.0, "I": 0.935 },
"2L3X2X5/16X3/4SLBB": { "selfWeight": 10.0, "I": 0.935 },
"2L3X2X1/4SLBB": { "selfWeight": 8.20, "I": 0.779 },
"2L3X2X1/4X3/8SLBB": { "selfWeight": 8.20, "I": 0.779 },
"2L3X2X1/4X3/4SLBB": { "selfWeight": 8.20, "I": 0.779 },
"2L3X2X3/16SLBB": { "selfWeight": 6.14, "I": 0.610 },
"2L3X2X3/16X3/8SLBB": { "selfWeight": 6.14, "I": 0.610 },
"2L3X2X3/16X3/4SLBB": { "selfWeight": 6.14, "I": 0.610 },
"2L2-1/2X2X3/8SLBB": { "selfWeight": 10.6, "I": 1.03 },
"2L2-1/2X2X3/8X3/8SLBB": { "selfWeight": 10.6, "I": 1.03 },
"2L2-1/2X2X3/8X3/4SLBB": { "selfWeight": 10.6, "I": 1.03 },
"2L2-1/2X2X5/16SLBB": { "selfWeight": 9.00, "I": 0.891 },
"2L2-1/2X2X5/16X3/8SLBB": { "selfWeight": 9.00, "I": 0.891 },
"2L2-1/2X2X5/16X3/4SLBB": { "selfWeight": 9.00, "I": 0.891 },
"2L2-1/2X2X1/4SLBB": { "selfWeight": 7.24, "I": 0.744 },
"2L2-1/2X2X1/4X3/8SLBB": { "selfWeight": 7.24, "I": 0.744 },
"2L2-1/2X2X1/4X3/4SLBB": { "selfWeight": 7.24, "I": 0.744 },
"2L2-1/2X2X3/16SLBB": { "selfWeight": 5.50, "I": 0.583 },
"2L2-1/2X2X3/16X3/8SLBB": { "selfWeight": 5.50, "I": 0.583 },
"2L2-1/2X2X3/16X3/4SLBB": { "selfWeight": 5.50, "I": 0.583 },
"2L2-1/2X1-1/2X1/4SLBB": { "selfWeight": 6.38, "I": 0.316 },
"2L2-1/2X1-1/2X1/4X3/8SLBB": { "selfWeight": 6.38, "I": 0.316 },
"2L2-1/2X1-1/2X1/4X3/4SLBB": { "selfWeight": 6.38, "I": 0.316 },
"2L2-1/2X1-1/2X3/16SLBB": { "selfWeight": 4.88, "I": 0.249 },
"2L2-1/2X1-1/2X3/16X3/8SLBB": { "selfWeight": 4.88, "I": 0.249 },
"2L2-1/2X1-1/2X3/16X3/4SLBB": { "selfWeight": 4.88, "I": 0.249 },
"HSS24X12X3/4": { "selfWeight": 171.16, "I": 3440 },
"HSS24X12X5/8": { "selfWeight": 144.39, "I": 2940 },
"HSS24X12X1/2": { "selfWeight": 116.91, "I": 2420 },
"HSS22X22X7/8": { "selfWeight": 244.88, "I": 4970 },
"HSS22X22X3/4": { "selfWeight": 212.00, "I": 4350 },
"HSS20X20X7/8": { "selfWeight": 221.06, "I": 3670 },
"HSS20X20X3/4": { "selfWeight": 191.58, "I": 3230 },
"HSS20X20X5/8": { "selfWeight": 161.40, "I": 2750 },
"HSS20X20X1/2": { "selfWeight": 130.52, "I": 2260 },
"HSS20X12X3/4": { "selfWeight": 150.75, "I": 2190 },
"HSS20X12X5/8": { "selfWeight": 127.37, "I": 1880 },
"HSS20X12X1/2": { "selfWeight": 103.30, "I": 1550 },
"HSS20X12X3/8": { "selfWeight": 78.52, "I": 1200 },
"HSS20X12X5/16": { "selfWeight": 65.87, "I": 1010 },
"HSS20X8X5/8": { "selfWeight": 110.36, "I": 1440 },
"HSS20X8X1/2": { "selfWeight": 89.68, "I": 1190 },
"HSS20X8X3/8": { "selfWeight": 68.31, "I": 926 },
"HSS20X8X5/16": { "selfWeight": 57.36, "I": 786 },
"HSS20X4X1/2": { "selfWeight": 76.07, "I": 838 },
"HSS20X4X3/8": { "selfWeight": 58.10, "I": 657 },
"HSS20X4X5/16": { "selfWeight": 48.86, "I": 560 },
"HSS20X4X1/4": { "selfWeight": 39.43, "I": 458 },
"HSS18X18X7/8": { "selfWeight": 197.24, "I": 2630 },
"HSS18X18X3/4": { "selfWeight": 171.16, "I": 2320 },
"HSS18X18X5/8": { "selfWeight": 144.39, "I": 1980 },
"HSS18X18X1/2": { "selfWeight": 116.91, "I": 1630 },
"HSS18X6X5/8": { "selfWeight": 93.34, "I": 923 },
"HSS18X6X1/2": { "selfWeight": 76.07, "I": 770 },
"HSS18X6X3/8": { "selfWeight": 58.10, "I": 602 },
"HSS18X6X5/16": { "selfWeight": 48.86, "I": 513 },
"HSS18X6X1/4": { "selfWeight": 39.43, "I": 419 },
"HSS16X16X7/8": { "selfWeight": 173.43, "I": 1800 },
"HSS16X16X3/4": { "selfWeight": 150.75, "I": 1590 },
"HSS16X16X5/8": { "selfWeight": 127.37, "I": 1370 },
"HSS16X16X1/2": { "selfWeight": 103.30, "I": 1130 },
"HSS16X16X3/8": { "selfWeight": 78.52, "I": 873 },
"HSS16X16X5/16": { "selfWeight": 65.87, "I": 739 },
"HSS16X12X3/4": { "selfWeight": 130.33, "I": 1270 },
"HSS16X12X5/8": { "selfWeight": 110.36, "I": 1090 },
"HSS16X12X1/2": { "selfWeight": 89.68, "I": 904 },
"HSS16X12X3/8": { "selfWeight": 68.31, "I": 702 },
"HSS16X12X5/16": { "selfWeight": 57.36, "I": 595 },
"HSS16X8X5/8": { "selfWeight": 93.34, "I": 815 },
"HSS16X8X1/2": { "selfWeight": 76.07, "I": 679 },
"HSS16X8X3/8": { "selfWeight": 58.10, "I": 531 },
"HSS16X8X5/16": { "selfWeight": 48.86, "I": 451 },
"HSS16X8X1/4": { "selfWeight": 39.43, "I": 368 },
"HSS16X4X5/8": { "selfWeight": 76.33, "I": 539 },
"HSS16X4X1/2": { "selfWeight": 62.46, "I": 455 },
"HSS16X4X3/8": { "selfWeight": 47.90, "I": 360 },
"HSS16X4X5/16": { "selfWeight": 40.35, "I": 308 },
"HSS16X4X1/4": { "selfWeight": 32.63, "I": 253 },
"HSS16X4X3/16": { "selfWeight": 24.73, "I": 193 },
"HSS14X14X7/8": { "selfWeight": 149.61, "I": 1170 },
"HSS14X14X3/4": { "selfWeight": 130.33, "I": 1040 },
"HSS14X14X5/8": { "selfWeight": 110.36, "I": 897 },
"HSS14X14X1/2": { "selfWeight": 89.68, "I": 743 },
"HSS14X14X3/8": { "selfWeight": 68.31, "I": 577 },
"HSS14X14X5/16": { "selfWeight": 57.36, "I": 490 },
"HSS14X10X5/8": { "selfWeight": 93.34, "I": 687 },
"HSS14X10X1/2": { "selfWeight": 76.07, "I": 573 },
"HSS14X10X3/8": { "selfWeight": 58.10, "I": 447 },
"HSS14X10X5/16": { "selfWeight": 48.86, "I": 380 },
"HSS14X10X1/4": { "selfWeight": 39.43, "I": 310 },
"HSS14X6X5/8": { "selfWeight": 76.33, "I": 478 },
"HSS14X6X1/2": { "selfWeight": 62.46, "I": 402 },
"HSS14X6X3/8": { "selfWeight": 47.90, "I": 317 },
"HSS14X6X5/16": { "selfWeight": 40.35, "I": 271 },
"HSS14X6X1/4": { "selfWeight": 32.63, "I": 222 },
"HSS14X6X3/16": { "selfWeight": 24.73, "I": 170 },
"HSS14X4X5/8": { "selfWeight": 67.82, "I": 373 },
"HSS14X4X1/2": { "selfWeight": 55.66, "I": 317 },
"HSS14X4X3/8": { "selfWeight": 42.79, "I": 252 },
"HSS14X4X5/16": { "selfWeight": 36.10, "I": 216 },
"HSS14X4X1/4": { "selfWeight": 29.23, "I": 178 },
"HSS14X4X3/16": { "selfWeight": 22.18, "I": 137 },
"HSS12X12X3/4": { "selfWeight": 109.91, "I": 631 },
"HSS12X12X5/8": { "selfWeight": 93.34, "I": 548 },
"HSS12X12X1/2": { "selfWeight": 76.07, "I": 457 },
"HSS12X12X3/8": { "selfWeight": 58.10, "I": 357 },
"HSS12X12X5/16": { "selfWeight": 48.86, "I": 304 },
"HSS12X12X1/4": { "selfWeight": 39.43, "I": 248 },
"HSS12X12X3/16": { "selfWeight": 29.84, "I": 189 },
"HSS12X10X1/2": { "selfWeight": 69.27, "I": 395 },
"HSS12X10X3/8": { "selfWeight": 53.00, "I": 310 },
"HSS12X10X5/16": { "selfWeight": 44.60, "I": 264 },
"HSS12X10X1/4": { "selfWeight": 36.03, "I": 216 },
"HSS12X8X5/8": { "selfWeight": 76.33, "I": 397 },
"HSS12X8X1/2": { "selfWeight": 62.46, "I": 333 },
"HSS12X8X3/8": { "selfWeight": 47.90, "I": 262 },
"HSS12X8X5/16": { "selfWeight": 40.35, "I": 224 },
"HSS12X8X1/4": { "selfWeight": 32.63, "I": 184 },
"HSS12X8X3/16": { "selfWeight": 24.73, "I": 140 },
"HSS12X6X5/8": { "selfWeight": 67.82, "I": 321 },
"HSS12X6X1/2": { "selfWeight": 55.66, "I": 271 },
"HSS12X6X3/8": { "selfWeight": 42.79, "I": 215 },
"HSS12X6X5/16": { "selfWeight": 36.10, "I": 184 },
"HSS12X6X1/4": { "selfWeight": 29.23, "I": 151 },
"HSS12X6X3/16": { "selfWeight": 22.18, "I": 116 },
"HSS12X4X5/8": { "selfWeight": 59.32, "I": 245 },
"HSS12X4X1/2": { "selfWeight": 48.85, "I": 210 },
"HSS12X4X3/8": { "selfWeight": 37.69, "I": 168 },
"HSS12X4X5/16": { "selfWeight": 31.84, "I": 144 },
"HSS12X4X1/4": { "selfWeight": 25.82, "I": 119 },
"HSS12X4X3/16": { "selfWeight": 19.63, "I": 91.8 },
"HSS12X3-1/2X3/8": { "selfWeight": 36.41, "I": 156 },
"HSS12X3-1/2X5/16": { "selfWeight": 30.78, "I": 134 },
"HSS12X3X5/16": { "selfWeight": 29.72, "I": 124 },
"HSS12X3X1/4": { "selfWeight": 24.12, "I": 103 },
"HSS12X3X3/16": { "selfWeight": 18.35, "I": 79.6 },
"HSS12X2X5/16": { "selfWeight": 27.59, "I": 104 },
"HSS12X2X1/4": { "selfWeight": 22.42, "I": 86.9 },
"HSS12X2X3/16": { "selfWeight": 17.08, "I": 67.4 },
"HSS10X10X3/4": { "selfWeight": 89.50, "I": 347 },
"HSS10X10X5/8": { "selfWeight": 76.33, "I": 304 },
"HSS10X10X1/2": { "selfWeight": 62.46, "I": 256 },
"HSS10X10X3/8": { "selfWeight": 47.90, "I": 202 },
"HSS10X10X5/16": { "selfWeight": 40.35, "I": 172 },
"HSS10X10X1/4": { "selfWeight": 32.63, "I": 141 },
"HSS10X10X3/16": { "selfWeight": 24.73, "I": 108 },
"HSS10X8X5/8": { "selfWeight": 67.82, "I": 253 },
"HSS10X8X1/2": { "selfWeight": 55.66, "I": 214 },
"HSS10X8X3/8": { "selfWeight": 42.79, "I": 169 },
"HSS10X8X5/16": { "selfWeight": 36.10, "I": 145 },
"HSS10X8X1/4": { "selfWeight": 29.23, "I": 119 },
"HSS10X8X3/16": { "selfWeight": 22.18, "I": 91.4 },
"HSS10X6X5/8": { "selfWeight": 59.32, "I": 201 },
"HSS10X6X1/2": { "selfWeight": 48.85, "I": 171 },
"HSS10X6X3/8": { "selfWeight": 37.69, "I": 137 },
"HSS10X6X5/16": { "selfWeight": 31.84, "I": 118 },
"HSS10X6X1/4": { "selfWeight": 25.82, "I": 96.9 },
"HSS10X6X3/16": { "selfWeight": 19.63, "I": 74.6 },
"HSS10X5X3/8": { "selfWeight": 35.13, "I": 120 },
"HSS10X5X5/16": { "selfWeight": 29.72, "I": 104 },
"HSS10X5X1/4": { "selfWeight": 24.12, "I": 85.8 },
"HSS10X5X3/16": { "selfWeight": 18.35, "I": 66.2 },
"HSS10X4X5/8": { "selfWeight": 50.81, "I": 149 },
"HSS10X4X1/2": { "selfWeight": 42.05, "I": 129 },
"HSS10X4X3/8": { "selfWeight": 32.58, "I": 104 },
"HSS10X4X5/16": { "selfWeight": 27.59, "I": 90.1 },
"HSS10X4X1/4": { "selfWeight": 22.42, "I": 74.7 },
"HSS10X4X3/16": { "selfWeight": 17.08, "I": 57.8 },
"HSS10X4X1/8": { "selfWeight": 11.56, "I": 39.8 },
"HSS10X3-1/2X1/2": { "selfWeight": 40.34, "I": 118 },
"HSS10X3-1/2X3/8": { "selfWeight": 31.31, "I": 96.1 },
"HSS10X3-1/2X5/16": { "selfWeight": 26.53, "I": 83.2 },
"HSS10X3-1/2X1/4": { "selfWeight": 21.57, "I": 69.1 },
"HSS10X3-1/2X3/16": { "selfWeight": 16.44, "I": 53.6 },
"HSS10X3-1/2X1/8": { "selfWeight": 11.13, "I": 37.0 },
"HSS10X3X3/8": { "selfWeight": 30.03, "I": 88.0 },
"HSS10X3X5/16": { "selfWeight": 25.46, "I": 76.3 },
"HSS10X3X1/4": { "selfWeight": 20.72, "I": 63.6 },
"HSS10X3X3/16": { "selfWeight": 15.80, "I": 49.4 },
"HSS10X3X1/8": { "selfWeight": 10.71, "I": 34.2 },
"HSS10X2X3/8": { "selfWeight": 27.48, "I": 71.7 },
"HSS10X2X5/16": { "selfWeight": 23.34, "I": 62.6 },
"HSS10X2X1/4": { "selfWeight": 19.02, "I": 52.5 },
"HSS10X2X3/16": { "selfWeight": 14.53, "I": 41.0 },
"HSS10X2X1/8": { "selfWeight": 9.86, "I": 28.5 },
"HSS9X9X5/8": { "selfWeight": 67.82, "I": 216 },
"HSS9X9X1/2": { "selfWeight": 55.66, "I": 183 },
"HSS9X9X3/8": { "selfWeight": 42.79, "I": 145 },
"HSS9X9X5/16": { "selfWeight": 36.10, "I": 124 },
"HSS9X9X1/4": { "selfWeight": 29.23, "I": 102 },
"HSS9X9X3/16": { "selfWeight": 22.18, "I": 78.2 },
"HSS9X9X1/8": { "selfWeight": 14.96, "I": 53.5 },
"HSS9X7X5/8": { "selfWeight": 59.32, "I": 174 },
"HSS9X7X1/2": { "selfWeight": 48.85, "I": 149 },
"HSS9X7X3/8": { "selfWeight": 37.69, "I": 119 },
"HSS9X7X5/16": { "selfWeight": 31.84, "I": 102 },
"HSS9X7X1/4": { "selfWeight": 25.82, "I": 84.1 },
"HSS9X7X3/16": { "selfWeight": 19.63, "I": 64.7 },
"HSS9X5X5/8": { "selfWeight": 50.81, "I": 133 },
"HSS9X5X1/2": { "selfWeight": 42.05, "I": 115 },
"HSS9X5X3/8": { "selfWeight": 32.58, "I": 92.5 },
"HSS9X5X5/16": { "selfWeight": 27.59, "I": 79.8 },
"HSS9X5X1/4": { "selfWeight": 22.42, "I": 66.1 },
"HSS9X5X3/16": { "selfWeight": 17.08, "I": 51.1 },
"HSS9X3X1/2": { "selfWeight": 35.24, "I": 80.8 },
"HSS9X3X3/8": { "selfWeight": 27.48, "I": 66.3 },
"HSS9X3X5/16": { "selfWeight": 23.34, "I": 57.7 },
"HSS9X3X1/4": { "selfWeight": 19.02, "I": 48.2 },
"HSS9X3X3/16": { "selfWeight": 14.53, "I": 37.6 },
"HSS8X8X5/8": { "selfWeight": 59.32, "I": 146 },
"HSS8X8X1/2": { "selfWeight": 48.85, "I": 125 },
"HSS8X8X3/8": { "selfWeight": 37.69, "I": 100 },
"HSS8X8X5/16": { "selfWeight": 31.84, "I": 85.6 },
"HSS8X8X1/4": { "selfWeight": 25.82, "I": 70.7 },
"HSS8X8X3/16": { "selfWeight": 19.63, "I": 54.4 },
"HSS8X8X1/8": { "selfWeight": 13.26, "I": 37.4 },
"HSS8X6X5/8": { "selfWeight": 50.81, "I": 114 },
"HSS8X6X1/2": { "selfWeight": 42.05, "I": 98.2 },
"HSS8X6X3/8": { "selfWeight": 32.58, "I": 79.1 },
"HSS8X6X5/16": { "selfWeight": 27.59, "I": 68.3 },
"HSS8X6X1/4": { "selfWeight": 22.42, "I": 56.6 },
"HSS8X6X3/16": { "selfWeight": 17.08, "I": 43.7 },
"HSS8X4X5/8": { "selfWeight": 42.30, "I": 82.0 },
"HSS8X4X1/2": { "selfWeight": 35.24, "I": 71.8 },
"HSS8X4X3/8": { "selfWeight": 27.48, "I": 58.7 },
"HSS8X4X5/16": { "selfWeight": 23.34, "I": 51.0 },
"HSS8X4X1/4": { "selfWeight": 19.02, "I": 42.5 },
"HSS8X4X3/16": { "selfWeight": 14.53, "I": 33.1 },
"HSS8X4X1/8": { "selfWeight": 9.86, "I": 22.9 },
"HSS8X3X1/2": { "selfWeight": 31.84, "I": 58.6 },
"HSS8X3X3/8": { "selfWeight": 24.93, "I": 48.5 },
"HSS8X3X5/16": { "selfWeight": 21.21, "I": 42.4 },
"HSS8X3X1/4": { "selfWeight": 17.32, "I": 35.5 },
"HSS8X3X3/16": { "selfWeight": 13.25, "I": 27.8 },
"HSS8X3X1/8": { "selfWeight": 9.01, "I": 19.3 },
"HSS8X2X3/8": { "selfWeight": 22.37, "I": 38.2 },
"HSS8X2X5/16": { "selfWeight": 19.08, "I": 33.7 },
"HSS8X2X1/4": { "selfWeight": 15.62, "I": 28.5 },
"HSS8X2X3/16": { "selfWeight": 11.97, "I": 22.4 },
"HSS8X2X1/8": { "selfWeight": 8.16, "I": 15.7 },
"HSS7X7X5/8": { "selfWeight": 50.81, "I": 93.4 },
"HSS7X7X1/2": { "selfWeight": 42.05, "I": 80.5 },
"HSS7X7X3/8": { "selfWeight": 32.58, "I": 65.0 },
"HSS7X7X5/16": { "selfWeight": 27.59, "I": 56.1 },
"HSS7X7X1/4": { "selfWeight": 22.42, "I": 46.5 },
"HSS7X7X3/16": { "selfWeight": 17.08, "I": 36.0 },
"HSS7X7X1/8": { "selfWeight": 11.56, "I": 24.8 },
"HSS7X5X1/2": { "selfWeight": 35.24, "I": 60.6 },
"HSS7X5X3/8": { "selfWeight": 27.48, "I": 49.5 },
"HSS7X5X5/16": { "selfWeight": 23.34, "I": 43.0 },
"HSS7X5X1/4": { "selfWeight": 19.02, "I": 35.9 },
"HSS7X5X3/16": { "selfWeight": 14.53, "I": 27.9 },
"HSS7X5X1/8": { "selfWeight": 9.86, "I": 19.3 },
"HSS7X4X1/2": { "selfWeight": 31.84, "I": 50.7 },
"HSS7X4X3/8": { "selfWeight": 24.93, "I": 41.8 },
"HSS7X4X5/16": { "selfWeight": 21.21, "I": 36.5 },
"HSS7X4X1/4": { "selfWeight": 17.32, "I": 30.5 },
"HSS7X4X3/16": { "selfWeight": 13.25, "I": 23.8 },
"HSS7X4X1/8": { "selfWeight": 9.01, "I": 16.6 },
"HSS7X3X1/2": { "selfWeight": 28.43, "I": 40.7 },
"HSS7X3X3/8": { "selfWeight": 22.37, "I": 34.1 },
"HSS7X3X5/16": { "selfWeight": 19.08, "I": 29.9 },
"HSS7X3X1/4": { "selfWeight": 15.62, "I": 25.2 },
"HSS7X3X3/16": { "selfWeight": 11.97, "I": 19.8 },
"HSS7X3X1/8": { "selfWeight": 8.16, "I": 13.8 },
"HSS7X2X1/4": { "selfWeight": 13.91, "I": 19.8 },
"HSS7X2X3/16": { "selfWeight": 10.70, "I": 15.7 },
"HSS7X2X1/8": { "selfWeight": 7.31, "I": 11.1 },
"HSS6X6X5/8": { "selfWeight": 42.30, "I": 55.2 },
"HSS6X6X1/2": { "selfWeight": 35.24, "I": 48.3 },
"HSS6X6X3/8": { "selfWeight": 27.48, "I": 39.5 },
"HSS6X6X5/16": { "selfWeight": 23.34, "I": 34.3 },
"HSS6X6X1/4": { "selfWeight": 19.02, "I": 28.6 },
"HSS6X6X3/16": { "selfWeight": 14.53, "I": 22.3 },
"HSS6X6X1/8": { "selfWeight": 9.86, "I": 15.5 },
"HSS6X5X1/2": { "selfWeight": 31.84, "I": 41.1 },
"HSS6X5X3/8": { "selfWeight": 24.93, "I": 33.9 },
"HSS6X5X5/16": { "selfWeight": 21.21, "I": 29.6 },
"HSS6X5X1/4": { "selfWeight": 17.32, "I": 24.7 },
"HSS6X5X3/16": { "selfWeight": 13.25, "I": 19.3 },
"HSS6X5X1/8": { "selfWeight": 9.01, "I": 13.4 },
"HSS6X4X1/2": { "selfWeight": 28.43, "I": 34.0 },
"HSS6X4X3/8": { "selfWeight": 22.37, "I": 28.3 },
"HSS6X4X5/16": { "selfWeight": 19.08, "I": 24.8 },
"HSS6X4X1/4": { "selfWeight": 15.62, "I": 20.9 },
"HSS6X4X3/16": { "selfWeight": 11.97, "I": 16.4 },
"HSS6X4X1/8": { "selfWeight": 8.16, "I": 11.4 },
"HSS6X3X1/2": { "selfWeight": 25.03, "I": 26.8 },
"HSS6X3X3/8": { "selfWeight": 19.82, "I": 22.7 },
"HSS6X3X5/16": { "selfWeight": 16.96, "I": 20.1 },
"HSS6X3X1/4": { "selfWeight": 13.91, "I": 17.0 },
"HSS6X3X3/16": { "selfWeight": 10.70, "I": 13.4 },
"HSS6X3X1/8": { "selfWeight": 7.31, "I": 9.43 },
"HSS6X2X3/8": { "selfWeight": 17.27, "I": 17.1 },
"HSS6X2X5/16": { "selfWeight": 14.83, "I": 15.3 },
"HSS6X2X1/4": { "selfWeight": 12.21, "I": 13.1 },
"HSS6X2X3/16": { "selfWeight": 9.42, "I": 10.5 },
"HSS6X2X1/8": { "selfWeight": 6.46, "I": 7.42 },
"HSS5-1/2X5-1/2X3/8": { "selfWeight": 24.93, "I": 29.7 },
"HSS5-1/2X5-1/2X5/16": { "selfWeight": 21.21, "I": 25.9 },
"HSS5-1/2X5-1/2X1/4": { "selfWeight": 17.32, "I": 21.7 },
"HSS5-1/2X5-1/2X3/16": { "selfWeight": 13.25, "I": 17.0 },
"HSS5-1/2X5-1/2X1/8": { "selfWeight": 9.01, "I": 11.8 },
"HSS5X5X1/2": { "selfWeight": 28.43, "I": 26.0 },
"HSS5X5X3/8": { "selfWeight": 22.37, "I": 21.7 },
"HSS5X5X5/16": { "selfWeight": 19.08, "I": 19.0 },
"HSS5X5X1/4": { "selfWeight": 15.62, "I": 16.0 },
"HSS5X5X3/16": { "selfWeight": 11.97, "I": 12.6 },
"HSS5X5X1/8": { "selfWeight": 8.16, "I": 8.80 },
"HSS5X4X1/2": { "selfWeight": 25.03, "I": 21.2 },
"HSS5X4X3/8": { "selfWeight": 19.82, "I": 17.9 },
"HSS5X4X5/16": { "selfWeight": 16.96, "I": 15.8 },
"HSS5X4X1/4": { "selfWeight": 13.91, "I": 13.4 },
"HSS5X4X3/16": { "selfWeight": 10.70, "I": 10.6 },
"HSS5X4X1/8": { "selfWeight": 7.31, "I": 7.42 },
"HSS5X3X1/2": { "selfWeight": 21.63, "I": 16.4 },
"HSS5X3X3/8": { "selfWeight": 17.27, "I": 14.1 },
"HSS5X3X5/16": { "selfWeight": 14.83, "I": 12.6 },
"HSS5X3X1/4": { "selfWeight": 12.21, "I": 10.7 },
"HSS5X3X3/16": { "selfWeight": 9.42, "I": 8.53 },
"HSS5X3X1/8": { "selfWeight": 6.46, "I": 6.03 },
"HSS5X2-1/2X1/4": { "selfWeight": 11.36, "I": 9.40 },
"HSS5X2-1/2X3/16": { "selfWeight": 8.78, "I": 7.51 },
"HSS5X2-1/2X1/8": { "selfWeight": 6.03, "I": 5.34 },
"HSS5X2X3/8": { "selfWeight": 14.72, "I": 10.4 },
"HSS5X2X5/16": { "selfWeight": 12.70, "I": 9.35 },
"HSS5X2X1/4": { "selfWeight": 10.51, "I": 8.08 },
"HSS5X2X3/16": { "selfWeight": 8.15, "I": 6.50 },
"HSS5X2X1/8": { "selfWeight": 5.61, "I": 4.65 },
"HSS4-1/2X4-1/2X1/2": { "selfWeight": 25.03, "I": 18.1 },
"HSS4-1/2X4-1/2X3/8": { "selfWeight": 19.82, "I": 15.3 },
"HSS4-1/2X4-1/2X5/16": { "selfWeight": 16.96, "I": 13.5 },
"HSS4-1/2X4-1/2X1/4": { "selfWeight": 13.91, "I": 11.4 },
"HSS4-1/2X4-1/2X3/16": { "selfWeight": 10.70, "I": 9.02 },
"HSS4-1/2X4-1/2X1/8": { "selfWeight": 7.31, "I": 6.35 },
"HSS4X4X1/2": { "selfWeight": 21.63, "I": 11.9 },
"HSS4X4X3/8": { "selfWeight": 17.27, "I": 10.3 },
"HSS4X4X5/16": { "selfWeight": 14.83, "I": 9.14 },
"HSS4X4X1/4": { "selfWeight": 12.21, "I": 7.80 },
"HSS4X4X3/16": { "selfWeight": 9.42, "I": 6.21 },
"HSS4X4X1/8": { "selfWeight": 6.46, "I": 4.40 },
"HSS4X3X3/8": { "selfWeight": 14.72, "I": 7.93 },
"HSS4X3X5/16": { "selfWeight": 12.70, "I": 7.14 },
"HSS4X3X1/4": { "selfWeight": 10.51, "I": 6.15 },
"HSS4X3X3/16": { "selfWeight": 8.15, "I": 4.93 },
"HSS4X3X1/8": { "selfWeight": 5.61, "I": 3.52 },
"HSS4X2-1/2X3/8": { "selfWeight": 13.44, "I": 6.77 },
"HSS4X2-1/2X5/16": { "selfWeight": 11.64, "I": 6.13 },
"HSS4X2-1/2X1/4": { "selfWeight": 9.66, "I": 5.32 },
"HSS4X2-1/2X3/16": { "selfWeight": 7.51, "I": 4.30 },
"HSS4X2-1/2X1/8": { "selfWeight": 5.18, "I": 3.09 },
"HSS4X2X3/8": { "selfWeight": 12.17, "I": 5.60 },
"HSS4X2X5/16": { "selfWeight": 10.58, "I": 5.13 },
"HSS4X2X1/4": { "selfWeight": 8.81, "I": 4.49 },
"HSS4X2X3/16": { "selfWeight": 6.87, "I": 3.66 },
"HSS4X2X1/8": { "selfWeight": 4.75, "I": 2.65 },
"HSS3-1/2X3-1/2X3/8": { "selfWeight": 14.72, "I": 6.49 },
"HSS3-1/2X3-1/2X5/16": { "selfWeight": 12.70, "I": 5.84 },
"HSS3-1/2X3-1/2X1/4": { "selfWeight": 10.51, "I": 5.04 },
"HSS3-1/2X3-1/2X3/16": { "selfWeight": 8.15, "I": 4.05 },
"HSS3-1/2X3-1/2X1/8": { "selfWeight": 5.61, "I": 2.90 },
"HSS3-1/2X2-1/2X3/8": { "selfWeight": 12.17, "I": 4.75 },
"HSS3-1/2X2-1/2X5/16": { "selfWeight": 10.58, "I": 4.34 },
"HSS3-1/2X2-1/2X1/4": { "selfWeight": 8.81, "I": 3.79 },
"HSS3-1/2X2-1/2X3/16": { "selfWeight": 6.87, "I": 3.09 },
"HSS3-1/2X2-1/2X1/8": { "selfWeight": 4.75, "I": 2.23 },
"HSS3-1/2X2X1/4": { "selfWeight": 7.96, "I": 3.17 },
"HSS3-1/2X2X3/16": { "selfWeight": 6.23, "I": 2.61 },
"HSS3-1/2X2X1/8": { "selfWeight": 4.33, "I": 1.90 },
"HSS3-1/2X1-1/2X1/4": { "selfWeight": 7.11, "I": 2.55 },
"HSS3-1/2X1-1/2X3/16": { "selfWeight": 5.59, "I": 2.12 },
"HSS3-1/2X1-1/2X1/8": { "selfWeight": 3.90, "I": 1.57 },
"HSS3X3X3/8": { "selfWeight": 12.17, "I": 3.78 },
"HSS3X3X5/16": { "selfWeight": 10.58, "I": 3.45 },
"HSS3X3X1/4": { "selfWeight": 8.81, "I": 3.02 },
"HSS3X3X3/16": { "selfWeight": 6.87, "I": 2.46 },
"HSS3X3X1/8": { "selfWeight": 4.75, "I": 1.78 },
"HSS3X2-1/2X5/16": { "selfWeight": 9.51, "I": 2.92 },
"HSS3X2-1/2X1/4": { "selfWeight": 7.96, "I": 2.57 },
"HSS3X2-1/2X3/16": { "selfWeight": 6.23, "I": 2.11 },
"HSS3X2-1/2X1/8": { "selfWeight": 4.33, "I": 1.54 },
"HSS3X2X5/16": { "selfWeight": 8.45, "I": 2.38 },
"HSS3X2X1/4": { "selfWeight": 7.11, "I": 2.13 },
"HSS3X2X3/16": { "selfWeight": 5.59, "I": 1.77 },
"HSS3X2X1/8": { "selfWeight": 3.90, "I": 1.30 },
"HSS3X1-1/2X1/4": { "selfWeight": 6.26, "I": 1.68 },
"HSS3X1-1/2X3/16": { "selfWeight": 4.96, "I": 1.42 },
"HSS3X1-1/2X1/8": { "selfWeight": 3.48, "I": 1.06 },
"HSS3X1X3/16": { "selfWeight": 4.32, "I": 1.07 },
"HSS3X1X1/8": { "selfWeight": 3.05, "I": 0.817 },
"HSS2-1/2X2-1/2X5/16": { "selfWeight": 8.45, "I": 1.82 },
"HSS2-1/2X2-1/2X1/4": { "selfWeight": 7.11, "I": 1.63 },
"HSS2-1/2X2-1/2X3/16": { "selfWeight": 5.59, "I": 1.35 },
"HSS2-1/2X2-1/2X1/8": { "selfWeight": 3.90, "I": 0.998 },
"HSS2-1/2X2X1/4": { "selfWeight": 6.26, "I": 1.33 },
"HSS2-1/2X2X3/16": { "selfWeight": 4.96, "I": 1.12 },
"HSS2-1/2X2X1/8": { "selfWeight": 3.48, "I": 0.833 },
"HSS2-1/2X1-1/2X1/4": { "selfWeight": 5.41, "I": 1.03 },
"HSS2-1/2X1-1/2X3/16": { "selfWeight": 4.32, "I": 0.882 },
"HSS2-1/2X1-1/2X1/8": { "selfWeight": 3.05, "I": 0.668 },
"HSS2-1/2X1X3/16": { "selfWeight": 3.68, "I": 0.646 },
"HSS2-1/2X1X1/8": { "selfWeight": 2.63, "I": 0.503 },
"HSS2-1/4X2-1/4X1/4": { "selfWeight": 6.26, "I": 1.13 },
"HSS2-1/4X2-1/4X3/16": { "selfWeight": 4.96, "I": 0.953 },
"HSS2-1/4X2-1/4X1/8": { "selfWeight": 3.48, "I": 0.712 },
"HSS2-1/4X2X3/16": { "selfWeight": 4.64, "I": 0.859 },
"HSS2-1/4X2X1/8": { "selfWeight": 3.27, "I": 0.646 },
"HSS2X2X1/4": { "selfWeight": 5.41, "I": 0.747 },
"HSS2X2X3/16": { "selfWeight": 4.32, "I": 0.641 },
"HSS2X2X1/8": { "selfWeight": 3.05, "I": 0.486 },
"HSS2X1-1/2X3/16": { "selfWeight": 3.68, "I": 0.495 },
"HSS2X1-1/2X1/8": { "selfWeight": 2.63, "I": 0.383 },
"HSS2X1X3/16": { "selfWeight": 3.04, "I": 0.350 },
"HSS2X1X1/8": { "selfWeight": 2.20, "I": 0.280 },
"HSS20.000X0.500": { "selfWeight": 104.00, "I": 1360 },
"HSS20.000X0.375": { "selfWeight": 78.67, "I": 1040 },
"HSS18.000X0.500": { "selfWeight": 93.54, "I": 985 },
"HSS18.000X0.375": { "selfWeight": 70.66, "I": 754 },
"HSS16.000X0.625": { "selfWeight": 103.00, "I": 838 },
"HSS16.000X0.500": { "selfWeight": 82.85, "I": 685 },
"HSS16.000X0.438": { "selfWeight": 72.87, "I": 606 },
"HSS16.000X0.375": { "selfWeight": 62.64, "I": 526 },
"HSS16.000X0.312": { "selfWeight": 52.32, "I": 443 },
"HSS16.000X0.250": { "selfWeight": 42.09, "I": 359 },
"HSS14.000X0.625": { "selfWeight": 89.36, "I": 552 },
"HSS14.000X0.500": { "selfWeight": 72.16, "I": 453 },
"HSS14.000X0.375": { "selfWeight": 54.62, "I": 349 },
"HSS14.000X0.312": { "selfWeight": 45.65, "I": 295 },
"HSS14.000X0.250": { "selfWeight": 36.75, "I": 239 },
"HSS12.750X0.500": { "selfWeight": 65.48, "I": 339 },
"HSS12.750X0.375": { "selfWeight": 49.61, "I": 262 },
"HSS12.750X0.250": { "selfWeight": 33.41, "I": 180 },
"HSS10.750X0.500": { "selfWeight": 54.79, "I": 199 },
"HSS10.750X0.375": { "selfWeight": 41.59, "I": 154 },
"HSS10.750X0.250": { "selfWeight": 28.06, "I": 106 },
"HSS10.000X0.625": { "selfWeight": 62.64, "I": 191 },
"HSS10.000X0.500": { "selfWeight": 50.78, "I": 159 },
"HSS10.000X0.375": { "selfWeight": 38.58, "I": 123 },
"HSS10.000X0.312": { "selfWeight": 32.31, "I": 105 },
"HSS10.000X0.250": { "selfWeight": 26.06, "I": 85.3 },
"HSS10.000X0.188": { "selfWeight": 19.72, "I": 64.8 },
"HSS9.625X0.500": { "selfWeight": 48.77, "I": 141 },
"HSS9.625X0.375": { "selfWeight": 37.08, "I": 110 },
"HSS9.625X0.312": { "selfWeight": 31.06, "I": 93.0 },
"HSS9.625X0.250": { "selfWeight": 25.06, "I": 75.9 },
"HSS9.625X0.188": { "selfWeight": 18.97, "I": 57.7 },
"HSS8.625X0.625": { "selfWeight": 53.45, "I": 119 },
"HSS8.625X0.500": { "selfWeight": 43.43, "I": 100 },
"HSS8.625X0.375": { "selfWeight": 33.07, "I": 77.8 },
"HSS8.625X0.322": { "selfWeight": 28.58, "I": 68.1 },
"HSS8.625X0.250": { "selfWeight": 22.38, "I": 54.1 },
"HSS8.625X0.188": { "selfWeight": 16.96, "I": 41.3 },
"HSS7.625X0.375": { "selfWeight": 29.06, "I": 52.9 },
"HSS7.625X0.328": { "selfWeight": 25.59, "I": 47.1 },
"HSS7.500X0.500": { "selfWeight": 37.42, "I": 63.9 },
"HSS7.500X0.375": { "selfWeight": 28.56, "I": 50.2 },
"HSS7.500X0.312": { "selfWeight": 23.97, "I": 42.9 },
"HSS7.500X0.250": { "selfWeight": 19.38, "I": 35.2 },
"HSS7.500X0.188": { "selfWeight": 14.70, "I": 26.9 },
"HSS7.000X0.500": { "selfWeight": 34.74, "I": 51.2 },
"HSS7.000X0.375": { "selfWeight": 26.56, "I": 40.4 },
"HSS7.000X0.312": { "selfWeight": 22.31, "I": 34.6 },
"HSS7.000X0.250": { "selfWeight": 18.04, "I": 28.4 },
"HSS7.000X0.188": { "selfWeight": 13.69, "I": 21.7 },
"HSS7.000X0.125": { "selfWeight": 9.19, "I": 14.9 },
"HSS6.875X0.500": { "selfWeight": 34.07, "I": 48.3 },
"HSS6.875X0.375": { "selfWeight": 26.06, "I": 38.2 },
"HSS6.875X0.312": { "selfWeight": 21.89, "I": 32.7 },
"HSS6.875X0.250": { "selfWeight": 17.71, "I": 26.8 },
"HSS6.875X0.188": { "selfWeight": 13.44, "I": 20.6 },
"HSS6.625X0.500": { "selfWeight": 32.74, "I": 42.9 },
"HSS6.625X0.432": { "selfWeight": 28.60, "I": 38.2 },
"HSS6.625X0.375": { "selfWeight": 25.06, "I": 34.0 },
"HSS6.625X0.312": { "selfWeight": 21.06, "I": 29.1 },
"HSS6.625X0.280": { "selfWeight": 18.99, "I": 26.4 },
"HSS6.625X0.250": { "selfWeight": 17.04, "I": 23.9 },
"HSS6.625X0.188": { "selfWeight": 12.94, "I": 18.4 },
"HSS6.625X0.125": { "selfWeight": 8.69, "I": 12.6 },
"HSS6.000X0.500": { "selfWeight": 29.40, "I": 31.2 },
"HSS6.000X0.375": { "selfWeight": 22.55, "I": 24.8 },
"HSS6.000X0.312": { "selfWeight": 18.97, "I": 21.3 },
"HSS6.000X0.280": { "selfWeight": 17.12, "I": 19.3 },
"HSS6.000X0.250": { "selfWeight": 15.37, "I": 17.6 },
"HSS6.000X0.188": { "selfWeight": 11.68, "I": 13.5 },
"HSS6.000X0.125": { "selfWeight": 7.85, "I": 9.28 },
"HSS5.563X0.500": { "selfWeight": 27.06, "I": 24.4 },
"HSS5.563X0.375": { "selfWeight": 20.80, "I": 19.5 },
"HSS5.563X0.258": { "selfWeight": 14.63, "I": 14.2 },
"HSS5.563X0.188": { "selfWeight": 10.80, "I": 10.7 },
"HSS5.563X0.134": { "selfWeight": 7.78, "I": 7.84 },
"HSS5.500X0.500": { "selfWeight": 26.73, "I": 23.5 },
"HSS5.500X0.375": { "selfWeight": 20.55, "I": 18.8 },
"HSS5.500X0.258": { "selfWeight": 14.46, "I": 13.7 },
"HSS5.000X0.500": { "selfWeight": 24.05, "I": 17.2 },
"HSS5.000X0.375": { "selfWeight": 18.54, "I": 13.9 },
"HSS5.000X0.312": { "selfWeight": 15.64, "I": 12.0 },
"HSS5.000X0.258": { "selfWeight": 13.08, "I": 10.2 },
"HSS5.000X0.250": { "selfWeight": 12.69, "I": 9.94 },
"HSS5.000X0.188": { "selfWeight": 9.67, "I": 7.69 },
"HSS5.000X0.125": { "selfWeight": 6.51, "I": 5.31 },
"HSS4.500X0.375": { "selfWeight": 16.54, "I": 9.87 },
"HSS4.500X0.337": { "selfWeight": 15.00, "I": 9.07 },
"HSS4.500X0.237": { "selfWeight": 10.80, "I": 6.79 },
"HSS4.500X0.188": { "selfWeight": 8.67, "I": 5.54 },
"HSS4.500X0.125": { "selfWeight": 5.85, "I": 3.84 },
"HSS4.000X0.313": { "selfWeight": 12.34, "I": 5.87 },
"HSS4.000X0.250": { "selfWeight": 10.00, "I": 4.91 },
"HSS4.000X0.237": { "selfWeight": 9.53, "I": 4.68 },
"HSS4.000X0.226": { "selfWeight": 9.12, "I": 4.50 },
"HSS4.000X0.220": { "selfWeight": 8.89, "I": 4.41 },
"HSS4.000X0.188": { "selfWeight": 7.66, "I": 3.83 },
"HSS4.000X0.125": { "selfWeight": 5.18, "I": 2.67 },
"HSS3.500X0.313": { "selfWeight": 10.66, "I": 3.81 },
"HSS3.500X0.300": { "selfWeight": 10.26, "I": 3.69 },
"HSS3.500X0.250": { "selfWeight": 8.69, "I": 3.21 },
"HSS3.500X0.216": { "selfWeight": 7.58, "I": 2.84 },
"HSS3.500X0.203": { "selfWeight": 7.15, "I": 2.70 },
"HSS3.500X0.188": { "selfWeight": 6.66, "I": 2.52 },
"HSS3.500X0.125": { "selfWeight": 4.51, "I": 1.77 },
"HSS3.000X0.250": { "selfWeight": 7.35, "I": 1.95 },
"HSS3.000X0.216": { "selfWeight": 6.43, "I": 1.74 },
"HSS3.000X0.203": { "selfWeight": 6.07, "I": 1.66 },
"HSS3.000X0.188": { "selfWeight": 5.65, "I": 1.55 },
"HSS3.000X0.152": { "selfWeight": 4.63, "I": 1.30 },
"HSS3.000X0.134": { "selfWeight": 4.11, "I": 1.16 },
"HSS3.000X0.125": { "selfWeight": 3.84, "I": 1.09 },
"HSS2.875X0.250": { "selfWeight": 7.02, "I": 1.70 },
"HSS2.875X0.203": { "selfWeight": 5.80, "I": 1.45 },
"HSS2.875X0.188": { "selfWeight": 5.40, "I": 1.35 },
"HSS2.875X0.125": { "selfWeight": 3.67, "I": 0.958 },
"HSS2.500X0.250": { "selfWeight": 6.01, "I": 1.08 },
"HSS2.500X0.188": { "selfWeight": 4.65, "I": 0.865 },
"HSS2.500X0.125": { "selfWeight": 3.17, "I": 0.619 },
"HSS2.375X0.250": { "selfWeight": 5.68, "I": 0.910 },
"HSS2.375X0.218": { "selfWeight": 5.03, "I": 0.824 },
"HSS2.375X0.188": { "selfWeight": 4.40, "I": 0.733 },
"HSS2.375X0.154": { "selfWeight": 3.66, "I": 0.627 },
"HSS2.375X0.125": { "selfWeight": 3.01, "I": 0.527 },
"HSS1.900X0.188": { "selfWeight": 3.44, "I": 0.355 },
"HSS1.900X0.145": { "selfWeight": 2.72, "I": 0.293 },
"HSS1.900X0.120": { "selfWeight": 2.28, "I": 0.251 },
"HSS1.660X0.140": { "selfWeight": 2.27, "I": 0.184 },
"Pipe26STD": { "selfWeight": 103, "I": 2320 },
"Pipe24STD": { "selfWeight": 94.7, "I": 1820 },
"Pipe20STD": { "selfWeight": 78.7, "I": 1040 },
"Pipe18STD": { "selfWeight": 70.7, "I": 756 },
"Pipe16STD": { "selfWeight": 62.6, "I": 527 },
"Pipe14STD": { "selfWeight": 54.6, "I": 350 },
"Pipe12STD": { "selfWeight": 49.6, "I": 262 },
"Pipe10STD": { "selfWeight": 40.5, "I": 151 },
"Pipe8STD": { "selfWeight": 28.6, "I": 68.1 },
"Pipe6STD": { "selfWeight": 19.0, "I": 26.5 },
"Pipe5STD": { "selfWeight": 14.6, "I": 14.3 },
"Pipe4STD": { "selfWeight": 10.8, "I": 6.82 },
"Pipe3-1/2STD": { "selfWeight": 9.12, "I": 4.52 },
"Pipe3STD": { "selfWeight": 7.58, "I": 2.85 },
"Pipe2-1/2STD": { "selfWeight": 5.80, "I": 1.45 },
"Pipe2STD": { "selfWeight": 3.66, "I": 0.627 },
"Pipe1-1/2STD": { "selfWeight": 2.72, "I": 0.293 },
"Pipe1-1/4STD": { "selfWeight": 2.27, "I": 0.184 },
"Pipe1STD": { "selfWeight": 1.68, "I": 0.0830 },
"Pipe3/4STD": { "selfWeight": 1.13, "I": 0.0350 },
"Pipe1/2STD": { "selfWeight": 0.850, "I": 0.0160 },
"Pipe26XS": { "selfWeight": 136, "I": 2950 },
"Pipe24XS": { "selfWeight": 126, "I": 2310 },
"Pipe20XS": { "selfWeight": 104, "I": 1320 },
"Pipe18XS": { "selfWeight": 93.5, "I": 956 },
"Pipe16XS": { "selfWeight": 82.9, "I": 665 },
"Pipe14XS": { "selfWeight": 72.2, "I": 440 },
"Pipe12XS": { "selfWeight": 65.5, "I": 339 },
"Pipe10XS": { "selfWeight": 54.8, "I": 199 },
"Pipe8XS": { "selfWeight": 43.4, "I": 100 },
"Pipe6XS": { "selfWeight": 28.6, "I": 38.3 },
"Pipe5XS": { "selfWeight": 20.8, "I": 19.5 },
"Pipe4XS": { "selfWeight": 15.0, "I": 9.12 },
"Pipe3-1/2XS": { "selfWeight": 12.5, "I": 5.94 },
"Pipe3XS": { "selfWeight": 10.3, "I": 3.70 },
"Pipe2-1/2XS": { "selfWeight": 7.67, "I": 1.83 },
"Pipe2XS": { "selfWeight": 5.03, "I": 0.827 },
"Pipe1-1/2XS": { "selfWeight": 3.63, "I": 0.372 },
"Pipe1-1/4XS": { "selfWeight": 3.00, "I": 0.231 },
"Pipe1XS": { "selfWeight": 2.17, "I": 0.101 },
"Pipe3/4XS": { "selfWeight": 1.48, "I": 0.0430 },
"Pipe1/2XS": { "selfWeight": 1.09, "I": 0.0190 },
"Pipe12XXS": { "selfWeight": 126, "I": 625 },
"Pipe10XXS": { "selfWeight": 104, "I": 354 },
"Pipe8XXS": { "selfWeight": 72.5, "I": 154 },
"Pipe6XXS": { "selfWeight": 53.2, "I": 63.5 },
"Pipe5XXS": { "selfWeight": 38.6, "I": 32.2 },
"Pipe4XXS": { "selfWeight": 27.6, "I": 14.7 },
"Pipe3XXS": { "selfWeight": 18.6, "I": 5.79 },
"Pipe2-1/2XXS": { "selfWeight": 13.7, "I": 2.78 },
"Pipe2XXS": { "selfWeight": 9.04, "I": 1.27 }
}`));

  /*
   * This file implements a rational number data type.
   * Each rational number, r, is held as an array containing two BigInts.
   * r[0] is the numerator and r[1] is the denominator.
   * Negative rationals have a negative numerator, not a negative denominator.
   *
   * The code in this file is heavily influenced by Chapter 5 of
   * __How JavaScript Works__ by Douglas Crockford
   */

  const iZero = BigInt(0);
  const iOne = BigInt(1);
  const iTwo = BigInt(2);
  const zero = [iZero, iOne];
  const one = [iOne, iOne];
  const two = [iTwo, iOne];
  const pi = [BigInt(314159265358979323846264338327950288419716939937510582097494),
    BigInt(100000000000000000000000000000000000000000000000000000000000)];

  const intAbs = i => i >= iZero ? i : BigInt(-1) * i;  // absolute value of a BigInt

  // eslint-disable-next-line max-len
  const numberPattern = "^(-?)(?:([0-9]+)(?: ([0-9]+)\\/([0-9]+)|(?:\\.([0-9]+))?(?:e([+-]?[0-9]+))?)|(0x[0-9A-Fa-f]+))";
  const numberRegEx = new RegExp(numberPattern);
  // Capturing groups:
  //    [1] sign
  //    [2] integer part
  //    [3] numerator of a mixed fraction
  //    [4] denominator of a mixed fraction
  //    [5] decimal fraction of significand, not including decimal point
  //    [6] exponent of a number in scientific notation
  //    [7] hexadecimal integer

  const fromNumber = num => {
    // Convert a JavaScript Number to a rational.
    if (Number.isInteger(num)) {
      return [BigInt(num), iOne]
    } else {
      const parts = num.toExponential().match(numberRegEx);
      const decimalFrac = parts[5] || "";
      const exp = BigInt(parts[6]) - BigInt(decimalFrac.length);
      if (exp < 0) {
        return [BigInt(parts[1] + parts[2] + decimalFrac), BigInt(10) ** -exp]
      } else if (parts[4]) {
        const denominator = BigInt(parts[4]);
        return normalize(
          [BigInt(parts[1] + parts[2]) * denominator + BigInt(parts[3]) ])
      } else {
        return normalize([BigInt(parts[1] + parts[2] + decimalFrac) * BigInt(10) ** exp, iOne])
      }
    }
  };

  const fromString = str => {
    // Convert an author's input string to a number.
    if (str === "") { return zero }
    const parts = str.match(numberRegEx);
    let r;
    if (parts[5]) {
      // decimal
      const decimalFrac = parts[5] || "";
      const expoStr = parts[6] || "0";
      const exp = BigInt(expoStr) - BigInt(decimalFrac.length);
      const numerator = BigInt(parts[2] + decimalFrac);
      r = (exp < 0)
        ? [numerator, BigInt(10) ** -exp]
        : normalize([numerator * BigInt(10) ** exp, iOne]);

    } else if (parts[4]) {
      // mixed fraction
      const denominator = BigInt(parts[4]);
      const numerator = BigInt(parts[1] + parts[2]) * denominator + BigInt(parts[3]);
      r = normalize([numerator, denominator]);

    } else if (parts[2]) {
      // Integer
      r = [BigInt(parts[2]), iOne];

    } else if (parts[7]) {
      // hexadecimal
      r = [BigInt(str), iOne];

    } else ;
    if (parts[1]) { r = negate(r); }
    return r
  };

  const gcdi = (a, b) => {
    // Greatest common divisor of two big integers
    a = intAbs(a);
    b = intAbs(b);
    while (b !== iZero) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a
  };

  const gcd = (m, n) => {
    // Greatest common divisor of two rationals
    if (!Rnl.isInteger(m) || !Rnl.isInteger(n)) { return "Bad GCD." }
    return [gcdi(m[0] / m[1], n[0] / n[1]), iOne]
  };

  const normalize = r => {
    const [numerator, denominator] = r;
    if (denominator === iOne) { return r }
    const gcD = gcdi(numerator, denominator);
    return gcD === iOne ? r : [numerator / gcD, denominator / gcD]
  };

  const isRational = a => {
    return Array.isArray(a) && a.length === 2
      && typeof a[0] === "bigint" && typeof a[1] === "bigint"
  };

  const isInteger = r => r[1] === iOne || (r[0] % r[1]) === iZero;

  const isZero = r => r[0] === iZero;

  const isNegative = r => r[0] < iZero;
  const isPositive = r => r[0] > iZero;

  const negate = r => [BigInt(-1) * r[0], r[1]];

  const abs = r => {
    const numerator = r[0] < iZero ? BigInt(-1) * r[0] : r[0];
    return [numerator, r[1]]
  };

  const increment = r => [r[0] + r[1], r[1]];

  const decrement = r => [r[0] - r[1], r[1]];

  const floor = r => {
    if (r[0] % r[1] === iZero) { return [r[0] / r[1], iOne] }
    return (r[0] >= iZero)
      ? [r[0] / r[1], iOne]
      : [r[0] / r[1] - iOne, iOne]
  };

  const ceil = r => {
    if (r[0] % r[1] === iZero) { return [r[0] / r[1], iOne] }
    return (r[0] >= iZero)
      ? [r[0] / r[1] + iOne, iOne]
      : [r[0] / r[1], iOne]
  };

  const add = (a, b) => {
    return a[1] === b[1]
      ? [a[0] + b[0], a[1]]
      : normalize([a[0] * b[1] + b[0] * a[1], a[1] * b[1]])
  };

  const subtract = (a, b) => {
    return (a[1] === b[1])
      ? [a[0] - b[0], a[1]]
      : normalize([a[0] * b[1] - b[0] * a[1], a[1] * b[1]])
  };

  const multiply = (a, b) => [a[0] * b[0], a[1] * b[1]];

  const divide = (a, b) => {
    let numerator = a[0] * b[1];
    let denominator = a[1] * b[0];
    if (denominator < 0) {
      // Move the negative from the denominator to the numerator.
      numerator *= BigInt(-1);
      denominator *= BigInt(-1);
    }
    return [numerator, denominator]
  };

  const power = (a, b) => {
    if (b[0] === iZero) {
      return [iOne, iOne]
    } else {
      b = normalize(b);
      return isInteger(b)
        ? [a[0] ** b[0], a[1] ** b[0]]
        : isPositive(a) || greaterThan(b, one) || lessThan(b, negate(one))
        ? fromNumber(toNumber(a) ** toNumber(b))
        : areEqual(modulo(b, two), one)
        ? fromNumber(-1 * (-1 * toNumber(a)) ** toNumber(b))
        : "Bad root"
    }
  };

  const sqrt = r => fromNumber(Math.sqrt(toNumber(r)));

  const exp = r => fromNumber(Math.exp(toNumber(r)));

  const reciprocal = r => {
    let numerator = r[1];
    let denominator = r[0];
    if (denominator < 0) {
      numerator *= BigInt(-1);
      denominator *= BigInt(-1);
    }
    return [numerator, denominator]
  };

  const modulo = (a, b) => {
    const quotient = divide(normalize(a), normalize(b));
    return [intAbs(quotient[0] % quotient[1]), iOne]
  };

  const areEqual = (a, b) => {
    return (a[1] === b[1])
      ? a[0] === b[0]
      : a[0] * b[1] === a[1] * b[0]
  };

  const lessThan = (a, b) => {
    return (isNegative(a) !== isNegative(b))
      ? isNegative(a)
      : isNegative(subtract(a, b))
  };

  const greaterThan = (a, b) => {
    return (isPositive(a) !== isPositive(b))
      ? isPositive(a)
      : isPositive(subtract(a, b))
  };

  const lessThanOrEqualTo = (a, b) => lessThan(a, b) || areEqual(a, b);

  const greaterThanOrEqualTo = (a, b) => greaterThan(a, b) || areEqual(a, b);

  const max = (a, b) => greaterThan(a, b) ? [a[0], a[1]] : [b[0], b[1]];

  const min = (a, b) => lessThan(a, b) ? [a[0], a[1]] : [b[0], b[1]];

  const toNumber = r => {
    // Return a JavaScript Number
    const num = Number(r[0]) / Number(r[1]);  // May be imprecise.
    if (!isNaN(num)) { return num }
    const numStr = toStringSignificant(r, 20);
    return Number(numStr)
  };

  const toStringSignificant = (r, numSignificantDigits) => {
    // Return a string rounded to numSignificantDigits.
    if (isZero(r)) {
      return "0"
    } else {
      const quotient = intAbs(r[0] / r[1]);
      if (quotient > 0) {
        return toString(r, numSignificantDigits - String(quotient).length)
      } else {
        const inverseQuotientLength = String(intAbs(r[1] / r[0])).length;
        return toString(r, inverseQuotientLength + numSignificantDigits - 1)
      }
    }
  };

  const toString = (r, numDigitsAfterDecimal) => {
    // Return a string rounded to numDigitsAfterDecimal.
    if (isZero(r)) {
      return "0"
    } else if (numDigitsAfterDecimal < 0) {
      const N = -numDigitsAfterDecimal;
      const significand = toString(divide(r, [BigInt(10) ** BigInt(N), iOne]), 0);
      return significand + "0".repeat(N)
    } else {
      const [numerator, denominator] = normalize(r);
      const quotient = numerator / denominator;
      let remainder = numerator % denominator;
      let result = String(quotient);
      if (remainder === iZero && numDigitsAfterDecimal > 0) {
        result += "." + "0".repeat(numDigitsAfterDecimal);
      } else if (remainder !== iZero) {
        remainder = intAbs(remainder);
        const newNumerator = remainder * (BigInt(10) ** BigInt(numDigitsAfterDecimal));
        let fractus = newNumerator / denominator;
        const residue = newNumerator % denominator;
        if (numDigitsAfterDecimal === 0) {
          return (intAbs(iTwo * residue) >= intAbs(denominator))
            ? String(quotient + iOne)
            : result
        }
        if (intAbs(iTwo * residue) >= intAbs(denominator)) {
          fractus = fractus + iOne;
        }
        result += "." + String(fractus).padStart(numDigitsAfterDecimal, "0");
      }
      return result
    }
  };

  const Rnl = Object.freeze({
    fromNumber,
    fromString,
    normalize,
    isRational,
    isInteger,
    isZero,
    isNegative,
    isPositive,
    negate,
    abs,
    increment,
    decrement,
    exp,
    floor,
    ceil,
    add,
    subtract,
    multiply,
    divide,
    reciprocal,
    gcd,
    modulo,
    one,
    pi,
    power,
    sqrt,
    two,
    areEqual,
    lessThan,
    greaterThan,
    lessThanOrEqualTo,
    greaterThanOrEqualTo,
    max,
    min,
    numberPattern,
    toNumber,
    toString,
    toStringSignificant,
    zero
  });

  // Some helper functions and objects.

  // Lengths and x-coordinates are written as rational numbers, not floating point.
  // That way, we can make a lessThanOrEqualTo comparison w/o floating point errors.

  const commas = /,/g;
  const repeatedSpanRegEx = /^\d+ *x *\d+(\.\d+)?$/;
  const nodeFixity = { p: "pinned", f: "fixed", h: "hinge", ph: "proppedHinge", s: "spring" };
  const ord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

  const loadType = {
    // type 0 is total service load, an accumulation of all of the others.
    D: 1, d: 1, // dead
    F: 2, f: 2, // fluid
    L: 3, l: 3, // live
    H: 4, h: 4, // horizontal load, usually soil against a retaining wall
    Lr: 5, lr: 5, LR: 5, lR: 5, // roof live
    S: 6, s: 6, // snow
    R: 7, r: 7, // rain
    W: 8, w: 8, // wind
    E: 9, e: 9  // earthquake
  };

  const newNode = (fixity, k, xCoordinate) => {
    return {
      fixity,
      k: (fixity === "spring" ? k : 0),
      x: xCoordinate,
      P: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      M: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      Pr: [0, 0, 0, 0, 0, 0, 0, 0, 0], // "r" stands for reaction
      PrMin: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      Mr: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      MrMin: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  };

  const incrementDoF = fixity => {
    switch (fixity) {
      case "pinned":
        return 1
      case "fixed":
        return 0
      case "hinge":
        return 3
      default:
        return 2
    }

  };

  const newSegment = (length, xOfLeftEnd) => {
    // A "segment" is a beam section between points of load discontinuity.
    return {
      length,
      xOfLeftEnd,
      // Point load applied at left end of segments.
      // Array dim'ed to 9 for different load types, e.g., dead, live, wind, etc.
      P: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      M: [0, 0, 0, 0, 0, 0, 0, 0, 0],  // point moment
      Pf: 0, // factored point load at left end
      Mf: 0,
      w1: [0, 0, 0, 0, 0, 0, 0, 0, 0], // distributed load at left end of segments.
      w2: [0, 0, 0, 0, 0, 0, 0, 0, 0], // at right end.
      Vmax: {
        left: { value: 0, case: 0 },
        mid: { value: 0, case: 0, x: 0 },
        right: { value: 0, case: 0 }
      },
      Vmin: {
        left: { value: 0, case: 0 },
        mid: { value: 0, case: 0, x: 0 },
        right: { value: 0, case: 0 }
      },
      Mmax: {
        left: { value: 0, case: 0 },
        mid: { value: 0, case: 0, x: 0 },
        right: { value: 0, case: 0 }
      },
      Mmin: {
        left: { value: 0, case: 0 },
        mid: { value: 0, case: 0, x: 0 },
        right: { value: 0, case: 0 }
      }
    }
  };

  const identifySegment = (xGlobal, span) => {
    // Which segment contains xGlobal?
    for (let i = 0; i < span.segments.length; i++) {
      const xSegEnd = Rnl.add(span.segments[i].xOfLeftEnd, span.segments[i].length);
      if (Rnl.lessThanOrEqualTo(xGlobal, xSegEnd)) { return i }
    }
    return -1
  };

  const splitSegment = (segments, iSeg, xGlobal) => {
    // segments` is an array.
    // We need to split the element at segments[iSeg] into two elements.
    const length = Rnl.subtract(xGlobal, segments[iSeg].xOfLeftEnd);
    if (iSeg === 0) {
      segments.unshift(newSegment(length, segments[0].xOfLeftEnd));
    } else {
      const s1 = segments.slice(0, iSeg);
      s1.push(newSegment(length, segments[iSeg].xOfLeftEnd));
      segments =  s1.concat(segments.slice(iSeg));
    }
    const seg = segments[iSeg + 1];
    const newSeg = segments[iSeg];
    for (let i = 0; i < 9; i++) {
      const slope = (seg.w2[i] - seg.w1[i]) / Rnl.toNumber(seg.length);
      newSeg.w1[i] = seg.w1[i];
      newSeg.w2[i] = seg.w1[i];
      seg.w1[i] = seg.w1[i] + slope * Rnl.toNumber(length);
      newSeg.P[i] = seg.P[i];
      seg.P[i] = 0;
      newSeg.M[i] = seg.M[i];
      seg.M[i] = 0;
    }
    seg.xOfLeftEnd = xGlobal;
    seg.length = Rnl.subtract(seg.length, newSeg.length);
    return segments
  };

  // Here's the main function of this module.
  // Take the raw input strings, validate them, and load them
  // into data structures for use by the analyze function.
  function populateData(input) {
    const errorMsg = "";
    const beam = {
      E: 0, // modulus of elasticity
      I: 0, // moment of inertia
      k: 0, // spring constant
      convention: input.convention ? 1 : -1, // Plot positive moment on compression or tension side.
      SI: input.SI, // boolean. Are we using SI units?
      doLiveLoadPatterns: input.patterns,
      comboName: input.combinations,
      LLF: Number(input.LLF),
      SDS: isNaN(input.SDS) ? 0 : Number(input.SDS),
      gotType: [false, false, false, false, false, false, false, false, false],
      wMax: 0, // default line load maximum
      x: 180, // x coordinate of the beam's left end inside the SVG, in px
      allLoadsAreUniform: true // subject to change below
    };

    if (input.E !== "" && input.section === 1) {
      // We don't know E or I, so we won't do a deflection diagram.
      // But we will still do the shear and moment diagrams.
      beam.E = 1;
      beam.I = 1;
    } else {
      // Modulus of elasticity, E
      const sE = input.E.replace(commas, "");
      if (!isNaN(sE)) {
        beam.E = Number(sE);
      }
      if (!beam.E) { return [`Invalid modulus of elasticity, E.`] }

      // Moment of inertia, I
      const sectionName = input.section;
      if (sectionName !== "" && sections[sectionName]) {
        const sI = sections[sectionName].I;
        if (beam.SI) {
          beam.I = Number(sI) * 0.0254 ** 4 * 1000000;
          document.getElementById("I").value = beam.I.toPrecision(3);
        } else {
          document.getElementById("I").value = sI;
          beam.I = Number(sI);
        }
      }
      if (beam.I === 0) {
        const momentOfInertiaStr = input.I.replace(commas, "");
        if (!isNaN(momentOfInertiaStr)) {
          beam.I = Number(momentOfInertiaStr);
        }
      }
      if (!beam.I) { return [`Invalid moment of inertia.`] }

      // Spring constant
      const sk = input.k.replace(commas, "");
      if (isNaN(sk)) { return [`Non-numeric spring constant, k.`] }
      beam.k = Number(sk);
    }
    if (beam.E === 1 && beam.I === 1 && beam.k !== 0) {
      return ["E and I are necessary for an analysis with spring supports."]
    }

    // Load in node data and span data.
    // Definitions
    // (1) A "span" is a section of beam between two user-defined nodes.
    // (2) A "segment" is a section of beam between nodes or points of load discontinuity.
    // Each span thus contains one or more segments.
    let i = 0;
    let cummulativeLength = Rnl.zero;
    const nodes = [];
    const spans = [];
    beam.numDegreesOfFreedom = 0;
    for (i = 0; i < input.spanLength.length; i++) {
      // Process node input.
      const fixity = input.node[i] === "none" ? "continuous" : nodeFixity[input.node[i]];
      if (!fixity) { return [`The ${ord[i]} node designation is invalid.`] }
      nodes.push(newNode(fixity, beam.k, cummulativeLength));
      beam.numDegreesOfFreedom += incrementDoF(fixity);

      // Process span input.
      const sL = input.spanLength[i].replace(commas, "");
      if (repeatedSpanRegEx.test(sL)) {
        const pos = sL.indexOf("x");
        const multiplier = Number(sL.slice(0, pos).trim());
        const sLength = sL.slice(pos + 1).trim();
        const length = Rnl.fromString(sLength);
        for (let j = 0; j < multiplier; j++) {
          spans.push({
            length,
            segments: Array(1).fill(newSegment(length, cummulativeLength))
          });
          cummulativeLength = Rnl.add(cummulativeLength, length);
          if (j < multiplier - 1) {
            nodes.push(newNode(fixity, beam.k, cummulativeLength));
            beam.numDegreesOfFreedom += incrementDoF(fixity);
          }
        }
      } else if (sL === "") {
        break
      } else if (isNaN(sL)) {
        return ["Non-numeric span length."]
      } else {
        const length = Rnl.fromString(sL);
        if (Rnl.isNegative(length)) { return ["Negative span length."] }
        spans.push({
          length,
          segments: Array(1).fill(newSegment(length, cummulativeLength))
        });
        cummulativeLength = Rnl.add(cummulativeLength, length);
      }
    }
    if (spans.length === 0) { return [`No span lengths.`] }
    const numSpans =  spans.length;
    beam.numSegments = numSpans;
    beam.length = nodes[nodes.length - 1].x;

    // Point Loads
    for (i = 0; i < input.loads.length; i++) {
      const load = input.loads[i];
      if (load.shape === "w") {
        // Skip the distributed loads for now. We'll pick them up later.
        continue
      }
      if (load.from === "") { continue }
      let type = load.type === "none" ? 0 : loadType[load.type];
      if (type === 0) {
        if (beam.comboName !== "service") {
          return [`The ${ord[i]} load must have a load type defined.`]
        } else {
          type = 1; // In a servie load analysis, treat unlabled loads as Dead loads.
        }
      }

      const amount = load.amount.replace(commas, "");
      if (isNaN(amount)) { return [`The ${ord[i]} load is non-numeric.`] }
      const P = load.shape === "P" ? Number(amount) : 0;
      const M = load.shape === "M" ? Number(amount) : 0;

      const xStr = load.from.replace(commas, "");
      if (isNaN(xStr)) { return [`Invalid location in ${ord[i]} load.`] }
      const x = Rnl.fromString(xStr);
      if (Rnl.isNegative(x)) { return [`Invalid location in ${ord[i]} load.`] }
      if (Rnl.greaterThan(x, beam.length)) { return [`Invalid location in ${ord[i]} load.`] }

      let foundAHome = false;
      for (let j = 0; j < nodes.length; j++) {
        if (Rnl.areEqual(x, nodes[j].x)) {
          nodes[j].P[0] += P;
          nodes[j].M[0] += M;
          if (type !== 0) { nodes[j].P[type] += P; }
          foundAHome = true;
          break
        }
      }
      if (foundAHome) { continue }

      for (let j = 0; j < spans.length; j++) {
        if (Rnl.greaterThan(x, nodes[j].x) && Rnl.lessThan(x, nodes[j + 1].x)) {
          const span = spans[j];
          const iSeg = identifySegment(x, span);
          if (Rnl.greaterThan(x, span.segments[iSeg].xOfLeftEnd)) {
            span.segments = splitSegment(span.segments, iSeg, x);
            beam.numSegments += 1;
          }
          beam.gotType[0] = true;
          span.segments[iSeg + 1].P[0] += P;      // add to sum of service loads
          span.segments[iSeg + 1].M[0] += M;
          if (type !== 0) {
            beam.gotType[type] = true;
            span.segments[iSeg + 1].P[type] += P;
            span.segments[iSeg + 1].M[type] += M;
          }
        }
      }
    }

    // Distributied loads
    beam.allLoadsAreUniform = true;  // initialize the variable
    for (i = 0; i < input.loads.length; i++) {
      const load = input.loads[i];
      if (load.shape !== "w") { continue }
      let type = load.type === "none" ? 0 : loadType[load.type];
      if (type === 0) {
        if (beam.comboName !== "service") {
          return [`The ${ord[i]} load must have a load type defined.`]
        } else {
          type = 1; // In a servie load analysis, treat unlabled loads as Dead loads.
        }
      }

      let wStart = 0;
      let wEnd = 0;
      let sw = load.amount.replace(commas, "");
      if (sw.indexOf("self") > -1) {
        if (input.section !== "" && sections[input.section]) {
          let selfWeight = sections[input.section].selfWeight / 1000;
          if (beam.SI) { selfWeight *= 4.4482216152605 / 0.3048; }
          sw = sw.replace("self", String(selfWeight));
        } else {
          return [`The ${ord[i]} load is invalid.
          Self weight can be used only when there is a AISC section.`]
        }
      }
      if (sw.indexOf(" ") > -1) {
        const ws = sw.split(/ +/);
        if (ws.length > 2) { return [`The ${ord[i]} load has too many spaces.`] }
        if (isNaN(ws[0] || isNaN(ws[1]))) {
          return [`Non-numeric load in the ${ord[i]} load`]
        }
        wStart = Number(ws[0]);
        wEnd = Number(ws[1]);
      } else if (isNaN(sw)) {
        return [`The ${ord[i]} load is non-numeric.`]
      } else {
        wStart = Number(sw);
        wEnd = wStart;
      }

      if (Math.abs(wStart) > beam.wMax) { beam.wMax = Math.abs(wStart); }
      if (Math.abs(wEnd) > beam.wMax) { beam.wMax = Math.abs(wEnd); }

      let xStart;
      const fromStr = load.from.replace(commas, "");
      if (fromStr === "") {
        xStart = Rnl.fromNumber(0);
      } else if (isNaN(fromStr)) {
        return [`Invalid start point in ${ord[i]} load.`]
      } else {
        xStart = Rnl.fromString(fromStr);
      }
      if (Rnl.isNegative(xStart) || Rnl.greaterThan(xStart, beam.length)) ;

      let xEnd;
      const toStr = load.to.replace(commas, "");
      if (toStr === "") {
        xEnd = nodes[nodes.length - 1].x;
      } else if (isNaN(toStr)) {
        return [`Invalid end point in ${ord[i]} load.`]
      } else if (Number(toStr) < 0) {
        xEnd = Rnl.add(nodes[nodes.length - 1].x, Rnl.fromString(toStr));
      } else {
        xEnd = Rnl.fromString(toStr);
      }
      if (Rnl.isNegative(xEnd) || Rnl.greaterThan(xEnd, beam.length)) ;
      if (Rnl.lessThan(xEnd, xStart)) {
        return [`The ${ord[i]} load is invalid. End point is before the start point.`]
      }

      const slope = (wEnd - wStart) / Rnl.toNumber(Rnl.subtract(xEnd, xStart));
      if (slope !== 0) {beam.allLoadsAreUniform = false;}

      let iStartSpan = 0;
      let iEndSpan = 0;
      let iStartSeg = 0;
      let iEndSeg = 0;

      // If necessary, split segments at points of load discontinuity.
      for (let j = 0; j < spans.length; j++) {
        if (Rnl.areEqual(xStart, nodes[j].x)) {
          iStartSpan = j;
          iStartSeg = 0;
          break
        }
        if (Rnl.greaterThan(xStart, nodes[j].x) && Rnl.lessThan(xStart, nodes[j + 1].x)) {
          for (let k = 0; k < spans[j].segments.length; k++) {
            const seg = spans[j].segments[k];
            if (Rnl.areEqual(xStart, seg.xOfLeftEnd)) {
              iStartSpan = j;
              iStartSeg = k;
              break
            }
            const segEnd = k < spans[j].segments.length - 1
              ? spans[j].segments[k + 1].xOfLeftEnd
              : nodes[j + 1].x;
            if (Rnl.greaterThan(xStart, seg.xOfLeftEnd) && Rnl.lessThan(xStart, segEnd)) {
              spans[j].segments = splitSegment(spans[j].segments, k, xStart);
              beam.numSegments += 1;
              iStartSpan = j;
              iStartSeg = k + 1;
              break
            }
          }
        }
      }

      for (let j = 0; j < spans.length; j++) {
        if (Rnl.areEqual(xEnd, nodes[j + 1].x)) {
          iEndSpan = j;
          iEndSeg = spans[j].segments.length - 1;
          break
        }
        if (Rnl.greaterThan(xEnd, nodes[j].x) && Rnl.lessThan(xEnd, nodes[j + 1].x)) {
          for (let k = 0; k < spans[j].segments.length; k++) {
            const seg = spans[j].segments[k];
            const segEnd = k < spans[j].segments.length - 1
              ? spans[j].segments[k + 1].xOfLeftEnd
              : nodes[j + 1].x;
            if (Rnl.areEqual(xEnd, segEnd)) {
              iEndSpan = j;
              iEndSeg = k;
              break
            }
            if (Rnl.greaterThan(xEnd, seg.xOfLeftEnd) && Rnl.lessThan(xEnd, segEnd)) {
              spans[j].segments = splitSegment(spans[j].segments, k, xEnd);
              beam.numSegments += 1;
              iEndSpan = j;
              iEndSeg = k;
              break
            }
          }
        }
      }

      // Now apply distributed loads
      for (let iSpan = iStartSpan; iSpan <= iEndSpan; iSpan++) {
        const span = spans[iSpan];
        const startSeg = (iSpan  === iStartSpan ? iStartSeg : 0);
        const endSeg = (iSpan  === iEndSpan ? iEndSeg : spans[iSpan].segments.length - 1);
        for (let iSeg = startSeg; iSeg <= endSeg; iSeg++) {
          const xLeft = span.segments[iSeg].xOfLeftEnd;
          const w1 = wStart + slope * Rnl.toNumber(Rnl.subtract(xLeft, xStart));
          const xRight = Rnl.add(span.segments[iSeg].xOfLeftEnd, span.segments[iSeg].length);
          const w2 = wStart + slope * Rnl.toNumber(Rnl.subtract(xRight, xStart));
          // add to sum of service loads
          span.segments[iSeg].w1[0] += w1;
          span.segments[iSeg].w2[0] += w2;
          // add to specific load type, e.g., dead, live, etc.
          span.segments[iSeg].w1[type] += w1;
          span.segments[iSeg].w2[type] += w2;
        }
      }

      beam.gotType[0] = true;
      if (type !== 0) {
        beam.gotType[type] = true;
      }
    }

    // Henceforward there are no <= comparisons.
    // Change lengths into floating point numbers.
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].x = Rnl.toNumber(nodes[i].x);
    }
    for (let i = 0; i < spans.length; i++) {
      spans[i].length = Rnl.toNumber(spans[i].length);
      for (let j = 0; j < spans[i].segments.length; j++) {
        spans[i].segments[j].length = Rnl.toNumber(spans[i].segments[j].length);
        spans[i].segments[j].xOfLeftEnd = Rnl.toNumber(spans[i].segments[j].xOfLeftEnd);
      }
    }
    beam.length = Rnl.toNumber(beam.length);

    return [errorMsg, beam, nodes, spans]

  }

  // Each of the methods in this module draws some item.

  const circle = (x, y, radius) => `<circle cx='${x}' cy='${y}' r="${radius}"/>\n`;

  const restraint = (node, beam) => {
    let str = "";
    const x = beam.xDiagram + beam.xScale * node.x;
    if (node.fixity === "hinge" || node.fixity === "proppedHinge") {
      str += circle(beam.xDiagram + beam.xScale * node.x, beam.yLoad, 4);
    }
    if (node.fixity === "pinned" || node.fixity === "proppedHinge") {
      // draw a triangle
      const y = node.fixity === "pinned" ? beam.yLoad + 0.75 : beam.yLoad + 4;
      str += `<path d='M${x} ${y} l5 10 h-10 z' style='fill-opacity:1.0'/>\n`;
    } else if (node.fixity === "fixed") {
      const xd = (node.x === 0 ? -1 : 1) * 7;
      // eslint-disable-next-line max-len
      str += `<path d='M${x} ${beam.yLoad - 7} v14 m0 -14 l${xd} 7 M${x} ${beam.yLoad} l${xd} 7 M${x} ${beam.yLoad + 7} l${xd} 7'/>\n`;
    } else if (node.fixity === "spring") {
      const y = beam.yLoad + .75;
      str += `<path d='M${x} ${y} v3 l6 1.5 -12 3 12 3 -12 3 6 1.5 v3 m-6 0 h12'/>\n`;
    }
    return str
  };

  const pointForce = (x, y, load, fixity, isReaction = false) => {
    const sgn = (load < 0 ? -1 : 1); // -1 is down
    const lengthAdjustment = fixity === "fixed"
      ? 7
      : fixity === "pinned" && isReaction
      ? 10
      : fixity === "proppedHinge" && isReaction
      ? 18
      : fixity === "hinge"
      ? 4
      : fixity === "spring" && isReaction
      ? 18
      : 0;
    const length = 40 - lengthAdjustment;
    // Reactions are drawn below the beam line. Imposed loads are drawn above the beam line.
    const yText = y + (isReaction ? 55 : -45);
    // Set x and y at the tip of the arrowhead
    if (isReaction) { y += lengthAdjustment + 0.75; } else { y -= 0.75; }
    if (sgn === -1 && isReaction) { y += length; }
    if (sgn === 1 && !isReaction) { y -= length; }
    // eslint-disable-next-line max-len
    const arrow = `<path d='M${x} ${y} l${sgn * 4} ${sgn * 8} h${-sgn * 3.5} v${sgn * (length - 8)} h${-sgn * 1} v${-sgn * (length - 8)} h${-sgn * 3}z' style='fill: #000; fill-opacity:1.0'/>\n`;
    const text = `<text x='${x}' y='${yText}' text-anchor="middle">${String(load)}</text>\n`;
    return arrow + text
  };

  const pointMoment = (x, y, load, isReaction = false) => {
    let isCounterClockwise = load >= 0; // = (load < 0 ? -1 : 1) // 1 is counter-clockwise
    load = Math.abs(load);
    let arrow;
    let text;
    if (!isReaction) {
      arrow = momentArrow(x, y, (isCounterClockwise ? 165 : 15), 150, isCounterClockwise);
      text = `<text x='${x}' y='${y - 25}' text-anchor="middle">${String(load)}</text>\n`;
    } else {
      // The moment is a reaction
      isCounterClockwise = !isCounterClockwise;
      if (x < 100) {  // left end
        arrow = momentArrow(x, y, (isCounterClockwise ? 260 : 100), 140, isCounterClockwise);
        text = `<text x='${x - 15}' y='${y - 15}' text-anchor='end'>${String(load)}</text>\n`;
      } else {
        arrow = momentArrow(x, y, (isCounterClockwise ? 80 : 280), 140, isCounterClockwise);
        text = `<text x='${x + 16}' y='${y - 15}'>${String(load)}</text>\n`;
      }
    }
    return arrow + text
  };

  const momentArrow = (xCtr, yCtr, thetaAtArrowPoint, subtendedAngle, isCounterClockwise) => {
    // Draw a circular arc with an arrowhead.
    // Find startAngle and endAngle: the begining and ending of the arc
    // theta = 0 at 3 o'clock.  theta is + for counterclockwise
    const startAngle = thetaAtArrowPoint * (Math.PI / 180);
    const sgn = isCounterClockwise ? 1 : -1;
    const endAngle = startAngle - sgn * subtendedAngle * (Math.PI / 180);
    // sgn = 1 for counterclockwise, -1 for clockwise
    const diameter = 35;
    const r = diameter / 2; // radius
    const arrowHeadLength = 8;
    const startAnglePrime = startAngle - sgn * (2 * 0.9 * arrowHeadLength / diameter);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    let xStart = 0;
    let yStart = 0;
    let xEnd = 0;
    let yEnd = 0;
    if (sgn > 0) {
      xEnd = (xCtr + r * Math.cos(startAnglePrime)).toFixed(2);   // arrow end
      yEnd = (yCtr - r * Math.sin(startAnglePrime)).toFixed(2);
      xStart = (xCtr + r * Math.cos(endAngle)).toFixed(2);
      yStart = (yCtr - r * Math.sin(endAngle)).toFixed(2);
    } else {
      xStart = (xCtr + r * Math.cos(startAnglePrime)).toFixed(2);
      yStart = (yCtr - r * Math.sin(startAnglePrime)).toFixed(2);
      xEnd = (xCtr + r * Math.cos(endAngle)).toFixed(2);
      yEnd = (yCtr - r * Math.sin(endAngle)).toFixed(2);
    }

    const path = `<path d='M${xStart} ${yStart}A${r} ${r} 0 ${largeArcFlag} 0 ${xEnd} ${yEnd}'/>\n`;

    // Draw the arrow head
    const xTip = xCtr + r * Math.cos(startAngle);
    const yTip = yCtr - r * Math.sin(startAngle);
    const alpha = startAngle - sgn * 100 / 180 * Math.PI; // rotate by 100°
    const beta = 22.5 * Math.PI / 180;    // angle subtended by half-arrowhead
    const x = Array(3).fill("");
    const y = Array(3).fill("");
    x[0] = xTip.toFixed(2);
    y[0] = yTip.toFixed(2);
    x[1] = (xTip + arrowHeadLength * Math.cos(alpha - beta)).toFixed(2);
    y[1] = (yTip - arrowHeadLength * Math.sin(alpha - beta)).toFixed(2);
    x[2] = (xTip + arrowHeadLength * Math.cos(alpha + beta)).toFixed(2);
    y[2] = (yTip - arrowHeadLength * Math.sin(alpha + beta)).toFixed(2);

    let polygon = "<polygon points='";
    for (let i = 0; i < x.length; i++) {
      polygon += `${x[i]} ${y[i]} `;
    }
    polygon += "'/>\n";

    return path + polygon
  };

  const polyline = (x, y) => {
    let svg = `<path d='M${x[0]} ${y[0]}`;
    for (let i = 1; i < x.length; i++) {
      svg += ` L${x[i]} ${y[i]}`;
    }
    return svg + `'/>\n`
  };

  const text = (str, x, y, horizAlign) => {
    let svg = `<text x='${x}' y='${y}'>`;
    if (horizAlign === "middle" || horizAlign === "right") {
      svg += `<tspan style='text-anchor: ${horizAlign}'>`;
    }
    svg += str;
    if (horizAlign === "middle" || horizAlign === "right") { svg += `</tspan>`; }
    return svg + `</text>\n`
  };

  const Draw = Object.freeze({
    pointForce,
    pointMoment,
    polyline,
    restraint,
    text
  });

  // Constants
  const DEAD = 1;
  const FLUID = 2;
  const LIVE = 3;
  const HORIZ = 4;
  const ROOFLIVE = 5;
  const SNOW = 6;
  const RAIN = 7;
  const WIND = 8;
  const EQ = 9;

  function error(msg) {
    const wrapper = document.getElementById("diagram-wrapper");
    wrapper.innerHTML = `<div style="height:225px">
   <div id='error'>
     <span style="color:firebrick">Error.&nbsp;&nbsp;&nbsp;</span>
     <span>${msg}</span>
   </div>
</div>`;
  }

  const round = (num, prec) => {
    // Round a number to prec significant digits.
    // Return a string. This is used for display of numbers on the diagram.
    const str = num.toPrecision(prec);
    if (str.indexOf("e") === -1) { return str }
    const pos = str.indexOf("e");
    const significand = Number.parseFloat(str.slice(0, pos));
    const exponent = Number.parseFloat(str.slice(pos + 1));
    return (significand * 10 ** exponent).toString()
  };

  const clone = obj => {
    // Clone a JavaScript object.
    // That is, make a deep copy that does not contain any reference to the original object.
    // This function works if the object conatains only these types:
    //     boolean, number, bigint, string, null, undefined, date, array, object
    // Any other type, or non-tree structure (e.g., "this"), cannot be handled by this function.
    // This is a modified version of https://stackoverflow.com/a/728694

    // Handle boolean, number, bigint, string, null, or undefined
    // eslint-disable-next-line eqeqeq
    if (null == obj || "object" != typeof obj) { return obj }

    if (obj instanceof Date) { return new Date().setTime(obj.valueOf()) }

    if (Array.isArray(obj)) {
      const copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy
    }

    if (typeof obj === "object") {
      const copy = Object.create(null);
      Object.entries(obj).forEach(([key, value]) => {
        copy[key] = clone(value);
      });
      return copy
    }

    throw new Error("Unable to clone obj! Its type isn't supported.")
  };

  function createLoadDiagram(beam, nodes, spans) {
    // Spin up a canvas context. We'll use it to measure text width.
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '12px Arial';
    // const w = ctx.measureText("loading").width

    beam.xDiagram = 90;  // x coordinate at left end of diagram line, px
    beam.yLoad = 80;    // y coordiate of load diagram
    beam.xScale = 300 / nodes[nodes.length - 1].x;

    // Begin creating the SVG that will display the diagram.
    let svg = `<defs>
<style type="text/css">
  svg { background-color: #fff; }
  text, tspan { font: 12px Arial; }
  circle { stroke:#000; fill:#fff; }
  polygon { stroke:#000; fill: #000; fill-opacity:1.0 }
  line { stroke:#000; }
  path { stroke:#000; fill:#fff; fill-opacity: 0.0 }
</style>
</defs>
<text x='20' y='${beam.yLoad + 2}'>loads</text>
<text x='20' y='${beam.yLoad + 16}'>(${beam.SI ? 'kN, m' : 'kips, ft'})</text>
<path d='M${beam.xDiagram} ${beam.yLoad} h300' stroke-width='1.5px'/>\n`;

    // Draw restraints
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].fixity !== "continuous") {
        svg += Draw.restraint(nodes[i], beam);
      }
    }

    // Write the span length below each span, but only if there are no loads in the way.
    for (let i = 0; i < spans.length; i++) {
      let okay = true; // initialize
      if (spans[i].length * beam.xScale < 30) { continue }
      if (okay) {
        for (let j = 1; j < spans[i].segments.length; j++) {
          if (spans[i].segments[j].P[0] > 0) { okay = false; break }
        }
      }
      if (okay) {
        const x = beam.xDiagram + beam.xScale * (nodes[i].x + spans[i].length / 2);
        // eslint-disable-next-line max-len
        const unit = beam.SI ? "" : "′";
        // eslint-disable-next-line max-len
        svg += `<text x='${x}' y='${beam.yLoad + 15}' text-anchor='middle'>${spans[i].length}${unit}</text>\n`;
      }
    }

    // Draw nodal loads
    for (let i = 0; i < nodes.length; i++) {
      const x = beam.xDiagram + beam.xScale * nodes[i].x;
      if (Math.abs(nodes[i].P[0]) > 0) {
        svg += Draw.pointForce(x, beam.yLoad, nodes[i].P[0], nodes[i].fixity);
      }
      if (Math.abs(nodes[i].M[0]) > 0) {
        svg += Draw.pointMoment(x, beam.yLoad, nodes[i].M[0]);
      }
    }

    // Draw span loads
    const wScale = 20 / beam.wMax;
    let wPrev = 0;
    let line = `<path d='M${beam.xDiagram} ${beam.yLoad}`;
    for (let i = 0; i < spans.length; i++) {
      for (let j = 0; j < spans[i].segments.length; j++) {
        const seg = spans[i].segments[j];
        const x = beam.xDiagram + beam.xScale * seg.xOfLeftEnd;
        if (Math.abs(seg.P[0]) > 0) {
          svg += Draw.pointForce( x, beam.yLoad, seg.P[0], "continuous");
        }
        if (Math.abs(seg.M[0]) > 0) {
          svg += Draw.pointMoment(x, beam.yLoad, seg.M[0]);
        }
        // Draw a line segment for the service load.
        const xEnd = x + beam.xScale * seg.length;
        if (seg.w1[0] !== wPrev) {
          line += `V${beam.yLoad + seg.w1[0] * wScale}`; // vertical load discontinuiy.
        }
        const yEnd = beam.yLoad + seg.w2[0] * wScale;
        line += `L${xEnd} ${yEnd}`;
        wPrev =  seg.w2[0];
      }
    }
    if (wPrev !== 0) { line += `V${beam.yLoad}`; }
    line += `'/>\n`;
    svg += line;

    // Write in the line load values
    let lastSegUniform = false;
    let firstSegment;
    let xFirstSegment = 0;
    const segments = [];
    for (let i = 0; i < spans.length; i++) {
      for (let j = 0; j < spans[i].segments.length; j++) {
        segments.push(spans[i].segments[j]);
      }
    }
    const numSegments = segments.length;
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if (seg.w1[0] === seg.w2[0] && Math.abs(seg.w1[0]) > 0) {
        lastSegUniform = true;
        if (i === 0 || seg.w1[0] !== segments[i - 1].w1[0] || lastSegUniform === false) {
          firstSegment = i;
          xFirstSegment = beam.xScale * seg.xOfLeftEnd;
        }
        if (i === numSegments - 1 || segments[i + 1].w1[0] !== segments[i + 1].w2[0]
          || seg.w1[0] !== segments[i + 1].w1[0]) {
          // This segment is the end of a uniform load.
          // Find a place to write the load value
          const lenSegLoad = i < numSegments - 1
            ? segments[i + 1].xOfLeftEnd - segments[firstSegment].xOfLeftEnd
            : beam.length - segments[firstSegment].xOfLeftEnd;
          if (lenSegLoad * beam.xScale > 30) {
            let noBust = true; // initialize the value
            const fudge = seg.w1[0] > 0 ? 10 : -4;
            const yy = beam.yLoad + wScale * seg.w1[0] + fudge;
            const str = round(Math.abs(seg.w1[0]), 3);
            // try the middle of the uniform load.  See if there is a point load there
            for (let j = firstSegment + 1; j <= i; j++) {
              if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
                - (segments[firstSegment].xOfLeftEnd + lenSegLoad / 2))) < 35) {
                if (segments[j].M[0] || segments[j].P[0] !== 0) {
                  noBust = false;
                  break
                }
              }
            }
            if (noBust) {
              const x = beam.xDiagram + xFirstSegment + beam.xScale * lenSegLoad / 2;
              svg += Draw.text(str, x, yy);
            } else {
              // try the 1/3 point
              noBust = true;
              for (let j = firstSegment + 1; j <= i; j++) {
                if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
                  - (segments[firstSegment].xOfLeftEnd + lenSegLoad / 3))) < 35) {
                  if (segments[j].M[0] || segments[j].P[0] !== 0) {
                    noBust = false;
                    break
                  }
                }
              }
              if (noBust) {
                const x = beam.xDiagram + xFirstSegment + beam.xScale * lenSegLoad / 3 - 17;
                svg += Draw.text(str, x, yy);
              } else {
                // try the 2/3 point
                noBust = true;
                for (let j = firstSegment + 1; j <= i; j++) {
                  if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
                    - (segments[firstSegment].xOfLeftEnd + 2 * lenSegLoad / 3))) < 5) {
                    if (segments[j].M[0] || segments[j].P[0] !== 0) {
                      noBust = false;
                      break
                    }
                  }
                }
                if (noBust) {
                  const x = beam.xDiagram + xFirstSegment + beam.xScale * 2 * lenSegLoad / 3;
                  svg += Draw.text(str, x, yy);
                } else {
                  if (i === 0) {
                    svg += Draw.text(str, beam.xDiagram  - 35, yy);
                  }
                }
              }
            }
          }
        }
      } else {
        // We've got a distributed sloping load
        lastSegUniform = false;
        const s = i === 0
          ? 0
          : (segments[i - 1].w2[0] - segments[i - 1].w1[0]) / segments[i - 1].length;
        const s2 = (seg.w2[0] - seg.w1[0]) / seg.length;
        const s3 = i === numSegments - 1
          ? 0
          : (segments[i + 1].w2[0] - segments[i + 1].w1[0]) / segments[i + 1].length;
        if (Math.abs(s2 - s) > 0.05 || i === 0) {
          if (Math.abs(seg.w1[0]) > 0.05) {
            if (seg.length * beam.xScale > 20) {
              const str = round(Math.abs(seg.w1[0]), 3);
              const x = beam.xDiagram + beam.xScale * seg.xOfLeftEnd;
              const fudge = seg.w1[0] > 0 ? 10 : -5;
              const yy = beam.yLoad + wScale * seg.w1[0] + fudge;
              svg += Draw.text(str, x, yy);
            }
          }
        }
        if (Math.abs(s2 - s3) > 0.05  || i === numSegments - 1
          || Math.abs(seg.w2[0] - segments[i + 1].w1[0]) > 0) {
          if (Math.abs(seg.w2[0]) > 0.05) {
            if (seg.length * beam.xScale > 20) {
              const str = round(Math.abs(seg.w2[0]), 3);
              const x = beam.xDiagram + beam.xScale * (seg.xOfLeftEnd + seg.length) - 30;
              const fudge = seg.w2[0] > 0 ? 10 : -5;
              const yy = beam.yLoad + wScale * seg.w2[0] + fudge;
              svg += Draw.text(str, x, yy);
            }
          }
        }
      }
    }



    return svg
  }

  function clear() {
    document.getElementById("E").value = "";
    document.getElementById("section").value = "";
    document.getElementById("I").value = "";
    document.getElementById("k").value = "";
    document.getElementById("combinations").value = "service";

    const geometry = document.getElementById("geometry");
    const nodes = geometry.getElementsByTagName("select");
    [...nodes].forEach(e => { e.value = "none"; });
    const spans = geometry.getElementsByTagName("input");
    [...spans].forEach(e => { e.value = "";});

    for (let i = 0; i < 9; i++) {
      document.getElementById(`loadShape${i}`).value = "none";
      document.getElementById(`loadType${i}`).value = "none";
      document.getElementById(`amount${i}`).value = "";
      document.getElementById(`unit${i}`).textContent = "";
      document.getElementById(`from${i}`).value = "";
      document.getElementById(`from${i}`).disabled = true;
      document.getElementById(`to${i}`).value = "";
      document.getElementById(`to${i}`).disabled = true;
    }

  /*  document.getElementById("detail0").value = ""
    document.getElementById("detail1").value = "" */

    document.getElementById("diagram-wrapper").innerHTML = "";
  }

  function readForm() {
    const input = {};
    input.E = document.getElementById("E").value.trim();
    input.section = document.getElementById("section").value.trim();
    input.I = document.getElementById("I").value.trim();
    input.k = document.getElementById("k").value.trim();
    input.combinations = document.getElementById("combinations").value.trim();
    input.convention = document.getElementById("convention").checked;
    input.SI = document.getElementById("SI").checked;
    input.patterns = document.getElementById("patterns").checked;
    input.LLF = document.getElementById("LLF").value.trim();
    input.SDS = document.getElementById("SDS").value.trim();

    input.node = [];
    input.spanLength = [];
    for (let i = 0; i < 7; i++) {
      input.node.push(document.getElementById("N" + String(i)).value.trim());
    }
    for (let i = 0; i < 6; i++) {
      input.spanLength.push(document.getElementById("L" + String(i)).value.trim());
    }

    input.loads = [];
    for (let i = 0; i < 9; i++) {
      const load = {};
      const shape = document.getElementById(`loadShape${i}`).value;
      if (shape === "none") { continue }
      load.shape = shape;
      load.type = document.getElementById(`loadType${i}`).value;
      load.amount = document.getElementById(`amount${i}`).value.trim();
      if (load.amount === "" || load.amount === "0") { continue }
      load.from = document.getElementById(`from${i}`).value.trim();
      load.to = document.getElementById(`to${i}`).value.trim();
      input.loads.push(load);
    }

    /* input.details = []
    for (let i = 0; i < 2; i++) {
      const detail = document.getElementById(`detail${i}`).value.trim()
      if (detail !== "" && !isNaN(detail)) {
        input.details = detail
      }
    } */

    return input
  }

  const dotProduct = (a, b) => a.map((e, i) => (e * b[i])).reduce((m, n) => m + n);
  const isLiveish = loadType => loadType === LIVE || loadType === ROOFLIVE || loadType === SNOW;

  function doAnalysis(beam, nodes, spans) {
    const numNodes = nodes.length;
    const numSpans = spans.length;
    const gotType = beam.gotType;
    const numDegreesOfFreedom = beam.numDegreesOfFreedom;
    const numEndActions = 4 * numSpans + numNodes; // include the node spring actions.
    beam.numEndActions = numEndActions;
    const EI = beam.EI;

    // The Direct Stiffness Method employs matrix methods to solve indeterminate structures.
    // Textbooks describe the Direct Stiffness Method with one-based matrices.
    // To avoid confusion, the code below employs arrays as if they were one-based.
    // Since JavaScript arrays are actually zero-based, we will dimension each array with one
    // element more than it needs. Then we'll leave array[0] unused. All our loops will be
    // written as if we had one-based arrays.

    // Prepend elements to arrays `nodes` & `spans` so that they act like 1-based arrays.
    nodes.unshift(0);
    spans.unshift(0);

    // Find the Span Stiffness Matrix, SSM
    // Imagine that a fixed-end span undergoes a displacement, Δ, down at its right end.
    // ▄                                                         █
    // █                                                         █
    // █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,█
    // █             ▀▀▀▀▀▀▀▄▄▄▄                                 █
    // █                         ▀▀▀▌▄▄g                         █
    // █                                 ▀▀▀▀▌▄▄▄▄,              █
    //                                             ▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
    //                                                           █
    // If we draw the free-body diagram of the span, we would see these forces:
    // V_left = 6EIΔ/L², upward
    // M_left = 12EIΔ/L³, clockwise
    // V_right = 6EIΔ/L², downward
    // M_right = 12EIΔ/L³, clockwise
    // The Span Stiffness Matrix is populated, for each span, with just those stiffnesses.

    const ssm = [];
    ssm.push([0, 0, 0, 0, 0]);
    for (let i = 1; i <= numSpans; i++) {
      const subMatrix = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      subMatrix[1][1] = EI * 12 / spans[i].length ** 3;
      subMatrix[1][2] = EI * 6 / spans[i].length ** 2;
      subMatrix[1][3] = -EI * 12 / spans[i].length ** 3;
      subMatrix[1][4] = EI * 6 / spans[i].length ** 2;
      subMatrix[2][1] = EI * 6 / spans[i].length ** 2;
      subMatrix[2][2] = EI * 4 / spans[i].length;
      subMatrix[2][3] = -EI * 6 / spans[i].length ** 2;
      subMatrix[2][4] = EI * 2 / spans[i].length;
      subMatrix[3][1] = -EI * 12 / spans[i].length ** 3;
      subMatrix[3][2] = -EI * 6 / spans[i].length ** 2;
      subMatrix[3][3] = EI * 12 / spans[i].length ** 3;
      subMatrix[3][4] = -EI * 6 / spans[i].length ** 2;
      subMatrix[4][1] = EI * 6 / spans[i].length ** 2;
      subMatrix[4][2] = EI * 2 / spans[i].length;
      subMatrix[4][3] = -EI * 6 / spans[i].length ** 2;
      subMatrix[4][4] = EI * 4 / spans[i].length;
      ssm.push(subMatrix);
    }

    //Find dtm, the Displacement Transformation Matrix
    const dtm = new Array(numEndActions + 1).fill(0).map(e => {
      return new Array(numDegreesOfFreedom + 1).fill(0)
    });
    let j = 0;
    for (let i = 1; i <= numNodes; i++) {
      if (i === 1) {
        if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
          dtm[1][1] = 1;
          dtm[2][1] = 1;
          dtm[3][2] = 1;
          j = 2;
        } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
          dtm[3][1] = 1;
          j = 1;
        }
      } else if (i === numNodes) {
        if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
          j = j + 1;
          dtm[5 * numSpans - 1][j] = 1;
          j = j + 1;
          dtm[5 * numSpans][j] = 1;
          dtm[5 * numSpans + 1][j - 1] = 1;
        } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
          j = j + 1;
          dtm[5 * numSpans][j] = 1;
        }
      } else {
        if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
          j = j + 1;
          dtm[5 * (i - 1) - 1][j] = 1;
          dtm[5 * (i - 1) + 1][j] = 1;
          dtm[5 * (i - 1) + 2][j] = 1;
          j = j + 1;
          dtm[5 * (i - 1)][j] = 1;
          dtm[5 * (i - 1) + 3][j] = 1;
        } else if (nodes[i].fixity === "hinge") {
          j = j + 1;
          dtm[5 * (i - 1) - 1][j] = 1;
          dtm[5 * (i - 1) + 1][j] = 1;
          dtm[5 * (i - 1) + 2][j] = 1;
          j = j + 1;
          dtm[5 * (i - 1)][j] = 1;
          j = j + 1;
          dtm[5 * (i - 1) + 3][j] = 1;
        } else if (nodes[i].fixity === "proppedHinge") {
          j = j + 1;
          dtm[5 * (i - 1)][j] = 1;
          j = j + 1;
          dtm[5 * (i - 1) + 3][j] = 1;
        } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
          j = j + 1;
          dtm[5 * (i - 1)][j] = 1;
          dtm[5 * (i - 1) + 3][j] = 1;
        }
      }
    }

    //Now do the first  matrix operations
    const lsmDtm = createLsmDtm(ssm, dtm, nodes, numEndActions, numDegreesOfFreedom);
    // Create the Stiffness Matrix.
    const [sm, bandWidth] = createSM(dtm, lsmDtm, numDegreesOfFreedom);

    let diag = [];
    let ltm = [];
    if (numDegreesOfFreedom > 1) {
      [diag, ltm] = luDecomposition(sm, bandWidth);
    }

    //Find the number of load patterns
    beam.containsLive = beam.gotType[LIVE] || beam.gotType[ROOFLIVE] || beam.gotType[SNOW];
    const numPatterns = !beam.containsLive
      ? 1
      : !beam.doLiveLoadPatterns
      ? 1
      : numSpans > 7
      ? 2
      : beam.patterns
      ? 2 ** (numSpans - 1)
      : 2;
    beam.numPatterns = numPatterns;

    // Initialize some variables
    const feam = new Array(numEndActions + 1).fill(0);       // Fixed End Action Matrix
    const nfm = new Array(numDegreesOfFreedom + 1).fill(0);  // Nodal Force Matrix
    let mam;  // Member Action Matrix
    let dm;   // Displacement Matrix
    let mamD = new Array(numEndActions).fill(0);       // mam for Dead load
    let dmD = new Array(numDegreesOfFreedom).fill(0);  // Displacement Matrix for Dead Load
    let mamL; // Live
    let dmL;
    let mamLr; // Roof Live
    let dmLr;
    let mamS; // Snow
    let dmS;
    let mamF = new Array(numEndActions).fill(0); // Fluid
    let dmF = new Array(numDegreesOfFreedom).fill(0);
    let mamH = new Array(numEndActions).fill(0); // HORIZ
    let dmH = new Array(numDegreesOfFreedom).fill(0);
    let mamR = new Array(numEndActions).fill(0); // RAIN
    let dmR = new Array(numDegreesOfFreedom).fill(0);
    let mamW = new Array(numEndActions).fill(0); // WIND
    let dmW = new Array(numDegreesOfFreedom).fill(0);
    let mamE = new Array(numEndActions).fill(0); // EQ
    let dmE = new Array(numDegreesOfFreedom).fill(0);
    if (numPatterns > 1 && beam.containsLive) {
      mamL = new Array(numEndActions + 1).fill(0);
      mamL = mamL.map(e => new Array(numDegreesOfFreedom + 1).fill(0));
      dmL = new Array(numDegreesOfFreedom + 1).fill(0);
      dmL = dmL.map(e => new Array(numSpans + 1).fill(0));
      mamLr = new Array(numEndActions + 1).fill(0);
      mamLr = mamLr.map(e => new Array(numDegreesOfFreedom + 1).fill(0));
      dmLr = new Array(numDegreesOfFreedom + 1).fill(0);
      dmLr = dmLr.map(e => new Array(numSpans + 1).fill(0));
      mamS = new Array(numEndActions + 1).fill(0);
      mamS = mamS.map(e => new Array(numDegreesOfFreedom + 1).fill(0));
      dmS = new Array(numDegreesOfFreedom + 1).fill(0);
      dmS = dmS.map(e => new Array(numSpans + 1).fill(0));
    } else {
      mamL = new Array(numEndActions).fill(0);
      dmL = new Array(numDegreesOfFreedom).fill(0);
      mamLr = new Array(numEndActions).fill(0);
      dmLr = new Array(numDegreesOfFreedom).fill(0);
      mamS = new Array(numEndActions).fill(0);
      dmS = new Array(numDegreesOfFreedom).fill(0);
    }

    //Find a Member end Action Matrix, mam for each type of load, Service, D, L, S, W, E, etc
    //For the live loads, find a different mam due to loads on each individual span.
    for (let loadType = 0; loadType <= EQ; loadType++) {
      if (loadType === 0 || gotType[loadType]) {
        let lastK = 0;
        let doPatterns = false; // patterned live loads
        if (loadType === 0) {
          doPatterns = false;
          lastK = 1;
        } else if (isLiveish(loadType) && numPatterns > 1) {
          doPatterns = true;
          // To do load patterns, we have to get a Member Action Matrix, mam, for each span.
          lastK = numSpans;
        } else {
          doPatterns = false;
          lastK = 1;
        }

        for (let k = 1; k <= lastK; k++) {
          for (let i = 1;  i <= numSpans; i++) {
            const L = spans[i].length;
            const iSpring = 5 * i - 4;
            const i1 = 5 * i - 3;
            const i2 = 5 * i - 2;
            const i3 = 5 * i - 1;
            const i4 = 5 * i;

            // Find the fixed end actions
            feam[iSpring] = 0;
            feam[i1] = 0; //The left end reaction if this segment were a fixed/fixed beam.
            feam[i2] = 0; //The left fixed end moment
            feam[i3] = 0; //The right end reaction
            feam[i4] = 0; //The right fixed end moment
            let applyLoadsFromThisSpan = false;
            if (!doPatterns) {
              // We are not doing live load patterns.
              // So make one pass thru the beam and get a MAM that is the result of all loads.
              applyLoadsFromThisSpan = true;
            } else {
              // We are doing live load patterns.
              // k = number of spans.
              // Make k passes thru the beam.
              // In the kth pass, we calclate a MAM for the entire beam that results from
              // live loads on just the kth span.
              // The other spans have FEAM = [0, 0, etc] as their contribution to this MAM.
              // Having k MAMs will enable us later to superimpose forces for each pattern.
              applyLoadsFromThisSpan = i === k;
            }

            if (applyLoadsFromThisSpan) {
              for (let iSeg = 0; iSeg < spans[i].segments.length; iSeg++) {
                const seg = spans[i].segments[iSeg];
                // In the next few lines,
                // a is the distance from the beginning of the span to the load point.
                // b is the length of the load.
                // c is the distance from the end of the load to the right edge of the span.
                // e is the distance from the left edge of the load to the right end of the span.
                // d is the distance from the right edge of the load to the left edge of the span.
                let w = 0;
                let s = 0;
                const a = seg.xOfLeftEnd - nodes[i].x;
                let b = seg.length;
                let c = L - a - b;
                let d = a + b;
                const e = b + c;
                let gotOppSigns = false;
                let a2 = 0;
                let b2 = 0;
                let c2 = 0;
                let d2 = 0;
                let e2 = 0;

                if (Math.abs(seg.w1[loadType]) < 0.000000001) { seg.w1[loadType] = 0; }
                if (Math.abs(seg.w2[loadType]) < 0.000000001) { seg.w2[loadType] = 0; }

                if (seg.w1[loadType] !== 0 && seg.w2[loadType] !== 0 &&
                        Math.sign(seg.w1[loadType]) !== Math.sign(seg.w2[loadType])) {
                  gotOppSigns = true;
                  w = 0;
                  s = (seg.w2[loadType] - seg.w1[loadType]) / b;   //slope of line load
                  a2 = a - seg.w1[loadType] / s;
                  b2 = d - a2;
                  c2 = c;
                  d2 = d;
                  e2 = d2 - b2;
                  b = a2 - a;
                  d = a + b;
                  c = L - d;

                } else {
                  gotOppSigns = false;
                  w = Math.abs(seg.w1[loadType]) < Math.abs(seg.w2[loadType])
                    ? seg.w1[loadType]
                    : seg.w2[loadType];
                }

                if (a === 0) {
                  feam[iSpring] = seg.P[loadType];
                } else {
                  //FEA for point loads
                  feam[i2] = feam[i2] + seg.P[loadType] * a * e ** 2 / L ** 2;
                  feam[i4] = feam[i4] - seg.P[loadType] * a ** 2 * e / L ** 2;
                  feam[i2] = feam[i2] - seg.M[loadType] * (-1 + 4 * a / L - 3 * a ** 2 / L ** 2);
                  feam[i4] = feam[i4] - seg.M[loadType] * a / L * (2 - 3 * a / L);
                  feam[i1] = feam[i1] + seg.P[loadType] * e ** 2 / L ** 3 * (3 * a + e);
                  feam[i3] = feam[i3] + seg.P[loadType] * a ** 2 / L ** 3 * (a + 3 * e);
                  feam[i1] = feam[i1] - 6 * seg.M[loadType] * a / L ** 2 * (1 - a / L);
                  feam[i3] = feam[i3] + 6 * seg.M[loadType] * a / L ** 2 * (1 - a / L);
                }

                //FEA for uniform loads
                if (w !== 0) {
                  const mA = (w * b / (12 * L ** 2 * b)) * (e ** 3 * (4 * L - 3 * e)
                      - c ** 3 * (4 * L - 3 * c));
                  feam[i2] = feam[i2] + mA;
                  const mB = (w * b / (12 * L ** 2 * b)) * (d ** 3 * (4 * L - 3 * d)
                      - a ** 3 * (4 * L - 3 * a));
                  feam[i4] = feam[i4] - mB;
                  feam[i1] = feam[i1] + (w * b / (2 * L)) * (2 * c + b) + (mA - mB) / L;
                  feam[i3] = feam[i3] + (w * b / (2 * L)) * (2 * a + b) + (mB - mA) / L;
                }

                //FEA for triangular loads
                if (Math.abs(seg.w1[loadType]) > Math.abs(seg.w2[loadType]) || gotOppSigns) {
                  const wL = seg.w1[loadType] - w;
                  // const wR = 0
                  const wT = wL;
                  const centerOfTriangle = a + b / 3;
                  const wF = wT * d / b;
                  const mA = (wF * L ** 2 / 60) * (d / L) ** 2 * (10 - 10 * d / L
                      + 3 * d ** 2 / L ** 2)
                      - ((wF - wT) * L ** 2 / 60) * (a / L) ** 2
                        * (10 - 10 * a / L + 3 * a ** 2 / L ** 2)
                      - (wT * L ** 2 / 12) * (a / L) ** 2 * (6 - 8 * a / L + 3 * a ** 2 / L ** 2);
                  feam[i2] = feam[i2] + mA;
                  const mB = (wF * L ** 2 / 60) * (d / L) ** 3 * (5 - 3 * d / L)
                      - ((wF - wT) * L ** 2 / 60) * (a / L) ** 3 * (5 - 3 * a / L)
                      - (wT * L ** 2 / 12) * (a / L) ** 3 * (4 - 3 * a / L);
                  feam[i4] = feam[i4] - mB;
                  feam[i1] = feam[i1] + 0.5 * (wT * b) * (L - centerOfTriangle) / L + (mA - mB) / L;
                  feam[i3] = feam[i3] + 0.5 * (wT * b) * centerOfTriangle / L + (mB - mA) / L;

                } else if (Math.abs(seg.w2[loadType]) > Math.abs(seg.w1[loadType])) {
                  // const wL = 0
                  const wR = seg.w2[loadType] - w;
                  const wT = wR;
                  const centerOfTriangle = a + 2 * b / 3;
                  const wF = wT * e / b;
                  const mA = (wF * L ** 2 / 60) * (e / L) ** 3 * (5 - 3 * e / L)
                      - ((wF - wT) * L ** 2 / 60) * (c / L) ** 3 * (5 - 3 * c / L)
                      - (wT * L ** 2 / 12) * (c / L) ** 3 * (4 - 3 * c / L);
                  feam[i2] = feam[i2] + mA;
                  const mB = (wF * L ** 2 / 60) * (e / L) ** 2
                        * (10 - 10 * e / L + 3 * e ** 2 / L ** 2)
                      - ((wF - wT) * L ** 2 / 60) * (c / L) ** 2
                        * (10 - 10 * c / L + 3 * c ** 2 / L ** 2)
                      - (wT * L ** 2 / 12) * (c / L) ** 2 * (6 - 8 * c / L + 3 * c ** 2 / L ** 2);
                  feam[i4] = feam[i4] - mB;
                  feam[i1] = feam[i1] + 0.5 * (wT * b) * (L - centerOfTriangle) / L + (mA - mB) / L;
                  feam[i3] = feam[i3] + 0.5 * (wT * b) * centerOfTriangle / L + (mB - mA) / L;
                }
                if (gotOppSigns) {
                  //Do the right-hand triangle load
                  // const wL = 0
                  // const wR = seg.w2[loadType]
                  const wT = seg.w2[loadType];
                  const centerOfTriangle = a2 + 2 * b2 / 3;
                  const wF = wT * e2 / b2;
                  const mA = (wF * L ** 2 / 60) * (e2 / L) ** 3 * (5 - 3 * e2 / L)
                      - ((wF - wT) * L ** 2 / 60) * (c2 / L) ** 3 * (5 - 3 * c2 / L)
                      - (wT * L ** 2 / 12) * (c2 / L) ** 3 * (4 - 3 * c2 / L);
                  feam[i2] = feam[i2] + mA;
                  const mB = (wF * L ** 2 / 60) * (e2 / L) ** 2
                      * (10 - 10 * e2 / L + 3 * e2 ** 2 / L ** 2)
                      - ((wF - wT) * L ** 2 / 60) * (c2 / L) ** 2
                      * (10 - 10 * c2 / L + 3 * c2 ** 2 / L ** 2)
                      - (wT * L ** 2 / 12) * (c2 / L) ** 2 * (6 - 8 * c2 / L + 3 * c2 ** 2 / L ** 2);
                  feam[i4] = feam[i4] - mB;
                  feam[i1] = feam[i1] + 0.5 * (wT * b2) * (L - centerOfTriangle) / L + (mA - mB) / L;
                  feam[i3] = feam[i3] + 0.5 * (wT * b2) * centerOfTriangle / L + (mB - mA) / L;
                }
              }
            }
          }

          //Find the Nodal Force Matrix, NFM
          let j = 0;
          for (let i = 1; i <= numNodes; i++) {
            if (i === 1) {
              if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
                nfm[1] = -feam[1] - feam[2];
                nfm[2] = -feam[3];
                if (isLiveish(loadType) && numPatterns > 1) {
                  if (k === 0) {
                    nfm[1] = nfm[1] - nodes[1].P[loadType];
                    nfm[2] = nfm[2] - nodes[1].M[loadType];
                  }
                } else {
                  nfm[1] = nfm[1] - nodes[1].P[loadType];
                  nfm[2] = nfm[2] - nodes[1].M[loadType];
                }

                j = 2;
              } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
                j += 1;
                nfm[1] = -feam[3];
                if (isLiveish(loadType) && numPatterns > 1) {
                  if (k === 1) {
                    nfm[j] = nfm[j] - nodes[1].M[loadType];
                  }
                } else {
                  nfm[j] = nfm[j] - nodes[1].M[loadType];
                }
              }
            } else if (i === numNodes) {
              if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
                j += 1;
                nfm[j] = -feam[5 * numSpans - 1] - feam[5 * numSpans + 1];
                j += 1;
                nfm[j] = -feam[5 * numSpans];
                if (isLiveish(loadType) && numPatterns > 1) {
                  if (k === numSpans) {
                    nfm[j - 1] = nfm[j - 1] - nodes[numNodes].P[loadType];
                    nfm[j] = nfm[j] - nodes[numNodes].M[loadType];
                  }
                } else {
                  nfm[j - 1] = nfm[j - 1] - nodes[numNodes].P[loadType];
                  nfm[j] = nfm[j] - nodes[numNodes].M[loadType];
                }
              } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
                j += 1;
                nfm[j] = -feam[5 * numSpans];
                if (isLiveish(loadType) && numPatterns > 1) {
                  if (k === numSpans) {
                    nfm[j] = nfm[j] - nodes[numNodes].M[loadType];
                  }
                } else {
                  nfm[j] = nfm[j] - nodes[numNodes].M[loadType];
                }
              }
            } else {
              if (nodes[i].fixity === "continuous" || nodes[i].fixity === "spring") {
                j += 1;
                nfm[j] = -feam[5 * (i - 1) - 1] - feam[5 * (i - 1) + 1] - feam[5 * (i - 1) + 2];
                j += 1;
                nfm[j] = -feam[5 * (i - 1)] - feam[5 * (i - 1) + 3];
                if ((loadType === 3 || loadType === 5 || loadType === 6) && numPatterns > 1) {
                  if (k === i) {
                    nfm[j - 1] = nfm[j - 1] - nodes[i].P[loadType];
                    nfm[j] = nfm[j] - nodes[i].M[loadType];
                  }
                } else {
                  nfm[j - 1] = nfm[j - 1] - nodes[i].P[loadType];
                  nfm[j] = nfm[j] - nodes[i].M[loadType];
                }
              } else if (nodes[i].fixity === "hinge") {
                j += 1;
                nfm[j] = -feam[5 * (i - 1) - 1] - feam[5 * (i - 1) + 1] - feam[5 * (i - 1) + 2];
                j += 1;
                nfm[j] = -feam[5 * (i - 1)];
                if ((loadType === 3 || loadType === 5 || loadType === 6) && numPatterns > 1) {
                  if (k === i) {
                    nfm[j - 1] = nfm[j - 1] - nodes[i].P[loadType];
                    nfm[j] = nfm[j] - nodes[i].M[loadType];
                  }
                } else {
                  nfm[j - 1] = nfm[j - 1] - nodes[i].P[loadType];
                  nfm[j] = nfm[j] - nodes[i].M[loadType];
                }

                j += 1;
                nfm[j] = -feam[5 * (i - 1) + 3];
              } else if (nodes[i].fixity === "proppedHinge") {
                j += 1;
                nfm[j] = -feam[5 * (i - 1)];
                j += 1;
                nfm[j] = -feam[5 * (i - 1) + 3];
              } else if (nodes[i].fixity === "fixed") ; else if (nodes[i].fixity === "pinned") {
                j += 1;
                nfm[j] = -feam[5 * (i - 1)] - feam[5 * (i - 1) + 3];
                if ((loadType === 3 || loadType === 5 || loadType === 6) && numPatterns > 1) {
                  if (k === i) {
                    nfm[j] = nfm[j] - nodes[i].M[loadType];
                  }
                } else {
                  nfm[j] = nfm[j] - nodes[i].M[loadType];
                }
              }
            }
          }

          //Now do the rest of the matrix operations for the current load type
          if (numDegreesOfFreedom === 0) {
            dm = [0];
          } else if (numDegreesOfFreedom === 1) {
            dm = [0, nfm[1] / sm[1][1]];
          } else {
            dm = solveViaLDLt(diag, ltm, nfm, bandWidth);
          }

          // Get the Member Action Matrix, MAM.
          // Multiply lsmDtm times dm, then add the resulting column vector to the FEAM
          mam = lsmDtm.map(row => dotProduct(row, dm)).map((e, i) => e + feam[i]);

          //Set elements of mam = 0 where fixity so dictates
          for (let i = 1; i <= numEndActions; i++) {
            if (Math.abs(mam[i]) < 0.00000000000001) { mam[i] = 0; }
          }

          switch (loadType) {
            case DEAD:
              mamD = clone(mam);
              if (EI !== 1) { dmD = clone(dm); }
              break
            case FLUID:
              mamF = clone(mam);
              if (EI !== 1) { dmF = clone(dm); }
              break
            case LIVE:
              if (typeof mamL[0] === "number") {
                mamL = clone(mam);
                if (EI !== 1) { dmL = clone(dm); }
              } else {
                for (let j = 1; j < 5 * numSpans + 1; j++) {
                  mamL[j][k - 1] = mam[j]; //mam for live loads on span k
                }
                if (EI !== 1) {
                  for (let j = 1; j <= numDegreesOfFreedom; j++) {
                    dmL[j][k] = dm[j];
                  }
                }
              }
              break
            case HORIZ:
              mamH = clone(mam);
              if (EI !== 1) { dmH = clone(dm); }
              break
            case ROOFLIVE:
              if (typeof mamLr[0] === "number") {
                mamLr = clone(mam);
                if (EI !== 1) { dmLr = clone(dm); }
              } else {
                for (let j = 1; j < 5 * numSpans + 1; j++) {
                  mamLr[j][k - 1] = mam[j];
                }
                if (EI !== 1) {
                  for (let j = 0; j < numDegreesOfFreedom; j++) {
                    dmLr[j][k] = dm[j];
                  }
                }
              }
              break
            case SNOW:
              if (typeof mamS[0] === "number") {
                mamS = clone(mam);
                dmS = clone(dm);
              } else {
                for (let j = 1; j < 5 * numSpans + 1; j++) {
                  mamS[j][k - 1] = mam[j];
                }
                if (EI !== 1) {
                  for (let j = 0; j < numDegreesOfFreedom; j++) {
                    dmS[j][k] = dm[j];
                  }
                }
              }
              break
            case RAIN:
              mamR = clone(mam);
              if (EI !== 1) { dmR = clone(dm); }
              break
            case WIND:
              mamW = clone(mam);
              if (EI !== 1) { dmW = clone(dm); }
              break
            case EQ:
              mamE = clone(mam);
              if (EI !== 1) { dmE = clone(dm); }
              break
          }

          // Find the reactions
          if (numPatterns === 1 || !(beam.containsLive && isLiveish(loadType))) {
            if (nodes[1].fixity === "fixed") {
              nodes[1].Mr[loadType] = mam[3] + nodes[1].M[loadType];
            }
            if (nodes[1].fixity === "spring") {
              nodes[1].Pr[loadType] = mam[1];
            } else if (nodes[1].fixity !== "continuous") {
              nodes[1].Pr[loadType] = -mam[2] - nodes[1].P[loadType];
            }

            for (let j = 2; j <= numSpans; j++) {
              if (nodes[j].fixity === "fixed") {
                nodes[j].Mr[loadType] = mam[5 * (j - 1)] + mam[5 * (j - 1) + 3] + nodes[j].M[loadType];
              }
              if (nodes[j].fixity === "spring") {
                nodes[j].Pr[loadType] = mam[5 * (j - 1) + 1];
              } else if (nodes[j].fixity !== "continuous") {
                nodes[j].Pr[loadType] = -mam[5 * (j - 1) - 1] - mam[5 * (j - 1) + 2]
                    - nodes[j].P[loadType];
              }
            }

            if (nodes[numNodes].fixity === "fixed") {
              nodes[numNodes].Mr[loadType] = mam[5 * numSpans] + nodes[numNodes].M[loadType];
            }
            if (nodes[numNodes].fixity === "spring") {
              nodes[numNodes].Pr[loadType] = mam[5 * numSpans + 1];
            } else if (nodes[numNodes].fixity !== "continuous") {
              nodes[numNodes].Pr[loadType] = -mam[5 * numSpans - 1] - nodes[numNodes].P[loadType];
            }
          } else {
            let mTest = 0;
            if (nodes[1].fixity === "fixed") {
              mTest = mam[3] + nodes[1].M[loadType];
              if (mTest > 0) { nodes[1].Mr[loadType] = nodes[1].Mr[loadType] + mTest; }
              if (mTest < 0) { nodes[1].MrMin[loadType] = nodes[1].MrMin[loadType] + mTest; }
            }
            let pTest = 0;
            if (nodes[1].fixity === "spring") {
              pTest = mam[1];
            } else if (nodes[1].fixity !== "continuous") {
              pTest = -mam[2] - nodes[1].P[loadType];
            }
            if (pTest > 0) { nodes[1].Pr[loadType] = nodes[1].Pr[loadType] + pTest; }
            if (pTest < 0) { nodes[1].PrMin[loadType] = nodes[1].PrMin[loadType] + pTest; }

            for (let j = 1; j < numSpans; j++) {
              if (nodes[j].fixity === "fixed") {
                mTest = mam[5 * (j - 1)] + mam[5 * (j - 1) + 3] + nodes[j].M[loadType];
                if (mTest > 0) { nodes[j].Mr[loadType] = nodes[j].Mr[loadType] + mTest; }
                if (mTest < 0) { nodes[j].MrMin[loadType] = nodes[j].MrMin[loadType] + mTest; }
              }
              pTest = 0;
              if (nodes[j].fixity === "spring") {
                nodes[j].Pr[loadType] = nodes[j].Pr[loadType] + mam[5 * (j - 1) + 1];
              } else if (nodes[j].fixity !== "continuous") {
                pTest = -mam[5 * (j - 1) - 1] - mam[5 * (j - 1) + 2] - nodes[j].P[loadType];
              }
              if (pTest > 0) { nodes[j].Pr[loadType] = nodes[j].Pr[loadType] + pTest; }
              if (pTest < 0) { nodes[j].PrMin[loadType] = nodes[j].PrMin[loadType] + pTest; }
            }

            if (nodes[numNodes].fixity === "fixed") {
              mTest = mam[5 * numSpans] + nodes[numSpans].M[loadType];
              if (mTest > 0) {
                nodes[numNodes].Mr[loadType] = nodes[numNodes].Mr[loadType] + mTest;
              }
              if (mTest < 0) {
                nodes[numNodes].MrMin[loadType] = nodes[numNodes].MrMin[loadType] + mTest;
              }
            }

            pTest = 0;
            if (nodes[numNodes].fixity === "spring") {
              nodes[numNodes].Pr[loadType] = nodes[numNodes].Pr[loadType] + mam[5 * numSpans + 1];
            } else if (nodes[numNodes].fixity !== "continuous") {
              pTest = -mam[5 * numSpans - 1] - nodes[j].P[loadType];
            }
            if (pTest > 0) {
              nodes[numNodes].Pr[loadType] = nodes[numNodes].Pr[loadType] + pTest;
            }
            if (pTest < 0) {
              nodes[numNodes].PrMin[loadType] = nodes[numNodes].PrMin[loadType] + pTest;
            }
          } //finished finding the reactions

        }
      }
    }
    return [
      [mamD, mamL, mamLr, mamS, mamF, mamH, mamR, mamW, mamE],
      [dmD, dmL, dmLr, dmS, dmF, dmH, dmR, dmW, dmE]
    ]
  }

  const createLsmDtm = (ssm, dtm, nodes, numEndActions, numDegreesOfFreedom) => {
  // Create LSM × DTM

    let lsmDtm = new Array(numEndActions + 1).fill(0);
    lsmDtm = lsmDtm.map(e => new Array(numDegreesOfFreedom + 1).fill(0));

    for (let i = 1; i <= numEndActions; i++) {
      const iSpan = Math.trunc((i - 1) / 5) + 1;
      const g = i - 1 - 5 * (iSpan - 1);

      for (let j = 1; j <= numDegreesOfFreedom; j++) {
        if (g === 0) {
          lsmDtm[i][j] = nodes[iSpan].k * dtm[i][j];
        } else {
          const kStart = 5 * iSpan - 3;
          const kEnd = 5 * iSpan;
          let h = 0;
          for (let k = kStart; k <= kEnd; k++) {
            h += 1;
            lsmDtm[i][j] = lsmDtm[i][j] + ssm[iSpan][g][h] * dtm[k][j];
          }
        }
      }
    }
    return lsmDtm
  };

  const createSM = (dtm, lsmDtm, numDegreesOfFreedom) => {
    // Create the Stiffness Matrix, SM.
    // SM = DTM**T × LsmDtm
    let sm = Array(numDegreesOfFreedom + 1).fill(0);
    sm = sm.map(e => Array(numDegreesOfFreedom + 1).fill(0));
    const h = lsmDtm.length - 1;
    let bandWidth = 1;
    for (let i = 1; i < dtm[0].length; i++) {
      for (let j = 1; j <= i; j++) {                       // Only the lower half of SM.
        for (let k = 1; k <= h; k++) {
          sm[i][j] = sm[i][j] + dtm[k][i] * lsmDtm[k][j];   // DTM**T, not DTM.
        }
        if (sm[i][j] !== 0 && i - j > bandWidth) { bandWidth = i - j;}  // lower band width
      }
    }
    return [sm, bandWidth]
  };

  const luDecomposition = (sm, bandWidth) => {
    // Perform the LU Decomposition of the stiffness matrix, SM.
    // This is in preparation for the LDL**T matrix solution to come later.

    const diag = new Array(sm.length).fill(0);
    // Lower Triangular matrix, ltm
    let ltm = new Array(sm.length).fill(0);
    ltm = ltm.map(e => new Array(sm.length - 1).fill(0));

    const n = sm.length - 1;    // number of equations

    for (let j = 1; j <= n; j++) {
      let kStar = Math.max(j - bandWidth, 1);
      diag[j] = sm[j][j];
      for (let k = kStar; k <= j - 1; k++) {
        diag[j] = diag[j] - diag[k] * ltm[j][k] * ltm[j][k];
      }

      const iMax = Math.min(j + bandWidth, n);
      for (let i = j + 1; i <= iMax; i++) {
        kStar =  Math.max(i - bandWidth, 1);
        let sum = 0;
        for (let k = kStar; k <= j - 1; k++) {
          sum = sum + diag[k] * ltm[j][k] * ltm[i][k];
        }
        ltm[i][j] = (sm[i][j] - sum) / diag[j];
      }
    }
    return [diag, ltm]
  };

  const solveViaLDLt = (diag, ltm, b, bandWidth) => {
    // Solve for dm() in a system of equations expressed by matrices: SM()× dm() = NFM()

    // This sub// s method is a banded version of the LDL**T solver.
    // LDL**T takes advantage of the fact that SM is a symmetric, positive-definite matrix.
    // The algorithm will overwrite b(), which starts out as NFM and ends as dm.
    // We already have the diag & ltm matrices, so we can go directly to the LU solution.

    const n = b.length - 1;       // number of equations

    // Forward substitution
    for (let i = 2; i <= n; i++) {
      const kStar = i - bandWidth < 1 ? 1 : i - bandWidth;
      for (let k = kStar; k <= i - 1; k++) {
        b[i] = b[i] - ltm[i][k] * b[k];
      }
    }

    // Diagonal scaling and backward substitution
    b[n] = b[n] / diag[n];
    for (let i = n - 1; i >= 1; i--) {
      b[i] = b[i] / diag[i];
      const kStar = Math.min(n, i + bandWidth);
      for (let k = i + 1; k <= kStar; k++) {
        b[i] = b[i] - ltm[k][i] * b[k];
      }
    }

    return b
  };

  function getLoadPatterns(beam, numSpans) {
    if (!beam.containsLive || !beam.doLiveLoadPatterns) {
      // Just one pattern. It includes each span.
      const pattern = [1];
      for (let i = 2; i <= numSpans; i++) {
        pattern.push(i);
      }
      return [pattern]
    } else if (beam.numPatterns === 2 || numSpans > 7) {
      // Do 2 patterns.  One with all live load on, and one with all live load off.
      const pattern = [1];
      for (let i = 2; i <= numSpans; i++) {
        pattern.push(i);
      }
      return [pattern, []]
    } else {
      switch (numSpans) {
        case 1:
          return [[1], []]
        case 2:
          return [[1, 2], [], [1], [2]]
        case 3:
          return [[1, 2, 3], [], [1], [2], [3], [1, 2], [1, 3], [2, 3]]
        case 4:
          // eslint-disable-next-line max-len
          return [[1, 2, 3, 4], [], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
        case 5:
          // eslint-disable-next-line max-len
          return [[1, 2, 3, 4, 5], [], [1], [2], [3], [4], [5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5], [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5]]
        case 6:
          // eslint-disable-next-line max-len
          return [[1, 2, 3, 4, 5, 6], [], [1], [2], [3], [4], [5], [6], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6], [4, 5], [4, 6], [5, 6], [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 2, 6], [1, 3, 4], [1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], [1, 5, 6], [2, 3, 4], [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6], [2, 5, 6], [3, 4, 5], [3, 4, 6], [3, 5, 6], [4, 5, 6], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 3, 6], [1, 2, 4, 5], [1, 2, 4, 6], [1, 2, 5, 6], [1, 3, 4, 5], [1, 3, 4, 6], [1, 3, 5, 6], [1, 4, 5, 6], [2, 3, 4, 5], [2, 3, 4, 6], [2, 3, 5, 6], [2, 4, 5, 6], [3, 4, 5, 6], [1, 2, 3, 4, 5], [1, 2, 3, 4, 6], [1, 2, 3, 5, 6], [1, 2, 4, 5, 6], [1, 3, 4, 5, 6], [2, 3, 4, 5, 6]]
        case 7:
          // eslint-disable-next-line max-len
          return [[1, 2, 3, 4, 5, 6, 7], [], [1], [2], [3], [4], [5], [6], [7], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [3, 4], [3, 5], [3, 6], [3, 7], [4, 5], [4, 6], [4, 7], [5, 6], [5, 7], [6, 7], [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 2, 6], [1, 2, 7], [1, 3, 4], [1, 3, 5], [1, 3, 6], [1, 3, 7], [1, 4, 5], [1, 4, 6], [1, 4, 7], [1, 5, 6], [1, 5, 7], [1, 6, 7], [2, 3, 4], [2, 3, 5], [2, 3, 6], [2, 3, 7], [2, 4, 5], [2, 4, 6], [2, 4, 7], [2, 5, 6], [2, 5, 7], [2, 6, 7], [3, 4, 5], [3, 4, 6], [3, 4, 7], [3, 5, 6], [3, 5, 7], [3, 6, 7], [4, 5, 6], [4, 5, 7], [4, 6, 7], [5, 6, 7], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 3, 6], [1, 2, 3, 7], [1, 2, 4, 5], [1, 2, 4, 6], [1, 2, 4, 7], [1, 2, 5, 6], [1, 2, 5, 7], [1, 2, 6, 7], [1, 3, 4, 5], [1, 3, 4, 6], [1, 3, 4, 7], [1, 3, 5, 6], [1, 3, 5, 7], [1, 3, 6, 7], [1, 4, 5, 6], [1, 4, 5, 7], [1, 4, 6, 7], [1, 5, 6, 7], [2, 3, 4, 5], [2, 3, 4, 6], [2, 3, 4, 7], [2, 3, 5, 6], [2, 3, 5, 7], [2, 3, 6, 7], [2, 4, 5, 6], [2, 4, 5, 7], [2, 4, 6, 7], [2, 5, 6, 7], [3, 4, 5, 6], [3, 4, 5, 7], [3, 4, 6, 7], [3, 5, 6, 7], [4, 5, 6, 7], [1, 2, 3, 4, 5], [1, 2, 3, 4, 6], [1, 2, 3, 4, 7], [1, 2, 3, 5, 6], [1, 2, 3, 5, 7], [1, 2, 3, 6, 7], [1, 2, 4, 5, 6], [1, 2, 4, 5, 7], [1, 2, 4, 6, 7], [1, 2, 5, 6, 7], [1, 3, 4, 5, 6], [1, 3, 4, 5, 7], [1, 3, 4, 6, 7], [1, 3, 5, 6, 7], [1, 4, 5, 6, 7], [2, 3, 4, 5, 6], [2, 3, 4, 5, 7], [2, 3, 4, 6, 7], [2, 3, 5, 6, 7], [2, 4, 5, 6, 7], [3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 4, 5, 6, 7], [1, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7]]
          // We cannot get here.
      }
    }
  }

  const loadCombinations = Object.freeze({
      //                            D  F  L  H  £  S  R  W  E
      "service": [
        ["DFLH£SRWE", "0 1 1 1 1 1 1 1 1 1"]
      ],
      "ASCE 7-16": [
      ["DFH", "1  1.4          1.4           0  1.6    0    0    0    0    0"],
      ["L", "2  1.2          1.2         1.6  1.6    0    0    0    0    0"],
      ["L£", "2  1.2          1.2         1.6  1.6  0.5    0    0    0    0"],
      ["LS", "2  1.2          1.2         1.6  1.6    0  0.5    0    0    0"],
      ["LR", "2  1.2          1.2         1.6  1.6    0    0  0.5    0    0"],
      ["£", "3  1.2          1.2           0  1.6  1.6    0    0    0    0"],
      ["£L", "3  1.2          1.2         LLF  1.6  1.6    0    0    0    0"],
      ["£W", "3  1.2          1.2           0  1.6  1.6    0    0  0.5    0"],
      ["S", "3  1.2          1.2           0  1.6    0  1.6    0    0    0"],
      ["SL", "3  1.2          1.2         LLF  1.6    0  1.6    0    0    0"],
      ["SW", "3  1.2          1.2           0  1.6    0  1.6    0  0.5    0"],
      ["R", "3  1.2          1.2           0  1.6    0    0  1.6    0    0"],
      ["RL", "3  1.2          1.2         LLF  1.6    0    0  1.6    0    0"],
      ["RW", "3  1.2          1.2           0  1.6    0    0  1.6  0.5    0"],
      ["W", "4  1.2          1.2           0  1.6    0    0    0  1.0    0"],
      ["WL", "4  1.2          1.2         LLF  1.6    0    0    0  1.0    0"],
      ["W£", "4  1.2          1.2           0  1.6  0.5    0    0  1.0    0"],
      ["WL£", "4  1.2          1.2         LLF  1.6  0.5    0    0  1.0    0"],
      ["WS", "4  1.2          1.2           0  1.6    0  0.5    0  1.0    0"],
      ["WLS", "4  1.2          1.2         LLF  1.6    0  0.5    0  1.0    0"],
      ["WR", "4  1.2          1.2           0  1.6    0    0  0.5  1.0    0"],
      ["WLR", "4  1.2          1.2         LLF  1.6    0    0  0.5  1.0    0"],
      ["W", "6  0.9          0             0  1.6    0    0    0  1.0    0"],
      ["E", "6  1.2+0.2×SDS  1.2+0.2×SDS   1  1.6    0  0.2    0    0    1"],
      ["E", "7  0.9-0.2×SDS  0.9-0.2×SDS   0  1.6    0    0    0    0    1"]
      ],
      "ASCE 7-16 ASD": [
      ["DF", "1   1             1           0    1    0    0    0    0    0"],
      ["L", "2   1             1           1    1    0    0    0    0    0"],
      ["£", "3   1             1           0    1    1    0    0    0    0"],
      ["S", "3   1             1           0    1    0    1    0    0    0"],
      ["R", "3   1             1           0    1    0    0    1    0    0"],
      ["L£", "4   1             1         0.75   1   0.75  0    0    0    0"],
      ["LS", "4   1             1         0.75   1    0   0.75  0    0    0"],
      ["LR", "4   1             1         0.75   1    0    0   0.75  0    0"],
      ["W", "5   1             1           0    1    0    0    0   0.6   0"],
      ["LW", "6   1             1         0.75   1    0    0    0   0.45  0"],
      ["£W", "6   1             1           0    1   0.75  0    0   0.45  0"],
      ["SW", "6   1             1           0    1    0  0.75   0   0.45  0"],
      ["RW", "6   1             1           0    1    0    0  0.75  0.45  0"],
      ["L£W", "6   1             1         0.75   1   0.75  0    0   0.45  0"],
      ["LSW", "6   1             1         0.75   1    0  0.75   0   0.45  0"],
      ["LRW", "6   1             1         0.75   1    0    0  0.75  0.45  0"],
      ["W", "7  0.6            0           0    1    0    0    0   0.6   0"],
      ["E", "8  1+0.14×SDS   1+0.14×SDS    0    1    0    0    0    0    0.7"],
      ["E", "9  1+0.105×SDS  1+0.105×SDS  0.75  1    0  0.75   0    0    0.525"],
      ["E", "10  0.6-0.14×SDS 0.6-0.14×SDS  0    0    0    0    0    0    0.7"]
      ],
      "2018 IBC": [
      ["DF", "1 1.4 1.4 0 0 0 0 0 0 0"],
      ["LH", "2 1.2 1.2 1 1 0 0 0 0 0"],
      ["LH", "2 1.2 1.2 1 1 0.5 0 0 0 0"],
      ["LH", "2 1.2 1.2 1 1 0 0.5 0 0 0"],
      ["LH", "2 1.2 1.2 1 1 0 0 0.5 0 0"],
      ["£", "3 1.2 1.2 LLF 1.6 1 0 0 0 0"],
      ["S", "3 1.2 1.2 LLF 1.6 0 1 0 0 0"],
      ["R", "3 1.2 1.2 LLF 1.6 0 0 1 0 0"],
      ["£", "3 1.2 1.2 0 1.6 1 0 0 0.5 0"],
      ["S", "3 1.2 1.2 0 1.6 0 1 0 0.5 0"],
      ["R", "3 1.2 1.2 0 1.6 0 0 1 0.5 0"],
      ["W", "4 1.2 1.2 LLF 1.6 0.5 0 0 1 0"],
      ["W", "4 1.2 1.2 LLF 1.6 0 0.5 0 1 0"],
      ["W", "4 1.2 1.2 LLF 1.6 0 0 0.5 1 0"],
      ["E", "5 1.2 1.2 LLF 1.6 0 0.7 0 0 1"],
      ["W", "6 0.9 0 0 1.6 0 0 0 1 0"],
      ["E", "7 0.9 0 0 1.6 0 0 0 0 1"]
      ],
      "2018 IBC ASD": [
      ["DF", "8 1 1 0 0 0 0 0 0 0"],
      ["LH", "9 1 1 1 0 0 0 0 0 0"],
      ["£", "10 1 1 0 1 1 0 0 0 0"],
      ["S", "10 1 1 0 1 0 1 0 0 0"],
      ["R", "10 1 1 0 1 0 0 1 0 0"],
      ["£", "11 1 1 0.75 1 0.75 0 0 0 0"],
      ["S", "11 1 1 0.75 1 0 0.75 0 0 0"],
      ["R", "11 1 1 0.75 1 0 0 0.75 0 0"],
      ["W", "12 1 1 0 1 0 0 0 0.6 0"],
      ["E", "12 1 1 0 1 0 0 0 0 0.7"],
      ["W£", "13 1 1 0.75 1 0.75 0 0 0.45 0"],
      ["WS", "13 1 1 0.75 1 0 0.75 0 0.45 0"],
      ["W£", "13 1 1 0.75 1 0 0 0.75 0.45 0"],
      ["E", "14 1 1 0.75 1 0 0.75 0 0 0.525"],
      ["E", "15 0.6 0.6 0 1 0 0 0 0 0.7"]
      ],
      "2015 NBCC": [
      ["D", "1 1.4 0 0 0 0 0 0 0 0"],
      ["L£F", "2 1.25 1.25 1.5 0 1.5 0 0 0 0"],
      ["L£F", "2 0.9 1.25 1.5 0 1.5 0 0 0 0"],
      ["L£F", "2 1.25 1.25 1.5 0 1.5 0.5 0 0 0"],
      ["L£F", "2 0.9 1.25 1.5 0 1.5 0.5 0 0 0"],
      ["L£F", "2 1.25 1.25 1.5 0 1.5 0 0 0.4 0"],
      ["L£F", "2 0.9 1.25 1.5 0 1.5 0 0 0.4 0"],
      ["S", "3 1.25 0 0 0 0 1.5 0 0 0"],
      ["S", "3 0.9 0 0 0 0 1.5 0 0 0"],
      ["S", "3 1.25 LLF LLF 0 LLF 1.5 0 0 0"],
      ["S", "3 0.9 LLF LLF 0 LLF 1.5 0 0 0"],
      ["S", "3 1.25 0 0 0 0 1.5 0 0.4 0"],
      ["S", "3 0.9 0 0 0 0 1.5 0 0.4 0"],
      ["W", "4 1.25 0 0 0 0 0 0 1.4 0"],
      ["W", "4 0.9 0 0 0 0 0 0 1.4 0"],
      ["W", "4 1.25 LLF LLF 0 LLF 0 0 1.4 0"],
      ["W", "4 0.9 LLF LLF 0 LLF 0 0 1.4 0"],
      ["W", "4 1.25 0 0 0 0 0.5 0 1.4 0"],
      ["W", "4 0.9 0 0 0 0 0.5 0 1.4 0"],
      ["E", "5 1.25 0 0 0 0 0 0 0 1"],
      ["E", "5 0.9 0 0 0 0 0 0 0 1"],
      ["E", "5 1.25 LLF LLF 0 LLF 0 0 0 1"],
      ["E", "5 0.9 LLF LLF 0 LLF 0 0 0 1"],
      ["E", "5 1.25 0 0 0 0 0.2 0 0 1"],
      ["E", "5 0.9 0 0 0 0 0.2 0 0 1"]
      ]
    }
  );

  function populateMAM(loadFactors, combern, loadPattern, beam, nodes, spans, actions) {
    const [mamD, mamL, mamLr, mamS, mamF, mamH, mamR, mamW, mamE] = actions;
    let mam = new Array(beam.numEndActions).fill(0);
    let gotFullSnow = false;
    const numSpans = spans.length - 1;
    const numNodes = nodes.length - 1;
    const numPatterns = beam.numPatterns;
    const didNode = new Array(numNodes);
    const didHalfLoad = new Array(numNodes);

    if (loadFactors[DEAD] > 0 && beam.gotType[DEAD]) {
      //do the dead load
      const df = loadFactors[DEAD];
      mam = mam.map((e, i) => mamD[i]);
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = df * nodes[i].P[1];
        nodes[i].Mf = df * nodes[i].M[1];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = df * seg.w1[1];
          seg.w2f = df * seg.w2[1];
          seg.Pf = df * seg.P[1];
          seg.Mf = df * seg.M[1];
        }
      }
    }

    if (loadFactors[FLUID] > 0 && beam.gotType[FLUID]) {
      //Do the fluid load
      const ff = loadFactors[FLUID];
      mam = mam.map((e, i) => e + ff * mamF[i]);
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = nodes[i].Pf + ff * nodes[i].P[2];
        nodes[i].Mf = nodes[i].Mf + ff * nodes[i].M[2];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = seg.w1f[combern] + ff * seg.w1[2];
          seg.w2f = seg.w2f + ff * seg.w2[2];
          seg.Pf = seg.Pf + ff * seg.P[2];
          seg.Mf = seg.Mf + ff * seg.M[2];
        }
      }
    }

    if (loadFactors[LIVE] > 0 && beam.gotType[LIVE]) {
      //do the live load
      const liveFactor = loadFactors[LIVE];
      if (numPatterns === 1) {
        for (let i = 1; i < mam.length; i++) {
          mam[i] = mam[i] + liveFactor * mamL[i];
        }
        for (let i = 1; i <= numSpans; i++) {
          nodes[i].Pf = nodes[i].Pf + liveFactor * nodes[i].P[LIVE];
          nodes[i].Mf = nodes[i].Mf + liveFactor * nodes[i].M[LIVE];
          for (let j = 0; j < spans[i].segments.length; j++) {
            const seg = spans[i].segments[j];
            seg.w1f[combern] = seg.w1f[combern] + liveFactor * seg.w1[LIVE];
            seg.w2f = seg.w2f + liveFactor * seg.w2[LIVE];
            seg.Pf = seg.Pf + liveFactor * seg.P[LIVE];
            seg.Mf = seg.Mf + liveFactor * seg.M[LIVE];
          }
        }
      } else {
        for (let k = 1; k <= numSpans; k++) {
          if (loadPattern.includes(k)) {
            let ii = 0;
            for (let j = 1; j <= numSpans; j++) {
              ii = 5 * j - 4;
              mam[ii] = mam[ii] + liveFactor * mamL[ii][k - 1];
              mam[ii + 1] = mam[ii + 1] + liveFactor * mamL[ii + 1][k - 1];
              mam[ii + 2] = mam[ii + 2] + liveFactor * mamL[ii + 2][k - 1];
              mam[ii + 3] = mam[ii + 3] + liveFactor * mamL[ii + 3][k - 1];
              mam[ii + 4] = mam[ii + 4] + liveFactor * mamL[ii + 4][k - 1];
            }
            mam[ii + 5] = mam[ii + 5] + liveFactor * mamL[ii + 5][k - 1];
          }
        }

        //Do node loads.  Include a node load if the span on either side is in the load pattern.
        didNode.fill(false);
        for (let i = 1; i <= numSpans; i++) {
          if (loadPattern.includes(i)) {
            if (!didNode[i]) {
              nodes[i].Pf = nodes[i].Pf + liveFactor * nodes[i].P[LIVE];
              nodes[i].Mf = nodes[i].Mf + liveFactor * nodes[i].M[LIVE];
              didNode[i] = true;
            }
            if (!didNode[i + 1]) {
              nodes[i + 1].Pf = nodes[i + 1].Pf + liveFactor * nodes[i + 1].P[LIVE];
              nodes[i + 1].Mf = nodes[i + 1].Mf + liveFactor * nodes[i + 1].M[LIVE];
              didNode[i + 1] = true;
            }
          }
          for (let j = 0; j < spans[i].segments.length; j++) {
            const seg = spans[i].segments[j];
            if (loadPattern.includes(i)) {
              seg.w1f[combern] = seg.w1f[combern] + liveFactor * seg.w1[LIVE];
              seg.w2f = seg.w2f + liveFactor * seg.w2[LIVE];
              seg.Pf = seg.Pf + liveFactor * seg.P[LIVE];
              seg.Mf = seg.Mf + liveFactor * seg.M[LIVE];
            }
          }
        }
      }
    }

    if (loadFactors[HORIZ] > 0 && beam.gotType[HORIZ]) {
      //Do the lateral earth pressure load
      const hf = loadFactors[HORIZ];
      for (let i = 1; i < mam.length; i++) {
        mam[i] = mam[i] + hf * mamH[i];
      }
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = nodes[i].Pf + hf * nodes[i].P[HORIZ];
        nodes[i].Mf = nodes[i].Mf + hf * nodes[i].M[HORIZ];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = seg.w1f[combern] + hf * seg.w1[HORIZ];
          seg.w2f = seg.w2f + hf * seg.w2[HORIZ];
          seg.Pf = seg.Pf + hf * seg.P[HORIZ];
          seg.Mf = seg.Mf + hf * seg.M[HORIZ];
        }
      }
    }

    if (loadFactors[ROOFLIVE] > 0 && beam.gotType[ROOFLIVE]) {
      //do the roof live load
      const lrF = loadFactors[ROOFLIVE];
      if (numPatterns === 1) {
        for (let i = 1; i < mam.length; i++) {
          mam[i] = mam[i] + lrF * mamH[i];
        }
        for (let i = 1; i <= numSpans; i++) {
          nodes[i].Pf = nodes[i].Pf + lrF * nodes[i].P[ROOFLIVE];
          nodes[i].Mf = nodes[i].Mf + lrF * nodes[i].M[ROOFLIVE];
          for (let j = 0; j < spans[i].segments.length; j++) {
            const seg = spans[i].segments[j];
            seg.w1f[combern] = seg.w1f[combern] + lrF * seg.w1[ROOFLIVE];
            seg.w2f = seg.w2f + lrF * seg.w2[5];
            seg.Pf = seg.Pf + lrF * seg.P[ROOFLIVE];
            seg.Mf = seg.Mf + lrF * seg.M[ROOFLIVE];
          }
        }
      } else {
        for (let k = 1; k <= numSpans; k++) {
          if (loadPattern.includes(k)) {
            let ii = 0;
            for (let j = 1; j <= numSpans; j++) {
              ii = 5 * j - 4;
              mam[ii] = mam[ii] + lrF * mamLr[ii][k - 1];
              mam[ii + 1] = mam[ii + 1] + lrF * mamLr[ii + 1][k - 1];
              mam[ii + 2] = mam[ii + 2] + lrF * mamLr[ii + 2][k - 1];
              mam[ii + 3] = mam[ii + 3] + lrF * mamLr[ii + 3][k - 1];
              mam[ii + 4] = mam[ii + 4] + lrF * mamLr[ii + 4][k - 1];
            }
            mam[ii + 5] = mam[ii + 5] + lrF * mamLr[k - 1];
          }
        }

        didNode.fill(false);
        for (let k = 1; k <= numSpans; k++) {
          if (loadPattern.includes(k)) {
            if (!didNode[k]) {
              nodes[k].Pf = nodes[k].Pf + lrF * nodes[k].P[ROOFLIVE];
              nodes[k].Mf = nodes[k].Mf + lrF * nodes[k].M[ROOFLIVE];
              didNode[k] = true;
            }
            if (!didNode[k + 1]) {
              nodes[k + 1].Pf = nodes[k + 1].Pf + lrF * nodes[k + 1].P[ROOFLIVE];
              nodes[k + 1].Mf = nodes[k + 1].Mf + lrF * nodes[k + 1].M[ROOFLIVE];
              didNode[k + 1] = true;
            }
          }
        }

        for (let i = 1; i <= numSpans; i++) {
          if (loadPattern.includes(i)) {
            for (let j = 0; j < spans[i].segments.length; j++) {
              const seg = spans[i].segments[j];
              seg.w1f[combern] = seg.w1f[combern] + lrF * seg.w1[ROOFLIVE];
              seg.w2f = seg.w2f + lrF * seg.w2[ROOFLIVE];
              seg.Pf = seg.Pf + lrF * seg.P[ROOFLIVE];
              seg.Mf = seg.Mf + lrF * seg.M[ROOFLIVE];
            }
          }
        }
      }
    }

    if (loadFactors[SNOW] > 0 && beam.gotType[SNOW]) {
      const sf = loadFactors[SNOW];
      if (numPatterns === 1) {
        for (let i = 1; i < mam.length; i++) {
          mam[i] = mam[i] + sf * mamS[i];
        }
        for (let i = 1; i <= numSpans; i++) {
          nodes[i].Pf = nodes[i].Pf + sf * nodes[i].P[SNOW];
          nodes[i].Mf = nodes[i].Mf + sf * nodes[i].M[SNOW];
          for (let j = 0; j < spans[i].segments.length; j++) {
            const seg = spans[i].segments[j];
            seg.w1f[combern] = seg.w1f[combern] + sf * seg.w1[SNOW];
            seg.w2f = seg.w2f + sf * seg.w2[SNOW];
            seg.Pf = seg.Pf + sf * seg.P[SNOW];
            seg.Mf = seg.Mf + sf * seg.M[SNOW];
          }
        }
      } else {
        for (let k = 1; k <= numSpans; k++) {
          let f = loadPattern.includes(k) ? 1 : 0.5;
          if (loadPattern.length === 0) { f = 0; }
          let ii = 0;
          for (let j = 1; j <= numSpans; j++) {
            ii = 5 * j - 4;
            mam[ii] = mam[ii] + f * sf * mamS[ii][k - 1];
            mam[ii + 1] = mam[ii + 1] + f * sf * mamS[ii + 1][k - 1];
            mam[ii + 2] = mam[ii + 2] + f * sf * mamS[ii + 2][k - 1];
            mam[ii + 3] = mam[ii + 3] + f * sf * mamS[ii + 3][k - 1];
            mam[ii + 4] = mam[ii + 4] + f * sf * mamS[ii + 4][k - 1];
          }
          mam[ii + 5] = mam[ii + 5] + f * sf * mamS[ii + 5][k - 1];
        }

        //Do node loads
        didNode.fill(false);
        didHalfLoad.fill(false);
        for (let k = 1; k <= numSpans; k++) {
          if (loadPattern.length > 0) {
            gotFullSnow = loadPattern.includes(k);
            //Check node k
            if (didNode[k]) ; else if (!gotFullSnow && didHalfLoad[k]) ; else if (gotFullSnow && !didHalfLoad[k]) {
              nodes[k].Pf = nodes[k].Pf + sf * nodes[k].P[SNOW];
              nodes[k].Mf = nodes[k].Mf + sf * nodes[k].M[SNOW];
              didNode[k] = true;
            } else if (!gotFullSnow && !didHalfLoad[k]) {
              nodes[k].Pf = nodes[k].Pf + 0.5 * sf * nodes[k].P[SNOW];
              nodes[k].Mf = nodes[k].Mf + 0.5 * sf * nodes[k].M[SNOW];
              didHalfLoad[k] = true;
            }

            //Check node k+1
            if (gotFullSnow) {
              nodes[k + 1].Pf = nodes[k + 1].Pf + sf * nodes[k + 1].P[SNOW];
              nodes[k + 1].Mf = nodes[k + 1].Mf + sf * nodes[k + 1].M[SNOW];
              didNode[k + 1] = true;
            } else {
              nodes[k + 1].Pf = nodes[k + 1].Pf + 0.5 * sf * nodes[k + 1].P[SNOW];
              nodes[k + 1].Mf = nodes[k + 1].Mf + 0.5 * sf * nodes[k + 1].M[SNOW];
              didHalfLoad[k + 1] = true;
            }
          }
        }

        for (let i = 1; i <= numSpans; i++) {
          for (let j = 0; j < spans[i].segments.length; j++) {
            const seg = spans[i].segments[j];
            let f = loadPattern.includes(i) ? 1 : 0.5;
            if (loadPattern.length === 0) { f = 0; }
            seg.w1f[combern] = seg.w1f[combern] + f * sf * seg.w1[6];
            seg.w2f = seg.w2f + f * sf * seg.w2[6];
            seg.Pf = seg.Pf + f * sf * seg.P[6];
            seg.Mf = seg.Mf + f * sf * seg.M[6];
          }
        }
      }
    }

    if (loadFactors[RAIN] > 0 && beam.gotType[RAIN]) {
      const rf = loadFactors[RAIN];
      for (let i = 1; i < mam.length; i++) {
        mam[i] = mam[i] + rf * mamR[i];
      }
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = nodes[i].Pf + rf * nodes[i].P[RAIN];
        nodes[i].Mf = nodes[i].Mf + rf * nodes[i].M[RAIN];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = seg.w1f[combern] + rf * seg.w1[RAIN];
          seg.w2f = seg.w2f + rf * seg.w2[RAIN];
          seg.Pf = seg.Pf + rf * seg.P[RAIN];
          seg.Mf = seg.Mf + rf * seg.M[RAIN];
        }
      }
    }

    if (loadFactors[WIND] > 0 && beam.gotType[WIND]) {
      const wf = loadFactors[WIND];
      for (let i = 1; i < mam.length; i++) {
        mam[i] = mam[i] + wf * mamW[i];
      }
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = nodes[i].Pf + wf * nodes[i].P[WIND];
        nodes[i].Mf = nodes[i].Mf + wf * nodes[i].M[WIND];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = seg.w1f[combern] + wf * seg.w1[WIND];
          seg.w2f = seg.w2f + wf * seg.w2[WIND];
          seg.Pf = seg.Pf + wf * seg.P[WIND];
          seg.Mf = seg.Mf + wf * seg.M[WIND];
        }
      }
    }

    if (loadFactors[EQ] > 0 && beam.gotType[EQ]) {
      const ef = loadFactors[EQ];
      for (let i = 1; i < mam.length; i++) {
        mam[i] = mam[i] + ef * mamE[i];
      }
      for (let i = 1; i <= numSpans; i++) {
        nodes[i].Pf = nodes[i].Pf + ef * nodes[i].P[EQ];
        nodes[i].Mf = nodes[i].Mf + ef * nodes[i].M[EQ];
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          seg.w1f[combern] = seg.w1f[combern] + ef * seg.w1[EQ];
          seg.w2f = seg.w2f + ef * seg.w2[EQ];
          seg.Pf = seg.Pf + ef * seg.P[EQ];
          seg.Mf = seg.Mf + ef * seg.M[EQ];
        }
      }
    }

    for (let i = 1; i <= numSpans; i++) {
      for (let j = 0; j < spans[i].segments.length; j++) {
        const seg = spans[i].segments[j];
        if (seg.length !== 0) {
          seg.slope[combern] = (seg.w2f - seg.w1f[combern]) / seg.length;
        }
      }
    }
    return mam
  }

  function combine(beam, nodes, spans, actions, deflections) {
    // We already have member end actions for each load type on each span.
    // In this function, we superimpose the load combinations and live load patterns and
    // find the maximum and minimum shears and moments.
    const numSpans = spans.length - 1;
    const isService = beam.comboName === "service";
    const numPatterns = beam.numPatterns;
    const liveLoadPatterns = getLoadPatterns(beam, numSpans);
    const [dmD, dmL, dmLr, dmS, dmF, dmH, dmR, dmW, dmE] = deflections;

    let vMin = 0;
    let vMax = 0;
    let mMin = 0;
    let mMax = 0;
    let deflectionMax = 0;
    let deflMaxCase = 0;
    let deflectionMin = 0;
    let deflMinCase = 0;

    // Get ready to do lots of different load combinations.
    // Definition: "combern" is a conflation of the words "combination" and "pattern".
    const comboSet = loadCombinations[beam.comboName];
    const numComberns = getNumComberns(comboSet, isService, beam);

    for (let i = 1; i <= numSpans; i++) {
      for (let j = 0; j < spans[i].segments.length; j++) {
        const seg = spans[i].segments[j];
        seg.w1f = new Array(numComberns).fill(0);
        seg.w2f = 0;
        seg.slope = new Array(numComberns).fill(0);
        seg.V1 = new Array(numComberns).fill(0);
        seg.M1 = new Array(numComberns).fill(0);
        if (beam.EI !== 1) {
          seg.theta1 = new Array(numPatterns).fill(0);
          seg.delta1 = new Array(numPatterns).fill(0);
        }
      }
    }

    // The number of interations through this next loop will be a function of
    // both the number of load combinations and the number of load patterns.
    // I define "combern" as a conflation of the words "combination" & "pattern"
    // "combern" will be the loop index as we look at unique combinations of both
    // load combinations and live load patterns.
    // Each time through the loop, we;ll get the factored loads and the factored MAM
    // To do this, we'll make much use of a subroutine called "PopulateMAM"
    // It's called as:  PopulateMAM  loadFactors, combern, iPattern
    // The load factors are factors from the ASCE or NBCC load combinations

    // As you can see below, we'll find a unique MAM for each iCombo and live load pattern.
    // Then, we'll use the MAM to find the segment shears, moments, etc.

    let combern = 0;

    // iCombo 0 is for deflections only. We'll go thru each load pattern.
    // iCombo 1 thru comboSet.length is for finding shear and moment extremes. As code
    // requires, this often means testing many load combinations.

    for (let iCombo = 0; iCombo <= comboSet.length; iCombo++) {
      const  isReqd = iCombo === 0 && beam.EI !== 0
        ? true  // Go thru each load pattern and find deflection extremes.
        : isService
        ? true
        : isReqdCombo(comboSet[iCombo - 1][0], beam.gotType);

      if (isReqd) {
        const loadFactors = iCombo === 0 && beam.EI !== 0
          ? [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          : factorsFrom(comboSet[iCombo - 1][1].trim().split(/ +/), beam);

        for (let iPattern = 0; iPattern < numPatterns; iPattern++) {
          const loadPattern = liveLoadPatterns[iPattern];

          // Get the Member Action Matrix, MAM, for this combern.
          // A MAM contains the end shears and end moments for each span.
          const mam = populateMAM(loadFactors, combern, loadPattern, beam, nodes, spans, actions);

          let dm;
          if (iCombo === 0 && beam.EI !== 1) {
            // Create a Displacement Matrix, DM, for this load combination and load pattern.
            dm = new Array(beam.numDegreesOfFreedom + 1).fill(0);
            if (beam.gotType[DEAD]) { dm = dm.map((e, i) => e + dmD[i]); }
            if (beam.gotType[FLUID]) { dm = dm.map((e, i) => e + dmF[i]); }
            if (beam.gotType[LIVE]) { dm = getLiveDM(dm, dmL, loadPattern, numSpans); }
            if (beam.gotType[HORIZ]) { dm = dm.map((e, i) => e + dmH[i]); }
            if (beam.gotType[ROOFLIVE]) { dm = getLiveDM(dm, dmLr, loadPattern, numSpans); }
            if (beam.gotType[SNOW]) { dm = getLiveDM(dm, dmS, loadPattern, numSpans); }
            if (beam.gotType[RAIN]) { dm = dm.map((e, i) => e + dmR[i]); }
            if (beam.gotType[WIND]) { dm = dm.map((e, i) => e + dmW[i]); }
            if (beam.gotType[EQ]) { dm = dm.map((e, i) => e + dmE[i]); }
          }

          let iDM = 0;
          for (let iSpan = 1; iSpan <= numSpans; iSpan++) {
            let vMid = 0;
            let vEnd = 0;
            let mMid = 0;
            let mEnd = 0;
            let slopeEnd = 0;
            let deflectionEnd = 0;
            let deflectionMid = 0;
            for (let k = 0; k < spans[iSpan].segments.length; k++) {
              const seg = spans[iSpan].segments[k];

              if (k === 0) {
                // The first segment in this span.
                seg.V1[combern] = -mam[5 * iSpan - 3];
                seg.M1[combern] = mam[5 * iSpan - 2];
                if (iCombo === 0 && beam.EI !== 1) {
                  iDM = getThetaAndDelta(nodes[iSpan].fixity, dm, seg, combern, iDM);
                }
              } else {
                // Subsequent segments.
                seg.V1[combern] = vEnd + seg.Pf;
                seg.M1[combern] = mEnd - seg.Mf;
                if (iCombo === 0 && beam.EI !== 1) {
                  seg.theta1[combern] = slopeEnd;
                  seg.delta1[combern] = deflectionEnd;
                }
              }

              vEnd = seg.V1[combern] + seg.w1f[combern] * seg.length
                   + 0.5 * seg.slope[combern] * seg.length ** 2;
              if (Math.abs(vEnd) < 0.00000000000001) { vEnd = 0; }

              mEnd = seg.M1[combern] + seg.V1[combern] * seg.length
                   + 0.5 * seg.w1f[combern] * seg.length ** 2
                   + seg.slope[combern] * seg.length ** 3 / 6;
              if (Math.abs(mEnd) < 0.00000000000001) { mEnd = 0; }

              if (iCombo === 0) {
                // Check if this load pattern contains a deflection extreme.
                if (beam.EI !== 1) {
                  slopeEnd = seg.theta1[combern] + (seg.M1[combern] * seg.length
                    + 0.5 * seg.V1[combern] * seg.length ** 2
                    + seg.w1f[combern] * seg.length ** 3 / 6
                    + seg.slope[combern] * seg.length ** 4 / 24) / beam.EI;
                  deflectionMid = seg.delta1[combern] + seg.theta1[combern] * 0.5 * seg.length
                      + (0.5 * seg.M1[combern] * (0.5 * seg.length) ** 2
                      + seg.V1[combern] * (0.5 * seg.length) ** 3 / 6
                      + seg.w1f[combern] * (0.5 * seg.length) ** 4 / 24
                      + seg.slope[combern] * (0.5 * seg.length) ** 5 / 120) / beam.EI;
                  deflectionEnd = seg.delta1[combern] + seg.theta1[combern] * seg.length
                      + (0.5 * seg.M1[combern] * seg.length ** 2
                          + seg.V1[combern] * seg.length ** 3 / 6
                      + seg.w1f[combern] * seg.length ** 4 / 24
                      + seg.slope[combern] * seg.length ** 5 / 120) / beam.EI;
                  if (seg.delta1[combern] > deflectionMax) {
                    deflectionMax = seg.delta1[combern];
                    deflMaxCase = combern;
                  }
                  if (seg.delta1[combern] < deflectionMin) {
                    deflectionMin = seg.delta1[combern];
                    deflMaxCase = combern;
                  }
                  if (deflectionEnd > deflectionMax) {
                    deflectionMax = deflectionEnd;
                    deflMaxCase = combern;
                  }
                  if (deflectionEnd < deflectionMin) {
                    deflectionMin = deflectionEnd;
                    deflMinCase = combern;
                  }
                  if (deflectionMid > deflectionMax) {
                    deflectionMax = deflectionMid;
                    deflMaxCase = combern;
                  }
                  if (deflectionMid < deflectionMin) {
                    deflectionMin = deflectionMid;
                    deflMinCase = combern;
                  }
                }
              } else {
                // Determine if this combern contains a shear or moment extreme.
                // Start by finding the shear value in the middle of the segment
                let xCross = 0; // initialze the variable
                if (seg.slope[combern] !== 0) {
                  xCross = -1 * seg.w1f[combern] / seg.slope[combern];
                  if (xCross > 0 && xCross < seg.length) {
                    vMid = seg.V1[combern] + seg.w1f[combern] * xCross
                          + 0.5 * seg.slope[combern] * xCross ** 2;
                  } else {
                    vMid = seg.V1[combern] + seg.w1f[combern] * (seg.length / 2)
                          + 0.5 * seg.slope[combern] * (seg.length / 2) ** 2;
                  }
                } else {
                  vMid = seg.V1[combern] + seg.w1f[combern] * (seg.length / 2)
                        + 0.5 * seg.slope[combern] * (seg.length / 2) ** 2;
                }

                // Find the moment in the middle of the segment
                xCross = 0; // initialze the variable
                if (seg.slope[combern] === 0) {
                  if (seg.w1f[combern] !== 0) {
                    xCross = -seg.V1[combern] / seg.w1f[combern];
                  }
                } else {
                  if ((seg.w1f[combern] ** 2 - 2 * seg.slope[combern] * seg.V1[combern]) > 0) {
                    xCross = -(seg.w1f[combern] + Math.sqrt(seg.w1f[combern] ** 2
                            - 2 * seg.slope[combern] * seg.V1[combern])) / seg.slope[combern];
                  }
                }
                if (xCross > 0 && xCross < seg.length) {
                  mMid = seg.M1[combern] + seg.V1[combern] * xCross
                        + 0.5 * seg.w1f[combern] * xCross ** 2 + seg.slope[combern] * xCross ** 3 / 6;
                } else {
                  mMid = seg.M1[combern] + seg.V1[combern] * (seg.length / 2)
                      + 0.5 * seg.w1f[combern] * (seg.length / 2) ** 2
                      + seg.slope[combern] * (seg.length / 2) ** 3 / 6;
                }

                // Check for local maximums and minimums
                if (seg.V1[combern] > seg.Vmax.left.value && seg.V1[combern] > 0.01) {
                  seg.Vmax.left.value = seg.V1[combern];
                  seg.Vmax.left.case = combern;   // This is a case that we// ll want to plot
                  if (seg.V1[combern] > vMax) { vMax = seg.V1[combern]; }
                }

                if (vMid > seg.Vmax.mid.value && vMid > 0.01) {
                  seg.Vmax.mid.value = vMid;
                  seg.Vmax.mid.case = combern;
                  if (vMid > vMax) { vMax = vMid; }
                }

                if (vEnd > seg.Vmax.right.value && vEnd > 0.01) {
                  seg.Vmax.right.value = vEnd;
                  seg.Vmax.right.case = combern;
                  if (vEnd > vMax) { vMax = vEnd; }
                }

                if (seg.V1[combern] < seg.Vmin.left.value && seg.V1[combern] < -0.01) {
                  seg.Vmin.left.value = seg.V1[combern];
                  seg.Vmin.left.case = combern;
                  if (seg.V1[combern] < vMin) { vMin = seg.V1[combern]; }
                }

                if (vMid < seg.Vmin.mid.value && vMid < -0.01) {
                  seg.Vmin.mid.value = vMid;
                  seg.Vmin.mid.case = combern;
                  if (vMid < vMin) { vMin = vMid; }
                }

                if (vEnd < seg.Vmin.right.value && vEnd < -0.01) {
                  seg.Vmin.right.value = vEnd;
                  seg.Vmin.right.case = combern;
                  if (vEnd < vMin) { vMin = vEnd; }
                }

                if (seg.M1[combern] > seg.Mmax.left.value && seg.M1[combern] > 0.01) {
                  seg.Mmax.left.value = seg.M1[combern];
                  seg.Mmax.left.case = combern;
                  if (seg.M1[combern] > mMax) { mMax = seg.M1[combern]; }
                }

                if (mMid > seg.Mmax.mid.value && mMid > 0.01) {
                  seg.Mmax.mid.value = mMid;
                  seg.Mmax.mid.case = combern;
                  seg.Mmax.mid.x = seg.xOfLeftEnd + xCross;
                  if (mMid > mMax) { mMax = mMid; }
                }

                if (mEnd > seg.Mmax.right.value && mEnd > 0.01) {
                  seg.Mmax.right.value = mEnd;
                  seg.Mmax.right.case = combern;
                  if (mEnd > mMax) { mMax = mEnd; }
                }

                if (seg.M1[combern] < seg.Mmin.left.value && seg.M1[combern] < -0.01) {
                  seg.Mmin.left.value = seg.M1[combern];
                  seg.Mmin.left.case = combern;
                  if (seg.M1[combern] < mMin) { mMin = seg.M1[combern]; }
                }

                if (mMid < seg.Mmin.mid.value && mMid < -0.01) {
                  seg.Mmin.mid.value = mMid;
                  seg.Mmin.mid.case = combern;
                  seg.Mmin.mid.x = seg.xOfLeftEnd + xCross;
                  if (mMid < mMin) { mMin = mMid; }
                }

                if (mEnd < seg.Mmin.right.value && mEnd < -0.01) {
                  seg.Mmin.right.value = mEnd;
                  seg.Mmin.right.case = combern;
                  if (mEnd < mMin) { mMin = mEnd; }
                }
              }

            }
          }
          combern += 1;
        }
      }
    }
    return [vMax, vMin, mMax, mMin, deflectionMax, deflectionMin,
      deflMaxCase, deflMinCase, numComberns]
  }

  const isReqdCombo = (str, gotType) => {
    str = str.replace(/ /g, "");
    if (str.length === 0) { return false }

    for (let i = 0; i < str.length; i++) {
      const c = str.slice(i, i + 1);

      switch (c) {
        case "D":
          if (gotType[DEAD]) { return true }
          break
        case "F":
          if (gotType[FLUID]) { return true }
          break
        case "L":
          if (gotType[LIVE]) { return true }
          break
        case "H":
          if (gotType[HORIZ]) { return true }
          break
        case "£":
          if (gotType[ROOFLIVE]) { return true }
          break
        case "S":
          if (gotType[SNOW]) { return true }
          break
        case "R":
          if (gotType[RAIN]) { return true }
          break
        case "W":
          if (gotType[WIND]) { return true }
          break
        case "E":
          if (gotType[EQ]) { return true }
      }
    }
    return false
  };

  const comboContainsLive = combo => {
    return (combo[LIVE] !== 0 || combo[ROOFLIVE] !== 0 || combo[SNOW] !== 0)
  };

  const getNumComberns = (comboSet, isService, beam) => {
    // We'll do a superposition of forces for each load combination and each live load pattern.
    // How many is that?
    // First, count the number of comberns needed to do the deflection superpositions.
    let numComberns = beam.EI === 1 ? 1 : beam.numPatterns;
    // Then add a combern for each superposition done to get shears and moments.
    for (let i = 0; i < comboSet.length; i++) {
      if (isService || isReqdCombo(comboSet[i][0], beam.gotType)) {
        numComberns += beam.containsLive && comboContainsLive(comboSet[i][1].trim().split(/ +/))
        ? beam.numPatterns
        : 1;
      }
    }
    return numComberns
  };

  const getLiveDM = (a, b, loadPattern, numSpans) => {
    if (Array.isArray(b[1])) {
      for (let k = 1; k <= numSpans; k++) {
        if (loadPattern.includes(k)) {
          a = a.map((e, i) => e + b[i][k]);
        }
      }
    } else {
      a = a.map((e, i) => e  + b[i]);
    }
    return a
  };

  const factorsFrom = (factors, beam) => {
    // Get a combination of load factors.
    // The input is a string from one line in loadCombinations.js.

    // Sometimes the dead load factor is adjusted for vertical seismic motion.
    // In that case, the input string contain something like: 1.2+0.2*SDS
    if (factors[1].indexOf("*SDS") > -1) {
      let str = factors[1];
      let pos = str.indexOf("*SDS");
      str = str.slice(0, pos);
      pos = str.indexOf("+");
      if (pos > 0) {
        factors[1] = Number(str.slice(0, pos)) + Number(str.slice(pos + 1)) * beam.SDS;
      } else {
        pos = str.indexOf("-");
        factors[1] = Number(str.slice(0, pos)) - Number(str.slice(pos + 1)) * beam.SDS;
      }
    }

    // Adjust live load factor
    if (factors[3] === "LLF") { factors[3] = beam.LLF; }

    return factors.map(e => Number(e))
  };

  const getThetaAndDelta = (fixity, dm, seg, i, iDM) => {
    if (fixity === "fixed") {
      seg.delta1[i] = 0;
      seg.theta1[i] = 0;
    } else if (fixity === "pinned") {
      seg.delta1[i] = 0;
      iDM = iDM + 1;
      seg.theta1[i] = -dm[iDM];
    } else if (fixity === "continuous") {
      iDM = iDM + 1;
      seg.delta1[i] = -dm[iDM];
      iDM = iDM + 1;
      seg.theta1[i] = -dm[iDM];
    } else if (fixity === "spring") {
      iDM = iDM + 1;
      seg.delta1[i] = -dm[iDM];
      iDM = iDM + 1;
      seg.theta1[i] = -dm[iDM];
    } else if (fixity === "proppedHinge") {
      iDM = iDM + 1;
      seg.delta1[i] = 0;
      iDM = iDM + 1;
      seg.theta1[i] = -dm[iDM];
    } else if (fixity === "hinge") {
      iDM = iDM + 1;
      seg.delta1[i] = -dm[iDM];
      iDM = iDM + 1;
      iDM = iDM + 1;
      seg.theta1[i] = -dm[iDM];
    }
    return iDM
  };

  // Review the segments. Find out which comberns should be displayed
  function selectCases(spans) {
    const shearCases = [];
    const bendingCases = [];
    for (let i = 1; i < spans.length; i++) {
      for (let j = 0; j < spans[i].segments.length; j++) {
        const seg = spans[i].segments[j];
        if (seg.Vmax.left.value > 0) {
          if (!shearCases.includes(seg.Vmax.left.case)) {
            shearCases.push(seg.Vmax.left.case);
          }
        }
        if (seg.Vmin.left.value < 0) {
          if (!shearCases.includes(seg.Vmin.left.case)) {
            shearCases.push(seg.Vmin.left.case);
          }
        }
        if (seg.Mmax.left.value > 0) {
          if (!bendingCases.includes(seg.Mmax.left.case)) {
            bendingCases.push(seg.Mmax.left.case);
          }
        }
        if (seg.Mmin.left.value < 0) {
          if (!bendingCases.includes(seg.Mmin.left.case)) {
            bendingCases.push(seg.Mmin.left.case);
          }
        }
        if (seg.Vmax.mid.value > 0) {
          if (!shearCases.includes(seg.Vmax.mid.case)) {
            shearCases.push(seg.Vmax.mid.case);
          }
        }
        if (seg.Vmin.mid.value < 0) {
          if (!shearCases.includes(seg.Vmin.mid.case)) {
            shearCases.push(seg.Vmin.mid.case);
          }
        }
        if (seg.Mmax.mid.value > 0) {
          if (!bendingCases.includes(seg.Mmax.mid.case)) {
            bendingCases.push(seg.Mmax.mid.case);
          }
        }
        if (seg.Mmin.mid.value < 0) {
          if (!bendingCases.includes(seg.Mmin.mid.case)) {
            bendingCases.push(seg.Mmin.mid.case);
          }
        }
        if (seg.Vmax.right.value > 0) {
          if (!shearCases.includes(seg.Vmax.right.case)) {
            shearCases.push(seg.Vmax.right.case);
          }
        }
        if (seg.Vmin.right.value < 0) {
          if (!shearCases.includes(seg.Vmin.right.case)) {
            shearCases.push(seg.Vmin.right.case);
          }
        }
        if (seg.Mmax.right.value > 0) {
          if (!bendingCases.includes(seg.Mmax.right.case)) {
            bendingCases.push(seg.Mmax.right.case);
          }
        }
        if (seg.Mmin.right.value < 0) {
          if (!bendingCases.includes(seg.Mmin.right.case)) {
            bendingCases.push(seg.Mmin.right.case);
          }
        }
      }
    }
    return [shearCases, bendingCases]
  }

  function locateDiagrams(beam, nodes, extremes) {
    // Find the y-coordinates for the shear, moment, and deflection diagrams.

    // First, find out how many reaction vectors will be written onto the load diagram.
    const [vMax, vMin, mMax, mMin, deflectionMax, deflectionMin, , , ] = extremes;

    const vScale = vMax - vMin > 0 ? 60 / (vMax - vMin) : 0;
    const mScale = mMax - mMin > 0 ? 60 / (mMax - mMin) : 0;
    const reactionTextHeight = 16;

    let yV = vMax > 0.0005
      ? beam.yLoad + 12 + reactionTextHeight + vMax * vScale + 70
      : beam.yLoad + 12 + reactionTextHeight;
    yV = Math.round(yV);
    const botOfV = vMin < -0.0005
      ? yV + vMin * vScale + 50
      : yV + 70;
    let yM = mMax > 0.0005
      ? botOfV + 12 + mMax * mScale + 40
      : botOfV + 12;
    yM = Math.round(yM);
    let yMax = yM;

    // Get yText for moment
    let yText = yM + mScale * mMin;
    if (yText > yMax) { yMax = yText; }

    let yDeflection = 0;
    let deflectionScale = 0;
    if (beam.EI !== 1) {
      if (deflectionMax > deflectionMin) { deflectionScale = 30 / (deflectionMax - deflectionMin); }
      const botOfM = Math.abs(mMin) > 0.05 * mMax
        ? yM + mMin * mScale + 40
        : yM + 14;
      yDeflection = botOfM + 80 + deflectionMax * deflectionScale;
      if (deflectionMax > 0.1 * (deflectionMax - deflectionMin)) {
        yDeflection = yDeflection + 20;
      }
      yDeflection = Math.round(yDeflection);
      yMax = yDeflection;
      if (Math.abs(deflectionMin) > 0.2 * (deflectionMax - deflectionMin)) {
        yText = yDeflection - deflectionScale * deflectionMin;
        if (yText > yMax) { yMax = yText; }
      }
    }
    yMax += 20;

    return [yV, yM, yDeflection, vScale, mScale, deflectionScale, yMax]

  }

  function drawShearsMomentsAndDeflections(beam, nodes, spans, cases, yCoords, extremes) {
    // Now go thru the comberns again.  Draw the line work this time.
    const numSpans = spans.length - 1;
    const [vMax, vMin, mMax, mMin, , , deflMaxCase, deflMinCase, numComberns] = extremes;
    const [shearCases, bendingCases] = cases;
    const [yV, yM, yDeflection, vScale, mScale, deflectionScale] = yCoords;
    const vSmall = 0.01 * (vMax - vMin);
    const mSmall = 0.05 * (mMax - mMin);
    let deflectionMax = 0;
    let deflectionMin = 0;
    let xDeflectionMax = 0;
    let xDeflectionMin = 0;
    const xIncrement = beam.length / 50;
    const wV = [];
    const wVx = [];
    const wM = [];
    const wMx = [];
    const horizAlign = "middle";

    // Draw the horizontal lines for the shear and moment diagrams
    let svg = `<text x='20' y='${yV + 2}'>shear</text>\n`;
    svg += `<text x='20' y='${yV + 16}'>(${beam.SI ? "kN" : "kips"})</text>\n`;
    svg += `<path d='M${beam.xDiagram} ${yV} h300' stroke-width='1.5px'/>\n`;
    svg += `<text x='20' y='${yM + 2}'>bending</text>\n`;
    svg += `<text x='20' y='${yM + 16}'>(${beam.SI ? "kN-m" : "kip-ft"})</text>\n`;
    svg += `<path d='M${beam.xDiagram} ${yM} h300' stroke-width='1.5px'/>\n`;

    if (beam.comboName !== "service" && beam.comboName.indexOf("ASD") === -1) {
      svg += `<text x='20' y='${yV - 12}'>factored</text>\n`;
      svg += `<text x='20' y='${yM - 12}'>factored</text>\n`;
    }

    // Draw the reactions.
    let f = 0;
    for (let i = 1; i < nodes.length; i++) {
      const x = beam.xDiagram + beam.xScale * nodes[i].x;
      if (Math.abs(nodes[i].Pr[0] > 0)) {
        f = 1 / (beam.SI ? 1000 : 4448.2216152605);
        const sText = round(nodes[i].Pr[0] * f, 3);
        svg += Draw.pointForce(x, beam.yLoad, sText, nodes[i].fixity, true);
      }
      if (Math.abs(nodes[i].Mr[0]) > 0) {
        f = 1 / (beam.SI ? 1000 : 4448.2216152605 * 0.3048);
        const sText = round(nodes[i].Mr[0] * f, 3);
        svg += Draw.pointMoment(x, beam.yLoad, sText, true);
      }
    }

    for (let combern = 0; combern <= numComberns; combern++) {
      // Are we in a deflection combern?
      const inaDeflCase = (deflMinCase === combern || deflMaxCase === combern) && beam.EI !== 1;
      // Should we plot this combern?
      if (!(shearCases.includes(combern) || bendingCases.includes(combern) || inaDeflCase)) {
        continue // Skip this combern.
      }
      // This is a combern for which we should plot the line work
      // Find detailed shear and moments for the diagrams.  And we check local maximums to see
      // if we should write their values onto the diagram.
      let lastVend = 0;
      let lastW2f = 0;
      const x = inaDeflCase ? [] : [0];
      const deflection = [];
      const v = [];
      const m = [];
      if (!inaDeflCase) {
        v.push(0);
        m.push(0);
      }
      let k = 0;
      for (let i = 1; i <= numSpans; i++) {
        for (let j = 0; j < spans[i].segments.length; j++) {
          const seg = spans[i].segments[j];
          const vEnd = seg.V1[combern] + seg.w1f[combern] * seg.length
              + 0.5 * seg.slope[combern] * seg.length ** 2;
          const mEnd = seg.M1[combern] + seg.V1[combern] * seg.length
              + 0.5 * seg.w1f[combern] * seg.length ** 2 + seg.slope[combern] * seg.length ** 3 / 6;
          const w2f = seg.w1f[combern] + seg.slope[combern] * seg.length;
          let deflectionEnd = 0;
          if (inaDeflCase) {
            deflectionEnd = seg.delta1[combern] + seg.theta1[combern] * seg.length
                + (0.5 * seg.M1[combern] * seg.length ** 2 + seg.V1[combern] * seg.length ** 3 / 6
                + seg.w1f[combern] * seg.length ** 4 / 24
                + seg.slope[combern] * seg.length ** 5 / 120) / beam.EI;
          }
          // Details for line work
          let xLocal = 0;
          k += 1;
          x.push(seg.xOfLeftEnd);
          if (inaDeflCase) {
            deflection.push(seg.delta1[combern]);
            if (seg.delta1[combern] > deflectionMax) {
              deflectionMax = seg.delta1[combern];
              xDeflectionMax = seg.xOfLeftEnd;
            }
            if (seg.delta1[combern] < deflectionMin) {
              deflectionMin = seg.delta1[combern];
              xDeflectionMin = seg.xOfLeftEnd;
            }
            if (deflectionEnd > deflectionMax) {
              deflectionMax = deflectionEnd;
              xDeflectionMax = seg.xOfLeftEnd + seg.length;
            }
            if (deflectionEnd < deflectionMin) {
              deflectionMin = deflectionEnd;
              xDeflectionMin = seg.xOfLeftEnd + seg.length;
            }
          } else {
            v.push(seg.V1[combern]);
            m.push(seg.M1[combern]);
          }

          for (let ii = 1; ii <= Math.trunc(seg.length / xIncrement); ii++) {
            k = k + 1;
            x.push(x[x.length - 1] + xIncrement);
            xLocal += xIncrement;
            if (inaDeflCase) {
              deflection.push(seg.delta1[combern] + seg.theta1[combern] * xLocal
                  + (0.5 * seg.M1[combern] * xLocal ** 2
                  + seg.V1[combern] * xLocal ** 3 / 6 + seg.w1f[combern] * xLocal ** 4 / 24
                  + seg.slope[combern] * xLocal ** 5 / 120) / beam.EI);
              if (deflection[deflection.length - 1] > deflectionMax) {
                deflectionMax = deflection[deflection.length - 1];
                xDeflectionMax = seg.xOfLeftEnd + xLocal;
              }
              if (deflection[deflection.length - 1] < deflectionMin) {
                deflectionMin = deflection[deflection.length - 1];
                xDeflectionMin = seg.xOfLeftEnd + xLocal;
              }
            } else {
              v.push(seg.V1[combern] + seg.w1f[combern] * xLocal
                + 0.5 * seg.slope[combern] * xLocal ** 2);
              m.push(seg.M1[combern] + seg.V1[combern] * xLocal
                + 0.5 * seg.w1f[combern] * xLocal ** 2 + seg.slope[combern] * xLocal ** 3 / 6);
            }
          }

          k += 1;
          x.push(seg.xOfLeftEnd + seg.length);
          if (inaDeflCase) {
            deflection.push(deflectionEnd);
          } else {
            v.push(vEnd);
            m.push(mEnd);
          }

          // Check for local maximums and minimums
          if (seg.Vmax.left.case === combern || seg.Vmin.left.case === combern) {
            // Do we also want to write this value onto the shear diagram?
            if (i === 1 && j === 0) {
              if (Math.abs(seg.V1[combern]) > vSmall) {
                checkVs(seg.V1[combern], 0, wV, wVx, spans, beam.length);
              }
            } else if (!(lastW2f === seg.w1f[combern] &&
                Math.abs(seg.V1[combern] - lastVend) < vSmall)) {
              checkVs(seg.V1[combern], seg.xOfLeftEnd, wV, wVx, spans, beam.length);
            }
          }

          if (seg.Vmax.mid.case === combern || seg.Vmin.mid.case === combern) {
            let xCross = 0;
            if (seg.slope[combern] !== 0) {
              xCross = -1 * seg.w1f[combern] / seg.slope[combern];
              if (xCross > 0 && xCross < seg.length) {
                const vMid = seg.V1[combern] + seg.w1f[combern] * xCross
                    + 0.5 * seg.slope[combern] * xCross ** 2;
                checkVs(vMid, seg.xOfLeftEnd + xCross, wV, wVx, spans, beam.length);
              }
            }
          }

          if (seg.Vmax.right.case === combern || seg.Vmin.right.case === combern) {
            if (Math.abs(vEnd) > vSmall) {
              checkVs(vEnd, seg.xOfLeftEnd + seg.length, wV, wVx, spans, beam.length);
            }
          }

          if (seg.Mmax.left.case === combern || seg.Mmin.left.case === combern) {
            if (i === 1 && j === 0) {
              if (Math.abs(seg.M1[combern]) > mSmall) {
                checkMs(seg.M1[combern], 0, wM, wMx, spans, beam.length, mSmall);
              }
            } else {
              checkMs(seg.M1[combern], seg.xOfLeftEnd, wM,
                wMx, spans, beam.length, mSmall);
            }
          }

          if (seg.Mmax.mid.case === combern || seg.Mmin.mid.case === combern) {
            let xCross = 0; // initialze the variable
            let mMid = 0;
            if (seg.slope[combern] === 0) {
              if (seg.w1f[combern] !== 0) {
                xCross = -seg.V1[combern] / seg.w1f[combern];
                if (xCross > 0 && xCross < seg.length) {
                  mMid = seg.M1[combern] + seg.V1[combern] * xCross
                      + 0.5 * seg.w1f[combern] * xCross ** 2 + seg.slope[combern] * xCross ** 3 / 6;
                  checkMs(mMid, seg.xOfLeftEnd + xCross, wM, wMx, spans, beam.length, mSmall);
                }
              }
            } else {
              let mMid1 = 0;
              let mMid2 = 0;
              let xCross1 = 0;
              let xCross2 = 0;
              if ((seg.w1f[combern] ** 2 - 2 * seg.slope[combern] * seg.V1[combern]) > 0) {
                const determinant = Math.sqrt(seg.w1f[combern] ** 2
                      - 2 * seg.slope[combern] * seg.V1[combern]);
                xCross1 = -(seg.w1f[combern] - determinant) / seg.slope[combern];
                xCross2 = -(seg.w1f[combern] + determinant) / seg.slope[combern];
                if (xCross1 > 0 && xCross1 < seg.length) {
                  xCross = xCross1;
                  mMid1 = seg.M1[combern] + seg.V1[combern] * xCross
                      + 0.5 * seg.w1f[combern] * xCross ** 2 + seg.slope[combern] * xCross ** 3 / 6;
                }
                if (xCross2 > 0 && xCross2 < seg.length) {
                  xCross = xCross2;
                  mMid2 = seg.M1[combern] + seg.V1[combern] * xCross
                      + 0.5 * seg.w1f[combern] * xCross ** 2 + seg.slope[combern] * xCross ** 3 / 6;
                }
              }
              if (mMid1 > 0 || mMid2 > 0) {
                if (mMid1 > mMid2) {
                  mMid = mMid1;
                  xCross = xCross1;
                } else {
                  mMid = mMid2;
                  xCross = xCross2;
                }
              }
              if (xCross > 0 && xCross < seg.length) {
                mMid = seg.M1[combern] + seg.V1[combern] * xCross
                    + 0.5 * seg.w1f[combern] * xCross ** 2 + seg.slope[combern] * xCross ** 3 / 6;
                checkMs(mMid, seg.xOfLeftEnd + xCross, wM, wMx, spans, beam.length, mSmall);
              }
            }
          }

          if (seg.Mmax.right.case === combern || seg.Mmin.right.case === combern) {
            checkMs(mEnd, seg.xOfLeftEnd + seg.length, wM, wMx, spans, beam.length, mSmall);
          }

          lastW2f = w2f;
          lastVend = vEnd;
        }
      }

      // Plot diagrams
      const numDataPoints = k;

      // Draw the shear diagrams
      if (shearCases.includes(combern)) {
        let xPoly;
        let yPoly;

        if (beam.allLoadsAreUniform) {
          // Make the shear diagram out of straight lines.
          let linearV = new Array(2 * beam.numSegments + 3).fill(0);
          linearV = linearV.map(e => [0, 0]);
          k = 1;
          linearV[k][0] = beam.xDiagram;
          linearV[k][1] = yV;
          for (let i = 1; i <= numSpans; i++) {
            for (let j = 0; j < spans[i].segments.length; j++) {
              const seg = spans[i].segments[j];
              k = k + 1;
              linearV[k][0] = beam.xDiagram + beam.xScale * seg.xOfLeftEnd;
              linearV[k][1] = yV - vScale * seg.V1[combern];
              k = k + 1;
              linearV[k][0] = beam.xDiagram + beam.xScale * (seg.xOfLeftEnd + seg.length);
              const vEnd = seg.V1[combern] + seg.w1f[combern] * seg.length
                  + 0.5 * seg.slope[combern] * seg.length ** 2;
              linearV[k][1] = yV - vScale * vEnd;
            }
          }
          k = k + 1;
          linearV[k][0] = beam.xDiagram + beam.xScale * beam.length;
          linearV[k][1] = yV;
          const numOfShearDataPoints = k;

          xPoly = new Array(numOfShearDataPoints - 1);
          yPoly = new Array(numOfShearDataPoints - 1);
          for (let ii = 1; ii <= numOfShearDataPoints; ii++) {
            xPoly[ii - 1] = linearV[ii][0].toFixed(2);
            yPoly[ii - 1] = linearV[ii][1].toFixed(2);
          }

        } else {
          xPoly = new Array(numDataPoints + 1).fill(0);
          yPoly = new Array(numDataPoints + 1).fill(0);
          for (let ii = 0; ii < numDataPoints; ii++) {
            xPoly[ii] = (beam.xDiagram + beam.xScale * x[ii]).toFixed(2); // x(ii)
            yPoly[ii] = (yV - vScale * v.shift()).toFixed(2);
          }
          xPoly[numDataPoints] = beam.xDiagram + 300;
          yPoly[numDataPoints] = yV;
        }
        svg += Draw.polyline(xPoly, yPoly);
      }

      // Draw the moment diagram
      if (bendingCases.includes(combern)) {
        const xPoly = new Array(numDataPoints + 1).fill(0);
        const yPoly = new Array(numDataPoints + 1).fill(0);
        for (let ii = 0; ii <= numDataPoints; ii++) {
          xPoly[ii] = (beam.xDiagram + beam.xScale * x[ii]).toFixed(2); // x(ii)
          yPoly[ii] = (yM - beam.convention * mScale * m.shift()).toFixed(2); // M(ii)
        }
        xPoly[numDataPoints + 1] = beam.xDiagram + 300;
        yPoly[numDataPoints + 1] = yM;
        svg += Draw.polyline(xPoly, yPoly);
      }

      if (inaDeflCase) {
        // Draw the deflection diagram
        svg += `<text x='20' y='${yDeflection + 2}'>deflection</text>\n`;
        svg += `<path d='M${beam.xDiagram} ${yDeflection} h300' stroke-width='1.5px'/>\n`;
        const xPoly = new Array(numDataPoints - 1).fill(0);
        const yPoly = new Array(numDataPoints - 1).fill(0);
        for (let ii = 1; ii <= numDataPoints; ii++) {
          xPoly[ii - 1] = (beam.xDiagram + beam.xScale * x[ii]).toFixed(2); // x(ii)
          yPoly[ii - 1] = (yDeflection - deflectionScale * deflection[ii]).toFixed(2);
        }
        svg += Draw.polyline(xPoly, yPoly);
      }
    }

    // Write the values of the local shear maximums onto the diagrams.
    f = 1 / (beam.SI ? 1000 : 4448.2216152605); // conversion factor for N to kips or MN
    while (wV.length > 0) {
      const xText = (beam.xDiagram + beam.xScale * wVx.shift()).toFixed(2);
      const fudge = wV[0] > 0 ? -2 : 13;
      const yText = (yV - vScale * wV[0] + fudge).toFixed(2);
      // horizAlign is middle
      svg += Draw.text(round(wV.shift() * f, 3), xText, yText, horizAlign);
    }

    // Write the values of the local bending maximums onto the diagrams.
    f = beam.convention / (beam.SI ? 1000 : 4448.2216152605 * 0.3048);
    while (wM.length > 0) {
      const xText = (beam.xDiagram + beam.xScale * wMx.shift()).toFixed(2);
      const fudge = beam.convention * wM[0] > 0 ? -2 : 13;
      const yText = (yM - beam.convention * mScale * wM[0] + fudge).toFixed(2);
      const sText = round(wM.shift() * f, 3);
      svg += Draw.text(sText, xText, yText, horizAlign);
    }

    if (beam.EI !== 1) {
      // Insert the max and min deflection values
      beam.deflectionMax = Math.max(Math.abs(deflectionMax), Math.abs(deflectionMin));
      f = beam.SI ? 1000 : (12 / 0.3048);
      let sText = "";
      let xText = 0;
      let yText = 0;
      if (deflectionMax > 0.2 * (deflectionMax - deflectionMin)) {
        xText = beam.xDiagram + beam.xScale * xDeflectionMax;
        yText = yDeflection - deflectionScale * deflectionMax - 2;
        if (beam.SI) {
          sText = round(deflectionMax * f, 1) + " mm";
        } else {
          sText = round(deflectionMax * f, 2) + '″';
        }
        svg += Draw.text(sText, xText, yText, horizAlign);
      }
      if (Math.abs(deflectionMin) > 0.2 * (deflectionMax - deflectionMin)) {
        xText = beam.xDiagram + beam.xScale * xDeflectionMin;
        yText = yDeflection - deflectionScale * deflectionMin + 13;
        if (beam.SI) {
          sText = round(f * deflectionMin, 1) + " mm";
        } else {
          sText = round(f * deflectionMin, 2) + '″';
        }
        svg += Draw.text(sText, xText, yText, horizAlign);
      }
    }

    return svg
  }

  const checkVs = (v, x, wV, wVx, spans, beamLength) => {
    // Check if we should write this value onto the shear diagram
    let gottaWrite = true; // initialize the variable
    const shortDistance = 0.15 * beamLength;

    for (let i = 1; i < spans.length; i++) {
      for (let k = 0; k < spans[i].segments.length; k++) {
        const seg = spans[i].segments[k];
        const xOfRightEnd = seg.xOfLeftEnd + seg.length;
        if (xOfRightEnd < x -  shortDistance) { continue }
        if (seg.xOfLeftEnd > x + shortDistance) { continue }

        if (Math.abs(seg.xOfLeftEnd - x) < shortDistance) {
          if (v > 0) {
            if (seg.Vmax.left.value > v) {
              gottaWrite = false;
              break
            }
          } else if (seg.Vmin.left.value < v) {
            gottaWrite = false;
            break
          }
        }

        const xRightEnd = seg.xOfLeftEnd + seg.length;
        if (Math.abs(x - xRightEnd < shortDistance)) {
          if (v > 0) {
            if (seg.Vmax.right.value > v) {
              gottaWrite = false;
              break
            }
          } else if (seg.Vmin.right.value < v) {
            gottaWrite = false;
            break
          }
        }
      }
    }

    if (gottaWrite) {
      wV.push(v);
      wVx.push(x);
    }
  };

  const checkMs = (m, x, wM, wMx, spans, beamLength, mSmall) => {
    // Check if we should write this value onto the moment diagram
    if (Math.abs(m) < mSmall) { return false }
    let gottaWrite = true; // initialize the variable
    const shortDistance = 0.15 * beamLength;

    for (let i = 1; i < spans.length; i++) {
      for (let k = 0; k < spans[i].segments.length; k++) {
        const seg = spans[i].segments[k];
        const xOfRightEnd = seg.xOfLeftEnd + seg.length;
        if (xOfRightEnd < x -  shortDistance) { continue }
        if (seg.xOfLeftEnd > x + shortDistance) { continue }

        if (Math.abs(seg.xOfLeftEnd - x) < shortDistance) {
          if (m > 0) {
            if (seg.Mmax.left.value > m) {
              gottaWrite = false;
              break
            }
          } else if (seg.Mmin.left.value < m) {
            gottaWrite = false;
            break
          }
        }

        if (m > 0 && Math.abs(seg.Mmax.mid.x - x) < shortDistance) {
          if (seg.Mmax.mid.value > m) {
            gottaWrite = false;
            break
          }
        }
        if (m < 0 && Math.abs(seg.Mmin.mid.x - x) < shortDistance) {
          if (seg.Mmin.mid.value < m) {
            gottaWrite = false;
            break
          }
        }

        const xRightEnd = seg.xOfLeftEnd + seg.length;
        if (Math.abs(x - xRightEnd < shortDistance)) {
          if (m > 0) {
            if (seg.Mmax.right.value > m) {
              gottaWrite = false;
              break
            }
          } else if (seg.Mmin.right.value < m) {
            gottaWrite = false;
            break
          }
        }
      }
    }

    if (gottaWrite) {
      wM.push(m);
      wMx.push(x);
    }
  };

  const fixity = str => str === "none" ? "—" : str;

  const loadInitial = ["", "D", "F", "L", "H", "Lr", "S", "R", "W", "E"];

  function writeOutput(img, input, beam, nodes, extremes) {
    let html = "<h4>Beam Analysis</h4>\n";
    html += `<p><strong>Input</strong>${img}</p>\n`;
    html += "<pre><code>E: " + input.E + (beam.SI ? " ksi" : " MPa") + "\n";
    if (input.section && sections[input.section]) { html += "Section: " + input.section + "\n"; }
    if (beam.I) {
      const I = beam.SI && input.section && sections[input.section] ? round(beam.I, 3) : beam.I;
      html += "I: " + I + (beam.SI ? " mm⁴/10⁶" : " in⁴" ) + "\n";
    }
    if (beam.k) { html += "k" + beam.k + (beam.SI ? " kN/mm" : " kips/in" ) + "\n"; }
    html += "Beam: " + fixity(input.node[0]);
    for (let i = 0; i < 6; i++) {
      const L = document.getElementById(`L${i}`).value.trim();
      if (L === "") { break }
      html += " " + L + (beam.SI ? "m" : "′");
      html += " " + fixity(input.node[i + 1]);
    }
    html += "\n\n";

    for (let i = 0; i < 9; i++) {
      const shape = document.getElementById(`loadShape${i}`).value;
      if (shape === "none") { continue }
      const type = document.getElementById(`loadType${i}`).value;
      const amount = document.getElementById(`amount${i}`).value.trim();
      if (amount === "" || amount === "0") { continue }
      const unit = document.getElementById(`unit${i}`).textContent.trim();
      const from = document.getElementById(`from${i}`).value.trim();
      const to = document.getElementById(`to${i}`).value.trim();
      let str = shape;
      if (type !== "none") { str += type; }
      str += " = " + amount.replace(/ +/, " ") + " " + unit;
      if (shape === "P" || shape === "M") {
        str += " at " + from + (beam.SI ? "m" : "′");
      } else if (from !== "" && from || to !== "") {
        str += "; " + (from === "" ? "0" : from) + (beam.SI ? "m" : "′");
        str += " ";
        str += (to === "" ? "0" : to) + (beam.SI ? "m" : "′");
      }
      html += str + "\n";
    }
    html += "\n";

    html += "Load combinations: " + beam.comboName + "\n";
    if (beam.containsLive) {
      html += "Patterned live loads: " + (beam.doLiveLoadPatterns ? "yes" : "no") + "\n";
      if (beam.comboName !== "service") {
        html += "Live load factor: " + input.LLF + "\n";
      }
    }
    if (beam.comboName.indexOf("ASCE") > -1) {
      html += "SDS = " + beam.SDS + "\n";
    }
    html += "</code></pre>\n";

    let f = 0;
    html += "<p><strong>Results</strong></p>\n";
    // Write the reactions.
    for (let i = 1; i <= nodes.length - 1; i++) {
      if (Math.abs(nodes[i].Pr[0]) !== 0) {
        f = 1 / (beam.SI ? 1000 : 4448.2216152605);
        let R = "";
        if (beam.comboName === "service") {
          R = round(f * nodes[i].Pr[0], 3);
        } else {
          R = "{";
          for (let j = 1; j < nodes[1].Pr.length; j++) {
            if (nodes[i].Pr[j] !== 0) {
              R += `"${loadInitial[j]}": ${round(f * nodes[i].Pr[j], 3)}; `;
            }
          }
          R = R.slice(0, -2) + "}";
        }
        R +=  " " + (beam.SI ? "kN" : "kips");
        html += `<p>
  <span class='hurmet-calc' data-entry="R_${i} = '${R.replace(/"/g, "&quot;")}'">R<sub>${i}</sub> = ${R}</span>
</p>\n`;
      }
      if (Math.abs(nodes[i].Mr[0]) !== 0) {
        f = 1 / (beam.SI ? 1000 : 4448.2216152605 * 0.3048);
        let M = "";
        if (beam.comboName === "service") {
          M = round(f * nodes[i].Mr[0], 3);
        } else {
          M = "{";
          for (let j = 1; j < nodes[1].Mr.length; j++) {
            if (nodes[i].Mr[j] !== 0) {
              M += `"${loadInitial[j]}": ${round(f * nodes[i].Mr[j], 3)}; `;
            }
          }
          M = M.slice(0, -2) + "}";
        }
        M += " " + (beam.SI ? "kN·m" : "k·ft");
        html += `<p>
  <span class='hurmet-calc' data-entry="M_${i} = '${M.replace(/"/g, "&quot;")}'">M<sub>${i}</sub> = ${M}</span>
</p>\n`;
      }
    }

    const [vMax, vMin, mMax, mMin, , , , , ] = extremes;
    let sub = beam.comboName === "service" ? "max" : "u";

    // Write the shear absolute maximum
    f = 1 / (beam.SI ? 1000 : 4448.2216152605);
    let V = Math.max(vMax, Math.abs(vMin));
    V = round(f * V, 3) + " " + (beam.SI ? 'kN' : 'kips');
    html += `<p>
   <span class='hurmet-calc' data-entry="V_${sub} = '${V}'">V<sub>${sub}</sub> = ${V}</span>
</p>\n`;

    // Write the moment maximum
    f = 1 / (beam.SI ? 1000 : 4448.2216152605 * 0.3048);
    let M = round(f * mMax, 3) + " " + (beam.SI ? 'kN·m' : 'k·ft');
    html += `<p>
   <span class='hurmet-calc' data-entry="M_${sub} = '${M}'">M<sub>${sub}</sub> = ${M}</span>
</p>\n`;

    // Write the moment minimum.
    M = round(f * mMin, 3) + " " + (beam.SI ? 'kN·m' : 'k·ft');
    sub = beam.comboName === "service" ? "min" : "uMin";
    html += `<p>
   <span class='hurmet-calc' data-entry="M_${sub} = '${M}'">M<sub>${sub}</sub> = ${M}</span>
</p>\n`;

    if (beam.EI !== 1) {
      f = beam.SI ? 1000 : (12 / 0.3048);
      const delta = round(f * beam.deflectionMax, 3) + " " + (beam.SI ? 'mm' : 'in');
      html += `<p>
  <span class='hurmet-calc' data-entry="Δ = ${delta}">Δ = ${delta}</span>
</p>`;
    }

    return html
  }

  const commas$1 = /[, ]/g;
  const groupByThreeRegEx = /\B(?=(\d{3})+$)/g;

  function convertUnits(beam, nodes, spans) {
    // This is called in the course of an analysis.
    // Convert from input units to meters and newtons.
    beam.EI = beam.E === 1 && beam.I === 1
      ? 1
      : beam.I === 0
      ? 1
      : beam.SI
      ? beam.E * 1000000 * beam.I * (0.001 ** 4) * 1000000
      : beam.E * 6894757.29316836 * beam.I * 0.0254 ** 4;  // 22152.78

    const lengthFactor = beam.SI ? 1 : 0.3048;
    const forceFactor = beam.SI ? 1000 : 4448.2216152605;
    const momentFactor = beam.SI ? 1000 : 4448.2216152605 * 0.3048;
    const lineLoadFactor = beam.SI ? 1000 : 4448.2216152605 / 0.3048;
    const springFactor = beam.SI ? 1000 / 0.000001 : 4448.2216152605 / 0.0254;

    beam.wMax *= lineLoadFactor;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].x *= lengthFactor;  // convert to meters
      nodes[i].P = nodes[i].P.map(e => e * forceFactor);
      nodes[i].M = nodes[i].M.map(e => e * momentFactor);
      nodes[i].k *= springFactor;
    }
    for (let i = 0; i < spans.length; i++) {
      spans[i].length *= lengthFactor;
      for (let j = 0; j < spans[i].segments.length; j++) {
        spans[i].segments[j].xOfLeftEnd *= lengthFactor;
        spans[i].segments[j].length *= lengthFactor;
        spans[i].segments[j].P = spans[i].segments[j].P.map(e => e * forceFactor);
        spans[i].segments[j].M = spans[i].segments[j].M.map(e => e * momentFactor);
        spans[i].segments[j].w1 = spans[i].segments[j].w1.map(e => e * lineLoadFactor);
        spans[i].segments[j].w2 = spans[i].segments[j].w2.map(e => e * lineLoadFactor);
      }
    }
    beam.length *= lengthFactor;
    beam.xScale = 300 / beam.length;
  }

  const convert = (str, factor, precision = undefined) => {
    str = str.trim().replace(commas$1, "");
    if (str === "") { return "" }
    const num = Number(str) * factor;
    return precision ? round(num, precision) : String(num)
  };

  function unitToggle() {
    // The SI button has been clicked. Toggle the units in the input forms.
    const si = document.getElementById("SI").checked;
    const lengthFactor = si ? 0.3048 : 1 / 0.3048;
    const forceFactor = si ? 4.4482216152605 : 1 / 4.4482216152605;
    const momentFactor = si ? 4.4482216152605 * 0.3048 : 1 / (4.4482216152605 * 0.3048);
    const pressureFactor = si ? 0.0044482216152605 / 0.0254 ** 2 : 0.0254 ** 2 / 0.0044482216152605;
    const lineLoadFactor = si ? 4.4482216152605 / 0.3048 : 0.3048 / 4.4482216152605;
    const springFactor = si ? 0.0044482216152605 / 0.0254 : 0.0254 / 0.0044482216152605;
    const modulusFactor = si ? 0.0254 ** 4 * 1000000 : 1 / (0.0254 ** 4 * 1000000);

    // Change unit labels.
    document.getElementById("E_unit").textContent = si ? "MPa" : "ksi";
    const E = document.getElementById("E");
    E.value = convert(E.value, pressureFactor, 2).replace(groupByThreeRegEx, ",");
    document.getElementById("I_unit").textContent = si ? "mm⁴/10⁶" : "in⁴";
    const I = document.getElementById("I");
    I.value = convert(I.value, modulusFactor, 3);
    document.getElementById("k_unit").textContent = si ? "kN/mm" : "kips/in";
    const k = document.getElementById("k");
    k.value = convert(k.value, springFactor, 3);
    document.getElementById("spanUnit").textContent = si ? "meters" : "feet";

    const geometry = document.getElementById("geometry");
    const spans = geometry.getElementsByTagName("input");
    [...spans].forEach(e => {
      const str = e.value;
      if (str.indexOf("x") === -1) {
        e.value = convert(str, lengthFactor, 4);
      } else {
        const num = /[\d.]+$/.exec(str)[0];
        const newNum = convert(num, lengthFactor, 4);
        e.value = e.value.slice(0, -1 * num.length) + newNum;
      }
    });

    document.getElementById("fromUnit").textContent = si ? "meters" : "feet";
    document.getElementById("toUnit").textContent = si ? "meters" : "feet";
    for (let i = 0; i < 9; i++) {
      const shape = document.getElementById(`loadShape${i}`).value;
      if (shape === "none") {
        continue
      } else if (shape === "w") {
        document.getElementById(`unit${i}`).textContent = si ? "kN/m" : "kips/ft";
        const w = document.getElementById(`amount${i}`);
        const str = w.value.trim();
        if (str.indexOf("self") > -1) ; else if (str.indexOf(" ") > -1) {
          const ws = str.split(" ");
          const values = ws.map(e => convert(e, lineLoadFactor, 3));
          w.value = values.join(" ");
        } else {
          w.value = convert(str, lineLoadFactor, 3);
        }
      } else if (shape === "P") {
        document.getElementById(`unit${i}`).textContent = si ? "kN" : "kips";
        const P = document.getElementById(`amount${i}`);
        P.value = convert(P.value, forceFactor, 3);
      } else {
        document.getElementById(`unit${i}`).textContent = si ? "kN·m" : "kip·ft";
        const M = document.getElementById(`amount${i}`);
        M.value = convert(M.value, momentFactor, 3);
      }
      const from = document.getElementById(`from${i}`);
      from.value = convert(from.value, lengthFactor, 4);
      const to = document.getElementById(`to${i}`);
      to.value = convert(to.value, lengthFactor, 4);
    }
  }

  const wrapInImg = (diagram, yMax) => {
    // Insert the diagram into the page.

    // Wrap in an SVG tag.
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='450' height='${yMax}'>${diagram}</svg>`;

    // We want to display an <img> element, not an <svg>.
    // That way, a user can right-click and copy the image to the clipboard.
    // So convert the svg into a data-uri that can be written inline into an <img> element.
    svg = svg.replace(/"/g, `'`); // Single quotation marks don't need to be escaped.
    svg = svg.replace(/\n/g, ""); // Get rid of newlines.
    // Escape all the characters that are not allowed in a data-uri.
    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
    const uri = svg.replace(symbols, encodeURIComponent);

    // Insert the URI into an <img> tag.
    return `<img src="data:image/svg+xml;utf8,${uri}" alt="Beam Diagram" class="right">`

    // Write it into the document.
  };

  const showGeometry = _ => {
    // This function reads input and displays the load diagram.
    // It stops short of doing the analysis.
    const input = readForm();
    const [errorMsg, beam, nodes, spans] = populateData(input);
    if (errorMsg) {
      if (errorMsg === "No span lengths.") {
        document.getElementById("diagram-wrapper").innerHTML = "";
        return
      }
      error(errorMsg); return
    }
    const diagram = createLoadDiagram(beam, nodes, spans);
    const img = wrapInImg(diagram, beam.yLoad + 60);
    document.getElementById("diagram-wrapper").innerHTML = img;
  };

  const analyze = _ => {
    // This is the main analysis function.

    // Get raw strings from the form.
    const input = readForm();

    // Validate input and populate data structures.
    const [errorMsg, beam, nodes, spans] = populateData(input);
    if (errorMsg) { error(errorMsg); return }

    // Create the first diagram. Show fixities, lengths, and loads.
    let diagram = createLoadDiagram(beam, nodes, spans);

    // Convert data to units of newtons and meters.
    convertUnits(beam, nodes, spans);

    // Do the linear algebra. For each load type, get member end actions and node displacements.
    const [actions, deflections] = doAnalysis(beam, nodes, spans);

    // Determine shear, moment, and deflection maximums and minimums by superimposing
    // the relevent load combinations and live load patterns.
    const extremes = combine(beam, nodes, spans, actions, deflections);

    // Decide which combinations get plotted.
    const cases = selectCases(spans);

    // Find the y coordinates for the shear, moment, and deflection diagrams.
    const yCoords = locateDiagrams(beam, nodes, extremes);
    const yMax = yCoords[6]; // The overall height of the diagram.

    diagram += drawShearsMomentsAndDeflections(beam, nodes, spans, cases, yCoords, extremes);

    const img = wrapInImg(diagram, yMax);
    const html = writeOutput(img, input, beam, nodes, extremes);
    document.getElementById("diagram-wrapper").innerHTML = html;

    document.getElementById("analyze").blur();
  };

  // A function for when a checkbox changes, e.g. "SI".
  const updateDiagram = _ => {
    const wrapper = document.getElementById("diagram-wrapper");
    if (wrapper.children.length > 0) {
      analyze();
    } else {
      showGeometry();
    }
  };

  const updateLoadCombinations = _ => {
    // The Load Combinations selection just changed.
    const combo = document.getElementById("combinations").value.trim();
    document.getElementById("LLF").disabled = combo.indexOf("service") > -1;
    if (combo.indexOf("ASCE") > -1) {
      document.getElementById("SDS").disabled = false;
    } else {
      const sdsInput = document.getElementById("SDS");
      sdsInput.value = "0.0";
      sdsInput.disabled = true;
    }
    document.getElementById("SDS").disabled = combo.indexOf("ASCE") === -1;
    updateDiagram();
  };

  const updateLoadShape = n => {
    const shape = document.getElementById(`loadShape${n}`).value;
    switch (shape) {
      case "w":
        document.getElementById(`unit${n}`).textContent = "kips/ft";
        document.getElementById(`from${n}`).disabled = false;
        document.getElementById(`to${n}`).disabled = false;
        break
      case "P":
        document.getElementById(`unit${n}`).textContent = "kips";
        document.getElementById(`from${n}`).disabled = false;
        document.getElementById(`to${n}`).value = "";
        document.getElementById(`to${n}`).disabled = true;
        break
      case "M":
        document.getElementById(`unit${n}`).textContent = "kip·ft";
        document.getElementById(`from${n}`).disabled = false;
        document.getElementById(`to${n}`).value = "";
        document.getElementById(`to${n}`).disabled = true;
        break
      default:
        document.getElementById(`amount${n}`).value = "";
        document.getElementById(`unit${n}`).textContent = "";
        document.getElementById(`from${n}`).value = "";
        document.getElementById(`from${n}`).disabled = true;
        document.getElementById(`to${n}`).value = "";
        document.getElementById(`to${n}`).disabled = true;
    }
    showGeometry();
  };

  const toggleUnits = _ => {
    unitToggle();
    updateDiagram();
  };

  const selectResults = _ => {
    const parent = document.getElementById("diagram-wrapper");
    window.getSelection().selectAllChildren(parent);
  };

  exports.analyze = analyze;
  exports.clear = clear;
  exports.selectResults = selectResults;
  exports.showGeometry = showGeometry;
  exports.toggleUnits = toggleUnits;
  exports.updateDiagram = updateDiagram;
  exports.updateLoadCombinations = updateLoadCombinations;
  exports.updateLoadShape = updateLoadShape;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
