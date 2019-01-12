/* global chrome */

let id = 100;

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.captureVisibleTab((screenshotUrl) => {
    id += 1;
    const viewTabUrl = chrome.extension.getURL(`screenshot.html?id=${id}`);
    let targetId = null;

    chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
      if (tabId !== targetId || changedProps.status !== 'complete') return;

      chrome.tabs.onUpdated.removeListener(listener);

      const views = chrome.extension.getViews();
      for (let i = 0; i < views.length; i += 1) {
        const view = views[i];
        if (view.location.href === viewTabUrl) {
          view.setScreenshotUrl(screenshotUrl);
          break;
        }
      }
    });

    chrome.tabs.create({ url: viewTabUrl }, (tab) => {
      targetId = tab.id;
    });
  });
});
