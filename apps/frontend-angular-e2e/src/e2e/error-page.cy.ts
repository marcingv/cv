import { CvData, PL_CV } from '@gv-cv/shared-util-types';

describe('Error Page', () => {
  it('should display error when cv data fetch failed', () => {
    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 500,
      },
    ).as('fetchCvData');

    cy.visit('/pl');
    cy.wait('@fetchCvData');

    cy.contains('OOPS!', { matchCase: false });
    cy.get('[data-cy="refresh-btn"]').should('exist').should('be.enabled');
  });

  it('should display error message', () => {
    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 500,
      },
    ).as('fetchCvData');

    cy.visit('/pl');
    cy.wait('@fetchCvData');

    cy.contains('Internal Server Error', { matchCase: false });
  });

  it('should display custom server error message', () => {
    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 500,
        body: { message: 'Terrible error!' },
      },
    ).as('fetchCvData');

    cy.visit('/pl');
    cy.wait('@fetchCvData');

    cy.contains('Terrible error!', { matchCase: false });
  });
});

describe('Error Page - Refresh', () => {
  it('should allow to refresh and try again', () => {
    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 500,
        body: { message: 'Terrible error!' },
      },
    ).as('fetchCvDataError');

    cy.visit('/pl');
    cy.wait('@fetchCvDataError');

    cy.contains('Terrible error!', { matchCase: false });

    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 200,
        body: {
          ...PL_CV,
        } satisfies CvData,
      },
    ).as('fetchCvDataSuccess');

    cy.get('[data-cy="refresh-btn"]')
      .should('exist')
      .should('be.enabled')
      .click();

    cy.wait('@fetchCvDataSuccess');
    cy.contains('O mnie');
  });
});
