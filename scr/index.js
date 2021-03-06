import $ from "jquery";

import loadMonitorValveModule from "./loadHTMLmodules";
import {
  loadTimeProgramSetModule,
  loadTimeProgramSummaryModule
} from "./loadTimeProgram";

import * as elements from '../elements';

window.$ = $;
window.loadMonitorValveModule = loadMonitorValveModule;
window.loadTimeProgramSetModule = loadTimeProgramSetModule;
window.loadTimeProgramSummaryModule = loadTimeProgramSummaryModule;

//var plcURL = "localhost"
var plcURL = "http://172.19.8.10/awp/Irrigazione/Index.html";

//------------------------------- READING DATA FROM PLC ---------------------------------------

function getPrograms() {
  console.log("Read Programs");
  request = $.get("ProgramTime.htm", function(data) {
    tags = data.split("\n");
  });
  request.done(function() {
    var Zone1On1 = parseTod(tags[0].trim());
    var Zone1Off1 = parseTod(tags[1].trim());
    var Zone1On2 = parseTod(tags[2].trim());
    var Zone1Off2 = parseTod(tags[3].trim());
    var Zone2On1 = parseTod(tags[4].trim());
    var Zone2Off1 = parseTod(tags[5].trim());
    var Zone2On2 = parseTod(tags[6].trim());
    var Zone2Off2 = parseTod(tags[7].trim());
    var Zone3On1 = parseTod(tags[8].trim());
    var Zone3Off1 = parseTod(tags[9].trim());
    var Zone3On2 = parseTod(tags[10].trim());
    var Zone3Off2 = parseTod(tags[11].trim());
    var Zone4On1 = parseTod(tags[12].trim());
    var Zone4Off1 = parseTod(tags[13].trim());
    var Zone4On2 = parseTod(tags[14].trim());
    var Zone4Off2 = parseTod(tags[15].trim());
    var Zone5On1 = parseTod(tags[16].trim());
    var Zone5Off1 = parseTod(tags[17].trim());
    var Zone5On2 = parseTod(tags[18].trim());
    var Zone5Off2 = parseTod(tags[19].trim());
    var Zone6On1 = parseTod(tags[20].trim());
    var Zone6Off1 = parseTod(tags[21].trim());
    var Zone6On2 = parseTod(tags[22].trim());
    var Zone6Off2 = parseTod(tags[23].trim());
    var Zone1Enable = parseBool(tags[24].trim());
    var Zone2Enable = parseBool(tags[25].trim());
    var Zone3Enable = parseBool(tags[26].trim());
    var Zone4Enable = parseBool(tags[27].trim());
    var Zone5Enable = parseBool(tags[28].trim());
    var Zone6Enable = parseBool(tags[29].trim());
    var mondayEnable = parseBool(tags[30].trim());
    var tuesdayEnable = parseBool(tags[31].trim());
    var wednesdayEnable = parseBool(tags[32].trim());
    var thursdayEnable = parseBool(tags[33].trim());
    var fridayEnable = parseBool(tags[34].trim());
    var saturdayEnable = parseBool(tags[35].trim());
    var sundayEnable = parseBool(tags[36].trim());

    $(".zone1 .on1-hours-render").text(Zone1On1.getHours());
    $(".zone1 .on1-minutes-render").text(Zone1On1.getMinutes());
    $(".zone1 .off1-hours-render").text(Zone1Off1.getHours());
    $(".zone1 .off1-minutes-render").text(Zone1Off1.getMinutes());
    $(".zone1 .on2-hours-render").text(Zone1On2.getHours());
    $(".zone1 .on2-minutes-render").text(Zone1On2.getMinutes());
    $(".zone1 .off2-hours-render").text(Zone1Off2.getHours());
    $(".zone1 .off2-minutes-render").text(Zone1Off2.getMinutes());

    $(".zone2 .on1-hours-render").text(Zone2On1.getHours());
    $(".zone2 .on1-minutes-render").text(Zone2On1.getMinutes());
    $(".zone2 .off1-hours-render").text(Zone2Off1.getHours());
    $(".zone2 .off1-minutes-render").text(Zone2Off1.getMinutes());
    $(".zone2 .on2-hours-render").text(Zone2On2.getHours());
    $(".zone2 .on2-minutes-render").text(Zone2On2.getMinutes());
    $(".zone2 .off2-hours-render").text(Zone2Off2.getHours());
    $(".zone2 .off2-minutes-render").text(Zone2Off2.getMinutes());

    $(".zone3 .on1-hours-render").text(Zone3On1.getHours());
    $(".zone3 .on1-minutes-render").text(Zone3On1.getMinutes());
    $(".zone3 .off1-hours-render").text(Zone3Off1.getHours());
    $(".zone3 .off1-minutes-render").text(Zone3Off1.getMinutes());
    $(".zone3 .on2-hours-render").text(Zone3On2.getHours());
    $(".zone3 .on2-minutes-render").text(Zone3On2.getMinutes());
    $(".zone3 .off2-hours-render").text(Zone3Off2.getHours());
    $(".zone3 .off2-minutes-render").text(Zone3Off2.getMinutes());

    $(".zone4 .on1-hours-render").text(Zone4On1.getHours());
    $(".zone4 .on1-minutes-render").text(Zone4On1.getMinutes());
    $(".zone4 .off1-hours-render").text(Zone4Off1.getHours());
    $(".zone4 .off1-minutes-render").text(Zone4Off1.getMinutes());
    $(".zone4 .on2-hours-render").text(Zone4On2.getHours());
    $(".zone4 .on2-minutes-render").text(Zone4On2.getMinutes());
    $(".zone4 .off2-hours-render").text(Zone4Off2.getHours());
    $(".zone4 .off2-minutes-render").text(Zone4Off2.getMinutes());

    $(".zone5 .on1-hours-render").text(Zone5On1.getHours());
    $(".zone5 .on1-minutes-render").text(Zone5On1.getMinutes());
    $(".zone5 .off1-hours-render").text(Zone5Off1.getHours());
    $(".zone5 .off1-minutes-render").text(Zone5Off1.getMinutes());
    $(".zone5 .on2-hours-render").text(Zone5On2.getHours());
    $(".zone5 .on2-minutes-render").text(Zone5On2.getMinutes());
    $(".zone5 .off2-hours-render").text(Zone5Off2.getHours());
    $(".zone5 .off2-minutes-render").text(Zone5Off2.getMinutes());

    $(".zone6 .on1-hours-render").text(Zone6On1.getHours());
    $(".zone6 .on1-minutes-render").text(Zone6On1.getMinutes());
    $(".zone6 .off1-hours-render").text(Zone6Off1.getHours());
    $(".zone6 .off1-minutes-render").text(Zone6Off1.getMinutes());
    $(".zone6 .on2-hours-render").text(Zone6On2.getHours());
    $(".zone6 .on2-minutes-render").text(Zone6On2.getMinutes());
    $(".zone6 .off2-hours-render").text(Zone6Off2.getHours());
    $(".zone6 .off2-minutes-render").text(Zone6Off2.getMinutes());
    //var log = JSON.stringify(tags[24])
    $(".zone1 .enabled-render").text(Zone1Enable);
    $(".zone2 .enabled-render").text(Zone2Enable);
    $(".zone3 .enabled-render").text(Zone3Enable);
    $(".zone4 .enabled-render").text(Zone4Enable);
    $(".zone5 .enabled-render").text(Zone5Enable);
    $(".zone6 .enabled-render").text(Zone6Enable);

    $("#week-program-monday-render").text(mondayEnable);
    $("#week-program-tuesday-render").text(tuesdayEnable);
    $("#week-program-wednesday-render").text(wednesdayEnable);
    $("#week-program-thursday-render").text(thursdayEnable);
    $("#week-program-friday-render").text(fridayEnable);
    $("#week-program-saturday-render").text(saturdayEnable);
    $("#week-program-sunday-render").text(sundayEnable);
  });
}
//read PLC tags and write to html
function updateIO() {
  console.log("Read IO Tags");
  request = $.get("IO.htm", function(data) {
    tags = data.split("\n");
  });
  request.done(function() {
    show_on_off_state(tags[0].trim(), "#pump-on", "#pump-off", "#pump-invalid");
    $("#water-pressure").text(parsePressureSpeed(tags[1].trim()));
    $("#inverter-speed").text(parsePressureSpeed(tags[2].trim()));
    show_on_off_state(
      tags[3].trim(),
      ".zone1 .valve-on",
      "zone1 .valve-off",
      ".zone1 .valve-invalid"
    );
    show_on_off_state(
      tags[4].trim(),
      ".zone2 .valve-on",
      "zone2 .valve-off",
      ".zone2 .valve-invalid"
    );
    show_on_off_state(
      tags[5].trim(),
      ".zone3 .valve-on",
      "zone3 .valve-off",
      ".zone3 .valve-invalid"
    );
    show_on_off_state(
      tags[6].trim(),
      ".zone4 .valve-on",
      "zone4 .valve-off",
      ".zone4 .valve-invalid"
    );
    show_on_off_state(
      tags[7].trim(),
      ".zone5 .valve-on",
      "zone5 .valve-off",
      ".zone5 .valve-invalid"
    );
    show_on_off_state(
      tags[8].trim(),
      ".zone6 .valve-on",
      "zone6 .valve-off",
      ".zone6 .valve-invalid"
    );
    $("#hour-counter-pump").text(tags[9].trim());
    $(".zone1 .hour-counter-valve").text(tags[10].trim());
    $(".zone2 .hour-counter-valve").text(tags[11].trim());
    $(".zone3 .hour-counter-valve").text(tags[12].trim());
    $(".zone4 .hour-counter-valve").text(tags[13].trim());
    $(".zone5 .hour-counter-valve").text(tags[14].trim());
    $(".zone6 .hour-counter-valve").text(tags[15].trim());
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
  });
}

