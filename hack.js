document.addEventListener( 'DOMContentLoaded',()=>{

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

    function getTodayTime(timestr){
        let date = new Date();
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

    function changeETDLastPort(){
        let inp = document.getElementById('FormElements_ETD_from_last_port_');
        if( inp===null || inp.value===""  ){
            $('#FormElements_ETD_from_last_port_').val(getTodayTime('10:00'));
        }else{
            setTimeout(()=>{
                changeETDLastPort();
            }, 3000);
        
        }
    }

    //step 1: switch 24hours on
    switchOn('Forms_A1_Port_');
    
    //step 2: click viewBtn to open declarationGroupTabs 
    if( document.querySelector('#FormElements_Port_of_call_').value==="" ){
        //open tabs content
        if( document.querySelector('#declarationGroupTabs').children.length===0 )
            $(".A1_Port.viewBtn").trigger('click');
        else{
            if( document.querySelector('#declarationGroupTabs').children.length===1 ){
                //or fill if already open
                $('#FormElements_ETA_port_of_call_').val(getTodayTime('13:00'));
                $('#FormElements_ETD_port_of_call_').val(getTodayTime('14:00'));
                $('#FormElements_Number_of_persons_on_board_').val(130);
                
                ($('#FormElements_Port_of_call_').append('<option value="6789" data-select2-id="58">Kalymnos (GRKMI)</option>')).val('6789').trigger('change');
                ($('#FormElements_Last_port_').append('<option value="6824" data-select2-id="19">Kos (GRKGS)</option>')).val('6824').trigger('change');
                switchOn('Forms_PAX_A_');
                $(".PAX_A.viewBtn").trigger('click');
            }else{

                setTimeout(()=>{
                    changeETDLastPort();
                }, 3000);
               
            }
        }
    }
    
            
    
 });