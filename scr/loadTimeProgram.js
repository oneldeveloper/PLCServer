function loadTimeProgramSetModule(zone, name){
    $(zone).load('elements/TimeProgramSetModule.htm', function(){
        $(zone + " .zone-name").text(name);
        $(zone +" .button-confirm-program").click(function() {
            console.log($(this) + "pressed");
        });
    });	
}

function loadTimeProgramSummaryModule(zone, name){
    $(zone).load('elements/TimeProgramResumeModule.htm', function(){
        $(zone + " .zone-name").text(name);
    });	
}