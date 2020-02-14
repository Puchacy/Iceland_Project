describe("My First Test", function() {
  it('finds the content "Learn React"', function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Learn React").click();
  });
});
