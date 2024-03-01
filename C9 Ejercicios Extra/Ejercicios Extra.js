/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var array = []
  for (var num in objeto){
    array.push([num , objeto[num]])
  }
  return array
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var contador = {}
  var array = string.split("")
  var arrayOrd = array.sort()
  for (let i=0 ; i<arrayOrd.length ; i++) {
    var caracter = arrayOrd[i]
    if(contador[caracter]) {
      contador[caracter]++
    } else {
      contador[caracter] = 1
    }
  }
  return contador
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arrmay = []
  var arrmin = []

  for (let i=0 ; i<string.length ; i++) {
    var letra = string[i]
    if (letra === letra.toUpperCase()) {
      arrmay.push(letra)
    } else {
      arrmin.push(letra) 
    }  
  } 
  var stringmay = arrmay.join("")
  var stringmin = arrmin.join("")
  return stringmay+stringmin
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arrpalabras = frase.split(" ")
  var resultadoespejo = ""
  for (let i=0 ; i<arrpalabras.length ; i++) {
    var arrletras = arrpalabras[i].split("")
    var arrespejo = arrletras.reverse()
    var stringespejo = arrespejo.join("")
    resultadoespejo = resultadoespejo + stringespejo 
    if(i!== arrpalabras.length - 1 ){
      resultadoespejo = resultadoespejo +" "
    }
  }
  return resultadoespejo
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numstring = numero.toString()
  var numarray = numstring.split("")
  var numarrayreverse = numarray.reverse()
  var numjoin = numarrayreverse.join("")
  if( numstring === numjoin) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var arrayabc = string.split("")
  for(let i=0 ;i<arrayabc.length ; i++) {
    if(arrayabc[i] === "a" || arrayabc[i] === "b" || arrayabc[i] === "c" ) {
      arrayabc.splice(i , 1)
      i = i-1
    }
  }
  return arrayabc.join("")
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort((a , b) => a.length - b.length)
  return arrayOfStrings

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var ultimoarray = []
  for (let i=0 ; i<array1.length ; i++) {
    if (array2.includes(array1[i])) {
      ultimoarray.push(array1[i])
    }
  }
  return ultimoarray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
