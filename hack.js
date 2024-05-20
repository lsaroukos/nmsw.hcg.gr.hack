/**
 * hack.js
 * 
 * v.1.0.2
 * 
 * author: lsaroukos <info@lsaroukos.gr>
 */

document.addEventListener( 'DOMContentLoaded',()=>{


    const FIELDS = {
        from  : {
            id: '#FormElements_Port_of_call_',
            type: 'select2'
        },
        to    : {
            id: '#FormElements_Next_port_',
            type: 'select2'
        },
        arrived_time : {
            id: "#FormElements_ATA_port_of_call_",
        }, 
        estimated_departure_time   : { 
            id: "#FormElements_ETD_port_of_call_" 
        },
        departure_time   : { 
            id: "#FormElements_ATD_port_of_call_" 
        },
        estimated_arrival_time   : { 
            id: "#FormElements_ETA_to_next_port_" 
        },
        total_people : { 
            id: "#FormElements_Number_of_persons_on_board_" 
        },
    };

    const PORTS = {
        kos : {
            option : '<option value="6824" data-select2-id="19">Kos (GRKGS)</option>',
            id : '6824' 
        },
        kalymnos : {
            option : '<option value="6789" data-select2-id="58">Kalymnos (GRKMI)</option>',
            id : '6789' 
        },
        pserimos : {
            option : '<option value="6912" data-select2-id="19">Phserimos Dodekanisou (GRPSE)</option>',
            id : '6912' 
        },
    };


    /**
     * 
     * @param {time} timestr 
     * @returns string datetime string
     */
    function getDateTime(timestr, yesterday=false ){
        let date = new Date();
        if( yesterday )
            date.setDate( date.getDate()-1 );

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        // Pad day and month with leading zeros if they are single digits
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        let result =  day + '/' + month + '/' + year + ' ' + timestr;
        // console.log(result);
        return result;
    }
    


    function parseTotalPeople(){

        if( !document.getElementById("Passengers_DepDataTable_info") )
            return false;

        let entries = {
            passengers: document.getElementById("Passengers_DepDataTable_info").innerText,
            crew: document.getElementById("Crew_DepDataTable_info").innerText
        };
        
        return Object.values(entries).reduce(( sum, info_string )=>{
            const pattern = /(\d+)\s*εγγραφές$/;
            const match = info_string.match(pattern);
            return sum += match ? parseInt( match[1] ) : 0;
        },0);

    }

    /**
     * add custom styling rules
     */
    (function addStyling(){

        // Create a new <style> element
        var style = document.createElement('style');

        // Define the CSS rules
        var cssRules = `
            .hack-button {
                position: fixed;
                right: 20px;
                bottom: 70px;
                border: none;
                border-radius: 5px;
                padding: 5px 10px;
                background-color: forestgreen;
                display: inline-block;
                color: white;
                font-size: medium;
                box-shadow: 0 0 5px rgba(0,0,0,0.4);
                cursor: pointer;
            }
                .hack-button:active {
                    box-shadow: 0 0 2px rgba(0,0,0,0.4);                
                }
        `;

        for( let i=1; i<10; i++ ){
            cssRules += ` 
                .hack-button:nth-of-type(${i}){
                    bottom: ${ (i * 40) + 70}px;
                }
            `;
        }

        // Set the text content of the <style> element to the CSS rules
        style.textContent = cssRules;

        // Append the <style> element to the <head> of the document
        document.head.appendChild(style);
    })();


    function addButton(text="", cb_function=null){
        
        let button = document.createElement("BUTTON");
        button.setAttribute('type','button');
        //add text
        button.appendChild(document.createTextNode(text));
        
        //add styling
        button.classList.add('hack-button');
        
        //add listener
        if( cb_function!==null ){
            button.addEventListener('click',()=>{ cb_function(); });
        }

        //add button to body
        document.body.appendChild(button);
    }


    /**
     * fills a select2 field
     * 
     * @param {string} key 
     * @param {string} port 
     * 
     */
    function setSelectField( key, port ){
        ($(FIELDS[key]['id']).append(PORTS[port]['option'])).val(PORTS[port]['id']).trigger('change');
    }

   function setSimpleField( key, value ){
       $(FIELDS[key]['id']).val(value);
   }

    /**
     * 
     */
    function setTripValues( trip ){

        trip.total_people = parseTotalPeople();

        Object.keys(trip).forEach( key => {
            if( FIELDS.hasOwnProperty(key) ){
                
                //if this is a select2 field
                if( FIELDS[key].hasOwnProperty('type') && FIELDS[key]['type']==='select2' ){
                    setSelectField( key, trip[key] );
                }else{
                    setSimpleField( key, trip[key] );
                }

            }
                            
        });
    }


    const TRIPS = [
        {   //to kalymnos
            from: 'kos',
            to: 'kalymnos',
            arrived_time : getDateTime('17:15', true),
            estimated_departure_time : getDateTime('10:15'),
            departure_time : getDateTime('10:15'),
            estimated_arrival_time : getDateTime('13:15'),
            total_people : 0
        },
        {   //to pserimos
            from: 'kalymnos',
            to: 'pserimos',
            arrived_time : getDateTime('13:15', true),
            estimated_departure_time : getDateTime('14:15'),
            departure_time : getDateTime('14:10'),
            estimated_arrival_time : getDateTime('15:15'),
            total_people : 0
        },
        {   //to kos
            from: 'pserimos',
            to: 'kos',
            arrived_time : getDateTime('15:05', true),
            estimated_departure_time : getDateTime('16:10'),
            departure_time : getDateTime('16:05'),
            estimated_arrival_time : getDateTime('17:15'),
            total_people : 0
        }
    ];
            

    /**
     * 
     * @param {string} siblingId 
     */
    function switchOn( siblingId ){
        let sibling = document.getElementById(siblingId);

        if( sibling ){
            let switcher = sibling.parentElement.querySelector('.switchery');
            if( switcher.style.backgroundColor!=="rgb(52, 143, 226)" )
                $(switcher).trigger('click');
        }
    }


    (function main(){

        //step 1: click departures tab
        const dep_tab = document.querySelector('a[href="#departures"]');
        dep_tab.click();

        if( dep_tab && document.querySelectorAll('a[href="#VoyageDetails"').length===0 ){


            //step 2: switch epivainontvn apoplou
            switchOn('Forms_PAX_D_');

            //step 3: click view button
            const view_button = document.getElementById('viewElementsButton');
            if( view_button )
                view_button.click();
            //this triggers page reload
        }else{

            addButton("to Kos", ()=>{setTripValues(TRIPS[2])});
            addButton("to Pserimos", ()=>setTripValues(TRIPS[1]));
            addButton("to Kalymnos", ()=>setTripValues(TRIPS[0]));

        }

    })();

 });