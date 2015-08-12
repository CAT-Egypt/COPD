/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Oswald-Bold': '',
            'Oswald-Regular': '',
            'Oswald-Light': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "height",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Slide_00',
                            symbolName: 'Slide_00',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Slide_01',
                            symbolName: 'Slide_01',
                            type: 'rect',
                            rect: ['800px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Logo_text',
                            type: 'text',
                            rect: ['821px', '20px', '268px', '106px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-weight: 900; font-size: 56px; font-family: oswald-bold; color: rgb(184, 184, 184);\">COPD</span><span style=\"font-weight: 900; font-size: 56px; font-family: oswald-bold;\"> </span><span style=\"font-weight: 900; font-size: 56px; font-family: oswald-bold; color: rgb(233, 143, 44);\">App</span></p><p style=\"margin: 0px; font-family: Oswald-Bold; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: right; text-indent: 0px; line-height: 18.571430206298828px;\"><span style=\"font-size: 15px;\">C</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">hronic </span><span style=\"font-family: Oswald-Bold; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">O</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">bstructive </span><span style=\"font-family: Oswald-Bold; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">P</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">ulmonary </span><span style=\"font-family: Oswald-Bold; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">D</span><span style=\"font-family: Oswald-Bold; font-weight: 400; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(233, 143, 44); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">isease</span></p>",
                            userClass: "",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'forHealth',
                            display: 'none',
                            type: 'text',
                            rect: ['-207px', '41px', '196px', '32px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(129, 129, 129); font-size: 17px;\">for healthcare professionals</span></p>",
                            align: "left",
                            font: ['Oswald-Light', [13, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", ""]
                        },
                        {
                            id: 'GSK',
                            type: 'image',
                            rect: ['657px', '1158px', '93px', '82px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"GSK_logo2.png",'0px','0px']
                        },
                        {
                            id: 'backToWelcome',
                            display: 'none',
                            type: 'image',
                            rect: ['1px', '1198px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Arrow2.png",'0px','0px'],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'goToHome',
                            display: 'none',
                            type: 'text',
                            rect: ['14px', '1186px', '148px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "HOME",
                            align: "center",
                            font: ['Oswald-Bold', [25, "px"], "rgba(233,143,44,1)", "400", "none solid rgb(233, 143, 44)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "61px", ""]
                        },
                        {
                            id: 'References',
                            symbolName: 'References',
                            type: 'rect',
                            rect: ['0', '-1280px', '800', '1280', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '1280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid334",
                            "display",
                            500,
                            0,
                            "linear",
                            "${forHealth}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            667,
                            0,
                            "linear",
                            "${goToHome}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            750,
                            0,
                            "swing",
                            "${Slide_00}",
                            'block',
                            'none'
                        ],
                        [
                            "eid333",
                            "left",
                            500,
                            250,
                            "linear",
                            "${forHealth}",
                            '-207px',
                            '70px'
                        ],
                        [
                            "eid185",
                            "left",
                            250,
                            500,
                            "swing",
                            "${Slide_00}",
                            '0px',
                            '-800px'
                        ],
                        [
                            "eid327",
                            "display",
                            667,
                            0,
                            "linear",
                            "${backToWelcome}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "left",
                            250,
                            500,
                            "swing",
                            "${Slide_01}",
                            '800px',
                            '0px'
                        ],
                        [
                            "eid331",
                            "left",
                            500,
                            250,
                            "linear",
                            "${Logo_text}",
                            '821px',
                            '462px'
                        ]
                    ]
                }
            },
            "Slide_00": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(41,171,226,0.00)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(227,227,227,1.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'S0_Pic1_clipped',
                            rect: ['0px', '714px', '425px', '567px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_Pic1_clipped.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_Pic4',
                            rect: ['43px', '561px', '348px', '0px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_Pic4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_Pic3',
                            rect: ['346px', '536px', '365px', '0px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_Pic3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_Pic2',
                            rect: ['402px', '569px', '355px', '0px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_Pic2.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['0px', '318px', '800px', '54px', 'auto', 'auto'],
                            type: 'text',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Oswald-Bold; animation-name:slideInLeft;\">C</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">hronic </span><span style=\"font-family: Oswald-Bold;\">O</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">bstructive </span><span style=\"font-family: Oswald-Bold;\">P</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">ulmonary </span><span style=\"font-family: Oswald-Bold;\">D</span><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">isease</span></p>',
                            align: 'left',
                            userClass: ''
                        },
                        {
                            userClass: '',
                            rect: ['84px', '95px', '613px', '213px', 'auto', 'auto'],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 900; font-size: 147px; font-family: oswald-bold; color: rgb(184, 184, 184);\">COPD</span><span style=\"font-weight: 900; font-size: 147px; font-family: oswald-bold;\"> </span><span style=\"font-weight: 900; font-size: 147px; font-family: oswald-bold; color: rgb(233, 143, 44);\">App</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            userClass: '',
                            id: 'goToNext',
                            type: 'group',
                            cursor: 'pointer',
                            rect: ['595px', '449', '125', '99', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['68px', '30px', '74px', '39px', 'auto', 'auto'],
                                transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                                id: 'Arrow2',
                                userClass: '',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '97px', ''],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Regular; font-size: 35px;\">Start</span></p>',
                                align: 'center',
                                rect: ['0px', '0px', '86px', '99px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid202",
                            "scaleX",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '1.18',
                            '1'
                        ],
                        [
                            "eid206",
                            "height",
                            500,
                            500,
                            "swing",
                            "${S0_Pic3}",
                            '0px',
                            '610px'
                        ],
                        [
                            "eid200",
                            "top",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '95px',
                            '94px'
                        ],
                        [
                            "eid208",
                            "height",
                            500,
                            500,
                            "swing",
                            "${S0_Pic4}",
                            '0px',
                            '561px'
                        ],
                        [
                            "eid198",
                            "left",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '84px',
                            '0px'
                        ],
                        [
                            "eid194",
                            "font-size",
                            0,
                            500,
                            "swing",
                            "${Text2}",
                            '49px',
                            '32px'
                        ],
                        [
                            "eid212",
                            "left",
                            1000,
                            500,
                            "swing",
                            "${goToNext}",
                            '595px',
                            '646px'
                        ],
                        [
                            "eid213",
                            "left",
                            1500,
                            500,
                            "swing",
                            "${goToNext}",
                            '595px',
                            '646px'
                        ],
                        [
                            "eid193",
                            "font-size",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '32px',
                            '65px'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '1.18',
                            '1'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            500,
                            "swing",
                            "${Text}",
                            '613px',
                            '800px'
                        ],
                        [
                            "eid210",
                            "height",
                            500,
                            500,
                            "swing",
                            "${S0_Pic2}",
                            '0px',
                            '601px'
                        ]
                    ]
                }
            },
            "Slide_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic1',
                            rect: ['70px', '442px', '185px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic1.png', '-200px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic2',
                            rect: ['307px', '442px', '186px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic2.png', '0px', '-199px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic3',
                            rect: ['545px', '442px', '185px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic3.png', '195px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic4',
                            rect: ['70px', '715px', '185px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic5',
                            rect: ['307px', '715px', '186px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic5.png', '0px', '197px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 3, 3, 13],
                            id: 'S1_pic6',
                            rect: ['544px', '715px', '185px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_pic6.png', '196px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">Welcome to COPD App</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">​</span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\">This App is intended to facilitate quick access to instant COPD information, needed by\nChest specialists as well as General Practitioners, to assess COPD cases severity and\ntherefore recommend the best path for management in accordanvce with the latest\nguidelines and medical outcomes</span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '222px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_02',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_02'
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_03',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_03'
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_04',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_04'
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_05',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_05'
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_06',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_06'
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'Slide_08',
                            rect: ['0px', '-1280px', null, null, 'auto', 'auto'],
                            id: 'Slide_08'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: false,
                    labels: {
                        "about": 1250,
                        "burden": 2500,
                        "symptoms": 3750,
                        "diag": 5000,
                        "how": 6250,
                        "management": 7500
                    },
                    data: [
                        [
                            "eid121",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic1}",
                            [-200,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid348",
                            "top",
                            5000,
                            500,
                            "swing",
                            "${Slide_05}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid349",
                            "top",
                            5500,
                            500,
                            "swing",
                            "${Slide_05}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "easeInExpo",
                            "${Slide_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            6250,
                            0,
                            "easeInExpo",
                            "${Slide_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            7250,
                            0,
                            "swing",
                            "${Slide_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "easeInExpo",
                            "${Slide_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            2500,
                            0,
                            "easeInExpo",
                            "${Slide_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            3500,
                            0,
                            "swing",
                            "${Slide_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid350",
                            "top",
                            6250,
                            500,
                            "swing",
                            "${Slide_06}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid351",
                            "top",
                            6750,
                            500,
                            "swing",
                            "${Slide_06}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid130",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic6}",
                            [196,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid135",
                            "display",
                            0,
                            0,
                            "easeInExpo",
                            "${Slide_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            3750,
                            0,
                            "easeInExpo",
                            "${Slide_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            4750,
                            0,
                            "swing",
                            "${Slide_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic5}",
                            [0,197],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid336",
                            "top",
                            1250,
                            500,
                            "linear",
                            "${Slide_02}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid338",
                            "top",
                            1750,
                            500,
                            "linear",
                            "${Slide_02}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid124",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic2}",
                            [0,-199],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid346",
                            "top",
                            3750,
                            500,
                            "swing",
                            "${Slide_04}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid347",
                            "top",
                            4250,
                            500,
                            "swing",
                            "${Slide_04}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "easeInExpo",
                            "${Slide_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            5000,
                            0,
                            "easeInExpo",
                            "${Slide_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            6000,
                            0,
                            "swing",
                            "${Slide_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid352",
                            "top",
                            7500,
                            500,
                            "swing",
                            "${Slide_08}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid353",
                            "top",
                            8000,
                            500,
                            "swing",
                            "${Slide_08}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid140",
                            "display",
                            1250,
                            0,
                            "easeInExpo",
                            "${Slide_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            2250,
                            0,
                            "swing",
                            "${Slide_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "easeInExpo",
                            "${Slide_08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            7500,
                            0,
                            "easeInExpo",
                            "${Slide_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            8500,
                            0,
                            "swing",
                            "${Slide_08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid344",
                            "top",
                            2500,
                            500,
                            "swing",
                            "${Slide_03}",
                            '-1280px',
                            '0px'
                        ],
                        [
                            "eid345",
                            "top",
                            3000,
                            500,
                            "swing",
                            "${Slide_03}",
                            '0px',
                            '-1280px'
                        ],
                        [
                            "eid122",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic4}",
                            [-200,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid128",
                            "background-position",
                            0,
                            1000,
                            "swing",
                            "${S1_pic3}",
                            [195,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Slide_02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '947px', '800px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(217,49,30,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">About COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">​</span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(233, 143, 44);\">COPD,</span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"> or chronic obstructive pulmonary (PULL-mun-ary) disease, is a progressive\ndisease that makes it hard to breathe. \"Progressive\" means the disease gets worse\nover time.\n</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(233, 143, 44);\">COPD </span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\">can cause coughing that produces large amounts of mucus (a slimy substance),\nwheezing, shortness of breath, chest tightness, and other symptoms.\n</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\">Cigarette smoking is the leading cause of </span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(233, 143, 44);\">COPD.</span><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"> Most people who have COPD smoke\nor used to smoke. Long-term exposure to other lung irritants—such as air pollution,\nchemical fumes, or dust—also may contribute to COPD.</span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '381px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'S2_pic1',
                            rect: ['40px', '864px', '161px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_pic1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_pic2',
                            rect: ['226px', '864px', '161px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_pic2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_pic3',
                            rect: ['413px', '864px', '161px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_pic3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_pic4',
                            rect: ['599px', '864px', '161px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_pic4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1145px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(233, 143, 44); font-family: Oswald-Bold; font-size: 35px;\">By </span><span style=\"font-family: Oswald-Bold; font-size: 35px;\">2030, </span><span style=\"color: rgb(233, 143, 44); font-family: Oswald-Bold; font-size: 35px;\">COPD will become\nthe </span><span style=\"font-family: Oswald-Bold; font-size: 35px;\">3rd</span><span style=\"color: rgb(233, 143, 44); font-family: Oswald-Bold; font-size: 35px;\"> Leading Cause of Death</span></p>',
                            align: 'left',
                            rect: ['70px', '568px', '660px', '106px', 'auto', 'auto']
                        },
                        {
                            rect: ['70px', '675px', '660px', '1px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,143,44,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4Copy2',
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 75px;\">​<span style=\"font-size: 35px; font-family: Oswald-Bold;\">54%</span><span style=\"color: rgb(233, 143, 44); font-size: 35px; font-family: Oswald-Bold;\"> of Patients are in\nGOLD CLASS D</span></p>',
                            align: 'left',
                            rect: ['70px', '757px', '660px', '81px', 'auto', 'auto']
                        },
                        {
                            rect: ['70px', '837px', '660px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,143,44,1.00)']
                        },
                        {
                            font: ['Oswald-Bold', [13, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4Copy',
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 72px;\">​<span style=\"font-size: 35px; color: rgb(0, 0, 0);\">&gt; 3</span><span style=\"font-size: 35px;\"> Million Egyptians\nHave COPD</span></p>',
                            align: 'left',
                            rect: ['70px', '676px', '660px', '81px', 'auto', 'auto']
                        },
                        {
                            rect: ['70px', '756px', '660px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,143,44,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Oswald-Regular; color: rgb(233, 143, 44);\">Open Airways</span></p>',
                            align: 'left',
                            rect: ['40px', '1038px', '161px', '50px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy',
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 33px;\">​<span style=\"font-family: Oswald-Regular; color: rgb(233, 143, 44);\">Inflamed Airways</span></p>',
                            align: 'left',
                            rect: ['226px', '1038px', '161px', '81px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy2',
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 33px;\">​<span style=\"font-family: Oswald-Regular; color: rgb(233, 143, 44);\">Healthy Air SACS</span></p>',
                            align: 'left',
                            rect: ['413px', '1038px', '161px', '81px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy3',
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 33px;\"><span style=\"font-family: Oswald-Regular; color: rgb(233, 143, 44);\">Streched Air SACS</span></p>',
                            align: 'left',
                            rect: ['599px', '1038px', '161px', '81px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.65187633547009',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 45px; font-family: Oswald-Bold; color: rgb(233, 143, 44);\">Burden of COPD<sup style=\"top:-2.1em; font-size:15px;\">1</sup></span></p><p></p><br><p style=\"margin: 0px; line-height: 25px;\"></p><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">The </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">BREATHE</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> study provides first of its kind look at the impact of </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> and cigarette\nsmoking in the MEA region.\n</span><p></p><p style=\"margin: 0px; line-height: 27px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">This study was an observational population-based survey performed in 10 countries\nin the Middle East including Egypt, and Pakistan.\n</span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">The study has revealed a low rate of diagnosis, low levels of patient awareness and a\nlow proportion of patients who are receiving adequate treatment.\n</span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">The existence of risk factors other than cigarette smoking (water pipe smoking and\nindoor pollution) is a specific feature for this region of the world, which may have\nconsequences for who develops </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> and how their disease affects them.\n</span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">The </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">BREATHE</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> study reveals that less than 1/3 </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> sufferers were diagnosed, less than\n1/3 evaluated for lung function and less than 1/3 receive appropriate treatment •A1˙\n</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> is still under-diagnosed, inadequately evaluated and inadequately treated.\n</span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">More than 3 million Egyptians have </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> (3.5%).\n</span><p></p><p></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">Less than 10% of treatment use is compliant with the GOLD 2011 guidelines.\n</span><p></p><p style=\"margin: 0px; line-height: 27px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">​For high risk patients (Category C with less symptoms and high risk), only 3.5% of treatment use is compliant with the GOLD guidelines.\n</span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">For high risk patients (Category D with more symptoms and high risk), only 6.4% of treatment use is compliant with the GOLD guidelines. </span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">54% of patients are in GOLD Class D according to the CAT classification (more symptoms &amp; high risk). </span><p></p><p style=\"margin: 0px; line-height: 25px;\"></p></li><li style=\"font-size:33px;line-height:27px;text-indent: -33px;\"><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\">Around 9 million consultations for </span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; font-size: 24px; color: rgb(129, 129, 129);\"> per year and over 1.5 million emergency visits and hospitalizations in the MEA region.</span><p></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p></li>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '861px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1085px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Symptoms of COPD<sup style=\"top:-2.1em;font-size:15px;\">1</sup></span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44);\">​</span><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129); font-size: 24px;\">The characteristic symptoms of </span><span style=\"font-family: Oswald-Light; color: rgb(233, 143, 44); font-size: 24px;\">COPD</span><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129); font-size: 24px;\"> can be variable from day to day.\nA person may seek medical\nattention either because of chronic symptoms or because of a first\nexacerbation.\n</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129); font-size: 24px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129); font-size: 24px;\">Symptoms of </span><span style=\"font-family: Oswald-Light; color: rgb(233, 143, 44); font-size: 24px;\">COPD</span><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129); font-size: 24px;\"> are:</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '241px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1145px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-161px', '398px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_01',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_01.png', '0px', '0px']
                        },
                        {
                            rect: ['-161px', '562px', '145px', '144px', 'auto', 'auto'],
                            id: 'S4_02',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_02.png', '0px', '0px']
                        },
                        {
                            rect: ['-161px', '727px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_03',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_03.png', '0px', '0px']
                        },
                        {
                            rect: ['-161px', '892px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_04',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_04.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Dyspnea / Breathlessness /\nShortness of breath</p>',
                            cursor: 'pointer',
                            rect: ['833px', '418px', '486px', '108px', 'auto', 'auto'],
                            id: 'Text4',
                            textShadow: ['rgba(110,75,1,1.00)', 3, 3, 3],
                            font: ['Oswald-Regular', [40, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Cough</p>',
                            cursor: 'pointer',
                            rect: ['833px', '607px', '486px', '64px', 'auto', 'auto'],
                            id: 'Text4Copy',
                            textShadow: ['rgba(110,75,1,1.00)', 3, 3, 3],
                            font: ['Oswald-Regular', [40, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Sputum\nproduction</p>',
                            cursor: 'pointer',
                            rect: ['833px', '768px', '486px', '64px', 'auto', 'auto'],
                            id: 'Text4Copy2',
                            textShadow: ['rgba(110,75,1,1.00)', 3, 3, 3],
                            font: ['Oswald-Regular', [40, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Wheezing and\nchest tightness</p>',
                            cursor: 'pointer',
                            rect: ['833px', '934px', '486px', '64px', 'auto', 'auto'],
                            id: 'Text4Copy3',
                            textShadow: ['rgba(110,75,1,1.00)', 3, 3, 3],
                            font: ['Oswald-Regular', [40, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_04_1',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_04_1'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_04_2',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_04_2'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_04_3',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_04_3'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_04_4',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_04_4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid247",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${Text4Copy}",
                            '607px',
                            '608px'
                        ],
                        [
                            "eid243",
                            "top",
                            1500,
                            250,
                            "easeOutBack",
                            "${Text4Copy2}",
                            '768px',
                            '769px'
                        ],
                        [
                            "eid233",
                            "left",
                            1000,
                            250,
                            "easeOutBack",
                            "${Text4}",
                            '833px',
                            '244px'
                        ],
                        [
                            "eid227",
                            "top",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '562px',
                            '564px'
                        ],
                        [
                            "eid223",
                            "top",
                            750,
                            250,
                            "easeOutBack",
                            "${S4_04}",
                            '892px',
                            '894px'
                        ],
                        [
                            "eid241",
                            "left",
                            1500,
                            250,
                            "easeOutBack",
                            "${Text4Copy2}",
                            '833px',
                            '244px'
                        ],
                        [
                            "eid219",
                            "top",
                            500,
                            250,
                            "easeOutBack",
                            "${S4_03}",
                            '727px',
                            '729px'
                        ],
                        [
                            "eid251",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Slide_04_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Slide_04_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid225",
                            "left",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '-161px',
                            '70px'
                        ],
                        [
                            "eid239",
                            "top",
                            1750,
                            250,
                            "easeOutBack",
                            "${Text4Copy3}",
                            '934px',
                            '935px'
                        ],
                        [
                            "eid245",
                            "left",
                            1250,
                            250,
                            "easeOutBack",
                            "${Text4Copy}",
                            '833px',
                            '244px'
                        ],
                        [
                            "eid248",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Slide_04_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "top",
                            0,
                            250,
                            "easeOutBack",
                            "${S4_01}",
                            '398px',
                            '400px'
                        ],
                        [
                            "eid249",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Slide_04_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid217",
                            "left",
                            500,
                            250,
                            "easeOutBack",
                            "${S4_03}",
                            '-161px',
                            '70px'
                        ],
                        [
                            "eid229",
                            "left",
                            0,
                            250,
                            "easeOutBack",
                            "${S4_01}",
                            '-161px',
                            '70px'
                        ],
                        [
                            "eid221",
                            "left",
                            750,
                            250,
                            "easeOutBack",
                            "${S4_04}",
                            '-161px',
                            '70px'
                        ],
                        [
                            "eid237",
                            "left",
                            1750,
                            250,
                            "easeOutBack",
                            "${Text4Copy3}",
                            '833px',
                            '244px'
                        ],
                        [
                            "eid235",
                            "top",
                            1000,
                            250,
                            "easeOutBack",
                            "${Text4}",
                            '418px',
                            '419px'
                        ]
                    ]
                }
            },
            "Slide_04_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Symptoms of COPD<sup style=\"top:-2.1em;font-size:15px;\">1</sup></span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-167px', '253px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_01',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_01.png', '0px', '0px']
                        },
                        {
                            font: ['Oswald-Regular', [0, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​Dyspnea / Breathlessness /\nShortness of breath</p>',
                            cursor: 'pointer',
                            rect: ['859px', '272px', '486px', '108px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(0,118,169,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129);\">Dyspnea is a major cause of disability and anxiety associated\nwith the disease. Typical </span><span style=\"font-family: Oswald-Light; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129);\"> patients describe their dyspnea\nas a sense of increased effort to breathe, heaviness, air hunger,\nor gasping.</span></p>',
                            align: 'left',
                            rect: ['70px', '444px', '660px', '136px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToSymptoms',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid255",
                            "left",
                            500,
                            500,
                            "swing",
                            "${Text4}",
                            '859px',
                            '244px'
                        ],
                        [
                            "eid259",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text4}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid257",
                            "font-size",
                            1000,
                            500,
                            "easeOutBack",
                            "${Text5}",
                            '0px',
                            '27px'
                        ],
                        [
                            "eid253",
                            "left",
                            0,
                            500,
                            "easeOutBack",
                            "${S4_01}",
                            '-167px',
                            '70px'
                        ]
                    ]
                }
            },
            "Slide_04_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Symptoms of COPD<sup style=\"top:-2.1em;font-size:15px;\">1</sup></span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-162px', '275px', '145px', '144px', 'auto', 'auto'],
                            id: 'S4_02',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_02.png', '0px', '0px']
                        },
                        {
                            font: ['Oswald-Regular', [0, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text4Copy',
                            text: '<p style=\"margin: 0px;\">​Cough</p>',
                            cursor: 'pointer',
                            rect: ['244px', '315px', '486px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [0, 'px'], 'rgba(0,118,169,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129);\">Chronic cough, often the first symptoms of </span><span style=\"font-family: Oswald-Light; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-family: Oswald-Light; color: rgb(129, 129, 129);\"> to develop,\nis frequently discounted by the patient as an expected\nconsequence of smoking and/or environmental exposures.\nInitially, the cough may be intermittent, but later is present\nevery day.</span></p>',
                            align: 'left',
                            rect: ['70px', '444px', '660px', '158px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToSymptoms',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid265",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text4Copy}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid261",
                            "top",
                            0,
                            500,
                            "swing",
                            "${S4_02}",
                            '275px',
                            '271px'
                        ],
                        [
                            "eid267",
                            "font-size",
                            1000,
                            500,
                            "swing",
                            "${Text5}",
                            '0px',
                            '27px'
                        ],
                        [
                            "eid263",
                            "left",
                            0,
                            500,
                            "swing",
                            "${S4_02}",
                            '-162px',
                            '70px'
                        ]
                    ]
                }
            },
            "Slide_04_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Symptoms of COPD<sup style=\"top:-2.1em;font-size:15px;\">1</sup></span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-166px', '270px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_03',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_03.png', '0px', '0px']
                        },
                        {
                            font: ['Oswald-Regular', [0, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text4Copy2',
                            text: '<p style=\"margin: 0px;\">​Sputum\nproduction</p>',
                            cursor: 'pointer',
                            rect: ['244px', '311px', '486px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(0,118,169,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text6',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 27px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-size: 27px; color: rgb(129, 129, 129);\"> patients commonly raise small quantities of tenacious\nsputum after coughing bouts. The presence of purulent\nsputum reflects an increase in inflammatory mediators, and its\ndevelopment may identify the onset of a bacterial exacerbation.</span></p>',
                            rect: ['71px', '429px', '660px', '154px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToSymptoms',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid283",
                            "opacity",
                            1000,
                            500,
                            "swing",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text4Copy2}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid269",
                            "left",
                            0,
                            500,
                            "swing",
                            "${S4_03}",
                            '-166px',
                            '70px'
                        ],
                        [
                            "eid271",
                            "top",
                            0,
                            500,
                            "swing",
                            "${S4_03}",
                            '270px',
                            '271px'
                        ]
                    ]
                }
            },
            "Slide_04_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Symptoms of COPD<sup style=\"top:-2.1em;font-size:15px;\">1</sup></span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-177px', '271px', '145px', '145px', 'auto', 'auto'],
                            id: 'S4_04',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_04.png', '0px', '0px']
                        },
                        {
                            font: ['Oswald-Regular', [0, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text4Copy3',
                            text: '<p style=\"margin: 0px;\">​Wheezing and\nchest tightness</p>',
                            cursor: 'pointer',
                            rect: ['244px', '312px', '486px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '37px', ''],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​These are nonspecific symptoms.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Alternatively, widespread aspiratory or expiratory wheeze can be present on listening to the chest.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Chest tightness often follows exertion, is poorly localized, is muscular\nin character, and may arise from isometric contraction of the intercostals\nmuscles.</p>',
                            align: 'left',
                            rect: ['71px', '443px', '660px', '322px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToSymptoms',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid287",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text4Copy3}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid285",
                            "left",
                            0,
                            500,
                            "swing",
                            "${S4_04}",
                            '-177px',
                            '70px'
                        ],
                        [
                            "eid289",
                            "font-size",
                            1000,
                            500,
                            "swing",
                            "${Text7}",
                            '0px',
                            '27px'
                        ]
                    ]
                }
            },
            "Slide_05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Diagnosis of COPD</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['297px', '347px', '186px', '185px', 'auto', 'auto'],
                            id: 'S9_01',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S9_01.png', '0px', '0px']
                        },
                        {
                            rect: ['112px', '640px', '185px', '185px', 'auto', 'auto'],
                            id: 'S9_02',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S9_02.png', '0px', '0px']
                        },
                        {
                            rect: ['483px', '640px', '185px', '185px', 'auto', 'auto'],
                            id: 'S9_03',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S9_03.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_05_1',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_05_1'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_05_2',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_05_2'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_05_3',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_05_3'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid296",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_05_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_05_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid98",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${S9_01}",
                            [[390, 439.82, 0, 0, 0, 0,0],[581.58, 750.85, -133.51, 159.91, -214.04, 256.36,387.49],[188.52, 747.37, -202.71, -401.12, -179.78, -355.75,816.11],[390, 440.29, 0, 0, 0, 0,1210.84]]
                        ],
                        [
                            "eid97",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${S9_02}",
                            [[204.5, 732.97, 0, 0, 0, 0,0],[394.88, 415.2, 393.33, -10.52, 492.82, -13.18,400.11],[588.98, 735.67, -197.22, 200.4, -250.77, 254.82,834.94],[204.5, 732.5, 0, 0, 0, 0,1227.69]]
                        ],
                        [
                            "eid99",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${S9_03}",
                            [[575.5, 732.51, 0, 0, 0, 0,0],[191.27, 749.41, -263.01, -146.66, -578, -322.32,402.6],[390.57, 423.6, 269.48, 6.02, 147.84, 3.3,819.54],[575.5, 732.98, 0, 0, 0, 0,1191.72]]
                        ],
                        [
                            "eid298",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_05_3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_05_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['70px', '256px', '76px', '76px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1)', [270, [['rgba(233,143,44,1.00)', 0], ['rgba(233,143,44,1.00)', 100]]]],
                            c: [
                            {
                                transform: [[], ['3600'], [0, 0, 0], [1, 1, 1]],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy',
                                opacity: '1',
                                rect: ['4px', '4px', '67px', '67px', 'auto', 'auto'],
                                type: 'ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(41,171,226,0.00)', [90, [['rgba(255,255,255,0.15)', 0], ['rgba(255,255,255,0.37)', 33], ['rgba(233,143,44,1.00)', 65], ['rgba(255,255,255,0.75)', 95]]]]
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Diagnosis of COPD</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [0, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\">​SPIROmetry</p>',
                            align: 'left',
                            rect: ['168px', '262px', '562px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(233, 143, 44);\">Spirometry</span> is required to make the diagnosis; the presence of post-bronchodilator <span style=\"font-family: Oswald-Bold;\">FEV<sub>1</sub> / FVC &lt; 0.70</span>\nconfirms the presence of persistent airflow limitation and thus of <span style=\"color: rgb(233, 143, 44);\">COPD</span>.\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(233, 143, 44);\">Spirometry</span> is the most reproducible and objective measurement of airflow limitation available.\n</p><p style=\"margin: 0px;\">Peak expiratory flow measurement alone cannot be reliably used as the only diagnosis test,\ndespite its good sensitivity because of its weak specificity.\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(233, 143, 44);\">Spirometry</span> should measure the volume of air forcibly exhaled from the point of maximal\ninspiration (forced vital capacity, FVC) and the volume of air exhaled during the first second\nof this maneuver (forced expiratory volume in one second, FEV<sub>1</sub>), and the ratio of these two\nmeasurements (FEV<sub>1</sub> / FVC) should be calculated. </p><p style=\"margin: 0px;\"><span style=\"color: rgb(233, 143, 44);\">Spirometry</span> measurements are evaluated\nby comparison with reference values based on age, height, sex, and race.\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(233, 143, 44);\">Spirometry</span> can help differentiate obstructive from restrictive lung disease.6\n</p><p style=\"margin: 0px;\">A reduced ratio of FEV<sub>1</sub>/FVC suggests obstructive airway disease like Asthma or <span style=\"color: rgb(233, 143, 44);\">COPD</span>, and\na normal ratio suggests restrictive lung disease like Idiopathic Pulmonary Fibrosis, if lung\nvolumes are reduced.6</p>',
                            align: 'left',
                            rect: ['75px', '361px', '660px', '640px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToDiagnosis',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid300",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${EllipseCopy}",
                            '3600deg',
                            '0deg'
                        ],
                        [
                            "eid304",
                            "font-size",
                            1000,
                            500,
                            "swing",
                            "${Text9}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid302",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text8}",
                            '0px',
                            '45px'
                        ]
                    ]
                }
            },
            "Slide_05_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['70px', '256px', '76px', '76px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1)', [270, [['rgba(233,143,44,1.00)', 0], ['rgba(233,143,44,1.00)', 100]]]],
                            c: [
                            {
                                transform: [[], ['3600'], [0, 0, 0], [1, 1, 1]],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy',
                                opacity: '1',
                                rect: ['4px', '4px', '67px', '67px', 'auto', 'auto'],
                                type: 'ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(41,171,226,0.00)', [90, [['rgba(255,255,255,0.15)', 0], ['rgba(255,255,255,0.37)', 33], ['rgba(233,143,44,1.00)', 65], ['rgba(255,255,255,0.75)', 95]]]]
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Diagnosis of COPD</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [0, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\">​Medical History</p>',
                            align: 'left',
                            rect: ['168px', '262px', '562px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​A detailed medical history of a new patient known or thought to have <span style=\"color: rgb(233, 143, 44);\">COPD</span> should assess:\n</p><p style=\"margin: 0px;\">Patient’\'D5s exposure to risk factors, such as smoking and occupational and environmental\nexposures.\nPast medical history: asthma, allergy, sinusitis, or nasal polyps, respiratory tract infections in\nchildhood or other respiratory diseases.\n</p><p style=\"margin: 0px;\">Family history of <span style=\"color: rgb(233, 143, 44);\">COPD</span> or other chronic respiratory diseases.\n</p><p style=\"margin: 0px;\">Pattern of symptom development: <span style=\"color: rgb(233, 143, 44);\">COPD</span> typically develops in adult life and most patients are\nconscious of increased breathlessness and more frequent or prolonged “\'D2winter colds”\'D3.\n</p><p style=\"margin: 0px;\">History of exacerbations or previous hospitalizations for respiratory disorder.\n</p><p style=\"margin: 0px;\">Presence of comorbidities such as heart disease, osteoporosis, musculoskeletal\ndisorders, and malignancies that may also contribute to restriction of activity.\n</p><p style=\"margin: 0px;\">Impact of disease on patient’\'D5s life: limitation of activity, missed work and economic\nimpact, effect on family routines, feelings of depression or anxiety, well being and\nsexual activity.\n</p><p style=\"margin: 0px;\">Social and family support available to the patient.\n</p><p style=\"margin: 0px;\">Possibilities for reducing risk factors, especially smoking cessation.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            rect: ['75px', '351px', '660px', '640px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToDiagnosis',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid306",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${EllipseCopy}",
                            '3600deg',
                            '0deg'
                        ],
                        [
                            "eid310",
                            "font-size",
                            1000,
                            500,
                            "swing",
                            "${Text9}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid308",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text8}",
                            '0px',
                            '45px'
                        ]
                    ]
                }
            },
            "Slide_05_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['70px', '256px', '76px', '76px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1)', [270, [['rgba(233,143,44,1.00)', 0], ['rgba(233,143,44,1.00)', 100]]]],
                            c: [
                            {
                                transform: [[], ['3600'], [0, 0, 0], [1, 1, 1]],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy',
                                opacity: '1',
                                rect: ['4px', '4px', '67px', '67px', 'auto', 'auto'],
                                type: 'ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(41,171,226,0.00)', [90, [['rgba(255,255,255,0.15)', 0], ['rgba(255,255,255,0.37)', 33], ['rgba(233,143,44,1.00)', 65], ['rgba(255,255,255,0.75)', 95]]]]
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; font-size: 45px; color: rgb(233, 143, 44);\">Diagnosis of COPD</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [0, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\">Physical Examination</p>',
                            align: 'left',
                            rect: ['168px', '262px', '562px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [0, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​Although an important part of patient care, a physical examination is rarely diagnostic in\n<span style=\"color: rgb(233, 143, 44);\">COPD</span>.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            rect: ['75px', '351px', '660px', '640px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToDiagnosis',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid312",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${EllipseCopy}",
                            '3600deg',
                            '0deg'
                        ],
                        [
                            "eid316",
                            "font-size",
                            1000,
                            500,
                            "swing",
                            "${Text9}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid314",
                            "font-size",
                            500,
                            500,
                            "swing",
                            "${Text8}",
                            '0px',
                            '45px'
                        ]
                    ]
                }
            },
            "Slide_06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_A',
                            symbolName: 'Slide_06_A',
                            rect: ['172px', '682px', '130', '130', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [24, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​Assessment of <span style=\"color: rgb(233, 143, 44);\">COPD</span> according to the CAT results, Spirometric\nClassification, Breathlessness and Risk of Exacerbation5</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            rect: ['75px', '231px', '660px', '67px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_01',
                            rect: ['332px', '387px', '76px', '469px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_02',
                            rect: ['135px', '584px', '469px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_02.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_B',
                            symbolName: 'Slide_06_B',
                            rect: ['448px', '636px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_C',
                            symbolName: 'Slide_06_C',
                            rect: ['172px', '480px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_D',
                            symbolName: 'Slide_06_D',
                            rect: ['448px', '440px', null, null, 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​Less symptoms\nHigh risk</p>',
                            align: 'center',
                            rect: ['159px', '405px', '147px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy',
                            text: '<p style=\"margin: 0px;\">​More symptoms\nHigh risk</p>',
                            align: 'center',
                            rect: ['439px', '363px', '147px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy4',
                            text: '<p style=\"margin: 0px;\">​≥1 leading\nto hospital\nadmission\nor ≥2</p>',
                            align: 'center',
                            rect: ['619px', '437px', '76px', '90px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy5',
                            text: '<p style=\"margin: 0px;\">​0-1 not\nleading to\nhospital\nadmission</p>',
                            align: 'center',
                            rect: ['619px', '690px', '76px', '90px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy6',
                            text: '<p style=\"margin: 0px;\">​mMRC ≥2\nCAT ≥10</p>',
                            align: 'center',
                            rect: ['475px', '898px', '76px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy7',
                            text: '<p style=\"margin: 0px;\">​mMRC 0-1 CAT &lt;10</p>',
                            align: 'center',
                            rect: ['185px', '898px', '102px', '45px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '40px', ''],
                            id: 'Text11Copy8',
                            text: '<p style=\"margin: 0px;\">​SYMPTOMS</p>',
                            align: 'center',
                            rect: ['324px', '898px', '102px', '45px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy9',
                            text: '<p style=\"margin: 0px;\">​Risk exacerbation/year</p>',
                            rect: ['610px', '587px', '259px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy10',
                            text: '<p style=\"margin: 0px;\">​GOLD CLASSIFICATION OFAIRFLOW LIMITATION</p>',
                            rect: ['-156px', '598px', '516px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy11',
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 19px;\">FEV<sub>1</sub> &gt; 50%</span></p>',
                            rect: ['-35px', '759px', '197px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy12',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 19px; color: rgb(129, 129, 129); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: 40px;\">FEV<sub>1</sub> &lt; 50%</p>',
                            rect: ['-35px', '463px', '197px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'right',
                            type: 'text'
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy2',
                            text: '<p style=\"margin: 0px;\">​Less symptoms\nLow risk</p>',
                            align: 'center',
                            rect: ['172px', '824px', '130px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy3',
                            text: '<p style=\"margin: 0px;\">​More symptoms\nLowrisk</p>',
                            align: 'center',
                            rect: ['446px', '780px', '130px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'num1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '867px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy3',
                                text: '1',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '668px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy2',
                                text: '2',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '553px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy',
                                text: '3',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '375px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4',
                                text: '4',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'goTohow2',
                            rect: ['717px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '61px', ''],
                            cursor: 'pointer',
                            font: ['Oswald-Light', [25, 'px'], 'rgba(233,143,44,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            text: 'NEXT',
                            id: 'goTohow2_txtBtn',
                            rect: ['656px', '158px', '94px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_07',
                            rect: ['800px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_07'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid320",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_07}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_06_A": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [3, 'rgba(233,143,44,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [63, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextA',
                                text: '<p style=\"margin: 0px;\">​A</p>',
                                align: 'center',
                                rect: ['14px', '16px', '96px', '91px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_06_B": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [3, 'rgba(0,118,169,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [63, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextB',
                                text: '<p style=\"margin: 0px;\">​B</p>',
                                align: 'center',
                                rect: ['17px', '19px', '96px', '91px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_06_C": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [3, 'rgba(0,118,169,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [63, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text10',
                                text: '<p style=\"margin: 0px;\">C</p>',
                                align: 'center',
                                rect: ['14px', '16px', '96px', '91px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_06_D": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'bullet',
                            stroke: [3, 'rgba(233,143,44,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [63, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextD',
                                text: '<p style=\"margin: 0px;\">​D</p>',
                                align: 'center',
                                rect: ['14px', '16px', '96px', '91px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            rect: ['475px', '596px', '185px', '185px', 'auto', 'auto'],
                            id: 'S14_04',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S14_04.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '596px', '185px', '185px', 'auto', 'auto'],
                            id: 'S14_03',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S14_03.png', '0px', '0px']
                        },
                        {
                            rect: ['545px', '341px', '185px', '185px', 'auto', 'auto'],
                            id: 'S14_02',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S14_02.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '341px', '186px', '185px', 'auto', 'auto'],
                            id: 'S14_01',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S14_01.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'goToBack',
                            rect: ['6px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_07_1',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_07_1'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_07_2',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_07_2'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_07_3',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_07_3'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_07_4',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'Slide_07_4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid322",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_07_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_07_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_07_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "swing",
                            "${Slide_07_3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_07_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.75',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '141px', '374px', '64px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['70px', '205px', '286px', '36px', 'auto', 'auto'],
                            font: ['Oswald-Regular', [23, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12',
                            text: '​1. COPD Assessment Test (CAT)',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['346px', '205px', '10px', '36px', 'auto', 'auto'],
                            font: ['Oswald-Regular', [11, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy9',
                            text: '7',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['87px', '240px', '637px', '43px', 'auto', 'auto'],
                            textStyle: ['', '', '20px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy',
                            text: '​To determine if the patient belongs to the boxes in the left side &lt; 10 = (Less symptoms) or if the patient<br>belongs to the boxes in the right side ≥ 10= (more symptoms)',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['435px', '263px', '17px', '21px', 'auto', 'auto'],
                            textStyle: ['', '', '7px', ''],
                            font: ['Oswald-Light', [9, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy10',
                            text: '5',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['87px', '350px', '637px', '86px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy2',
                            text: '<p style=\"margin: 0px; line-height: 15px;\">​<span style=\"color: rgb(0, 118, 169); font-size: 15px;\">How is your COPD? Take the COPD Assessment Test TM (CAT)</span></p><p style=\"margin: 0px; line-height: 15px;\"><span style=\"color: rgb(0, 118, 169); font-size: 15px;\">​</span><span style=\"font-size: 13px;\">This questionnaire will help you and your healthcare professional measure the impact COPD (Chronic Obstructive\nPulmonary Disease) is having on your wellbeing and daily life. Your answers, and test score, can be used by you and your healthcare professional to help improve the management of your COPD and get the greatest benefit from treatment.</span></p><p style=\"margin: 0px; line-height: 15px;\"><span style=\"font-size: 13px;\">​For each item below, place a mark (X) in the box that best describes you currently. Be sure to only select one response\nfor each question.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['70px', '1122px', '541px', '43px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy8',
                            text: '<p style=\"margin: 0px; line-height: 9px;\">​<span style=\"font-size: 9px;\">The </span><span style=\"font-size: 9px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-size: 9px;\"> Assessment Test was developed by a multi-disciplinary group of\ninternational experts in </span><span style=\"font-size: 9px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-size: 9px;\"> supported by GSK. </span></p><p style=\"margin: 0px; line-height: 9px;\"><span style=\"font-size: 9px;\">GSK activities with respect\nto the </span><span style=\"font-size: 9px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-size: 9px;\"> Assessment Test are overseen by a governance board that\nincludes independent external experts, one of whom chairs the board.\n</span></p><p style=\"margin: 0px; line-height: 9px;\"><span style=\"font-size: 9px; color: rgb(233, 143, 44);\">COPD</span><span style=\"font-size: 9px;\"> Assessment Test and the CAT logo are trademarks of the GSK group\nof companies. ©2009 GSK. All rights reserved.</span></p><p style=\"margin: 0px; line-height: 15px;\"><span style=\"font-size: 13px;\"></span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['87px', '457px', '156px', '19px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy3',
                            text: '<p style=\"margin: 0px; line-height: 15px;\">Example: &nbsp; I am very happy</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['531px', '457px', '97px', '19px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy4',
                            text: '<p style=\"margin: 0px; line-height: 15px;\">I am very sad&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['678px', '457px', '52px', '19px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Bold', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy5',
                            text: '<p style=\"margin: 0px; line-height: 15px;\">Score</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['532px', '1017px', '128px', '19px', 'auto', 'auto'],
                            textStyle: ['', '', '17px', ''],
                            font: ['Oswald-Bold', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12Copy6',
                            text: '<p style=\"margin: 0px; line-height: 15px;\">Total Score</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['7px 7px', '150px 25px', '150px 25px', '7px 7px'],
                            id: 'NEXT_Btn',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            cursor: 'pointer',
                            rect: ['290px', '1036px', '196px', '62px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 13, 0, 'rgba(0,0,0,0.77)'],
                            fill: ['rgba(0,118,169,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '154px', '62px', 'auto', 'auto'],
                                textStyle: ['0px', '0px', '64px', ''],
                                font: ['Arial Black, Gadget, sans-serif', [42, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text12Copy7',
                                text: '<p style=\"margin: 0px; line-height: 62px;\">NEXT</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            id: 'S15_01',
                            type: 'image',
                            rect: ['643px', '274px', '87px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S15_01.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '501px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques1',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['678px', '501px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score1',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['70px', '564px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques2',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['678px', '564px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score2',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['70px', '627px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques3',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['678px', '627px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score3',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['70px', '690px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques4',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['678px', '690px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score4',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['70px', '753px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques5',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['678px', '753px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score5',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['70px', '816px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques6',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['678px', '816px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score6',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['70px', '879px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques7',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['678px', '879px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score7',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['70px', '942px', '590px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'ques8',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['678px', '942px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'score8',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(223,251,179,1.00)']
                        },
                        {
                            rect: ['678px', '1005px', '52px', '43px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'total_Scores',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['356px', '295px', '266px', '34px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'todaysDateBox',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['368px', '295px', '87px', '34px', 'auto', 'auto'],
                            textStyle: ['', '', '31px', ''],
                            font: ['Oswald-Light', [17, 'px'], 'rgba(129,129,129,1)', '400', 'none solid rgb(129, 129, 129)', 'normal', 'break-word', 'normal'],
                            id: 'titleDateBot',
                            text: 'Today\'s Date:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['87px', '295px', '251px', '34px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'yourNameBox',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['97px', '294px', '52px', '36px', 'auto', 'auto'],
                            textStyle: ['', '', '31px', ''],
                            font: ['Oswald-Light', [20, 'px'], 'rgba(129,129,129,1)', '400', 'none solid rgb(129, 129, 129)', 'normal', 'break-word', 'normal'],
                            id: 'titleName',
                            text: 'Name:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'submitResult',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            cursor: 'pointer',
                            rect: ['630px', '1094px', '90px', '38px', 'auto', 'auto'],
                            align: 'center',
                            text: '<p class=\"checkBox1\">SUBMIT</p>',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'Slide_07_Numbers',
                            symbolName: 'Slide_07_Numbers',
                            rect: ['251px', '503px', '253', '38', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_2',
                            symbolName: 'Slide_07_Numbers_2',
                            rect: ['247px', '567px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_3',
                            symbolName: 'Slide_07_Numbers_3',
                            rect: ['247px', '629px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_4',
                            symbolName: 'Slide_07_Numbers_4',
                            rect: ['247px', '692px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_5',
                            symbolName: 'Slide_07_Numbers_5',
                            rect: ['247px', '756px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_6',
                            symbolName: 'Slide_07_Numbers_6',
                            rect: ['247px', '819px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_7',
                            symbolName: 'Slide_07_Numbers_7',
                            rect: ['247px', '882px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_8',
                            symbolName: 'Slide_07_Numbers_8',
                            rect: ['247px', '945px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Slide_07_Numbers_0_example',
                            symbolName: 'Slide_07_Numbers_0_example',
                            rect: ['251px', '448', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['6px', '159px', '65px', '39px', 'auto', 'auto'],
                            transform: [[], ['-90']],
                            id: 'backToHow',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Patients_Sheet',
                            rect: ['0', '0', '800', '1280', 'auto', 'auto'],
                            id: 'Patients_Sheet'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Patients_Sheet}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_07_Numbers": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_0_example": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho1',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho2',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho3',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho4',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            userClass: 'cho5',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_Numbers_8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice0_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho0',
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice1_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho1',
                            rect: ['43px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice2_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho2',
                            rect: ['86px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice3_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho3',
                            rect: ['129px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice4_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho4',
                            rect: ['172px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'choice5_box',
                            stroke: [1, 'rgb(0, 118, 169)', 'solid'],
                            cursor: 'pointer',
                            userClass: 'cho5',
                            rect: ['215px', '0px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Patients_Sheet": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'data_sheetCopy',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'Back_inside2',
                            type: 'image',
                            rect: ['11px', '280px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            rect: ['100px', '378px', '600px', '523px', 'auto', 'auto'],
                            borderRadius: ['28px', '28px', '28px', '28px 28px'],
                            boxShadow: ['', 0, 0, 5, 1, 'rgba(0,0,0,0.65098)'],
                            id: 'data_sheet_back',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['146px', '419px', '508px', '442px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            id: 'data_sheet',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['607px', '338px', '73px', '39px', 'auto', 'auto'],
                            id: 'Arrow',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.75',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '242px', '658px', '58px', 'auto', 'auto'],
                            borderRadius: ['0px', '11px 11px', '0px', '11px'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'Rectangle',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,143,44,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '141px', '374px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [23, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12',
                            text: '​2. Spirometric Classification',
                            align: 'left',
                            rect: ['70px', '205px', '260px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [11, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12Copy9',
                            text: '5',
                            align: 'left',
                            rect: ['329px', '205px', '10px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '26px', ''],
                            id: 'Text12Copy',
                            text: 'Classification of severity of Airflow limitation in COPD (Based on Post-Bronchodilator FEV  )',
                            align: 'left',
                            rect: ['87px', '246px', '541px', '49px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [24, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '29px', ''],
                            id: 'Text12Copy11',
                            text: 'In patients with FEV / FVC &lt; 0.70 :',
                            align: 'center',
                            rect: ['171px', '316px', '457px', '43px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [11, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '7px', ''],
                            id: 'Text12Copy10',
                            text: '1',
                            align: 'left',
                            rect: ['282px', '288px', '17px', '12px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [11, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '7px', ''],
                            id: 'Text12Copy12',
                            text: '1',
                            align: 'left',
                            rect: ['421px', '336px', '17px', '21px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['7px 7px', '150px 25px', '150px 25px', '7px 7px'],
                            id: 'NEXT_Btn',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            cursor: 'pointer',
                            rect: ['290px', '1036px', '196px', '62px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 13, 0, 'rgba(0,0,0,0.77)'],
                            fill: ['rgba(0,118,169,1.00)'],
                            c: [
                            {
                                font: ['Arial Black, Gadget, sans-serif', [42, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['0px', '0px', '64px', ''],
                                id: 'Text12Copy7',
                                text: '<p style=\"margin: 0px; line-height: 62px;\">NEXT</p>',
                                align: 'center',
                                rect: ['0px', '0px', '154px', '62px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['72px', '369px', '654px', '269px', 'auto', 'auto'],
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'table',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'goToBackSlide7',
                            rect: ['6px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.75',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '141px', '374px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [23, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12',
                            text: '​3. Breathlessness',
                            align: 'left',
                            rect: ['70px', '205px', '166px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [11, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12Copy9',
                            text: '5',
                            align: 'left',
                            rect: ['230px', '205px', '10px', '36px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['7px 7px', '150px 25px', '150px 25px', '7px 7px'],
                            id: 'NEXT_Btn',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            cursor: 'pointer',
                            rect: ['290px', '1036px', '196px', '62px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 13, 0, 'rgba(0,0,0,0.77)'],
                            fill: ['rgba(0,118,169,1.00)'],
                            c: [
                            {
                                font: ['Arial Black, Gadget, sans-serif', [42, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['0px', '0px', '64px', ''],
                                id: 'Text12Copy7',
                                text: '<p style=\"margin: 0px; line-height: 62px;\">NEXT</p>',
                                align: 'center',
                                rect: ['0px', '0px', '154px', '62px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['11px', '11px', '11px', '11px 11px'],
                            id: 'table',
                            stroke: [1, 'rgba(0,118,169,1.00)', 'solid'],
                            rect: ['74px', '369px', '650px', '549px', 'auto', 'auto'],
                            overflow: 'visible',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(175,231,254,1.00)']
                        },
                        {
                            rect: ['70px', '242px', '658px', '58px', 'auto', 'auto'],
                            borderRadius: ['0px', '11px 11px', '0px', '11px'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'Rectangle',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,143,44,1.00)']
                        },
                        {
                            font: ['Oswald-Regular', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '26px', ''],
                            id: 'Text12Copy2',
                            text: 'The Modified Medical Research (mMRC) Severity of Breathlessness',
                            align: 'left',
                            rect: ['87px', '255px', '625px', '32px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'goToBackSlide7',
                            rect: ['6px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_07_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.1888020779842',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Oswald-Bold; color: rgb(233, 143, 44); font-size: 45px;\">How to Assess COPD</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 45px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Oswald-Light; font-size: 25px; color: rgb(129, 129, 129);\"></span></p>',
                            align: 'left',
                            rect: ['70px', '141px', '374px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [23, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12',
                            text: '4. History of Exacerbation',
                            align: 'left',
                            rect: ['70px', '205px', '241px', '36px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [11, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text12Copy9',
                            text: '5',
                            align: 'left',
                            rect: ['308px', '205px', '10px', '36px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['150px 25px', '7px 7px', '7px 7px', '150px 25px'],
                            id: 'NEXT_Btn',
                            stroke: [1, 'rgb(0, 118, 169)', 'none'],
                            cursor: 'pointer',
                            rect: ['290px', '1036px', '196px', '62px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 13, 0, 'rgba(0,0,0,0.77)'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Arial Black, Gadget, sans-serif', [42, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['0px', '0px', '64px', ''],
                                id: 'Text12Copy7',
                                text: 'BACK',
                                align: 'center',
                                rect: ['36px', '0px', '154px', '62px', 'auto', 'auto']
                            }]
                        },
                        {
                            font: ['Oswald-Regular', [17, 'px'], 'rgba(129,129,129,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: 'An exacerbation of COPD is an acute event characterized by a worsening of the patient’s respiratory symptoms that is beyond normal day–to–day variations and<br>leads to a change in medication.<br><br>Exacerbations of respiratory symptoms often occur in patients with COPD, triggered by infection with bacteria or viruses (which may coexist), environmental pollutants, or unknown factors.<br><br>Conditions that may mimic and/or aggravate exacerbations, including pneumonia, pulmonary embolism, congestive heart failure, cardiac arrhythmia, pneumothorax, and pleural effusion, need to be considered in the differential diagnosis and treated if present.<br><br>Interruption of maintenance therapy has also been shown to lead to exacerbations.<br><br>Exacerbations of COPD are important events in the course of the disease because they:<br>• Negatively affect a patient’\'D5s quality of life.<br>• Have effects on symptoms and lung function that take several weeks to recover from.<br>• Accelerate the rate of decline of lung function.<br>• Are associated with significant mortality, particularly in those requiring hospitalization.<br>• Have high socioeconomic costs.<br><br>An analyzed data from 25,857 patients with COPD entered in The Health Improvement Network database over a 2-year period revealed that.8<br>\"COPD\" is associated with a statistically significant, 2.27-fold increased risk of myocardial infarction 1 to 5 days after exacerbation, and a 1.26-fold increased risk of stroke 1 to 49 days after exacerbation.”',
                            align: 'left',
                            rect: ['72px', '261px', '658px', '657px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'goToBackSlide7',
                            rect: ['6px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_08": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_inside',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['11px', '452px', '777px', '697px', 'auto', 'auto'],
                            id: 'Back_inside',
                            opacity: '0.45',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_A',
                            symbolName: 'Slide_06_A',
                            rect: ['172px', '682px', '130', '130', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [45, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: 'Managaement of COPD',
                            align: 'left',
                            rect: ['70px', '157px', '660px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Regular', [24, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: 'Management of COPD according to the GOLD report 2014 (First Choices)<sup>5</sup>',
                            align: 'left',
                            rect: ['75px', '231px', '660px', '67px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9Copy',
                            text: 'GOLD report 2014',
                            align: 'center',
                            rect: ['159px', '325px', '168px', '32px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 10],
                            id: 'Assessment_Btn',
                            rect: ['243px', '1075px', '314px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Assessment_Btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_01',
                            rect: ['332px', '387px', '76px', '469px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_02',
                            rect: ['135px', '584px', '469px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_02.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_B',
                            symbolName: 'Slide_06_B',
                            rect: ['448px', '636px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_C',
                            symbolName: 'Slide_06_C',
                            rect: ['178px', '488px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_06_D',
                            symbolName: 'Slide_06_D',
                            rect: ['448px', '440px', null, null, 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​Less symptoms\nHigh risk<br>ICS+LABA or LAMA</p>',
                            align: 'center',
                            rect: ['159px', '375px', '147px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [21, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy',
                            text: '<p style=\"margin: 0px;\">​More symptoms\nHigh risk<br>ICS+LABA or LAMA</p>',
                            align: 'center',
                            rect: ['439px', '333px', '147px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy4',
                            text: '<p style=\"margin: 0px;\">​≥1 leading\nto hospital\nadmission\nor ≥2</p>',
                            align: 'center',
                            rect: ['619px', '437px', '76px', '90px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy5',
                            text: '<p style=\"margin: 0px;\">​0-1 not\nleading to\nhospital\nadmission</p>',
                            align: 'center',
                            rect: ['619px', '690px', '76px', '90px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy6',
                            text: '<p style=\"margin: 0px;\">​mMRC ≥2\nCAT ≥10</p>',
                            align: 'center',
                            rect: ['475px', '898px', '76px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text11Copy7',
                            text: '<p style=\"margin: 0px;\">​mMRC 0-1 CAT &lt;10</p>',
                            align: 'center',
                            rect: ['185px', '898px', '102px', '45px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Bold', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '40px', ''],
                            id: 'Text11Copy8',
                            text: '<p style=\"margin: 0px;\">​SYMPTOMS</p>',
                            align: 'center',
                            rect: ['324px', '898px', '102px', '45px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy9',
                            text: '<p style=\"margin: 0px;\">​Risk exacerbation/year</p>',
                            rect: ['610px', '587px', '259px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy10',
                            text: '<p style=\"margin: 0px;\">​GOLD CLASSIFICATION OFAIRFLOW LIMITATION</p>',
                            rect: ['-156px', '598px', '516px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(233,143,44,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy11',
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 19px;\">FEV<sub>1</sub> &gt; 50%</span></p>',
                            rect: ['-35px', '759px', '197px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text11Copy12',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 19px; color: rgb(129, 129, 129); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: 40px;\">FEV<sub>1</sub> &lt; 50%</p>',
                            rect: ['-35px', '463px', '197px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '40px', ''],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(129,129,129,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'right',
                            type: 'text'
                        },
                        {
                            font: ['Oswald-Light', [19, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '21px', ''],
                            id: 'Text11Copy2',
                            text: '​Less symptoms<br>Low risk<br>SABA or SAMA',
                            align: 'center',
                            rect: ['172px', '824px', '130px', '64px', 'auto', 'auto']
                        },
                        {
                            font: ['Oswald-Light', [19, 'px'], 'rgba(0,118,169,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '21px', ''],
                            id: 'Text11Copy3',
                            text: 'More symptoms<br>Lowrisk<br>LABA or LAMA',
                            align: 'center',
                            rect: ['446px', '780px', '130px', '64px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'num1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '867px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4',
                                text: '1',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '668px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy',
                                text: '2',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '553px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy2',
                                text: '3',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'num4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['126px', '375px', '33px', '33px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            fill: ['rgba(233,143,44,1.00)'],
                            c: [
                            {
                                font: ['Oswald-Bold', [21, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(233, 143, 44)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '31px', ''],
                                id: 'Text4Copy3',
                                text: '4',
                                align: 'center',
                                rect: ['0px', '1px', '33px', '32px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'backToWelcome',
                            rect: ['1px', '169px', '65px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "References": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            id: 'back_RefCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'image',
                            id: 'Back_inside',
                            rect: ['11px', '275px', '777px', '697px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '800px', '1280px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'back_Ref',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(41,171,226,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'Arrow2',
                            rect: ['660px', '65px', '74px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Arrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-61576914");
