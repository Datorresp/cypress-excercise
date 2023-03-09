describe("Verifying Add Process for SauceDemo", () => {

 beforeEach(() => {
    cy.clearCookies();
    cy.visit("https://www.saucedemo.com/");
  });

  it("Si", () => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      cy.get('.shopping_cart_link').click()


      // Assertion for error message
      cy.get('#item_4_title_link > .inventory_item_name').should(
        "include.text",
        "Sauce Labs Backpack")

        cy.get('#item_2_title_link > .inventory_item_name').should(
                "include.text",
                "Sauce Labs Onesie")
    });
});