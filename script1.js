// Obține formularul din document
var form = document.querySelector('form');

// Ascultă evenimentul de submit al formularului
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne trimiterea formularului

  var totalIntrebari = 20;
  var raspunsuriCorecte = 0;

  // Parcurge întrebările și verifică răspunsurile
  for (var i = 1; i <= totalIntrebari; i++) {
    var numeIntrebare = 'q'+ i;
    var raspunsCorect = 'nu'; // Răspunsul corect este "da" pentru fiecare întrebare

    var input = document.querySelector('input[name="' + numeIntrebare + '"]:checked');
    if (input && input.value === raspunsCorect) {
      raspunsuriCorecte++;
    }
  }

  // Calculează procentajul de răspunsuri corecte
  var procentajCorecte = (raspunsuriCorecte / totalIntrebari) * 100;

  // Afișează rezultatul în pagina HTML
  var rezultatContainer = document.getElementById('rezultat');
  rezultatContainer.innerHTML = 'Ai răspuns corect la ' + raspunsuriCorecte + ' întrebări. Procentajul de răspunsuri corecte este: ' + procentajCorecte.toFixed(2) + '%';
});
