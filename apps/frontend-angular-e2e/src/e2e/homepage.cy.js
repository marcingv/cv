describe('HomePage', () => {
  it('should redirect user to default lang if lang is not specified', () => {
    cy.visit('/');

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/pl');
    });

    cy.contains('O mnie');
  });

  it('should display page in PL lang', () => {
    cy.visit('/pl');
    cy.contains('O mnie');
  });

  it('should display page in EN lang', () => {
    cy.visit('/en');
    cy.contains('About me');
  });
});
