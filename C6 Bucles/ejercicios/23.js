function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0
  do {
    contador = contador + 1
    num = num + 5
  } while (contador<8)
  return num
}


module.exports = doWhile;