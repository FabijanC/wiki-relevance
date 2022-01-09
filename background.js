chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.langNumber) {
            chrome.action.setBadgeText({
                "tabId": sender.tab.id,
                "text": request.langNumber
            });
        }
    }
);
