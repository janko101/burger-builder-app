describe("Burger ingredients are visable on the page", () => {
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

  it("checks for meat ingredient", () => {
    cy.get("#meat").should("exist");
  });

  it("checks for cheese ingredient", () => {
    cy.get("#cheese").should("exist");
  });

  it("checks for salad ingredient", () => {
    cy.get("#salad").should("exist");
  });

  it("checks for bacon ingredient", () => {
    cy.get("#bacon").should("exist");
  });

  it("checks for bread-bottom ingredient", () => {
    cy.get("#bread-bottom").should("exist");
  });
});
