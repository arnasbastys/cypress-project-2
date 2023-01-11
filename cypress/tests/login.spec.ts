import { login, navigationBar } from "../support/pages/index";
import { createUser, User } from "../support/tasks/createUser.task";

describe("Login", () => {
  let createdUser: User;
  beforeEach(() => {
    createdUser = createUser();
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/login");
  });

  it("User is able successfully login", () => {
    console.log(createdUser);
    cy.get(login.email).type(createdUser.email);
    cy.get(login.password).type(createdUser.password);
    cy.get(login.loginButton).click();
    cy.get(navigationBar.account).click();
    cy.contains(createdUser.email).should("exist");
  });
});
