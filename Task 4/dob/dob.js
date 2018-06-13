 
 $(document).ready(function(){
    
    var year = new Date().getFullYear()-10;


    $("#datepicker").datepicker({
      dateFormat : 'dd-mm-yy',
      constrainInput: true,
      changeMonth:true,
      changeYear:true,
      yearRange:'1900:' + year ,
      maxDate:'-10y'  /*new Date(year + '-12-31') */
     // showOn:'button',
     // buttonImage: 'http://jqueryui.com/resources/demos/datepicker/images/calendar.gif'
     });

    });


 $('.open-datepicker').click(function(event){
    event.preventDefault();
    $('#datepicker').focus();
});

   
