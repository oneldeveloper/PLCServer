function loadTimeProgramSetModule(zone, name){
    $(zone).load('elements/TimeProgramSetModule.htm', function(){
        $(zone + " .zone-name").text(name);
        $(zone +" .button-confirm-program").click(function() {
            console.log($(zone +" .on1-hours").val());
            console.log($(zone +" .on1-minutes").val());
            console.log($(zone +" .off1-hours").val());
            console.log($(zone +" .off1-minutes").val());
            console.log($(zone +" .on2-hours").val());
            console.log($(zone +" .on2-minutes").val());
            console.log($(zone +" .off2-hours").val());
            console.log($(zone +" .off2-minutes").val());
            var validationResult = validateZoneTimeProgram(
              $(zone +" .on1-hours").val(),
              $(zone +" .on1-minutes").val(),
              $(zone +" .off1-hours").val(),
              $(zone +" .off1-minutes").val(),
              $(zone +" .on2-hours").val(),
              $(zone +" .on2-minutes").val(),
              $(zone +" .off2-hours").val(),
              $(zone +" .off2-minutes").val()
            );
            if (validationResult === "valid") {
              var result = buildTodForPLC(
                $(zone +" .on1-hours").val(),
                $(zone +" .on1-minutes").val(),
                $(zone +" .off1-hours").val(),
                $(zone +" .off1-minutes").val(),
                $(zone +" .on2-hours").val(),
                $(zone +" .on2-minutes").val(),
                $(zone +" .off2-hours").val(),
                $(zone +" .off2-minutes").val()
              );
              console.log($(zone+ " .program-enabled").is(":checked") ? 1 : 0);
              var tags = {
                '"WebDataIn".ProgramTime.Zone1On1': result.PLCTodOn1,
                '"WebDataIn".ProgramTime.Zone1Off1': result.PLCTodOff1,
                '"WebDataIn".ProgramTime.Zone1On2': result.PLCTodOn2,
                '"WebDataIn".ProgramTime.Zone1Off2': result.PLCTodOff2,
                '"WebDataIn".ProgramTime.Zone1Enabled': $(zone+ " .program-enabled").is(":checked") ? 1 : 0
              };
              writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
            } else alert(validationResult);
        });
    });	
}

function loadTimeProgramSummaryModule(zone, name){
    $(zone).load('elements/TimeProgramResumeModule.htm', function(){
        $(zone + " .zone-name").text(name);
    });	
}
