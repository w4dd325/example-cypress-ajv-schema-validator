const schema = require('../fixtures/chuckNorrisSchemaPass.json');

describe('API Schema Validation with Plain JSON', () => {
  it('should validate the user data using plain JSON schema', () => {
    cy.request('GET', 'https://api.chucknorris.io/jokes/random')
      .validateSchema(schema)
      .then(response => {
        cy.log(JSON.stringify(response.body));
      });
  });
});