function getSettings() {
  console.log("read Settings");
  request = $.get("Settings.htm", function(data) {
    tags = data.split("\n");
    console.log(tags);
  });
  request.done(function() {
    var email = tags[0].trim();
    var emailEnable = tags[1].trim();
    console.log(email);
    console.log(emailEnable);
  });
}

function getActualTime() {
  console.log("Read time");
  $.get("ActualTime.htm")
    .done(function(data) {
      const tags = data.split("\n");
      var date = parseDate(tags[0]);
      var time = parseTod(tags[1]);
      $("#actual-date-time").text(date + " - " + time.getHours() + ":" + time.getMinutes())})
    .catch(function(){
        console.log("Failed to get time from PLC");
  });
}

//-------------------------------- WRITING DATA TO PLC ---------------------------------------
function writeTagsToPLC(url, tags, fail_callback, success_callback) {
  $.ajax({
    type: "POST",
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
    },
    datatype: "text",
    data: tags,
    success: success_callback,
    error: fail_callback
  });
}
function writePLCFail() {
  alert("Scrittura PLC fallita");
}
function writePLCSuccess() {
  //alert("Scrittura PLC eseguita correttamente");
}
function delayedGetPLCPrograms() {
  setTimeout(getPrograms(), 1000);
}

function delayedGetPLCSettings() {
  setTimeout(getSettings(), 1000);
}

