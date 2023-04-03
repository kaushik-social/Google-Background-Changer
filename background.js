chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    const { message } = response

    if(message === "open-new-tab") {
        chrome.tabs.create({ url: "https://www.google.com"})
    }
})