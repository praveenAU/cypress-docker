describe('Cypress Google Demo', function() {

  it("Google search", function() {

    cy.visit('https://google.com')

    cy.title().should('eq', 'Google')

  })
})
