import { Page } from 'puppeteer';

export const interceptJs = async (page: Page) => {
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.resourceType() === 'script') request.abort();
    else request.continue();
  });
};
