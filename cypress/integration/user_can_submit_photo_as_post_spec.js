const signUp = require('../support/signup_helper')
const signIn = require('../support/signin_helper')

describe("Timeline", () => {
  it("can submit a post with a message and an image, when signed in, and view them", () => {
    const p = 'upload3.jpeg'

    signUp("email@email.com", "password", "username");
    signIn("email@email.com", "password");

    cy.visit("/posts");
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#file-upload").attachFile(p);
    cy.get("#new-post-form").submit();

    cy.get(".post").should("contain", "Hello, world!");
    cy.get(".posts").find('img[class="post-photo"]').should('have.attr', 'src').and('contain', '/post-uploads/')
  });

  it("can submit post with a message but no image, when signed in, and view them", () => {

    signUp("email@email.com", "password", "username");
    signIn("email@email.com", "password");

    cy.visit("/posts");
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.get(".post").should("contain", "Hello, world!");
    cy.get(".posts").find('img[class="post-photo"]').should('have.attr', 'src').and('not.contain', '/post-uploads/')
  });

  it("can submit a post without a message but with an image, when signed in, and view them", () => {
    const p = 'upload3.jpeg'

    signUp("email@email.com", "password", "username");
    signIn("email@email.com", "password");

    cy.visit("/posts");
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#file-upload").attachFile(p);
    cy.get("#new-post-form").submit();

    cy.get(".post").should("contain", "Hello, world!");
    cy.get(".posts").find('img[class="post-photo"]').should('have.attr', 'src').and('contain', '/post-uploads/')
  });
});
