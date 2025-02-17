describe("testa a pagina de login", () => {
  it("Quando clicar em login deve ir para a pagina de dashboard", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Login").click();
    cy.contains("Dashboard");
  });

  it("Quando clicar em login deve ir para a pagina de dashboard e ter um pokemon Bulbassauro", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Login").click();
    cy.contains("Dashboard");
    cy.contains("Bulbassauro");
  });

  it("Quando clicar em signup deve ir para a pagina de cadastro", () => {
    cy.visit("/");

    cy.contains("Não tem cadastro? Clique aqui!").click();
    cy.contains("Sign Up");
  });

  it("o botao deve ter 10px de margin top", () => {
    cy.visit("/sign-up");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
