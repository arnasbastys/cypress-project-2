import { navigationBar, createUserAndLoginTask } from "@pom";

describe("Logout", () => {
  it("User is able successfully logout", () => {
    createUserAndLoginTask();
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/search");
    cy.get(navigationBar.account).click();
    cy.get(navigationBar.logout).click();
    cy.get(navigationBar.login).should("exist");
  });
});
