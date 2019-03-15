import { SingleHomePageModule, toggleswitch } from '../elements'

export default function loadMonitorValveModule(zone, name, image){
    console.log("called" + zone);
    $(zone).html(SingleHomePageModule);
    $(zone + " .item-image").attr("src", image);
    $(zone + " .item-name").text(name);
    $(zone + " .item-off").hide();
    $(zone + " .item-on").hide();
    $(zone + " .manual-valve").html(toggleswitch);
    $(zone + ' .manual-valve .toggleswitch').bind('change', function(){
        if($(this).is(':checked')){
            commnadValveManually(5, 1);
        }
        else
            commnadValveManually(5, 0);
    });
}


        /*
        $(zone + " .manual-valve").html(toggleswitch).done(function(){
            $(zone + ' .manual-valve .toggleswitch').bind('change', function(){
                if($(this).is(':checked')){
                    commnadValveManually(5, 1);
                }
                else 
                    commnadValveManually(5, 0);
            });
        }).hide();
        $(zone + " .manual-parameters").hide();
    });	*/
            

