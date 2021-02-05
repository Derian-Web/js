var Salvador = {
    nombre:'Salvador',
    apellido: 'Garcia',
    edad: 18,
    peso: 75
}

console.log(`Al inicio del año ${Salvador.nombre} pasa ${Salvador.peso}kg`)
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona =>persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random()
        
    if (random < 0.25){
        aumentarDePeso(Salvador)
    }else if(random < 0.5){
        adelgazar(Salvador)
    }
}


console.log(`Al final del año ${Salvador.nombre} pesa ${Salvador.peso.toFixed(2)}`)