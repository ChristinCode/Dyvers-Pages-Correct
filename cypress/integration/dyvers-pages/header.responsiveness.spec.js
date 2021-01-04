context('Viewport', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
  
    it('cy.viewport() - set the viewport size and dimension', () => {
      // https://on.cypress.io/viewport
  
      cy.get('#navbar').should('be.visible')
      cy.viewport(320, 480)