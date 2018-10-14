soldi = prompt("Inserisci quanto vuoi scommettere", "1")

userBet = prompt("Numeri scommessi:", "16, 33, 44, 60, 76")

contains = (a, obj) ->
  i = a.length
  while i--
    if a[i] == obj
      return true
  false

Array::contains = (obj) ->
  i = @length
  while i--
    if @[i] == obj
      return true
  false

calcolaVincita = (bet, n_ind) ->
	switch n_ind
		when 1
			winAmount = 0
		when 2
			winAmount = bet
		when 3
			if bet isnt 1
				winAmount = bet*1.5
			else winAmount = 15
		when 4
			if bet isnt 1
				winAmount = bet*3.5
			else winAmount = 25
		when 5
			if bet isnt 1
				winAmount = bet**5 
			else winAmount = 50
		else winAmount = 0
	winAmount

preventDuplicate = (array) ->
    new Set(array).size != array.length

bubbleSort = (a) ->
  swapped = undefined
  loop
    swapped = false
    i = 0
    while i < a.length - 1
      if a[i] > a[i + 1]
        temp = a[i]
        a[i] = a[i + 1]
        a[i + 1] = temp
        swapped = true
      i++
    unless swapped
      break
  a

generaNumero = ->
    Number Math.floor(Math.random()*90) + 1

generaNumeri = ->
    numeri = []
    for i in [1 .. 20]
        numero = generaNumero()
        numeri.push(numero)  

    if !preventDuplicate(numeri)
        bubbleSort(numeri)
    else generaNumeri()
    
numeri_lotto = generaNumeri()
numeri_utente = userBet.split(',')
indovinati = 0
num_indovinati = []

for num_utente in numeri_utente
    for num_lotto in numeri_lotto
        if Number(num_utente) is num_lotto
        	indovinati++
        	num_indovinati.push(num_utente)

alert "Hai indovinato " + indovinati + " numeri! Hai vinto " + calcolaVincita(soldi, indovinati) + " euro."

txtLotto = ""
for num_lotto in numeri_lotto
    txtLotto += num_lotto + " || "

txtUtente = ""
for num_utente in numeri_utente
	if contains(num_indovinati, num_utente)
    	txtUtente += '<b>' + num_utente + "</b> || "
    else txtUtente += num_utente + " || "

document.getElementById("generati").innerHTML = txtLotto
document.getElementById("user").innerHTML = txtUtente