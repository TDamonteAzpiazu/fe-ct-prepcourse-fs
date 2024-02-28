function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var nuevo = array.map(elemento => elemento.toUpperCase())
  return nuevo
}

module.exports = convertirStringAMayusculas;
