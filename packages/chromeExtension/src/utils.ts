// src/utils.ts
import { browser } from 'webextension-polyfill-ts';

export const getCurrentTab = async () => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  return tabs[0];
};
