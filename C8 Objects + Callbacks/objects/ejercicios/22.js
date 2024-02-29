function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var unomin = str1.toLowerCase()
   var dosmin = str2.toLowerCase()
   var uno = unomin.split("")
   var dos = dosmin.split("")
   var uno1 = uno.sort()
   var dos2 = dos.sort()
   var uno1uno = uno1.join("")
   var dos2dos = dos2.join("")
   
   if (uno1uno === dos2dos) {
      return true
   } else return false
}

module.exports = esAnagrama;
