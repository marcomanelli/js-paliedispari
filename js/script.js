function palindromo (string) {
  for (var i = 0; i < string.lenght() / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      return 'Non palindromo'
      break
    }else{
      return 'Palindromo'
    }
  }
}

var parola = prompt('Inserisci una parola')

var risultato = palindromo(parola)

console.log(risultato)