function delayedGetActualTime() {
  setTimeout(getActualTime(), 2000);
}
//------------------------------- PARSING DATA FROM PLC --------------------------------------
function parsePressureSpeed(value) {
  if ($.isNumeric(value) == false) return "N.A.";
  return value;
}

function parseTod(plcTod) {
  var t = plcTod.substr(4);
  var comp = t.split(":");
  var h = comp[0];
  var m = comp[1];
  var tod;
  if (Number(h) == NaN || Number(m) == NaN)
    tod = new Date(Date.UTC(0, 0, 0, 0, 0, 0, 0));
  else tod = new Date(Date.UTC(0, 0, 0, h, m, 0, 0));
  var tz = tod.getTimezoneOffset() * 60000;
  tod = new Date(tod.getTime() + tz);
  return tod;
}
function parseBool(bool) {
  if (bool == "1") return "Abilitata";
  else if (bool == "0") return "Disabilitata";
  else return "N.A.";
}
function parseAutMan(bool) {
  if (bool == "1") return "Manuale";
  else if (bool == "0") return "Automatico";
  else return "N.A.";
}

function parseDate(date) {
  var d = date.substr(2);
  var comp = d.split("-");
  return comp[2] + "/" + comp[1] + "/" + comp[0];
}

//--------------------------------- CONVERT DATA FROM PLC -------------------------------------
//select image for on off state of plc variable
function show_on_off_state(state, on, off, invalid) {
  if (state == 0) {
    $(off).show();
    $(on).hide();
    $(invalid).hide();
  } else if (state == 1) {
    $(on).show();
    $(invalid).hide();
    $(off).hide();
  } else {
    $(invalid).show();
    $(on).hide();
    $(off).hide();
  }
}

