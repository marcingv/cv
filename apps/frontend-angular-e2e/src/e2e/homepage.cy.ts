import { CvData, EN_CV, PL_CV } from '@gv-cv/shared-util-types';

describe('HomePage', () => {
  beforeEach(() => {
    cy.intercept(
      { method: 'GET', url: '/api/cv/pl' },
      {
        statusCode: 200,
        body: {
          ...PL_CV,
        } satisfies CvData,
      },
    );
    cy.intercept(
      { method: 'GET', url: '/api/cv/en' },
      {
        statusCode: 200,
        body: {
          ...EN_CV,
        } satisfies CvData,
      },
    );
  });

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

  it('should change page language', () => {
    // Default load PL lang
    cy.visit('/pl');

    cy.get('[data-cy="btn-lang-pl"]').as('plBtn');
    cy.get('[data-cy="btn-lang-en"]').as('enBtn');

    // Change lang to EN
    cy.get('@enBtn').click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en');
    });

    // Change lang to PL
    cy.get('@plBtn').click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/pl');
    });

    // Go Back
    cy.go('back');
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/en');
    });
  });
});
