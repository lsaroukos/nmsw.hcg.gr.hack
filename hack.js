document.addEventListener( 'DOMContentLoaded',()=>{



    const FIELD_IDS = {
        from  : '#FormElements_Port_of_call_',
        to    : '#FormElements_Next_port_',
        arrived_time :  "#FormElements_ATA_port_of_call_",
        estimated_departure_time   : "#FormElements_ETD_port_of_call_",
        departure_time   : "#FormElements_ATD_port_of_call_",
        estimated_arrival_time   : "#FormElements_ETA_to_next_port_",
        total_people : "#FormElements_Number_of_persons_on_board_"
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


    function setSelectField( field_id, port ){
        ($(FIELD_IDS[field_id]).append(PORTS[port]['option'])).val(PORTS[port]['id']).trigger('change');
    }


    function toKalymnos(){
        //choose harbor 
        setSelectField( 'from', 'kos' );
        //choose destination harbor 
        setSelectField( 'to', 'kalymnos' );

        //set arrived time
        $(FIELD_IDS['arrived_time']).val(getDateTime('17:15', true));
        //set estimated departure time
        $(FIELD_IDS['estimated_departure_time']).val(getDateTime('10:15'));
        //set exact departure time
        $(FIELD_IDS['departure_time']).val(getDateTime('10:15'));
        //set estimated arrival time to next port
        $(FIELD_IDS['estimated_arrival_time']).val(getDateTime('13:15'));        
        //set total people
        $(FIELD_IDS['total_people']).val(parseTotalPeople());        
    }
        
    function toPserimos(){
        //choose harbor 
        setSelectField( 'from', 'kalymnos' );
        //choose destination harbor 
        setSelectField( 'to', 'pserimos' );
        
        //set arrived time
        $(FIELD_IDS['arrived_time']).val(getDateTime('13:15'));
        //set estimated departure time
        $(FIELD_IDS['estimated_departure_time']).val(getDateTime('14:15'));
        //set exact departure time
        $(FIELD_IDS['departure_time']).val(getDateTime('14:10'));
        //set estimated arrival time to next port
        $(FIELD_IDS['estimated_arrival_time']).val(getDateTime('15:15'));        
        //set total people
        $(FIELD_IDS['total_people']).val(parseTotalPeople());        
    }
    
    function toKos(){
        //choose harbor 
        setSelectField( 'from', 'pserimos' );
        //choose destination harbor 
        setSelectField( 'to', 'kos' );
        
        //set arrived time
        $(FIELD_IDS['arrived_time']).val(getDateTime('15:05'));
        //set estimated departure time
        $(FIELD_IDS['estimated_departure_time']).val(getDateTime('16:10'));
        //set exact departure time
        $(FIELD_IDS['departure_time']).val(getDateTime('16:05'));
        //set estimated arrival time to next port
        $(FIELD_IDS['estimated_arrival_time']).val(getDateTime('17:15'));        
        //set total people
        $(FIELD_IDS['total_people']).val(parseTotalPeople());        
    }   
            
    addButton("to Kos", toKos);
    addButton("to Pserimos", toPserimos);
    addButton("to Kalymnos", toKalymnos);

 });