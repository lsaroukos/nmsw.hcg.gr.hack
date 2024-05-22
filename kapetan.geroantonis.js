/**
 * index.js
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
    {   //
		surname: "ANTHOULIS",
		fname:  "DIMITRIOS",
		sex:    "Male",
		nationality: "GR",
		birthdate: "20/01/1963"
	},
	{   //
		surname: "ANTHOPOULOU",
		fname:  "KIDONIA",
		sex:    "Female",
		nationality: "GR",
		birthdate: "03/08/1986"
	},
	{   //
		surname: "NTRITSOS",
		fname:  "ILIAS",
		sex:    "Male",
		nationality: "GR",
		birthdate: "04/02/1985"
	},

];


/**
 * boat trips definition
 */
const LS_AUTOCOMPLETE_TRIPS = [
    {   //to pserimos
        title: 'to pserimos',
        from: 'kos',
        to: 'pserimos',
        arrived_time : { time: '17:00', yesterday: true },
        estimated_departure_time : { time: '10:15'},
        departure_time : { time: '10:15'},
        estimated_arrival_time : { time: '11:15'},
        total_people : 0
    },
    {
        //to kalymnos
        title: 'to kalymnos',
        from: 'pserimos',
        to: 'kalymnos',
        arrived_time : { time: '11:15', yesterday: true },
        estimated_departure_time : { time: '12:15'},
        departure_time : { time: '12:15'},
        estimated_arrival_time : { time: '13:00'},
        total_people : 0
    },
    
    {   //to kos
        title: 'to kos',
        from: 'kalymnos',
        to: 'kos',
        arrived_time : { time: '13:00', yesterday: true },
        estimated_departure_time : { time: '14:30'},
        departure_time : { time: '14:30'},
        estimated_arrival_time : { time: '17:00'},
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