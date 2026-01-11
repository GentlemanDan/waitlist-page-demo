const { metadata } = require('./metadata');

/** @typedef {import("siteSettingsInterface.ts").SiteConfig } */
const siteConfig = {
  ...metadata,

  disableAnalytics: true,
  analytics: {},
  newsletter: {},
  search: false,
};

module.exports = { siteConfig };
