// public/background.js
import { browser } from 'webextension-polyfill-ts';

browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.id, {
    file: 'contentScript.js'
  });
});
