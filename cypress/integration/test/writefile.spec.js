describe("Testing the widget", function() {
    it("Widget does something with AJAX / XHR", function() {

      cy.request("https://jsonplaceholder.cypress.io/comments").then(
        response => {
          // then use the response.body to write a fixture.
          cy.writeFile("cypress/fixtures/response/widget.json", response.body);
        }
      );
    });
  });