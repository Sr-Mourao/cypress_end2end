describe("The Home Page", function () {
  it("Página carregada com sucesso", function () {
    cy.visit("/");
  });
  it("Verificação título da página", function () {
    cy.get("h1").should("contain", "Conhecendo o Cypress com Vuejs!");
  });
  it("Digita valor no input", function () {
    cy.get("input.hello-world").type("Validação passou com succeso!");
  });
  it("Click no botão para exibir alerta", function () {
    cy.get("button").click();
  });
});
