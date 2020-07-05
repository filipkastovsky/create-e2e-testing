import { Browser, Page } from 'puppeteer';
import { WithScreenshotType } from '../../utils/withScreenshot';
import { setupScenario } from '../../utils/setupScenario';

describe('404 page', () => {
  const root = (global as any).__BASE_URL__ as string;
  let page: Page;
  let withScreenshot: WithScreenshotType;
  let browser: Browser;

  beforeEach(async () => {
    [browser, page, withScreenshot] = await setupScenario('desktop');
    await page.goto(root);
  });

  afterEach(async () => browser && (await browser.close()));

  it('should display 404 on unknown path', () =>
    withScreenshot(async () => {
      await page.goto(`${root}/some-shit-path`);
      await page.waitForXPath("//h1[contains(., '404')]");
    }));
});
