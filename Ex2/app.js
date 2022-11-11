function mostraHorarioAtual() {
    date = new Date
    return console.log(`O horário atual é: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(mostraHorarioAtual, 2000)