function loadMonitorValveModule(zone, name, image){
    console.log("called");
    $(zone).load('elements/SingleHomepageModule.htm', function(){
        $(zone + " .item-image").attr("src", image);
        $(zone + " .item-name").text(name);
        $(zone + " .item-off").hide();
        $(zone + " .item-on").hide();
        $(zone + " .manual-valve").load('toggleswitch.htm', function(){
            $(zone + ' .manual-valve .toggleswitch').bind('change', function(){
                if($(this).is(':checked')){
                    commnadValveManually(5, 1);
                }
                else 
                    commnadValveManually(5, 0);
            });
        }).hide();
        $(zone + " .manual-parameters").hide();
    });	
}

