function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let Suma = 0
  for (let i=0 ; i<arrayOfNums.length ; i++) {
    Suma = Suma + arrayOfNums[i]
  }
  return Suma
}

module.exports = agregarNumeros;
