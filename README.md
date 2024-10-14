# Cypress AJV Schema Validator  
An example of how to setup and use the AJV Schema Validator plugin within Cypress.

## :memo: Prerequisites  
Cypress to be installed and configured.  

## :building_construction: Setup
Install the AJV Schema Validator plugin.  
```
npm install cypress-ajv-schema-validator
```

Add the following into the commands.js file.
```javascript
import 'cypress-ajv-schema-validator'
import validateSchema from 'cypress-ajv-schema-validator'
```

Create a fixture file that contains the schema.
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Chuck Norris Joke",
  "type": "object",
  "properties": {
    "icon_url": {
      "type": "string",
      "format": "uri",
      "description": "URL of Chuck Norris' avatar or icon."
    },
    "id": {
      "type": "string",
      "description": "Unique identifier for the joke."
    },
    "example": {
      "type": "boolean",
      "description": "Example of missing property"
    },
    "url": {
      "type": "number",
      "format": "uri",
      "description": "URL to the joke, could be an empty string."
    },
    "value": {
      "type": "string",
      "description": "The Chuck Norris joke or fact."
    }
  },
  "required": ["icon_url", "id", "example", "value"]
}
```

Create a spec file that 'gets' the 
```javascript
const schema = require('../fixtures/chuckNorrisSchemaFail.json');

describe('API Schema Validation with Plain JSON', () => {
  it('should validate the user data using plain JSON schema', () => {
    cy.request('GET', 'https://api.chucknorris.io/jokes/random')
      .validateSchema(schema)
      .then(response => {
        // Further assertions
      });
  });
});
```

## :link: Links  
[https://dev.to/sebastianclavijo/cypress-ajv-schema-validator-plugin-the-brave-vigilante-for-your-api-contracts-5cfe](https://dev.to/sebastianclavijo/cypress-ajv-schema-validator-plugin-the-brave-vigilante-for-your-api-contracts-5cfe)
