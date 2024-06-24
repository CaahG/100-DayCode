// Declarando Variáveis 

function daycode() {
    let java = document.getElementById("java").value;
    let script = document.getElementById("script").value;
    let total = 2
    
    if(document.getElementById('code1').checked) {
        total = code1 + code2;
    }else if(document.getElementById('code2').checked) {
        total = code1 - code2;

    }
}

// Função de Calculo
function code1() {
    let java = document.getElementById("java").value;
    let script = document.getElementById("script").value;
    let total = java + script;
    return total;
}

function code2() {
    let java = document.getElementById("java").value;
    let script = document.getElementById("script").value;
    let total = java - script;
    return total;
}


// Criando um array de culinária japonesa
const culinariaJaponesa = [
    {id: 1, prato: 'ramen'},
    {id: 2, prato: 'sushi'},
    {id: 3, prato: 'tempura'},
    {id: 4, prato: 'sashimi'},
    {id: 5, prato: 'yakitori'}
];

//Exibindo a lista de culinária japonesa
console.log(culinariaJaponesa); // Exibe a lista completa de pratos

// Exibindo um prato com id 1
console.log(culinariaJaponesa.find(prato => prato.id === 1)); // Retorna o prato com id 1

// Usando 'find' para buscar um prato pelo nome 'sushi'
console.log(culinariaJaponesa.find(function(prato) {
    return prato.prato === 'sushi';
}));




// Loop infinito com um exemplo de viagem para a Holanda >< :3 
while (true) {
    console.log("a nossa viagem para a Holanda está chegando...");
    // lembrando pra não esquecer T-T um loop infinito pode travar seu ambiente de execução.
}


//