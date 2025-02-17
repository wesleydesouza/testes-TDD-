describe("testa a pagina de dashboard", () => {
  it("deve exibir uma lista com 3 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });
    cy.contains("Bulbassauro");
    cy.contains("Charmander");
    cy.contains("Squirtle");
  });

  it("quando clickar em um pokemon deve exibir sua informação", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Bulbassauro").click();
    cy.contains("Voltar");
  });

  it("quando clickar em um pokemon deve exibir sua informação e depois voltar para a lista de pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Bulbassauro").click();
    cy.contains("Voltar").click();

    cy.contains("Bulbassauro");
    cy.contains("Charmander");
    cy.contains("Squirtle");
  });

  it("quando clickar em um pokemon deve exibir sua informação e depois voltar para a lista de pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.get("div").find("ul").should("have.css", "display").and("match", /grid/);
  });

  it("devem haver 3 pokemons na tela com lis", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("div")
      .find("li")
      .should(($li) => {
        expect($li).to.have.length(3);

        const bulbassauro = $li[0];
        const charmander = $li[1];
        const squirtle = $li[2];

        expect(bulbassauro.textContent).to.contain("Bulbassauro");
        expect(charmander.textContent).to.contain("Charmander");
        expect(squirtle.textContent).to.contain("Squirtle");
      });
  });
});
