declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-test attribute.
       * @example cy.getByTestId('greeting')
       */
      getByTestId(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export const getByTestId = (value: string) => {
  return cy.get(`[data-test=${value}]`);
};
