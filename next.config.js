// const withTM = require("next-transpile-modules")(["shared"]);

// module.exports = withTM({
//   reactStrictMode: true,
// });

/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer();
