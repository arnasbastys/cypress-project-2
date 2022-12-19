import { consentCookie, contactForm } from "../support/constants";
import { search, header, contact } from "../support/pages";

describe("Landing page tests", () => {
  beforeEach(() => {
    cy.setCookie(consentCookie.name, JSON.stringify(consentCookie.value));
    cy.visit("/");
    cy.intercept("https://forms.hubspot.com/**").as("form");
    cy.get(header.menu).trigger("mousedown");
    cy.wait("@form");
  });

  it("Navigation items ar visible", () => {
    cy.get(header.menu).contains(header.menuItem.platform).should("be.visible");
    cy.get(header.menu).contains(header.menuItem.synData).should("be.visible");
    cy.get(header.menu)
      .contains(header.menuItem.resources)
      .should("be.visible");
    cy.get(header.menu).contains(header.menuItem.company).should("be.visible");
  });

  it("Serching for non existing result gives error", () => {
    const searchKeyWord: string = "sythetic";
    cy.get(header.searcIcon).click();
    cy.get(header.searchInput).type(`${searchKeyWord}{enter}`);
    cy.get(search.headline).should("have.text", search.noResultsFound);
    cy.get(search.searchKeyWord).should("have.text", searchKeyWord);
  });

  it("Contact form test", () => {
    cy.get(header.menu).contains(header.menuItem.company).click();
    cy.get("div").contains(header.innerMenuItem.company).click();
    cy.get(header.menu).trigger("mousedown");
    cy.wait("@form");
    cy.get(contact.formName).type(contactForm.firstName);
    cy.get(contact.formLastName).type(contactForm.lastName);
    cy.get(contact.formEmail).type(contactForm.email);
    cy.get(contact.formMobilePhone).type(contactForm.mobilePhone);
    cy.get(contact.formCompany).type(contactForm.company);
    cy.get(contact.formCountry).select(contactForm.country);
    cy.get(contact.formText).type(contactForm.message);
    cy.get(contact.formCheckBox).check();
    cy.get(contact.formSubmitButton).trigger("mouseover");
  });
});
