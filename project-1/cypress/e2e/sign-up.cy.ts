describe("testa a pagina de cadastro", () => {
  it("quando clicar em cadastrar deve ir para a pagina de login", () => {
    cy.visit("/sign-up");

    cy.contains("Já tem cadastro? Clique aqui!").click();
    cy.contains("Login");
  });

  it("o botao deve ter 10px de margin top", () => {
    cy.visit("/sign-up");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
