var scelta = prompt('Scegli pari o dispari')
var num = parseInt(prompt('Inserisci un numero da 1 a 5'))

function randomNumber () {
  var result = Math.floor(Math.random() * 5) + 1
  
  return result
}

function evenOdd (num1) {
  if (num1 % 2 == 0) {
    return 'Pari'
  }else{
    return 'Dispari'
  }
}

var log1 = randomNumber()
console.log(log1)

var somma = log1 + num

var log2 = evenOdd(somma)
console.log(log2)