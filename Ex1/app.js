function sleep (valor){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(valor) , 3000);
    })
    return promise
}

sleep("abc")
.then((retorno) => console.log(retorno))