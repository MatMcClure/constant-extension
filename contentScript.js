/*
DO NOT EDIT ANY CODE IN THIS FILE. When testing your code we will recompile yours with the original contentScript.js.

Video walkthrough: https://vimeo.com/923628666

Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js

Rules: 
You can only change one file: this background.js file. 
No DOM manipulation allowed such as overriding document.visibilityState.
When testing your code we will use the original files and only update the background.js file.

Testing: Use this site for easy testing https://ai-stealth-challenge.web.app

Hint: The solution is only a few lines of code.
*/

function start() {
    // This function is called when the extension is now running on the webpage
    console.log("contentScript.js started")

    // Initialize list to contain logged timestamps
    let loggedTimestamps = [new Date()]

    // Get output list element
    const outputList = document.getElementById("output-stream-list")

    // Get status element
    const statusElement = document.getElementById("status")

    const log = () => {
        // Grab the current visibility state
        const visibilityState = document.visibilityState
        const isTabActive = visibilityState === 'visible'
        if (!isTabActive) {
            // Tab is not active, do not log
            return
        }

        // Get current local time 
        const now = new Date()

        // Set threshold for gap
        const threshold = 1400 // with error margin

        // Check if last timestamp was too long ago
        const lastDiff = now - loggedTimestamps[loggedTimestamps.length - 1]
        if (lastDiff > threshold) {
            // Create new list item and prepend to list
            const listItem = document.createElement("li")
            listItem.appendChild(document.createTextNode(`Tab not visible for ${lastDiff / 1000} seconds! :(`))
            outputList.prepend(listItem)
        }

        // Create new list item and prepend to list
        const logText = `${visibilityState} ${now.toLocaleTimeString()}`
        const listItem = document.createElement("li")
        listItem.appendChild(document.createTextNode(logText))
        outputList.prepend(listItem)

        // Log timestamp
        loggedTimestamps.push(now)

        // Determine if the logged timestamps have been continuous (ie. no gapps greater than threshold)
        let success = true
        for (let i = 1; i < loggedTimestamps.length; i++) {
            const diff = loggedTimestamps[i] - loggedTimestamps[i - 1]

            if (diff > threshold) {
                success = false
                break
            }
        }

        // Set status
        statusElement.innerText = success ? "Tab has always been active :)" : "Tab became inactive :("
        statusElement.style.color = success ? "green" : "red"
    }

    // Log every second
    setInterval(log, 1000)
}

start()