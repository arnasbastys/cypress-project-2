import { user } from "@constants";
import { registrationPage } from "@pom";

describe("Registration", () => {
  beforeEach(() => {
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/register");
  });

  it("User is able successfully register", () => {
    cy.get(registrationPage.email).type(user.email);
    cy.get(registrationPage.password).type(user.password);
    cy.get(registrationPage.repeatPassword).type(user.password);
    cy.get(registrationPage.securityQuestion).click();
    cy.contains(registrationPage.securityQuestionMovie).click();
    cy.get(registrationPage.securityAnswer).type(user.securityAnswer);
    cy.get(registrationPage.registerButton).click();
    cy.contains(registrationPage.successMessage).should("be.visible");
  });
});
