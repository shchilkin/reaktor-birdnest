import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // component: {
  //   screenshotOnRunFailure: false,
  //   video: false,
  //   devServer: {
  //     framework: "next",
  //     bundler: "webpack",
  //   },
  // },
});