//select image for on off state of plc variable
function show_alarm_state(state, ok, alarm, invalid) {
  if (state == 0) {
    $(ok).show();
    $(alarm).hide();
    $(invalid).hide();
  } else if (state == 1) {
    $(alarm).show();
    $(invalid).hide();
    $(ok).hide();
  } else {
    $(invalid).show();
    $(ok).hide();
    $(alarm).hide();
  }
}

//-------------------------------- VALIDATE DATA FOR PLC --------------------------------------
function validateZoneTimeProgram(on1_h, on1_m, off1_h, off1_m, on2_h, on2_m, off2_h, off2_m) {
  var result1 = validateTimeMessage(on1_h, on1_m, off1_h, off1_m);
  var result2 = validateTimeMessage(on2_h, on2_m, off2_h, off2_m);
  if (result1 === "empty")
    return "I campi Accensione1 e Spegnimento1 non possono essere vuoti";
  if (result1 === "valid") {
    if (result2 === "valid") {
      var off1 = new Date(0, 0, 0, off1_h, off1_m, 0, 0);
      var on2 = new Date(0, 0, 0, on2_h, on2_m, 0, 0);
      if (on2 - off1 < 0)
        return "Il ciclo 2 non puÃ² avviarsi prima del termine del ciclo 1";
      return "valid";
    } else if (result2 === "empty") return "valid";
    return result2;
  } else return result1;
}

function validateTimeMessage(hours_on, minutes_on, hours_off, minutes_off) {
  if (
    hours_on == "" &&
    minutes_on == "" &&
    hours_off == "" &&
    minutes_off == ""
  )
    return "empty";
  if ($.isNumeric(hours_on) == false || $.isNumeric(minutes_on) == false)
    return "Orario Accensione non corretto";
  if ($.isNumeric(hours_off) == false || $.isNumeric(minutes_off) == false)
    return "Orario Spegnimento non corretto";
  if (hours_on < 0 || hours_on > 23 || (hours_off < 0 || hours_off > 23))
    return "Il campo delle ore dev'essere compreso tra 0 e 23";
  if (
    minutes_on < 0 ||
    minutes_on > 59 ||
    (minutes_off < 0 || minutes_off > 59)
  )
    return "Il campo dei minuti dev'essere compreso tra 0 e 59";
  var on = new Date(0, 0, 0, hours_on, minutes_on, 0, 0);
  var off = new Date(0, 0, 0, hours_off, minutes_off, 0, 0);
  if (off - on < 0)
    return "L'orario di spegnimento non puÃ² essere antecedente a quello di accensione";
  return "valid";
}

function validateTime(hours, minutes) {
  if ($.isNumeric(hours) == false || $.isNumeric(minutes) == false)
    return "Inserire un ora valida";
  if (hours < 0 || hours > 23)
    return "Il campo delle ore dev'essere compreso tra 0 e 23";
  if (minutes < 0 || minutes > 59)
    return "Il campo dei minuti dev'essere compreso tra 0 e 59";
  return "valid";
}

function validateDate(date) {
  var parseResult = moment(date, "DD/MM/YYYY", true).isValid();
  if (parseResult == false) return "Formato data non corretto GG/MM/AAAA";
  return "valid";
}

