//read PLC tags and write to html
let getIOState
function getIO() {
    if (getIOState == false)
        return;
    console.log("Read IO Tags");
    $.get("../IO.htm")
    .done( function(data) {
      const tags = data.split("\n");
      //console.log(tags);
      console.log($(".zone1.monitor .item-on"));
      show_on_off_state(tags[0].trim(), ".pump .pump-on", ".pump .pump-off", ".pump .pump-invalid");
      $("#water-pressure").text(parsePressureSpeed(tags[1].trim()));
      $("#inverter-speed").text(parsePressureSpeed(tags[2].trim()));
      show_on_off_state(
        tags[3].trim(),
        ".zone1.monitor .item-on",
        "zone1.monitor .item-off",
        ".zone1.monitor .item-invalid"
      );
      show_on_off_state(
        tags[4].trim(),
        ".zone2 .item-on",
        "zone2 .item-off",
        ".zone2 .item-invalid"
      );
      show_on_off_state(
        tags[5].trim(),
        ".zone3 .item-on",
        "zone3 .item-off",
        ".zone3 .item-invalid"
      );
      show_on_off_state(
        tags[6].trim(),
        ".zone4 .item-on",
        "zone4 .item-off",
        ".zone4 .item-invalid"
      );
      show_on_off_state(
        tags[7].trim(),
        ".zone5 .item-on",
        "zone5 .item-off",
        ".zone5 .item-invalid"
      );
      show_on_off_state(
        tags[8].trim(),
        ".zone6 .item-on",
        "zone6 .item-off",
        ".zone6 .item-invalid"
      );
      $(".pump .hour-counter-pump").text(tags[9].trim());
      $(".zone1 .hour-counter-item").text(tags[10].trim());
      $(".zone2 .hour-counter-item").text(tags[11].trim());
      $(".zone3 .hour-counter-item").text(tags[12].trim());
      $(".zone4 .hour-counter-item").text(tags[13].trim());
      $(".zone5 .hour-counter-item").text(tags[14].trim());
      $(".zone6 .hour-counter-item").text(tags[15].trim());
      $("#local-command-render-pump").text(parseAutMan(tags[16].trim()));
      $("#local-command-render-zone1").text(parseAutMan(tags[17].trim()));
      $("#local-command-render-zone2").text(parseAutMan(tags[18].trim()));
      $("#local-command-render-zone3").text(parseAutMan(tags[19].trim()));
      $("#local-command-render-zone4").text(parseAutMan(tags[20].trim()));
      $("#local-command-render-zone5").text(parseAutMan(tags[21].trim()));
      $("#local-command-render-zone6").text(parseAutMan(tags[22].trim()));
      show_alarm_state(
        tags[23].trim(),
        "#state-citcuit-breaker-image-ok",
        "#state-citcuit-breaker-image-alarm",
        "#state-citcuit-breaker-image-invalid"
      );
      show_alarm_state(
        tags[24].trim(),
        "#state-pressure-switch-image-ok",
        "#state-pressure-switch-image-alarm",
        "#state-pressure-switch-image-invalid"
      );
      show_alarm_state(
        tags[25].trim(),
        "#state-inverter-image-ok",
        "#state-inverter-image-alarm",
        "#state-inverter-image-invalid"
      );
      show_alarm_state(
        tags[26].trim(),
        "#state-pressure-sensor-image-ok",
        "#state-pressure-sensor-image-alarm",
        "#state-pressure-sensor-image-invalid"
      );
      show_alarm_state(
        tags[27].trim(),
        "#state-time-program-image-ok",
        "#state-time-program-image-alarm",
        "#state-time-program-image-invalid"
      );
      show_alarm_state(
        tags[28].trim(),
        "#state-communication-image-ok",
        "#state-communication-image-alarm",
        "#state-communication-image-invalid"
      );
      setTimeout(getIO, 1000);
    })
    .catch(function(error){
      console.log("Failed to get monitor data from PLC: "+ error);
      setTimeout(getIO, 10000);
    });
  }

  
function runGetIO(){
    getIOState = true;
    getIO();
}
function stopGetIO(){
    getIOState = false;
}