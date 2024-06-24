//contexto de requisição é uma instância que encapsula o estado das requisições HTTP 
//ai consigo configurar e execute múltiplas requisições com um conjunto compartilhado de opções, como cabeçalhos,


const { request } = require('playwright');

(async () => {
  const requestContext = await request.newContext(); //cri um novo contexto de requisição
  //requisições HTTP
  //requisição POST usando o contexto criado
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
      "name": "Guts",
      "photoUrls": [
        "https://example.com/photos/arua.jpg"
      ],
      "tags": [
        {
          "id": 3,
          "name": "aruã"
        },
        {
          "id": 2,
          "name": "4 years old"
        }
      ],
      "status": "available"
    }

  //fiz uma requisição HTTP POST ao endpoint https://petstore.swagger.io/v2/pet usando o contexto de requisição criado.
//Cabeçalhos: vai definir os cabeçalhos da requisição. accept define que a resposta deve estar em JSON e Content-Type define qo corpo da requisição está em JSON
//Dados (Body): Define o corpo da requisição com os detalhes do novo pet a ser adicionado, incluindo id, category, name, photoUrls, tags, e status.
  });

  const responseBody = await response.json();
  
  if (response.ok() && responseBody.name === "Arua") {
    console.log('Pet adicionado com sucesso:', responseBody);
  } else {
    console.error('Falha ao adicionar o pet:', response.status(), response.statusText(), responseBody);
  }

//Descrição: Verificando se a resposta foi bemsucedida e se o id do pet na resposta é igual ao id enviado.
// sim: Exibe uma mensagem de sucesso com os detalhes do pet adicionado.
// não: Exibe uma mensagem de erro com o status da resposta, o texto do status, e o corpo da resposta.
})();


//Resumo Esse script usa o Playwright para fazer uma requisição POST à API do Petstore e adicionar um novo pet

