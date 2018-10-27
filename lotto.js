// Generated by CoffeeScript 2.3.2
var bubbleSort, calcolaVincita, contains, generaNumeri, generaNumero, indovinati, isValid, j, l, len, len1, len2, len3, m, n, num_indovinati, num_lotto, num_utente, numeri_lotto, numeri_utente, preventDuplicate, soldi, txtLotto, txtUtente, txtVincita, userBet, vincita;

isValid = function(str) {
  var element, j, k, len, ref;
  k = 0;
  if (str.length >= 13 && str.length <= 18) {
    ref = str.split(', ');
    for (j = 0, len = ref.length; j < len; j++) {
      element = ref[j];
      k++;
      if (isNaN(element)) {
        return false;
      }
    }
    if (k === 5) {
      return true;
    }
  }
  return false;
};

soldi = prompt("Inserisci quanto vuoi scommettere", "1");

while (true) {
  userBet = prompt("Inserisci cinque numeri su cui scommettere. Separali con virgola e spazio:", "16, 33, 44, 60, 76");
  if (isValid(userBet)) {
    break;
  }
}

contains = function(a, obj) {
  var i;
  i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
};

Array.prototype.contains = function(obj) {
  var i;
  i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};

calcolaVincita = function(bet, n_ind) {
  var winAmount;
  switch (n_ind) {
    case 1:
      winAmount = 0;
      break;
    case 2:
      winAmount = bet;
      break;
    case 3:
      if (bet !== 1) {
        winAmount = bet * 1.5;
      } else {
        winAmount = 2;
      }
      break;
    case 4:
      if (bet !== 1) {
        winAmount = bet * 3.5;
      } else {
        winAmount = 5;
      }
      break;
    case 5:
      if (bet !== 1) {
        winAmount = bet ** 5;
      } else {
        winAmount = 20;
      }
      break;
    default:
      winAmount = 0;
  }
  return winAmount;
};

preventDuplicate = function(array) {
  return new Set(array).size !== array.length;
};

bubbleSort = function(a) {
  var i, swapped, temp;
  swapped = void 0;
  while (true) {
    swapped = false;
    i = 0;
    while (i < a.length - 1) {
      if (a[i] > a[i + 1]) {
        temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
      i++;
    }
    if (!swapped) {
      break;
    }
  }
  return a;
};

generaNumero = function() {
  return Number(Math.floor(Math.random() * 90) + 1);
};

generaNumeri = function() {
  var i, j, numeri, numero;
  numeri = [];
  for (i = j = 1; j <= 20; i = ++j) {
    numero = generaNumero();
    numeri.push(numero);
  }
  if (!preventDuplicate(numeri)) {
    return bubbleSort(numeri);
  } else {
    return generaNumeri();
  }
};

numeri_lotto = generaNumeri();

numeri_utente = userBet.split(',');

indovinati = 0;

num_indovinati = [];

for (j = 0, len = numeri_utente.length; j < len; j++) {
  num_utente = numeri_utente[j];
  for (l = 0, len1 = numeri_lotto.length; l < len1; l++) {
    num_lotto = numeri_lotto[l];
    if (Number(num_utente) === num_lotto) {
      indovinati++;
      num_indovinati.push(num_utente);
    }
  }
}

vincita = calcolaVincita(soldi, indovinati);

alert("Hai indovinato " + indovinati + " numeri! Hai vinto " + vincita + " euro.");

txtLotto = "";

for (m = 0, len2 = numeri_lotto.length; m < len2; m++) {
  num_lotto = numeri_lotto[m];
  txtLotto += num_lotto + " || ";
}

txtUtente = "";

for (n = 0, len3 = numeri_utente.length; n < len3; n++) {
  num_utente = numeri_utente[n];
  if (contains(num_indovinati, num_utente)) {
    txtUtente += '<b>' + num_utente + "</b> || ";
  } else {
    txtUtente += num_utente + " || ";
  }
}

txtVincita = vincita + " euro";

document.getElementById("generati").innerHTML = txtLotto;

document.getElementById("user").innerHTML = txtUtente;

document.getElementById("vincita").innerHTML = txtVincita;
