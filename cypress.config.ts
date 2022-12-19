import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  const terminalReportOptions = {
    printLogsToConsole: "always",
    routeTrimLength: 50,
    printLogsToFile: "always",
    outputRoot: config.projectRoot + "/logs/",
    outputTarget: {
      "testResults.json": "json",
    },
  };

  require("cypress-terminal-report/src/installLogsPrinter")(
    on,
    terminalReportOptions
  );

  return config;
}
export default defineConfig({
  e2e: {
    baseUrl: "https://mostly.ai",
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: "cypress/tests/**/*.ts",
    supportFile: "cypress/support/e2e.ts",
    watchForFileChanges: false,
    setupNodeEvents,
  },
});
