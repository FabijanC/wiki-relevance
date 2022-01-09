const langNumber = document.getElementsByClassName("interlanguage-link mw-list-item").length + 1;
chrome.runtime.sendMessage({ langNumber: langNumber.toString() });
