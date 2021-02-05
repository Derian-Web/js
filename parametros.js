// **** 
//  * JavaScript se comporta diferente con los objetos.
//  * Cuando una función recibe un objeto como parámetro, 
//  * se pasan por referencia, esto quiere decir que 
//  * si los modificamos dentro del cuerpo de una función
//  * su valor se va a ver modificado fuera de la misma.
//  */

var carola = {
    nombre:   'Carola',
    apellido: 'Garcia',
    edad:     30
}

function cumpleanos(persona){
    persona.edad += 1
}



// Una de las soluciones para que cuando se le pase un objeto como parámetro y no lo modifique, 
// sería copiar ese objeto, modificar en ese lo que se quiera modificar y retornarlo. 
// Tambien se puede agregar atributos al objeto copiado
// Para esto usamos ...Objeto, parametrosAModif:

function cumpleanosCopiaObj(persona){
    return{
        ...persona,
        edad: persona.edad + 1,
        mensaje: "Feliz cumple Carola!"
    }
}

cumpleanosCopiaObj(carola)