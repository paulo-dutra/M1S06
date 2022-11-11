function aprovarDadosCadastrais(cliente) {
    return new Promise((resolve, reject) => {
        if (cliente.cpf === 11111111111)
            resolve(true);
        else
            reject(false);
    });
}

function aprovarValorSolicitado(cliente, valor) {
    return new Promise((resolve, reject) => {
        if (cliente.margem >= valor)
            resolve(true);
        else
            reject(false);
    });
}

// APROVADO
const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
// REPROVADO
//const cliente = { cpf: 11111111112, nome: 'Calleri', margem: 1000.0 };

// APROVADO
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0); 
// REPROVADO
//const aprovacaoValor = aprovarValorSolicitado(cliente, 3000.0); 

const aprovacaoCadastro = aprovarDadosCadastrais(cliente);

// continue com o tratamento dos resultados de ambas as promises...

Promise.all([aprovacaoCadastro, aprovacaoValor])
    .then(() => console.log("APROVADO"))
    .catch(() => console.log("REPROVADO"))
    .finally(() => console.log("Fim do Processamento"))