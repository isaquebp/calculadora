let multiplicacao = document.getElementById('multiplicacao')
let divisao = document.getElementById('divisao')
let apagarTudo = document.getElementById('apagar-tudo')
let backspace = document.getElementById('backspace')
let adicao = document.getElementById('adicao')
let subtracao = document.getElementById('subtracao')
let virgula = document.getElementById('virgula')
let igual = document.getElementById('igual')
let um = document.getElementById('um')
let dois = document.getElementById('dois')
let tres = document.getElementById('tres')
let quatro = document.getElementById('quatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')
let sete = document.getElementById('sete')
let oito = document.getElementById('oito')
let nove = document.getElementById('nove')
let zero = document.getElementById('zero')
let texto = document.getElementById('tela-resultado')
texto = ''

multiplicacao.addEventListener('click', function multiplicacao() {
  let tela = document.getElementById('tela-resultado').innerHTML += '*'
  texto += '*'
})

divisao.addEventListener('click', function divisao() {
  let = document.getElementById('tela-resultado').innerHTML += '/'
  texto += '/'
})

apagarTudo.addEventListener('click', function apagarTudo() {
  let = document.getElementById('tela-resultado').innerHTML = ''
  texto = ''
})
backspace.addEventListener('click', function backspace() {
  let tela = document.getElementById('tela-resultado')
  texto = texto.slice(0, -1)
  tela.innerHTML = texto

})
adicao.addEventListener('click', function adicao() {
  let = document.getElementById('tela-resultado').innerHTML += '+'
  texto += '+'
})
subtracao.addEventListener('click', function subtracao() {
  let = document.getElementById('tela-resultado').innerHTML += '-'
  texto += '-'
})
virgula.addEventListener('click', function virgula() {
  let = document.getElementById('tela-resultado').innerHTML += '.'
  texto += '.'
})
igual.addEventListener('click', function igual() {
  let igual = document.getElementById('tela-resultado')
  resultado = Function("return " + texto)()
  igual.innerHTML = `${resultado}`
})
um.addEventListener('click', function um() {
  let = document.getElementById('tela-resultado').innerHTML += '1'
  return texto += 1
})
dois.addEventListener('click', function dois() {
  let = document.getElementById('tela-resultado').innerHTML += '2'
  return texto += 2
})
tres.addEventListener('click', function tres() {
  let = document.getElementById('tela-resultado').innerHTML += '3'
  return texto += 3
})
quatro.addEventListener('click', function quatro() {
  let = document.getElementById('tela-resultado').innerHTML += '4'
  return texto += 4
})
cinco.addEventListener('click', function cinco() {
  let = document.getElementById('tela-resultado').innerHTML += '5'
  return texto += 5
})
seis.addEventListener('click', function seis() {
  let = document.getElementById('tela-resultado').innerHTML += '6'
  return texto += 6
})
sete.addEventListener('click', function sete() {
  let = document.getElementById('tela-resultado').innerHTML += '7'
  return texto += 7
})
oito.addEventListener('click', function oito() {
  let = document.getElementById('tela-resultado').innerHTML += '8'
  return texto += 8
})
nove.addEventListener('click', function nove() {
  let = document.getElementById('tela-resultado').innerHTML += '9'
  return texto += 9
})
zero.addEventListener('click', function zero() {
  let = document.getElementById('tela-resultado').innerHTML += '0'
  return texto += 0
})