//////////////////////////////////////
/// Add this script to the end of    ///
/// your page, check the examples    ///
/// to get started, it isn' t hard   ///
//////////////////////////////////////
/// Copyright 2018 - now @J0113     ///
/// You may use this however you    ///
/// want, just add my name somewere ///
//////////////////////////////////////


/// Easies way to pass variables is by using the URL, it's plain and not secure for passwords but we are working with internetspeeds so it doesnt really matter.
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
