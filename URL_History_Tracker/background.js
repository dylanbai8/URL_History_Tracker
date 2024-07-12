// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.storage.local.get({urlHistory: []}, (result) => {
      let urlHistory = result.urlHistory;
      urlHistory.unshift(changeInfo.url); // 添加到数组开头
      if (urlHistory.length > 5) {
        urlHistory.pop(); // 保持数组长度为5
      }
      chrome.storage.local.set({urlHistory: urlHistory});
    });
  }
});
