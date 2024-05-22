/**
 * AutoComplete.js
 * 
 * author: lsaroukos <info@lsaroukos.gr>
 */
class AutoComplete{

    
    ACTION_DELAY_INTERVAL = 400;

    /**
     * crew details definition
     */
    CREW = [
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
    TRIPS = [
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
        
    countryMapping = {
        AF: 1, AX: 7, AL: 8, DZ: 9, AS: 10, AD: 11, AO: 12, AI: 13, AQ: 14, AG: 15, AR: 16, AM: 17, AW: 18, AU: 19, AT: 20, AZ: 21, BS: 22, BH: 23, BD: 24, BB: 25, BY: 26, BE: 27, BZ: 28, BJ: 29, BM: 30, BT: 31, BO: 32, BQ: 2, BA: 33, BW: 34, BV: 35, BR: 36, IO: 38, VG: 37, BN: 39, BG: 40, BF: 41, BI: 6, KH: 42, CM: 43, CA: 44, CV: 45, KY: 46, CF: 47, TD: 48, CL: 49, CN: 50, CX: 53, CC: 54, CO: 55, KM: 56, CG: 57, CD: 58, CK: 59, CR: 60, CI: 61, HR: 62, CU: 63, CW: 3, CY: 64, CZ: 65, DK: 66, DJ: 67, DM: 68, DO: 69, EC: 70, EG: 71, SV: 72, XX: 254, GQ: 73, ER: 74, EE: 75, ET: 76, EU: 253, FK: 77, FO: 78, FJ: 79, FI: 80, FR: 81, GF: 82, PF: 83, TF: 84, GA: 85, GM: 86, GE: 87, DE: 88, GH: 89, GI: 90, GR: 91, GL: 92, GD: 93, GP: 94, GU: 95, GT: 96, GG: 97, GN: 98, GW: 99, GY: 100, HT: 101, HM: 102, VA: 103, HN: 104, HK: 51, HU: 105, IS: 106, IN: 107, ID: 108, XZ: 4, IR: 109, IQ: 110, IE: 111, IM: 112, IL: 113, IT: 114, JM: 115, JP: 116, JE: 117, JO: 118, KZ: 119, KE: 120, KI: 121, KP: 122, KR: 123, KW: 124, KG: 125, LA: 126, LV: 127, LB: 128, LS: 129, LR: 130, LY: 131, LI: 132, LT: 133, LU: 134, MO: 52, MG: 136, MW: 137, MY: 138, MV: 139, ML: 140, MT: 141, MH: 142, MQ: 143, MR: 144, MU: 145, YT: 146, MX: 147, FM: 148, MD: 149, MC: 150, MN: 151, ME: 152, MS: 153, MA: 154, MZ: 155, MM: 156, NA: 157, NR: 158, NP: 159, NL: 160, AN: 161, NC: 162, NZ: 163, NI: 164, NE: 165, NG: 166, NU: 167, XC: 252, NF: 168, MP: 169, NO: 170, OM: 171, PK: 172, PW: 173, PS: 174, PA: 175, PG: 176, PY: 177, PE: 178, PH: 179, PN: 180, PL: 181, PT: 182, PR: 183, QA: 184, MK: 135, RE: 185, RO: 186, RU: 187, RW: 188, SH: 190, KN: 191, LC: 192, PM: 194, VC: 195, BL: 189, MF: 193, WS: 196, SM: 197, ST: 198, SA: 199, SN: 200, RS: 201, SC: 202, SL: 203, SG: 204, SX: 5, SK: 205, SI: 206, SB: 207, SO: 208, ZA: 209, GS: 210, SS: 211, ES: 212, LK: 213, SD: 214, SR: 215, SJ: 216, SZ: 217, SE: 218, CH: 219, SY: 220, TW: 221, TJ: 222, TZ: 223, TH: 224, TL: 225, TG: 226, TK: 227, TO: 228, TT: 229, TN: 230, TR: 231, TM: 232, TC: 233, TV: 234, UG: 235, UA: 236, AE: 237, GB: 238, US: 239, UY: 241, UM: 240, UZ: 242, VU: 243, VE: 244, VN: 245, VI: 246, WF: 247, EH: 248, YE: 249, ZM: 250, ZW: 251
    };
    
        sexMapping = {
            Male: 1, Female: 2
        }
    
        FIELDS = {
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
    
        PORTS = {
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
        getDateTime( timeObj ){
            const timestr = timeObj.time;
            const yesterday = timeObj.hasOwnProperty('yesterday') ? timeObj.yesterday : false;
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
        
    
    
        parseTotalPeople(){
    
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
        addStyling(){
    
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
        };
    
    
        addButton(text="", cb_function=null){
            
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
        setSelectField( key, port ){
            ($(this.FIELDS[key]['id']).append(PORTS[port]['option'])).val(PORTS[port]['id']).trigger('change');
        }
    
        setSimpleField( key, value ){
            if( key.includes('_time')  )
                value = this.getDateTime( value );

            $(this.FIELDS[key]['id']).val(value);
        }
    
        /**
         * 
         */
        setTripValues( trip ){
    
            trip.total_people = this.parseTotalPeople();
    
            Object.keys(trip).forEach( key => {
                if( this.FIELDS.hasOwnProperty(key) ){
                    
                    //if this is a select2 field
                    if( this.FIELDS[key].hasOwnProperty('type') && this.FIELDS[key]['type']==='select2' ){
                        setSelectField( key, trip[key] );
                    }else{
                        setSimpleField( key, trip[key] );
                    }
    
                }
                                
            });
        }
    
    
       
                
    
        /**
         * 
         * @param {string} siblingId 
         */
        switchOn( siblingId ){
            let sibling = document.getElementById(siblingId);
    
            if( sibling ){
                let switcher = sibling.parentElement.querySelector('.switchery');
                if( switcher.style.backgroundColor!=="rgb(52, 143, 226)" )
                    $(switcher).trigger('click');
            }
        }
    
        /**
         * 
         * @param {string} tab_link 
         * @returns 
         */
        clickTab( tab_link ){
            //remove clicked tab classes
            let open_tab = document.querySelector('#declarationGroupTabs .active.show');
            if( open_tab )
                open_tab.classList.remove("active","show");
            let open_tab_content = document.querySelector('#Crew.tab-pane.active.show');
            if( open_tab_content )
                open_tab_content.classList.remove("active","show");
    
            //click tab
            const tab = document.querySelector('a[href="#'+tab_link+'"]');
            if( tab )
                tab.click();
            return tab;
    
        }
    
        loadElement(selector, count = 0) {
            const that = this;

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let element = document.querySelector(selector);
                    if (element) {
                        resolve(element);
                    } else {
                        if (count < 10) {
                            resolve(that.loadElement(selector, count + 1));
                        } else {
                            reject(`Element with selector "${selector}" not found after ${count + 1} attempts.`);
                        }
                    }
                }, that.ACTION_DELAY_INTERVAL);
            });
        }
        
    
        /**
         * Adds the next crew member by clicking the create button and filling out the form.
         * @param {HTMLElement} create_btn - The button element to click for creating a new crew entry.
         * @param {number} index - The index of the crew member in the CREW array.
         * @returns {Promise} - A promise that resolves when the crew member is added.
         */
        addNextCrew(index=0) {
            const that = this;
            return new Promise((resolve, reject) => {
                if (index >= this.CREW.length) {
                    resolve('All crew members have been added.');
                    return;
                }
    
                //click create btn
                this.loadElement("#Crew_DepDataTable_wrapper .buttons-create").then( create_btn=>{
    
                    //after clicking the create_btn
                    create_btn.click();
    
                    let crew_member = this.CREW[index];
        
                    document.getElementById("DTE_Field_Crew_Dep_Family_name").value = crew_member.surname;
                    document.getElementById("DTE_Field_Crew_Dep_Given_name").value = crew_member.fname;
                    document.getElementById("Crew_Dep_Gender").value = this.sexMapping[crew_member.sex];
                    document.getElementById("Crew_Dep_Nationality").value = this.countryMapping[crew_member.nationality];
                    document.getElementById("DTE_Field_Crew_Dep_Date_of_birth").value = crew_member.birthdate;
        
                    // Click submit button
                    this.loadElement('.DTE_Footer .btn-primary').then(submit_btn => {
                        setTimeout(() => {
                            submit_btn.click();
                            setTimeout(()=>{resolve(that.addNextCrew( index + 1))}, that.ACTION_DELAY_INTERVAL);
                        }, that.ACTION_DELAY_INTERVAL);
                    }).catch(error => {
                        reject(`Failed to load submit button: ${error}`);
                    });
                }).catch( error=>console.log(error));
    
            });
        }
    
        /**
         * Adds all crew members and then switches to the passengers tab.
         */
        addCrewMembers() {
            // Click crew tab
            const crew_tab = this.clickTab('Crew');
            if (!crew_tab) return;
    
            this.loadElement("#Crew_DepDataTable_wrapper .buttons-create").then( create_btn => {
                return this.addNextCrew();
            }).catch(error => {
                console.error(`Error adding crew members: ${error}`);
            }).finally( ()=>{
                //handle failure
                crew_tab.classList.remove('active','show');
                document.getElementById('Crew').classList.remove('active','show');
                // Click passengers tab
                this.clickTab("Crew");
            });
        }
    


        constructor( CREW, TRIPS ){

            this.CREW = CREW;
            this.TRIPS = TRIPS;

            //add styling
            this.addStyling();
    
            //step 1: click departures tab
            const dep_tab = this.clickTab('departures');
    
            if( dep_tab && document.querySelectorAll('a[href="#VoyageDetails"').length===0 ){
    
    
                //step 2: switch epivainontvn apoplou
                this.switchOn('Forms_PAX_D_');
    
                //step 3: click view button
                const view_button = document.getElementById('viewElementsButton');
                if( view_button )
                    view_button.click();
                //this triggers page reload
            }else{
    
                this.addCrewMembers();
                let that = this;
                this.TRIPS.forEach( trip=>{
                    that.addButton(trip.title, ()=>{that.setTripValues(trip)});
                });
    
            }
    
        };

}

new AutoComplete( LS_AUTOCOMPLETE_CREW, LS_AUTOCOMPLETE_TRIPS );
