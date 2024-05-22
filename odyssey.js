/**
 * library.js
 * This file should be named uniquely for each boat
 * and contain unique information about each boat
 * 
 * v.2.0.1
 * 
 * author: lsaroukos <info@lsaroukos.gr>
 */

/**
 * crew details definition
 */
const LS_AUTOCOMPLETE_CREW = [
    {   //saroukos ioannis
        surname: "SAROUKOS",
        fname:  "IOANNIS",
        sex:    "Male",
        nationality: "GR",
        birthdate: "22/06/1966"
    },
    {   //gidas apostolos
        surname: "GIDAS",
        fname:  "APOSTOLOS",
        sex:    "Male",
        nationality: "GR",
        birthdate: "19/05/1984"
    },
    {   //goupios panagiotis
        surname: "GOUPIOS",
        fname:  "PANAGIOTIS",
        sex:    "Male",
        nationality: "GR",
        birthdate: "11/08/1999"
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

document.addEventListener( 'DOMContentLoaded',()=>{
    /**
     * loads main code file, implementing library constants
     */
    (function loadMainCode(){
        // Create a new script element
        var script = document.createElement('script');

        // Set the source attribute to the relative path of the external JavaScript file in the same directory
        script.src = 'https://cdn.lsaroukos.gr/scripts/eenth/AutoComplete.js';

        // Append the script element to the HTML document
        document.head.appendChild(script);

    })()

});