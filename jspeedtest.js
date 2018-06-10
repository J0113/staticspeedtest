//////////////////////////////////////
/// Add this script to the end of    ///
/// your page, check the examples    ///
/// to get started, it isn' t hard   ///
//////////////////////////////////////
/// Copyright 2018 - now @J0113     ///
/// You may use this however you    ///
/// want, just add my name somewere ///
//////////////////////////////////////


/// Easies way to pass variables is by using the URL, it's plain and not secure for passwords but we are working with internetspeeds so it doesn't really matter.
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


/// Let's try and find speeds for earlier tests
var speed = getUrlVars()["s"];  ///  Internet speeds are stored in the URL under "[website]?s=[number]"
if (speed == null){	
    var speed = "0";	
}
/// var currentspeed = "currentspeed";  /// Choose an object to display the speed, I recomment selecting an object within the HTML file

document.getElementById(currentspeed).innerHTML = (speed + " Mbit/s");  ///Lets pass the speed to an object
    
/// var fileURL = "filedl/5MB.zip";     /// Choosing a file to test, I recomment selecting a file within the HTML file



var request = new XMLHttpRequest();
    
var avoidCache = "?avoidcache=" + (new Date()).getTime();;  /// We don't want to cache anything otherwise the speeds will not be correct
request.open('GET', fileURL + avoidCache, true);  /// Downloading the test file
request.responseType = "application/zip";
var startTime = (new Date()).getTime();
var endTime = startTime;
request.onreadystatechange = function () {
    if (request.readyState == 2)
    {
        startTime = (new Date().getTime());
    }
    if (request.readyState == 4)
    {
        endTime = (new Date()).getTime();
        var downloadSize = request.responseText.length;
        var time = (endTime - startTime) / 1000; /// Total time for the download
        var sizeInBits = downloadSize * 8; /// Calculate file size
        var speed = ((sizeInBits / time) / (1000 * 1000)).toFixed(2); /// Last calculation, Mbit/s
        console.log(downloadSize, time, speed);  /// Some information will be logged for developers in the console
        document.getElementById(currentspeed).innerHTML = (speed + " Mbit/s"); /// Display the tested speed on the page
        function speedtestDone();  /// If you want to do something after the speedtest is done make a "speedtestDone" fuction in your HTMl page
       
    }
}
request.send();
