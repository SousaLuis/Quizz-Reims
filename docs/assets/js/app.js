function getResults() {

  // Result
  let amountCorrect = 0;
  let result = 0;

// Boucle pour aller dans chaque questions
  for(let i = 0; i <= 4; i++) {
    let radiosName = document.getElementsByName('question'+i);

// Boucles pour regarder les réponses

    for(let j = 0; j < radiosName.length; j++) {
      let radiosValue = radiosName[j];
      if(radiosValue.value == "correct" && radiosValue.checked) {
        amountCorrect++;
        
      }
    }
  }
document.getElementById('resultat').innerHTML =
amountCorrect;
}


function resultOne(int) {   

  let inner = document.getElementById("resultat"+int);
  let radiosName = document.getElementsByName('question'+int);
// Boucles pour regarder les réponses

  for(let j = 0; j < radiosName.length; j++) {
    let radiosValue = radiosName[j];
    if(radiosValue.value == "correct" && radiosValue.checked) {
      inner.innerHTML = "✅ Bien joué !";
      inner.classList.add('green');
      break;
    }
    else {
       inner.innerHTML = "❌ Dommage..";
       inner.classList.add('red')
    }
  }
  document.getElementById("questionnumber"+ int).innerHTML = int + "/5";

} 

