export default function addToggleSwitchEvents(toggleswitch, checkedFunction, uncheckedFunction)
{
    toggleswitch.bind('change', function(){
        if($(this).is(':checked')){
            checkedFunction($(this).closest("[id]").attr('id'));
        }
        else 
            uncheckedFunction($(this).closest("[id]").attr('id'));
    });
}