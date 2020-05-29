describe("User can add and remove ingredients", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Initial state", () => {
    it("cheks for bread-top ingredient", () => {
      cy.get("#bread-top").should("exist");
      cy.get("#bread-top").within(() => {
        cy.get("#seeds1").should("exist");
        cy.get("#seeds2").should("exist");
      });
    });

    it("checks for bread-bottom ingredient", () => {
      cy.get("#bread-bottom").should("exist");
    });

    it("checks initial total price", () => {
      cy.get("#price").should("contain", "Total price: 40.00 SEK");
    });

    it('checks if Less button is disabled', () => {
      cy.get('#less-Meat').should('be.disabled')
      cy.get('#less-Cheese').should('be.disabled')
      cy.get('#less-Bacon').should('be.disabled')
      cy.get('#less-Salad').should('be.disabled')
    });
  });

  describe("Adding ingredients", () => {
    it("checks if user can add meat", () => {
      cy.get("#more-Meat").click();
      cy.get("#meat").should("exist");
      cy.get("#price").should("contain", "Total price: 50.00 SEK");
    });

    it("checks if user can add cheese ingredient", () => {
      cy.get("#more-Cheese").click();
      cy.get("#cheese").should("exist");
      cy.get("#price").should("contain", "Total price: 57.00 SEK");
    });

    it("checks if user can add salad ingredient", () => {
      cy.get("#more-Salad").click();
      cy.get("#salad").should("exist");
      cy.get("#price").should("contain", "Total price: 60.00 SEK");
    });

    it("checks if user can add bacon ingredient", () => {
      cy.get("#more-Bacon").click();
      cy.get("#bacon").should("exist");
      cy.get("#price").should("contain", "Total price: 68.00 SEK");
    });
  });

  describe("Removing ingredients", () => {
    it("checks if user can remove ingredients", () => {
      cy.get("#less-Meat").click();
      cy.get("#meat").should("not.exist");
      cy.get("#less-Cheese").click();
      cy.get("#cheese").should("not.exist");
      cy.get("#less-Salad").click();
      cy.get("#salad").should("not.exist");
      cy.get("#less-Bacon").click();
      cy.get("#bacon").should("not.exist");
      cy.get("#price").should("contain", "Total price: 40.00 SEK");
    });
  });
});
