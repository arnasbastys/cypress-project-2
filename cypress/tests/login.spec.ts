import { loginPage, registerUserTask, User, navigationBar } from "@pom";

describe("Login", () => {
  let registeredUser: User;
  beforeEach(() => {
    registeredUser = registerUserTask();
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/login");
  });

  it("User is able successfully login", () => {
    console.log(registeredUser);
    cy.get(loginPage.email).type(registeredUser.email);
    cy.get(loginPage.password).type(registeredUser.password);
    cy.get(loginPage.loginButton).click();
    cy.get(navigationBar.account).click();
    cy.contains(registeredUser.email).should("exist");
  });
});
