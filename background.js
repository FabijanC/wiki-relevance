/**
 * Heuristicaly designed.
 * Returns 255 - sqrt(1000 * languages) if > 0, otherwise 0
 * 
 * @param {number} languages number of languages
 * @returns color tone calculated from the number of languages
 */
function languagesToTone(languages) {
    return Math.round(Math.max(255 - Math.sqrt(1000 * languages), 0));
}

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.langNumber) {
            chrome.action.setBadgeText({
                tabId: sender.tab.id,
                text: request.langNumber
            });

            const tone = languagesToTone(request.langNumber);
            chrome.action.setBadgeBackgroundColor({
                tabId: sender.tab.id,
                color: `rgb(200, ${tone}, 50)`
            });
        }
    }
);
