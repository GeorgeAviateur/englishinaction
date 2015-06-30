/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'whatLeft',
                type: 'image',
                rect: ['218px', '171px','128px','98px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"32.png",'0px','0px']
            },
            {
                id: 'Whatright',
                type: 'image',
                rect: ['14px', '171px','128px','98px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"43.png",'0px','0px']
            },
            {
                id: 'apunta_iz',
                type: 'image',
                rect: ['216px', '194px','145px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
            },
            {
                id: '_4',
                type: 'image',
                rect: ['0', '0','150px','556px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: 'pantalla_3',
                type: 'audio',
                tag: 'audio',
                rect: ['-4985px', '0','320px','45px','auto', 'auto'],
                source: ['media/pantalla_3.mp3'],
                preload: 'auto'
            },
            {
                id: 'sin_brazos_ni_boca2',
                type: 'image',
                rect: ['0', '0','150px','559px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sin%20brazos_ni%20boca2.png",'0px','0px']
            },
            {
                id: 'Eyes_and_mouths_expressions_set',
                type: 'image',
                rect: ['52px', '164px','50px','17px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Eyes%20and%20mouths%20expressions%20set.png",'0px','0px']
            },
            {
                id: 'middle',
                type: 'image',
                rect: ['52px', '162px','50px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'O',
                type: 'image',
                rect: ['70px', '162px','12px','17px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"42.png",'0px','0px']
            },
            {
                id: 'Happy',
                type: 'image',
                rect: ['51px', '162px','50px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'normal',
                type: 'image',
                rect: ['210px', '212px','30px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"normal.png",'0px','0px']
            },
            {
                id: 'bien',
                type: 'image',
                rect: ['217px', '198px','53px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bien.png",'0px','0px']
            },
            {
                id: 'pocketlft',
                type: 'image',
                rect: ['121px', '211px','40px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
            },
            {
                id: 'VeryHappy',
                type: 'image',
                rect: ['50px', '161px','50px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'biender',
                type: 'image',
                rect: ['105px', '201px','40px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bien}": [
                ["style", "top", '201px'],
                ["style", "height", '58px'],
                ["style", "opacity", '0'],
                ["style", "left", '219px'],
                ["style", "width", '40px']
            ],
            "${_normal}": [
                ["style", "top", '212px'],
                ["style", "height", '142px'],
                ["style", "opacity", '1'],
                ["style", "left", '210px'],
                ["style", "width", '30px']
            ],
            "${_pantalla_3}": [
                ["style", "left", '-4985px']
            ],
            "${__4}": [
                ["style", "left", '100px'],
                ["style", "opacity", '0']
            ],
            "${_sin_brazos_ni_boca2}": [
                ["style", "left", '100px'],
                ["style", "opacity", '1']
            ],
            "${_apunta_iz}": [
                ["style", "top", '194px'],
                ["style", "opacity", '0'],
                ["style", "left", '216px']
            ],
            "${_Whatright}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px']
            ],
            "${_pocketlft}": [
                ["style", "top", '211px'],
                ["style", "height", '151px'],
                ["style", "opacity", '1'],
                ["style", "left", '121px'],
                ["style", "width", '40px']
            ],
            "${_VeryHappy}": [
                ["style", "top", '159px'],
                ["style", "height", '22px'],
                ["style", "opacity", '0'],
                ["style", "left", '150px'],
                ["style", "width", '50px']
            ],
            "${_Happy}": [
                ["style", "top", '160px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '151px'],
                ["style", "width", '50px']
            ],
            "${_middle}": [
                ["style", "top", '160px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '152px'],
                ["style", "width", '50px']
            ],
            "${_Eyes_and_mouths_expressions_set}": [
                ["style", "top", '162px'],
                ["style", "height", '17px'],
                ["style", "opacity", '1'],
                ["style", "left", '152px'],
                ["style", "width", '50px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_biender}": [
                ["style", "top", '201px'],
                ["style", "height", '57px'],
                ["style", "opacity", '0'],
                ["style", "left", '105px'],
                ["style", "width", '40px']
            ],
            "${_whatLeft}": [
                ["style", "top", '171px'],
                ["style", "opacity", '0'],
                ["style", "left", '218px']
            ],
            "${_O}": [
                ["style", "top", '160px'],
                ["style", "height", '17px'],
                ["style", "opacity", '0'],
                ["style", "left", '170px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24543,
            autoPlay: true,
            timeline: [
                { id: "eid323", tween: [ "style", "${_Happy}", "left", '151px', { fromValue: '151px'}], position: 24543, duration: 0 },
                { id: "eid27", tween: [ "style", "${_O}", "top", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 2058, duration: 42 },
                { id: "eid57", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 2198, duration: 52 },
                { id: "eid74", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 3516, duration: 40 },
                { id: "eid77", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 4011, duration: 40 },
                { id: "eid79", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 40 },
                { id: "eid83", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 4990, duration: 10 },
                { id: "eid121", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 8160, duration: 45 },
                { id: "eid126", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 8393, duration: 35 },
                { id: "eid138", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 9223, duration: 27 },
                { id: "eid142", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 9720, duration: 30 },
                { id: "eid150", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 10048, duration: 35 },
                { id: "eid154", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 10483, duration: 17 },
                { id: "eid182", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 11028, duration: 40 },
                { id: "eid185", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 11538, duration: 40 },
                { id: "eid229", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 16825, duration: 45 },
                { id: "eid233", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 16910, duration: 40 },
                { id: "eid237", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 17250, duration: 40 },
                { id: "eid241", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 17333, duration: 40 },
                { id: "eid265", tween: [ "style", "${_VeryHappy}", "opacity", '1', { fromValue: '0'}], position: 18403, duration: 45 },
                { id: "eid269", tween: [ "style", "${_VeryHappy}", "opacity", '0', { fromValue: '1'}], position: 18778, duration: 40 },
                { id: "eid2", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 460, duration: 45 },
                { id: "eid5", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 815, duration: 45 },
                { id: "eid8", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 2010, duration: 45 },
                { id: "eid10", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 2295, duration: 45 },
                { id: "eid337", tween: [ "style", "${_bien}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid359", tween: [ "style", "${_bien}", "opacity", '1', { fromValue: '0'}], position: 24260, duration: 40 },
                { id: "eid362", tween: [ "style", "${_bien}", "top", '201px', { fromValue: '201px'}], position: 24260, duration: 0 },
                { id: "eid30", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 460, duration: 45 },
                { id: "eid34", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 770, duration: 45 },
                { id: "eid39", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '0'}], position: 1403, duration: 0 },
                { id: "eid43", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 1628, duration: 40 },
                { id: "eid49", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 1733, duration: 17 },
                { id: "eid62", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 2365, duration: 45 },
                { id: "eid64", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 2770, duration: 47 },
                { id: "eid66", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 2910, duration: 53 },
                { id: "eid70", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 3040, duration: 45 },
                { id: "eid105", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 6883, duration: 40 },
                { id: "eid110", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 7095, duration: 43 },
                { id: "eid130", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 8743, duration: 45 },
                { id: "eid134", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 8858, duration: 35 },
                { id: "eid143", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 9720, duration: 30 },
                { id: "eid147", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 9835, duration: 35 },
                { id: "eid155", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 10483, duration: 17 },
                { id: "eid177", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 10738, duration: 12 },
                { id: "eid222", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 16149, duration: 45 },
                { id: "eid226", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 16489, duration: 11 },
                { id: "eid256", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 17873, duration: 40 },
                { id: "eid262", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 18223, duration: 27 },
                { id: "eid274", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 19133, duration: 35 },
                { id: "eid277", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 19533, duration: 35 },
                { id: "eid281", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 20253, duration: 40 },
                { id: "eid287", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 20473, duration: 22 },
                { id: "eid302", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 21102, duration: 40 },
                { id: "eid301", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 21322, duration: 22 },
                { id: "eid308", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 22015, duration: 40 },
                { id: "eid307", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 22235, duration: 22 },
                { id: "eid313", tween: [ "style", "${_middle}", "opacity", '1', { fromValue: '0'}], position: 22669, duration: 40 },
                { id: "eid314", tween: [ "style", "${_middle}", "opacity", '0', { fromValue: '1'}], position: 22889, duration: 22 },
                { id: "eid338", tween: [ "style", "${_apunta_iz}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid349", tween: [ "style", "${_apunta_iz}", "opacity", '1', { fromValue: '0.000000'}], position: 6064, duration: 14 },
                { id: "eid356", tween: [ "style", "${_apunta_iz}", "opacity", '0', { fromValue: '1'}], position: 12107, duration: 40 },
                { id: "eid365", tween: [ "style", "${_bien}", "left", '219px', { fromValue: '219px'}], position: 24260, duration: 0 },
                { id: "eid333", tween: [ "style", "${_bien}", "height", '58px', { fromValue: '58px'}], position: 325, duration: 0 },
                { id: "eid26", tween: [ "style", "${_VeryHappy}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
                { id: "eid334", tween: [ "style", "${_bien}", "width", '40px', { fromValue: '40px'}], position: 325, duration: 0 },
                { id: "eid357", tween: [ "style", "${_pocketlft}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "left", '152px', { fromValue: '152px'}], position: 24543, duration: 0 },
                { id: "eid342", tween: [ "style", "${_whatLeft}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid346", tween: [ "style", "${_whatLeft}", "opacity", '1', { fromValue: '0.000000'}], position: 4001, duration: 10 },
                { id: "eid350", tween: [ "style", "${_whatLeft}", "opacity", '0', { fromValue: '1'}], position: 6064, duration: 14 },
                { id: "eid330", tween: [ "style", "${_normal}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid345", tween: [ "style", "${_normal}", "opacity", '0', { fromValue: '1'}], position: 4001, duration: 10 },
                { id: "eid355", tween: [ "style", "${_normal}", "opacity", '1', { fromValue: '0.000000'}], position: 12107, duration: 40 },
                { id: "eid361", tween: [ "style", "${_normal}", "opacity", '0', { fromValue: '1'}], position: 24260, duration: 40 },
                { id: "eid317", tween: [ "style", "${__4}", "left", '100px', { fromValue: '100px'}], position: 24543, duration: 0 },
                { id: "eid341", tween: [ "style", "${_Whatright}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid23", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 770, duration: 45 },
                { id: "eid37", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 1185, duration: 65 },
                { id: "eid58", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 2198, duration: 52 },
                { id: "eid61", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 2365, duration: 45 },
                { id: "eid63", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 2770, duration: 52 },
                { id: "eid65", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 2910, duration: 43 },
                { id: "eid78", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 4011, duration: 40 },
                { id: "eid80", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 40 },
                { id: "eid88", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 5245, duration: 40 },
                { id: "eid92", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 5360, duration: 40 },
                { id: "eid95", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 5505, duration: 40 },
                { id: "eid96", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 5660, duration: 40 },
                { id: "eid114", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 7363, duration: 27 },
                { id: "eid118", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 8038, duration: 35 },
                { id: "eid125", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 8393, duration: 35 },
                { id: "eid129", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 8743, duration: 45 },
                { id: "eid194", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 12886, duration: 40 },
                { id: "eid198", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 13211, duration: 39 },
                { id: "eid202", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 13495, duration: 45 },
                { id: "eid206", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 13620, duration: 45 },
                { id: "eid210", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 13760, duration: 45 },
                { id: "eid213", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 14877, duration: 40 },
                { id: "eid217", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 15750, duration: 39 },
                { id: "eid221", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 16149, duration: 45 },
                { id: "eid242", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 17333, duration: 40 },
                { id: "eid246", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 17433, duration: 67 },
                { id: "eid252", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 17678, duration: 40 },
                { id: "eid255", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 17873, duration: 40 },
                { id: "eid270", tween: [ "style", "${_O}", "opacity", '1', { fromValue: '0'}], position: 18778, duration: 40 },
                { id: "eid273", tween: [ "style", "${_O}", "opacity", '0', { fromValue: '1'}], position: 19133, duration: 35 },
                { id: "eid319", tween: [ "style", "${_VeryHappy}", "left", '150px', { fromValue: '150px'}], position: 24543, duration: 0 },
                { id: "eid335", tween: [ "style", "${_biender}", "opacity", '0', { fromValue: '0'}], position: 325, duration: 0 },
                { id: "eid321", tween: [ "style", "${_middle}", "left", '152px', { fromValue: '152px'}], position: 24543, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 460, duration: 45 },
                { id: "eid41", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 40 },
                { id: "eid47", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 1628, duration: 40 },
                { id: "eid100", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 6078, duration: 35 },
                { id: "eid106", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 6883, duration: 40 },
                { id: "eid186", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 11538, duration: 40 },
                { id: "eid190", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 12651, duration: 35 },
                { id: "eid214", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 14877, duration: 40 },
                { id: "eid218", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 15750, duration: 39 },
                { id: "eid278", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 19533, duration: 35 },
                { id: "eid282", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 20258, duration: 40 },
                { id: "eid291", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 20702, duration: 48 },
                { id: "eid299", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 21102, duration: 40 },
                { id: "eid300", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 21546, duration: 48 },
                { id: "eid305", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 22015, duration: 40 },
                { id: "eid306", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 22459, duration: 48 },
                { id: "eid312", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '0', { fromValue: '1'}], position: 22669, duration: 40 },
                { id: "eid311", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "opacity", '1', { fromValue: '0'}], position: 23113, duration: 48 },
                { id: "eid29", tween: [ "style", "${_Happy}", "top", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Eyes_and_mouths_expressions_set}", "top", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_sin_brazos_ni_boca2}", "opacity", '0', { fromValue: '1'}], position: 505, duration: 45 },
                { id: "eid7", tween: [ "style", "${_sin_brazos_ni_boca2}", "opacity", '1', { fromValue: '0'}], position: 770, duration: 45 },
                { id: "eid9", tween: [ "style", "${_sin_brazos_ni_boca2}", "opacity", '0', { fromValue: '1'}], position: 2055, duration: 45 },
                { id: "eid11", tween: [ "style", "${_sin_brazos_ni_boca2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 45 },
                { id: "eid318", tween: [ "style", "${_sin_brazos_ni_boca2}", "left", '100px', { fromValue: '100px'}], position: 24543, duration: 0 },
                { id: "eid28", tween: [ "style", "${_middle}", "top", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
                { id: "eid322", tween: [ "style", "${_O}", "left", '170px', { fromValue: '170px'}], position: 24543, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 1733, duration: 17 },
                { id: "eid54", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 2058, duration: 42 },
                { id: "eid69", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 3040, duration: 45 },
                { id: "eid72", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 3516, duration: 40 },
                { id: "eid84", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 4990, duration: 10 },
                { id: "eid87", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 5245, duration: 40 },
                { id: "eid91", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 5360, duration: 40 },
                { id: "eid93", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 5505, duration: 40 },
                { id: "eid94", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 5660, duration: 40 },
                { id: "eid99", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 6078, duration: 35 },
                { id: "eid109", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 7095, duration: 43 },
                { id: "eid113", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 7363, duration: 27 },
                { id: "eid119", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 8038, duration: 35 },
                { id: "eid122", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 8160, duration: 45 },
                { id: "eid135", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 8858, duration: 35 },
                { id: "eid139", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 9223, duration: 27 },
                { id: "eid146", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 9835, duration: 35 },
                { id: "eid151", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 10048, duration: 35 },
                { id: "eid176", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 10738, duration: 12 },
                { id: "eid181", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 11028, duration: 40 },
                { id: "eid189", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 12651, duration: 35 },
                { id: "eid193", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 12886, duration: 40 },
                { id: "eid197", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 13211, duration: 39 },
                { id: "eid201", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 13495, duration: 45 },
                { id: "eid205", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 13620, duration: 45 },
                { id: "eid209", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 13760, duration: 45 },
                { id: "eid225", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 16489, duration: 11 },
                { id: "eid230", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 16825, duration: 45 },
                { id: "eid234", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 16910, duration: 40 },
                { id: "eid238", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 40 },
                { id: "eid245", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 17433, duration: 67 },
                { id: "eid251", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 17678, duration: 40 },
                { id: "eid261", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 18223, duration: 27 },
                { id: "eid266", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 18403, duration: 45 },
                { id: "eid286", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 20478, duration: 22 },
                { id: "eid290", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 20702, duration: 48 },
                { id: "eid303", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 21322, duration: 22 },
                { id: "eid304", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 21546, duration: 48 },
                { id: "eid309", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 22235, duration: 22 },
                { id: "eid310", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 22459, duration: 48 },
                { id: "eid315", tween: [ "style", "${_Happy}", "opacity", '1', { fromValue: '0'}], position: 22889, duration: 22 },
                { id: "eid316", tween: [ "style", "${_Happy}", "opacity", '0', { fromValue: '1'}], position: 23113, duration: 48 },
                { id: "eid13", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_pantalla_3}', [] ], ""], position: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-698536");
