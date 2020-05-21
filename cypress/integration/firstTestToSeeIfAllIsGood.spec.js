describe('First test', () => {
  it('cheks for h1 element', () => {
    cy.visit('/')
    cy.get('h1').should('contain', "Let's build some burgers!")
  });
});
