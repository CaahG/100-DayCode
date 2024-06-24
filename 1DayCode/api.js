const { request } = require('playwright');

(async () => {
  const requestContext = await request.newContext();
  const response = await requestContext.post('https://petstore.swagger.io/v2/pet', {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      "id": 12345,
      "category": {
        "id": 1,
        "name": "Dogs"
      },
      "name": "Arua",
      "photoUrls": [
        "https://example.com/photos/arua.jpg"
      ],
      "tags": [
        {
          "id": 1,
          "name": "cute"
        },
        {
          "id": 2,
          "name": "4 years old"
        }
      ],
      "status": "available"
    }
  });

  const responseBody = await response.json();
  
  if (response.ok() && responseBody.name === "Arua") {
    console.log('Pet adicionado com sucesso:', responseBody);
  } else {
    console.error('Falha ao adicionar o pet:', response.status(), response.statusText(), responseBody);
  }

  await requestContext.dispose();
})();
