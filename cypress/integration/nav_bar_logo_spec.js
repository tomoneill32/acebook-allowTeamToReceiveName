describe("Navbar logo", () => {
  it("navbar has a logo", () => {
    cy.visit("/");
    cy.get(".navbar-logo").should('have.attr', 'src', '/images/navbar_logo.png')
  });
});
