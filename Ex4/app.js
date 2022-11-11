const retornoEmpresa1 = new Promise( (resolve, reject) => 
setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) => 
setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

// ... continue daqui ....

Promise.race([retornoEmpresa1,retornoEmpresa2])
.then((resultado) => console.log(`A responsável pela entrega será a ${resultado}`))