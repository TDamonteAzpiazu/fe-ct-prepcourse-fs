function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var result=1
  for (var i=a ; i<=b; i++ ) {
    result = result * i
  }
  if (result=== -0){
    result = 0
  }
  return result

}
module.exports = productoEntreNúmeros;