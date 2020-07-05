import { withScreenshotFactory, WithScreenshotType } from './withScreenshot';
import puppeteer, { Browser, Page } from 'puppeteer';

export type SetupScenarioType = () => Promise<
  [Browser, Page, WithScreenshotType]
>;

export const setupScenarioDesktop: SetupScenarioType = async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { height: 1080, width: 1920 },
    headless: true,
  });
  const page = await browser.newPage();
  const withScreenshot = withScreenshotFactory(page);

  return [browser, page, withScreenshot];
};

export const setupScenarioMobile: SetupScenarioType = async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      height: 640,
      width: 320,
      hasTouch: true,
      isMobile: true,
    },
    headless: true,
  });
  const page = await browser.newPage();
  const withScreenshot = withScreenshotFactory(page);

  return [browser, page, withScreenshot];
};

const scenariosMap = {
  mobile: setupScenarioMobile,
  desktop: setupScenarioDesktop,
};

type ScenarioType = keyof typeof scenariosMap;

export const setupScenario = async (type: ScenarioType) => scenariosMap[type]();
