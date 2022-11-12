async function buscarMediaDeIdade(siglaPais, nome) {
    try {
        const mediaDeIdade = await fetch(`https://api.agify.io/?country_id=${siglaPais}&name=${nome}`)
        const objeto = await mediaDeIdade.json();
        console.log(`Nome: ${objeto.name}
Média de idades: ${objeto.age}`)
    } catch (error) {
        console.log(error)
    }
}

buscarMediaDeIdade("BR", "paulo")
buscarMediaDeIdade("US", "jason")