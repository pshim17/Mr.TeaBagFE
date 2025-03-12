describe('Main Page', () => {
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

  it('displays the tea subscription cards', () => {
    cy.get('.TeaSubscriptionsContainer').should('be.visible');
    cy.get('.TeaSubscriptionsContainer .TeaSubscriptions').should('have.length', 3);

    cy.get('.TeaSubscriptionsContainer > section').first().find('img').should('be.visible');
    cy.get('.TeaSubscriptionsContainer > section').first().find('p').contains('Monthly Tea Box');
    
    cy.get('.TeaSubscriptionsContainer > section').last().find('img').should('be.visible');
    cy.get('.TeaSubscriptionsContainer > section').last().find('p').contains('Fortnightly Tea Box');
  })

  it('clicking on the Sort By Name button reorders alphabetically by title', () => {
    cy.get('.sort-button').click();

    cy.get('.TeaSubscriptionsContainer > section').first().find('img').should('be.visible');
    cy.get('.TeaSubscriptionsContainer > section').first().find('p').contains('Fortnightly Tea Box');

    cy.get('.TeaSubscriptionsContainer > section').last().find('img').should('be.visible');
    cy.get('.TeaSubscriptionsContainer > section').last().find('p').contains('Weekly Tea Sampler'); 
  })
})