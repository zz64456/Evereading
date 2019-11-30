// chrome.browserAction.onClicked.addListener(function(tab) {  
//     chrome.tabs.executeScript({  
//         code: 'document.body.style.backgroundColor="red"'  
//     });  
// });

var canvas = document.createElement("canvas");  
var cover = document.getElementsByClassName("coverBorder");  
canvas.id = "canvasLaLa2016";  
cover[0].appendChild(canvas);  

var button = document.createElement("div");  
button.id = "snow-button";  
cover[0].appendChild(button);