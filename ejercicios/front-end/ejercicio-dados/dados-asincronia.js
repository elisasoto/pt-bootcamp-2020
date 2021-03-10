const rollTheDice = (nCaras, cb) => {
    const result = Math.ceil(Math.random() * nCaras)
    console.log(result)
    setTimeout(function () { 
         cb(null, result)
    }, 2000)
}

rollTheDice(6, cb((null,result)))

// // tirarDados(listacaras, cb)
// tirarDados([4,20,100,6,12], (err,result)=>{
//     if(!err){
//         console.info('> results: ', result)
//     } else {
//         console.error('> error: ', error)
//     }
// })
