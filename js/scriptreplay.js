/*
script-replay in javascript

(C) 2011 Johannes 'josch' Schauer <j [dot] schauer [at] email [dot] de>

http://mister-muffin.de/scriptreplay/
*/


var vt, timer;
var speed = 1.0;
var stopped = false;

function Timer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}



function speed_normal(){
    if (stopped)
    {
        stopped = false;
        timer.resume();
    }
    speed = 1.0;
}

function speed_fast(){
    if (stopped)
    {
        stopped = false;
        timer.resume();
    }
    speed = speed + 2.0;
}

function speed_stop(){
    if (!stopped)
    {
        timer.pause();
        stopped = true;
    }
}



function play_file(name) {
    var request = new XMLHttpRequest();

    request.overrideMimeType("application/plaintext; charset=utf-8");
    request.open("GET", name, true);
    request.onload = function ()
    {
        data = JSON.parse(request.responseText);
        
        var cols = data["columns"] || 80;
        var rows = data["rows"] || 24;
        vt.resize(cols,rows);
        var typescript_data = data["typescript"];
        var timing_data =data["timing"];
        run_typescript(typescript_data, timing_data);
    };
    request.send();
}


function run_typescript(typescript_data, timing_data) {
  if (timer) timer.pause();
  //document.getElementById("play").textContent = "pause";
  //vt.clear();
  vt.refresh();

  var where = 0;
  var linenum = 0;
  var timings = timing_data.split("\n");
  var firstlinelen = typescript_data.indexOf("\n") + 1;
  var text = typescript_data.substr(0, firstlinelen);
  var newtext = "";
  where += firstlinelen;

  timer = new Timer(
      function() {
        vt.write(text);
        text = newtext;
        var me = arguments.callee;
        var line = timings[linenum].split(" ");
        var time = parseFloat(line[0]);
        var bytes = parseInt(line[1]);
        if (isFinite(time) && isFinite(bytes)) {
          newtext = typescript_data.substr(where, bytes);
          where += bytes;
          linenum += 1;
          timer = new Timer(me, time*1000*1/speed);
        } else {
          vt.write(typescript_data.substr(where, typescript_data.length-where));
          document.getElementById("play").textContent = "play";
        }
      }, 0);
}



