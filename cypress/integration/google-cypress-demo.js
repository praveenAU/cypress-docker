describe('Cypress Google Demo', function() {
  
  it("Google search", function() {

    cy.visit('https://google.com')

    cy.get('[name="q"]').type('cypress io')

    cy.get('input[name="btnK"]').click()

    cy.title().should('eq', 'cypress io - Google Search')

    cy.contains('Cypress.io: JavaScript End to End Testing Framework').click()

    cy.url().should('eq', 'https://www.cypress.io/')

    cy.title().should('eq', 'JavaScript End to End Testing Framework | Cypress.io')
  
  })
})