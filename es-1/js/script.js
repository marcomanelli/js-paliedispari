function palindromo (string) {
  var len = string.length;
  var result = 0

  for (var i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      result = 'Non palindromo'
    }else{
      result = 'Palindromo'
    }
  }

  return result
}

var parola = prompt('Inserisci una parola')

var risultato = palindromo(parola)

console.log(risultato)