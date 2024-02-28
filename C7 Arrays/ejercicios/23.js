function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let array = [] 
  let mensaje
  for (let i=0 ; i<10 ; i++) {
    array.push(num + 2*(i+1))
    if (i === array[i]){
      mensaje = "Se interrumpió la ejecución"
      break
    }
  }
  if(mensaje) {
    return mensaje
  } else {
    return array
  }
}

module.exports = breakStatement;
