//your JS code here. If required.
let userAgent = navigator.userAgent;

let regex = /(.*?)\/(.*?)\s(.*)/;

let match = regex.exec(userAgent);

let browserName = match[1];
let version = match[2];

// let div = document.createElement('div');

// div.innerHTML =  "You are using " + browserName + " version " + version;

let browserInfo = document.getElementById("browser-info");

browserInfo.innerHTML = "You are using " + browserName + " version " + version;