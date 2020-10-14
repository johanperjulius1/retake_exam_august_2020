describe("User can see and use basic UI", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000",
      response: "fixture: ui_index.json",
    });
  });

  context("when visiting ui display-page", () => {  
  it("visitor can see grid with movie cards", () => {
    cy.get("[data-cy='display-shows-grid']")
  });
});
});
