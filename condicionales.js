var Salvador = {
    nombre: 'Salvador',
    apellido: '',
    edad: 15,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false
}


function mayorEdad(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.edad > 18){
        console.log('eres mayor de edad')
    } else {
        console.log(' No eres mayor de edad')
    }
}

mayorEdad(Salvador);

// function imprimirProfeciones(persona){
//     console.log(`${persona.nombre} es:`)
//     if(persona.ingeniero){
//         console.log('Ingeniero')
//     } else{
//         console.log('No es ingiero')
//     }

//     if(persona.cocinero){
//         console.log('Cocinero')
//     }

//     if(persona.cantante){
//         console.log('Cantante')
//     }

//     if(persona.dj){
//         console.log('Dj')
//     }

//     if(persona.guitarrista){
//         console.log('Guitarrista')
//     }

//     if(persona.drone){
//         console.log('Piltote de Drone')
//     }
     
// }
// imprimirProfeciones(sacha)