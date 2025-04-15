describe("behaves as lambda", () => {
  it("execution", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("wait").click();
    cy.get(".wait-input1").type("Hello World!");
  });
});
