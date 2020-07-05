import { ElementHandle } from 'puppeteer';

export const getAttrString = <T extends ElementHandle>(
  elementHandle: T,
  propName: string
) =>
  elementHandle
    .getProperty(propName)
    .then((jsHandle) => jsHandle.jsonValue()) as Promise<string>;
