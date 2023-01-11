import { user } from "../support/constants";
import { registration } from "../support/pages/index";

describe("Registration", () => {
  beforeEach(() => {
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/#/register");
  });

  it("User is able successfully register", () => {
    cy.get(registration.email).type(user.email);
    cy.get(registration.password).type(user.password);
    cy.get(registration.repeatPassword).type(user.password);
    cy.get(registration.securityQuestion).click();
    cy.contains(registration.securityQuestionMovie).click();
    cy.get(registration.securityAnswer).type(user.securityAnswer);
    cy.get(registration.registerButton).click();
    cy.contains(registration.successMessage).should("be.visible");
  });
});
