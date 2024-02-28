function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0){
    return 0
  }
  let num = array[0]
  for(let i=0 ; i<array.length ; i++){
    if (array[i]>num) {
      num = array[i]
    }
  }
  return array.indexOf(num)
}

module.exports = encontrarIndiceMayor;
