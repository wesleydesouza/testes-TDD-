describe("Testa a página de detalhe de um pokemon", () => {
  it("Deve renderizar um pokemon na tela", () => {
    cy.visit("/pokemon-detail/1/");

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Bulbassauro");
    cy.contains("Grass");
    cy.get("img").should(
      "have.attr",
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );

    cy.get("div")
      .find("div")
      .should(($div) => {
        expect($div).to.have.length(2);

        const className = $div[0].className;

        expect(className).to.match(/container/);
      })
      .then(($div) => {
        expect($div).to.have.css("display", "flex");
      });
  });
});
