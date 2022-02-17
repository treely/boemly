import type { NextRouter } from "next/router";

export const DEFAULT_USE_ROUTER_RETURN_VALUE: NextRouter = {
  asPath: "/",
  back: jest.fn(),
  basePath: "",
  beforePopState: jest.fn(),
  events: {
    emit: jest.fn(),
    off: jest.fn(),
    on: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isPreview: false,
  isReady: true,
  pathname: "/",
  prefetch: jest.fn(),
  push: jest.fn(),
  query: {},
  reload: jest.fn(),
  replace: jest.fn(),
  route: "/",
  defaultLocale: "en",
  domainLocales: [],
  locale: "en",
  locales: ["en", "de"],
};
