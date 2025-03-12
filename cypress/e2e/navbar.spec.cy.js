describe('Navbar', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions', { 
      statusCode: 200,
      fixture: 'tea_subscriptions'
    })

    cy.visit('http://localhost:5173/');
  })

  it('displays the application title', () => {
    cy.get('h1').should('contain', 'Mr. Teabag');
  })


  it('displays the logo', () => {
    cy.get('.logo').should('be.visible');
  })

  it('displays the Sort By Name button', () => {
    cy.get('.sort-button').should('be.visible');
  })

})