//--------------------------------- PREPARE DATA FOR PLC ---------------------------------------
function buildTodForPLC( on1_h, on1_m, off1_h, off1_m, on2_h, on2_m, off2_h, off2_m) {
  var on1 = new Date(0, 0, 0, on1_h, on1_m, 0, 0);
  var off1 = new Date(0, 0, 0, off1_h, off1_m, 0, 0);
  var on2 = new Date(0, 0, 0, on2_h, on2_m, 0, 0);
  var off2 = new Date(0, 0, 0, off2_h, off2_m, 0, 0);
  var timeProgram = {
    PLCTodOn1: "TOD#" + on1.getHours() + ":" + on1.getMinutes() + ":00",
    PLCTodOff1: "TOD#" + off1.getHours() + ":" + off1.getMinutes() + ":00",
    PLCTodOn2: "TOD#" + on2.getHours() + ":" + on2.getMinutes() + ":00",
    PLCTodOff2: "TOD#" + off2.getHours() + ":" + off2.getMinutes() + ":00"
  };
  return timeProgram;
}

function buildTimeForPLC(hours, minutes) {
  return "TOD#" + hours + ":" + minutes + ":00";
}

function buildDateForPLC(date) {
  var split = date.split("/");
  return "D#" + split[2] + "-" + split[1] + "-" + split[0];
}

function commnadValveManually(valve, state) {
  var tag = [
    '"WebDataIn".ManualEnable.Valve1',
    '"WebDataIn".ManualEnable.Valve2',
    '"WebDataIn".ManualEnable.Valve3',
    '"WebDataIn".ManualEnable.Valve4',
    '"WebDataIn".ManualEnable.Valve5',
    '"WebDataIn".ManualEnable.Valve6'
  ];
  const v = tag[valve];
  writeTagsToPLC(plcURL, { [v]: state }, writePLCFail, writePLCSuccess);
}

