import { user } from "../support/constants";
import { registrationForm } from "../support/pages";

describe("Registration", () => {
  it("User is able successfully register", () => {
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");
    cy.visit("/register");
    cy.get(registrationForm.email).type(user.email);
    cy.get(registrationForm.password).type(user.password);
    cy.get(registrationForm.repeatPassword).type(user.password);
    cy.get(registrationForm.securityQuestion).click();
    cy.contains(registrationForm.securityQuestionMovie).click();
    cy.get(registrationForm.securityAnswer).type(user.securityAnswer);
    cy.get(registrationForm.registerButton).click();
    cy.contains(registrationForm.successMessage).should("be.visible");
  });
});
