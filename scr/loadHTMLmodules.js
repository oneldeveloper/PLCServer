function loadMonitorValveModule(zone, name, image, valveNumber){
    $(zone).load('elements/SingleHomepageModule.htm', function(){
        $(zone + " .item-image").attr("src", image);
        $(zone + " .item-name").text(name);
        $(zone + " .item-off").hide();
        $(zone + " .item-on").hide();
        $(zone + " .manual-valve").load('toggleswitch.htm', function(){
            $(zone + ' .manual-valve .toggleswitch').bind('change', function(){
                if($(this).is(':checked')){
                    commnadValveManually(valveNumber, 1);
                }
                else 
                    commnadValveManually(valveNumber, 0);
            });
        }).hide();
        $(zone + " .manual-parameters").hide();
        $(zone + " .button-confirm-parameters").bind('click', function(){
            var pressure = $(zone + ' .pressure-setting').val();
            var speed = $(zone + ' .speed-setting').val();
            sendPressureSpeedToPLC(pressure, speed, valveNumber);
        });
    });	
}

