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
    scaleToFit: "both",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'normal',
                type: 'image',
                rect: ['109px', '211px','30px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"normal.png",'0px','0px']
            },
            {
                id: 'right',
                type: 'image',
                rect: ['21px', '211px','39px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
            },
            {
                id: 'look',
                type: 'image',
                rect: ['114px', '170px','128px','98px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"32.png",'0px','0px']
            },
            {
                id: 'body',
                type: 'image',
                rect: ['0', '0','150px','556px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: 'Serious',
                type: 'image',
                rect: ['52px', '162px','52px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Eyes%20and%20mouths%20expressions%20set.png",'0px','0px']
            },
            {
                id: 'Wow',
                type: 'image',
                rect: ['71px', '162px','13px','18px','auto', 'auto'],
                opacity: 0.034188034188034,
                fill: ["rgba(0,0,0,0)",im+"42.png",'0px','0px']
            },
            {
                id: 'happy_very_smile',
                type: 'image',
                rect: ['48px', '161px','56px','24px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'middle_smile',
                type: 'image',
                rect: ['48px', '162px','56px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'smile',
                type: 'image',
                rect: ['48px', '162px','56px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'pantalla_2',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/pantalla_2.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Wow}": [
                ["style", "top", '162px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71px'],
                ["style", "width", '13px']
            ],
            "${_normal}": [
                ["style", "top", '211px'],
                ["style", "height", '147px'],
                ["style", "opacity", '1'],
                ["style", "left", '109px'],
                ["style", "width", '30px']
            ],
            "${_smile}": [
                ["style", "top", '162px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '48px'],
                ["style", "width", '56px']
            ],
            "${_look}": [
                ["style", "top", '170px'],
                ["style", "opacity", '0'],
                ["style", "left", '114px']
            ],
            "${_Serious}": [
                ["style", "top", '162px'],
                ["style", "height", '18px'],
                ["style", "opacity", '1'],
                ["style", "left", '52px'],
                ["style", "width", '52px']
            ],
            "${_right}": [
                ["style", "top", '211px'],
                ["style", "height", '147px'],
                ["style", "left", '21px'],
                ["style", "width", '39px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ],
            "${_happy_very_smile}": [
                ["style", "top", '161px'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '48px'],
                ["style", "width", '56px']
            ],
            "${_middle_smile}": [
                ["style", "top", '162px'],
                ["style", "height", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '48px'],
                ["style", "width", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9837,
            autoPlay: true,
            timeline: [
                { id: "eid42", tween: [ "style", "${_Wow}", "top", '157px', { fromValue: '162px'}], position: 2930, duration: 443 },
                { id: "eid46", tween: [ "style", "${_Wow}", "top", '162px', { fromValue: '157px'}], position: 3373, duration: 388 },
                { id: "eid18", tween: [ "style", "${_middle_smile}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 375 },
                { id: "eid23", tween: [ "style", "${_middle_smile}", "opacity", '0', { fromValue: '1'}], position: 1125, duration: 375 },
                { id: "eid35", tween: [ "style", "${_middle_smile}", "opacity", '1', { fromValue: '0'}], position: 2134, duration: 398 },
                { id: "eid36", tween: [ "style", "${_middle_smile}", "opacity", '0', { fromValue: '1'}], position: 2532, duration: 398 },
                { id: "eid57", tween: [ "style", "${_middle_smile}", "opacity", '1', { fromValue: '0'}], position: 4514, duration: 398 },
                { id: "eid58", tween: [ "style", "${_middle_smile}", "opacity", '0', { fromValue: '1'}], position: 4912, duration: 398 },
                { id: "eid50", tween: [ "style", "${_middle_smile}", "opacity", '1', { fromValue: '0'}], position: 5856, duration: 500 },
                { id: "eid51", tween: [ "style", "${_middle_smile}", "opacity", '0', { fromValue: '1'}], position: 6356, duration: 500 },
                { id: "eid39", tween: [ "style", "${_Wow}", "width", '13px', { fromValue: '13px'}], position: 2984, duration: 0 },
                { id: "eid53", tween: [ "style", "${_smile}", "opacity", '1', { fromValue: '0'}], position: 6356, duration: 500 },
                { id: "eid54", tween: [ "style", "${_smile}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500 },
                { id: "eid71", tween: [ "style", "${_smile}", "opacity", '1', { fromValue: '0'}], position: 8818, duration: 500 },
                { id: "eid14", tween: [ "style", "${_Serious}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 750 },
                { id: "eid47", tween: [ "style", "${_Serious}", "opacity", '0', { fromValue: '1'}], position: 4149, duration: 1128 },
                { id: "eid5", tween: [ "style", "${_happy_very_smile}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_happy_very_smile}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_happy_very_smile}", "opacity", '0.01', { fromValue: '1'}], position: 1500, duration: 500 },
                { id: "eid61", tween: [ "style", "${_happy_very_smile}", "opacity", '1', { fromValue: '0.000000'}], position: 7500, duration: 540 },
                { id: "eid62", tween: [ "style", "${_happy_very_smile}", "opacity", '0.01', { fromValue: '1'}], position: 8040, duration: 540 },
                { id: "eid79", tween: [ "style", "${_normal}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 150 },
                { id: "eid81", tween: [ "style", "${_normal}", "opacity", '1', { fromValue: '0.000000'}], position: 5856, duration: 250 },
                { id: "eid41", tween: [ "style", "${_Wow}", "height", '24px', { fromValue: '18px'}], position: 2984, duration: 388 },
                { id: "eid45", tween: [ "style", "${_Wow}", "height", '18px', { fromValue: '24px'}], position: 3373, duration: 388 },
                { id: "eid37", tween: [ "style", "${_Wow}", "left", '71px', { fromValue: '71px'}], position: 2984, duration: 0 },
                { id: "eid73", tween: [ "style", "${_look}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 150 },
                { id: "eid75", tween: [ "style", "${_look}", "opacity", '0', { fromValue: '1'}], position: 5856, duration: 250 },
                { id: "eid29", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 430 },
                { id: "eid32", tween: [ "style", "${_Wow}", "opacity", '0', { fromValue: '1'}], position: 1930, duration: 204 },
                { id: "eid33", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '0.000000'}], position: 2532, duration: 398 },
                { id: "eid34", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '1'}], position: 2930, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Wow}", "opacity", '0', { fromValue: '1'}], position: 3761, duration: 388 },
                { id: "eid48", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '0.000000'}], position: 5277, duration: 829 },
                { id: "eid49", tween: [ "style", "${_Wow}", "opacity", '0', { fromValue: '1'}], position: 6106, duration: 394 },
                { id: "eid56", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 430 },
                { id: "eid60", tween: [ "style", "${_Wow}", "opacity", '0', { fromValue: '1'}], position: 7430, duration: 388 },
                { id: "eid63", tween: [ "style", "${_Wow}", "opacity", '1', { fromValue: '0.000000'}], position: 8318, duration: 263 },
                { id: "eid64", tween: [ "style", "${_Wow}", "opacity", '0', { fromValue: '1'}], position: 8581, duration: 237 },
                { id: "eid24", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_pantalla_2}', [] ], ""], position: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-32530462");
