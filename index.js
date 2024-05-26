/**
 * library.js
 * This file should be named uniquely for each boat
 * and contain unique information about each boat
 * 
 * v.2.0.3
 * 
 * author: lsaroukos <info@lsaroukos.gr>
 */

/**
 * crew details definition
 */
const LS_AUTOCOMPLETE_CREW = [
    {   //
        surname: "TEST",
        fname:  "TEST NAME",
        sex:    "Male",
        nationality: "GR",
        birthdate: "01/01/1990"
    },
    {   //
        surname: "TESTTWO",
        fname:  "TESTTWO NAME",
        sex:    "Female",
        nationality: "GR",
        birthdate: "02/02/1992"
    },

];


/**
 * boat trips definition
 */
const LS_AUTOCOMPLETE_TRIPS = [
    {   //to kalymnos
        title: 'to kalymnos',
        from: 'kos',
        to: 'kalymnos',
        arrived_time : {
            time: '17:15',
            yesterday: true
        },
        estimated_departure_time : { time: '10:15'},
        departure_time : { time: '10:15'},
        estimated_arrival_time : { time: '13:15'},
        total_people : 0
    },
    {   //to pserimos
        title: 'to pserimos',
        from: 'kalymnos',
        to: 'pserimos',
        arrived_time : { time: '13:15', yesterday: true },
        estimated_departure_time : { time: '14:15'},
        departure_time : { time: '14:10'},
        estimated_arrival_time : { time: '15:15'},
        total_people : 0
    },
    {   //to kos
        title: 'to kos',
        from: 'pserimos',
        to: 'kos',
        arrived_time : { time: '15:05', yesterday: true },
        estimated_departure_time : { time: '16:10'},
        departure_time : { time: '16:05'},
        estimated_arrival_time : { time: '17:15'},
        total_people : 0
    }
];

//load code
document.addEventListener('DOMContentLoaded',()=>{(function loadMainCode(){var script=document.createElement('script');script.src='https://cdn.lsaroukos.gr/scripts/eenth/AutoComplete.js';document.head.appendChild(script)})()});