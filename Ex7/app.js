const buscaDadosBitcoin = async () => {
    try {
        const resposta = await fetch('https://api.coincap.io/v2/assets/bitcoin');
        const dadosBitcoin = await resposta.json();
        console.log(`O preço do Bitcoin ${dadosBitcoin.data.symbol} em dólares hoje é $ ${Number(dadosBitcoin.data.priceUsd).toFixed(2)}`)
    } catch (erro) {
        console.log(erro);
    }
}

buscaDadosBitcoin();