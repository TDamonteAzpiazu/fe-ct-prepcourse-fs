function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  const primero = array[0]
  for (let i=0 ; i<array.length ; i++) {
    if (array[i] !== primero) {
      return false
    }
  }
  return true
}

module.exports = todosIguales;
