import { login, navigationBar } from "../support/pages/index";
import { createUser, User } from "../support/tasks/createUser.task";
import { createUserAndlogin } from "../support/tasks/login.task";

describe("Logout", () => {
  it("User is able successfully logout", () => {
    createUserAndlogin();
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/search");
    cy.get(navigationBar.account).click();
    cy.get(navigationBar.logout).click();
    cy.get(navigationBar.login).should("exist");
  });
});
