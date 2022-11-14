const buscaPacoteDeDados = async (quantidade) => {
    try {
        const resposta = await fetch(`https://randomuser.me/api/?results=${quantidade}`);
        return await resposta.json(); //Retorna objeto -> .results(array de usuarios)
    } catch (erro) {
        console.log(erro);
    }
}

const quantidadeUsuarios = 4

const pacoteDeDados = await buscaPacoteDeDados(quantidadeUsuarios);

const listaUsuarios = document.getElementById("lista-usuarios")

for (let i = 0; i < quantidadeUsuarios; i++) {
    let dadosUsuario = pacoteDeDados.results[i]
    //Criação do card e preenchimento das informações
    const cardUsuario = document.createElement('li')

    const imagem = document.createElement('img')
    imagem.src = dadosUsuario.picture.large
    imagem.alt = "Imagem usuario"

    const informacoesUsuario = document.createElement('div')
    informacoesUsuario.id = 'informacoes'

    const denominacaoUsuario = document.createElement('p')
    const dadosNome = dadosUsuario.name
    denominacaoUsuario.innerText = `${dadosNome.title} ${dadosNome.first} ${dadosNome.last}`

    const emailUsuario = document.createElement('p')
    emailUsuario.innerText = dadosUsuario.email

    const enderecoUsuario = document.createElement('p')
    const dadosLocal = dadosUsuario.location
    enderecoUsuario.innerText = `${dadosLocal.street.name}, ${dadosLocal.street.number} - ${dadosLocal.city} - ${dadosLocal.state} - ${dadosLocal.country}`

    listaUsuarios.appendChild(cardUsuario)
    cardUsuario.appendChild(imagem)
    cardUsuario.appendChild(informacoesUsuario)
    informacoesUsuario.appendChild(denominacaoUsuario)
    informacoesUsuario.appendChild(emailUsuario)
    informacoesUsuario.appendChild(enderecoUsuario)
}