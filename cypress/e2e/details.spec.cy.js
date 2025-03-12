describe('Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions', { 
      statusCode: 200,
      fixture: 'tea_subscriptions'
    })
    cy.visit('http://localhost:5173/');
  })

  it('clicking on the poster should display the details page', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions/1', { 
      statusCode: 200,
      fixture: 'first_tea_subscription_details'
    })

    cy.visit('http://localhost:5173/1');

    cy.get('.TeaSubscriptionCardDetails').should('be.visible');

    cy.get('h1').contains('Weekly Tea Delight');
    cy.get('h2').contains('Status: Active');
    cy.get('h2').contains('Price: $15.49');

    cy.get('.teas p').contains('Peppermint');
    cy.get('.teas p').contains('Lemon Ginger');
    cy.get('.customers p').contains('Alice Johnson');
    cy.get('.customers p').contains('Charlie Davis');

    cy.get('.cancelButton').should('be.visible');

    cy.intercept('PATCH', 'http://localhost:3000/api/v1/subscriptions/1', {
      statusCode: 200,
      body: {
        isActive: false
      }
    })

    cy.get('.cancelButton button').click();

    cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions/1', { 
      statusCode: 200,
      fixture: 'first_tea_updated_subscription_details'
    })

    cy.visit('http://localhost:5173/1');

    cy.get('h2').contains('Status: Inactive');
  });

  it('clicking on the title or logo redirects to the homepage', () => {
    cy.get('.logo').click();
    cy.url().should('eq', 'http://localhost:5173/');

    cy.get('.title').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });
})