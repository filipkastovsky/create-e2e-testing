import { Page } from "puppeteer"

export const withScreenshotFactory = (
  page: Page,
  path = `tests/temp/${Date.now()}.png`
) => (assertion: Function) =>
  (async () => {
    try {
      await assertion()
    } catch (err) {
      await page.screenshot({ path })
      throw err
    }
  })()

export type WithScreenshotFactoryType = typeof withScreenshotFactory
export type WithScreenshotType = ReturnType<WithScreenshotFactoryType>
