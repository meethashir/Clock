var date = new Date()
var convert = date.toDateString()
var actdate = convert.slice(0,15)
document.getElementById("date").innerText = actdate

function currentTime() {
    var date = new Date()
    var hh = date.getHours()
    var mm = date.getMinutes()
    var ss = date.getSeconds()
    var session = ""
      
     var time = hh + ":" + mm + ":" + ss + " " + session
  
    document.getElementById("time").innerText = time;
    setTimeout(function(){ currentTime() }, 1000)
  }

  
  currentTime()