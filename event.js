console.log("background page ready");  

// chrome.browserAction.onClicked.addListener(function(tab) {  
//     // console.log(tab);  
//     alert("使用者在"+tab.title+ "中點擊了瀏覽器按鈕");  

// });

chrome.browserAction.onClicked.addListener(function(tab) {  
    chrome.tabs.executeScript({  
        code: 'document.body.style.backgroundColor="red"'  
    });  
});