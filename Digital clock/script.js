function showTime() {
 var date = new Date();
 var h = date.getHours(); // 0 - 23
 var m = date.getMinutes(); // 0 - 59
 var s = date.getSeconds(); // 0 - 59
 var ms = date.getMilliseconds(); // 0 - 999
 var cs = Math.floor(ms / 10); // Centiseconds
 var ds = Math.floor(ms / 100); // Deciseconds
 var session = "AM";

 var day = date.getDate();
 var month = date.getMonth() + 1; // Months are 0 indexed
 var year = date.getFullYear();

 if (h == 0) {
     h = 12;
 }

 if (h > 12) {
     h = h - 12;
     session = "PM";
 }

 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;
 cs = (cs < 10) ? "0" + cs : cs;
 ds = (ds < 10) ? "0" + ds : ds;

 var time = h + ":" + m + ":" + s + ":" + cs + ds + " " + session + " - " + day + "-" + month + "-" + year;
 document.getElementById("MyClockDisplay").innerText = time;
 document.getElementById("MyClockDisplay").textContent = time;

 setTimeout(showTime, 10); // Update every 10 milliseconds
}

showTime();