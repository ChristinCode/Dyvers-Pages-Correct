/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    // Open the homepage
    cy.visit('http://localhost:8080')
  })

  it('opens the mission page', () => {
    // click the "mission page" link
    cy.get('.header__list-item').contains('Mission').click()

    // ensure we are on the page by looking for text
    cy.get('.about__mission--title').should('contain', 'Diverse businesses for diverse people')
  })

  it('opens the contact page', () => {
    cy.get('.footer__list-item').contains('Contact').click()
    cy.get('.contact__title').should('contain', 'Contact Information for Dyvrs Pages')
  })

  it('can navigate in-page with category circle', () => {
    cy.get('.index__circle_container a.deg0 img').click(); // FIXME: this depends on "Restaurants" being in position 0
    cy.get('.category__business--title').should('contain', 'Restaurants');
    // TODO: make sure the category circle disappears when a specific link is clicked
    // TODO: make sure the URL changes for a specific category
  })

  // TODO: click the "back" button and make sure the URL changes
  // TODO: make sure the category circle reappears
  // TODO: make sure the individual category section disappears

  // TODO: (less important) click "forward" button and have same category reappear (same test as above)

  // it('cy.go() - go back or forward in the browser\'s history', () => {
  //   // https://on.cypress.io/go

  //   cy.location('pathname').should('include', 'navigation')

  //   cy.go('back')
  //   cy.location('pathname').should('not.include', 'navigation')

  //   cy.go('forward')
  //   cy.location('pathname').should('include', 'navigation')

  //   // clicking back
  //   cy.go(-1)
  //   cy.location('pathname').should('not.include', 'navigation')

  //   // clicking forward
  //   cy.go(1)
  //   cy.location('pathname').should('include', 'navigation')
  // })

  // it('cy.reload() - reload the page', () => {
  //   // https://on.cypress.io/reload
  //   cy.reload()

  //   // reload the page without using the cache
  //   cy.reload(true)
  // })

  // it('cy.visit() - visit a remote url', () => {
  //   // https://on.cypress.io/visit

  //   // Visit any sub-domain of your current domain

  //   // Pass options to the visit
  //   cy.visit('https://example.cypress.io/commands/navigation', {
  //     timeout: 50000, // increase total time for the visit to resolve
  //     onBeforeLoad (contentWindow) {
  //       // contentWindow is the remote page's window object
  //       expect(typeof contentWindow === 'object').to.be.true
  //     },
  //     onLoad (contentWindow) {
  //       // contentWindow is the remote page's window object
  //       expect(typeof contentWindow === 'object').to.be.true
  //     },
  //   })
  //   })
})
