Salvador = {
    nombre:'Salvador',
    apellido: 'Garcia',
    edad: 18,
    peso: 75
}

console.log(`Al inicio del año ${Salvador.nombre} pasa ${Salvador.peso}kg`)
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona =>persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () =>  Math.random() < 0.4

const META = Salvador.peso - 3
var dias = 0

while (Salvador.peso > META){
  if(comeMucho()){
    aumentarDePeso(Salvador)
  }

  if(realizaDeporte()){
    adelgazar(Salvador)
  }
  dias += 1
}


console.log(`Pasaron ${dias} dias hatsa que ${Salvador.nombre} adelgazo 3kg`)