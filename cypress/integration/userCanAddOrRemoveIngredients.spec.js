describe("User can add and remove ingredients", () => {
  before(() => {
    cy.visit("/");
  });

  it("cheks for bread-top ingredient", () => {
    cy.get("#bread-top").should("exist");
    cy.get("#bread-top").within(() => {
      cy.get("#seeds1").should("exist");
      cy.get("#seeds2").should("exist");
    });
  });

  it("checks if user can add meat", () => {
    cy.get('#Meat').click()
    cy.get("#meat").should("exist");
  });

  it("checks if user can add cheese ingredient", () => {
    cy.get('#Cheese').click()
    cy.get("#cheese").should("exist");
  });

  it("checks if user can add salad ingredient", () => {
    cy.get('#Salad').click()
    cy.get("#salad").should("exist");
  });

  it("checks if user can add bacon ingredient", () => {
    cy.get('#Bacon').click()
    cy.get("#bacon").should("exist");
  });

  it("checks for bread-bottom ingredient", () => {
    cy.get("#bread-bottom").should("exist");
  });
});
