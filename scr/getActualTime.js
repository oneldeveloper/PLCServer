
let getActualTimeState = false;
function getActualTime() {
	if (getActualTimeState == false)
  	return;
  console.log("Read time");
  $.get("ActualTime.htm")
    .done(function(data) {
      const tags = data.split("\n");
      var date = parseDate(tags[0]);
      var time = parseTod(tags[1]);
      $("#actual-date-time").text(date + " - " + time.getHours() + ":" + time.getMinutes());
      setTimeout(getActualTime, 10000);
      })
    .catch(function(){
        console.log("Failed to get time from PLC");
      	setTimeout(getActualTime, 10000);        
  });
};

 function runGetTime(){
    getActualTimeState = true;
    getActualTime();
 }
  function stopGetTime(){
    getActualTimeState = false;
 }