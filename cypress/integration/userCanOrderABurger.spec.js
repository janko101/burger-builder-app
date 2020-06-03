describe("User can make an order", () => {
  before(() => {
    cy.visit("/");
    cy.get("#more-Meat").click();
    cy.get("#more-Meat").click();
    cy.get("#more-Cheese").click();
    cy.get("#more-Salad").click();
    cy.get("#more-Bacon").click();
    cy.get('#order-btn').click()
  });

  it('checks the order summary', () => {
    cy.get('#order-summary').should('contain', 'Order Summary')
    cy.get('p').should('contain', 'You ordered a delicous Burger with following ingredients:')
    cy.get('#price').should('contain', "To Pay: 78.00 SEK")
  });

  it('cofirms the order', () => {
    cy.get('#confirm').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Your order is processing...`)
    })
  });
})