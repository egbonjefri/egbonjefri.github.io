$(document).ready(function() {

    //Elements to loop through
    let elem = $('.message');
    //Start at 0
    i = 0;
    
    function getMessage() {
        
        //Loop through elements
        $(elem).each( function(index) {
            
            if ( i == index ) {
                //Show active element
                $(this).show();
            } else if ( i == $(elem).length ) {
                //Show message
                $(this).show();
                //Reset i lst number is reached
                i = 0;
            } else {
                //Hide all non active elements
                $(this).hide();
            }
            
        });
        
        i++;
    
    }
    
    //Run once the first time
    getMessage();
    
    //Repeat
    window.setInterval(getMessage, 500);
    $('#projects').on('click', function(event) {

        $("#projects").animate({"scrollTop": $("#projects").scrollTop() + 100});
      });
      $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
      });
});