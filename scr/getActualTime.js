let runState = false;
function getActualTime() {
	if (runState == false)
  	return;
  console.log("Read time");
  $.get("ActualTime.htm")
    .done(function(data) {
      //const tags = data.split("\n");
      //var date = parseDate(tags[0]);
      //var time = parseTod(tags[1]);
      //$("#actual-date-time").text(date + " - " + time.getHours() + ":" + time.getMinutes());
      setTimeout(getActualTime, 1000);
      })
    .catch(function(){
        console.log("Failed to get time from PLC");
      	setTimeout(getActualTime, 4000);        
  });
};

 function runGetTime(url){
 	runState = true;
    getActualTime();
 }
  function stopGetTime(){
 	runState = false;
 }