//---------------------------------ENTRY POINT ----------------------------------------------
$(document).ready(function() {

  $("#week-program").html(elements.weekcheckbox);
/*
    loadMonitorValveModule(".zone1.monitor", "Zona 1", "img/endvalve.png");	
    loadMonitorValveModule(".zone2.monitor", "Zona 2", "img/endvalve.png");	
    loadMonitorValveModule(".zone3.monitor", "Zona 3", "img/endvalve.png");	
    loadMonitorValveModule(".zone4.monitor", "Zona 4", "img/endvalve.png");	
    loadMonitorValveModule(".zone5.monitor", "Zona 5", "img/endvalve.png");	
    loadMonitorValveModule(".zone6.monitor", "Zona 6", "img/endvalve.png");							

    loadTimeProgramSetModule(".zone1.time-set", "Zona 1");
    loadTimeProgramSetModule(".zone2.time-set", "Zona 2");
    loadTimeProgramSetModule(".zone3.time-set", "Zona 3");
    loadTimeProgramSetModule(".zone4.time-set", "Zona 4");
    loadTimeProgramSetModule(".zone5.time-set", "Zona 5");
    loadTimeProgramSetModule(".zone6.time-set", "Zona 6");

    loadTimeProgramSummaryModule(".zone1.time-summary", "Zona 1");
    loadTimeProgramSummaryModule(".zone2.time-summary", "Zona 2");
    loadTimeProgramSummaryModule(".zone3.time-summary", "Zona 3");
    loadTimeProgramSummaryModule(".zone4.time-summary", "Zona 4");
    loadTimeProgramSummaryModule(".zone5.time-summary", "Zona 5");
    loadTimeProgramSummaryModule(".zone6.time-summary", "Zona 6");						
*/
    $(".zone1.monitor").text("testo di prova");
  //var tags = [];
  let activeTab = 0;
  let IOintervalId = 0;
  //let DateTimeId = setInterval(getActualTime, 10000);

  $.ajaxSetup({ cache: false });

  //----------------------LOAD MANUAL BUTTONS--------------------------
  /*
  (function() {
    $("#manual-enable").load("elements/toggleswitch.htm", function() {
      $("#manual-enable .toggleswitch").bind("change", function() {
        if ($(this).is(":checked")) {
          $(".manual-valve").show();
        } else {
          var s = $(".manual-valve .toggleswitch:checkbox:checked").length;
          if (s > 0) {
            alert("Ci sono dei comandi manuali ancora abilitati");
            $(this).prop("checked", true);
            return;
          }
          $(".manual-valve").hide();
        }
      });
    });
  })();
  (function() {
    $("#parameters-enable").load("elements/toggleswitch.htm", function() {
      $("#parameters-enable .toggleswitch").bind("change", function() {
        if ($(this).is(":checked")) {
          $(".manual-parameters").show();
        } else {
          $(".manual-parameters").hide();
        }
      });
    });
  })();
*/
  //load tabs and set events
  /*
  $(function() {
    var $tabs = $("#tabs").tabs({
      create: function(e, tab) {
        //on create control set activeTab to 0 (by default the tab start in page 0)
        activeTab = 0;
        IOintervalId = setInterval(updateIO, 1000); //Start also monitor activity
      },
      beforeActivate: function(e, tab) {
        //When activate another tab fire this event

        activeTab = tab.newTab.index(); //get the tab index
        if (activeTab == 0) {
          IOintervalId = setInterval(updateIO, 1000); //if in the monitor tab, activate monitor function
          console.log("set");
        } else {
          clearInterval(IOintervalId); //else deactivate monitor function
          console.log("clear");
        }
        if (activeTab == 1) {
          getPrograms();
        }
        if (activeTab == 2) {
          getSettings();
        }
      }
    });
  });
  */
  //----------------------CONFIRM WEEK PROGRAM--------------------------
  $("#button-confirm-week-program").click(function() {
    var monday = $("#monday-checkbox").is(":checked") ? "1" : "0";
    var tuesday = $("#tuesday-checkbox").is(":checked") ? "1" : "0";
    var wednesday = $("#wednesday-checkbox").is(":checked") ? "1" : "0";
    var thursday = $("#thursday-checkbox").is(":checked") ? "1" : "0";
    var friday = $("#friday-checkbox").is(":checked") ? "1" : "0";
    var saturday = $("#saturday-checkbox").is(":checked") ? "1" : "0";
    var sunday = $("#sunday-checkbox").is(":checked") ? "1" : "0";
    var tags = {
      '"WebDataIn".ProgramTime.EnableMonday': monday,
      '"WebDataIn".ProgramTime.EnableTuesday': tuesday,
      '"WebDataIn".ProgramTime.EnableWednesday': wednesday,
      '"WebDataIn".ProgramTime.EnableThursday': thursday,
      '"WebDataIn".ProgramTime.EnableFriday': friday,
      '"WebDataIn".ProgramTime.EnableSaturday': saturday,
      '"WebDataIn".ProgramTime.EnableSunday': sunday
    };
    writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
  });
/*
  $("#button-confirm-date-program").click(function() {
    var startDate = $("#start-date-program").val();
    var endDate = $("#end-date-program").val();
    console.log(startDate);
    console.log(endDate);
    var resultParseStartDate = validateDate(startDate);
    var resultParseEndDate = validateDate(endDate);
    if (resultParseStartDate === "valid") {
      if (validateDate(endDate) === "valid") {
        if (moment(endDate).isBefore(startDate) == true) {
          alert(
            "La data di inizio programma deve essere antecedente la data di fine"
          );
          return;
        }
        var startDateForPLC = buildDateForPLC(startDate);
        var endDateForPLC = buildDateForPLC(endDate);
        var tags = {
          '"WebDataIn".ProgramTime.DateStartProgram': startDateForPLC,
          '"WebDataIn".ProgramTime.DateEndProgram': endDateForPLC
        };
        console.log(tags);
        writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
      } else alert(resultParseEndDate);
      return;
    } else {
      alert(resultParseStartDate);
      return;
    }
  });
*/
  $(".button-confirm-program").click(function() {
    //var zone = $(this).closest("tr").attr("class");
    //console.log(zone);
    console.log("button-confirm-program pressed");
    var validationResult = validateZoneTimeProgram(
      $("#zone1-on1-hours").val(),
      $("#zone1-on1-minutes").val(),
      $("#zone1-off1-hours").val(),
      $("#zone1-off1-minutes").val(),
      $("#zone1-on2-hours").val(),
      $("#zone1-on2-minutes").val(),
      $("#zone1-off2-hours").val(),
      $("#zone1-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone1-on1-hours").val(),
        $("#zone1-on1-minutes").val(),
        $("#zone1-off1-hours").val(),
        $("#zone1-off1-minutes").val(),
        $("#zone1-on2-hours").val(),
        $("#zone1-on2-minutes").val(),
        $("#zone1-off2-hours").val(),
        $("#zone1-off2-minutes").val()
      );
      console.log($("#zone1-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone1On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone1Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone1On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone1Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone1Enabled': $("#zone1-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  $("#button-confirm-zone2-program").click(function() {
    var validationResult = validateZoneTimeProgram(
      $("#zone2-on1-hours").val(),
      $("#zone2-on1-minutes").val(),
      $("#zone2-off1-hours").val(),
      $("#zone2-off1-minutes").val(),
      $("#zone2-on2-hours").val(),
      $("#zone2-on2-minutes").val(),
      $("#zone2-off2-hours").val(),
      $("#zone2-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone2-on1-hours").val(),
        $("#zone2-on1-minutes").val(),
        $("#zone2-off1-hours").val(),
        $("#zone2-off1-minutes").val(),
        $("#zone2-on2-hours").val(),
        $("#zone2-on2-minutes").val(),
        $("#zone2-off2-hours").val(),
        $("#zone2-off2-minutes").val()
      );
      console.log($("#zone2-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone2On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone2Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone2On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone2Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone2Enabled': $("#zone2-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  $("#button-confirm-zone3-program").click(function() {
    var validationResult = validateZoneTimeProgram(
      $("#zone3-on1-hours").val(),
      $("#zone3-on1-minutes").val(),
      $("#zone3-off1-hours").val(),
      $("#zone3-off1-minutes").val(),
      $("#zone3-on2-hours").val(),
      $("#zone3-on2-minutes").val(),
      $("#zone3-off2-hours").val(),
      $("#zone3-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone3-on1-hours").val(),
        $("#zone3-on1-minutes").val(),
        $("#zone3-off1-hours").val(),
        $("#zone3-off1-minutes").val(),
        $("#zone3-on2-hours").val(),
        $("#zone3-on2-minutes").val(),
        $("#zone3-off2-hours").val(),
        $("#zone3-off2-minutes").val()
      );
      console.log($("#zone3-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone3On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone3Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone3On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone3Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone3Enabled': $("#zone3-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  $("#button-confirm-zone4-program").click(function() {
    var validationResult = validateZoneTimeProgram(
      $("#zone4-on1-hours").val(),
      $("#zone4-on1-minutes").val(),
      $("#zone4-off1-hours").val(),
      $("#zone4-off1-minutes").val(),
      $("#zone4-on2-hours").val(),
      $("#zone4-on2-minutes").val(),
      $("#zone4-off2-hours").val(),
      $("#zone4-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone4-on1-hours").val(),
        $("#zone4-on1-minutes").val(),
        $("#zone4-off1-hours").val(),
        $("#zone4-off1-minutes").val(),
        $("#zone4-on2-hours").val(),
        $("#zone4-on2-minutes").val(),
        $("#zone4-off2-hours").val(),
        $("#zone4-off2-minutes").val()
      );
      console.log($("#zone4-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone4On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone4Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone4On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone4Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone4Enabled': $("#zone4-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  $("#button-confirm-zone5-program").click(function() {
    var validationResult = validateZoneTimeProgram(
      $("#zone5-on1-hours").val(),
      $("#zone5-on1-minutes").val(),
      $("#zone5-off1-hours").val(),
      $("#zone5-off1-minutes").val(),
      $("#zone5-on2-hours").val(),
      $("#zone5-on2-minutes").val(),
      $("#zone5-off2-hours").val(),
      $("#zone5-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone5-on1-hours").val(),
        $("#zone5-on1-minutes").val(),
        $("#zone5-off1-hours").val(),
        $("#zone5-off1-minutes").val(),
        $("#zone5-on2-hours").val(),
        $("#zone5-on2-minutes").val(),
        $("#zone5-off2-hours").val(),
        $("#zone5-off2-minutes").val()
      );
      console.log($("#zone5-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone5On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone5Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone5On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone5Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone5Enabled': $("#zone5-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  $("#button-confirm-zone6-program").click(function() {
    var validationResult = validateZoneTimeProgram(
      $("#zone6-on1-hours").val(),
      $("#zone6-on1-minutes").val(),
      $("#zone6-off1-hours").val(),
      $("#zone6-off1-minutes").val(),
      $("#zone6-on2-hours").val(),
      $("#zone6-on2-minutes").val(),
      $("#zone6-off2-hours").val(),
      $("#zone6-off2-minutes").val()
    );
    if (validationResult === "valid") {
      var result = buildTodForPLC(
        $("#zone6-on1-hours").val(),
        $("#zone6-on1-minutes").val(),
        $("#zone6-off1-hours").val(),
        $("#zone6-off1-minutes").val(),
        $("#zone6-on2-hours").val(),
        $("#zone6-on2-minutes").val(),
        $("#zone6-off2-hours").val(),
        $("#zone6-off2-minutes").val()
      );
      console.log($("#zone6-enabled").is(":checked") ? 1 : 0);
      var tags = {
        '"WebDataIn".ProgramTime.Zone6On1': result.PLCTodOn1,
        '"WebDataIn".ProgramTime.Zone6Off1': result.PLCTodOff1,
        '"WebDataIn".ProgramTime.Zone6On2': result.PLCTodOn2,
        '"WebDataIn".ProgramTime.Zone6Off2': result.PLCTodOff2,
        '"WebDataIn".ProgramTime.Zone6Enabled': $("#zone6-enabled").is(
          ":checked"
        )
          ? 1
          : 0
      };
      writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCPrograms);
    } else alert(validationResult);
  });

  //--------------------------SETTINGS BUTTONS------------------------------

  $("#button-email-submit").click(function() {
    var email = $("#email-recipe").val();
    var emailEnable = $("#email-enable").is(":checked") ? 1 : 0;
    console.log(email);
    console.log(emailEnable);
    var tags = {
      '"WebDataIn".Settings.Email': email,
      '"WebDataIn".Settings.EmailEnable': emailEnable
    };
    writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetPLCSettings);
  });
  $("#button-date-time-set-submit").click(function() {
    var date = $("#date-set").val();
    var time = $("#time-set-hours").val() + ":" + $("#time-set-minutes").val();
    var validateDateResult = validateDate(date);
    var validateTimeResult = validateTime(
      $("#time-set-hours").val(),
      $("#time-set-minutes").val()
    );
    if (validateDateResult === "valid") {
      if (validateTimeResult === "valid") {
        var dateForPLC = buildDateForPLC(date);
        tod = new Date(
          Date.UTC(
            0,
            0,
            0,
            $("#time-set-hours").val(),
            $("#time-set-minutes").val(),
            0,
            0
          )
        );
        var tz = tod.getTimezoneOffset() * 60000;
        tod = new Date(tod.getTime() + tz);
        var timeForPLC = buildTimeForPLC(tod.getHours(), tod.getMinutes());
        var tags = {
          '"WebDataIn".Settings.NewActualDate': dateForPLC,
          '"WebDataIn".Settings.NewActualTime': timeForPLC,
          '"WebDataIn".Settings.ConfirmChangeCurrentTime': 1
        };
        console.log(tags);
        writeTagsToPLC(plcURL, tags, writePLCFail, delayedGetActualTime);
      } else {
        alert(validateTimeResult);
        return;
      }
    } else {
      alert(validateDateResult);
      return;
    }
  });
});
