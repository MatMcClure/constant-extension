/* 
This is the background script for the extension, it runs in the background of the browser.

Video walkthrough: https://vimeo.com/923628666

Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js

Rules: 
You can only change one file: this background.js file. 
No DOM manipulation allowed such as overriding document.visibilityState.
When testing your code we will use the original files and only update the background.js file.

Testing: Use this site for easy testing https://ai-stealth-challenge.web.app

Hint: The solution is only a few lines of code.
*/

console.log("background.js running") // background console logs can be found by inspecting the extension in chrome://extensions > developer mode > then click on "service worker" > then go to console

/* YOUR CODE BELOW THIS LINE :) */  
// function to send a message to the contentScript to keep track of time
function sendMessageToContentScript(tabId) {
  chrome.tabs.sendMessage(tabId, { message: "keepTrackOfTime" });
}

// set up an interval to check the active tab and send messages to the contentSript
setInterval(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    tabs.forEach(tab => {
      sendMessageToContentScript(tab.id);
    });
  });
}, 1000);