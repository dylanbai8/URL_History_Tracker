// popup.js

document.addEventListener('DOMContentLoaded', () => {
  let urlList = document.getElementById('url-list');
  let copyAlert = document.getElementById('copy-alert');

  chrome.storage.local.get({urlHistory: []}, (result) => {
    let urlHistory = result.urlHistory;
    urlHistory.forEach((url) => {
      let listItem = document.createElement('li');
      let displayUrl = url.length > 60 ? url.substring(0, 60) + '...' : url;
      listItem.textContent = displayUrl;
      listItem.title = url; // 显示完整的URL作为提示
      listItem.addEventListener('click', () => {
        navigator.clipboard.writeText(url).then(() => {
          copyAlert.style.display = 'block';
          setTimeout(() => {
            copyAlert.style.display = 'none';
          }, 2000);
        });
      });
      urlList.appendChild(listItem);
    });
  });
});
