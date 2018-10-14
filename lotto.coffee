soldi = prompt("Inserisci quanto vuoi scommettere")

userBet = prompt("Numeri scommessi:")

check = (list) ->
  newList = []
  i = 0
  while i < list.length
    thisValue = list[i]
    if i > 0
      if newList.indexOf(thisValue) > -1
        true
    newList.push thisValue
    i++
  false

generaNumero = ->
	Number Math.floor(Math.random()*90) + 1

generaNumeri = ->
	numeri = []
	for i in [1 .. 20]
		numero = generaNumero()
		numeri.push(numero)  

	if !check(numeri) 
		numeri.sort()
	else generaNumeri()
	
numeri_lotto = generaNumeri()
numeri_utente = userBet.split(',')
indovinati = 0

for num_utente in numeri_utente
	for num_lotto in numeri_lotto
		indovinati++ if Number(num_utente) is num_lotto

alert "Hai indovinato " + indovinati + " numeri! Hai vinto " + soldi*indovinati + " euro."

txtLotto = ""
for num_lotto in numeri_lotto
	txtLotto += num_lotto + "|| "

txtUtente = ""
for num_utente in numeri_utente
	txtUtente += num_utente + "|| " 

document.getElementById("generati").innerHTML = txtLotto
document.getElementById("user").innerHTML = txtUtente