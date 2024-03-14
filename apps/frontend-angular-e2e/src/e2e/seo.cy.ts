describe('template spec', () => {
  it('should contain HTML meta description tag defined', () => {
    cy.visit('/');

    cy.get('meta[name="description"]')
      .invoke('attr', 'content')
      .should('not.be.empty');
  });

  it('should provide robots.txt configuration', () => {
    cy.request('/robots.txt').then((response) => {
      expect(response).property('status').to.equal(200);
      expect(response).property('body').not.to.be.empty;
      expect(response).to.have.property('headers');
      expect(response.headers).to.have.property('content-type', 'text/plain');
    });
  });
});
