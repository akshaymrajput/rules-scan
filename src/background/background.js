// Listen for changes in tab URL
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.sendMessage(tabId, { type: "updateProductData" });
  }
});

// Listen for messages from contentScript
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "checkURLChange") {
    // Check URL changes when requested by content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "updateProductData" });
      }
    });
  }
});
