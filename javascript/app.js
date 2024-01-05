function calculateScore() {
    let score = 0;

    // Question 1
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "5") {
      score++;
    }
    else {
        const MauvaiseRep1 = document.getElementById('MauvaiseRep1');
        MauvaiseRep1.innerHTML = "La bonne réponse était : 5"
    }

    // Question 2
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "Etats-Unis") {
      score++;
    }
    else {
        const MauvaiseRep2 = document.getElementById('MauvaiseRep2');
        MauvaiseRep2.innerHTML = "La bonne réponse était : Etats-Unis"
    }

    // Question 3
    let q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "Pivot") {
      score++;
    }
    else {
        const MauvaiseRep3 = document.getElementById('MauvaiseRep3');
        MauvaiseRep3.innerHTML = "La bonne réponse était : Pivot"
    }

    // Question 4
    let q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "XIXe siècles") {
      score++;
    }
    else {
        const MauvaiseRep4 = document.getElementById('MauvaiseRep4');
        MauvaiseRep4.innerHTML = "La bonne réponse était : XIXe siècles"
    }

    // Question 5
    let q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q3Answer.value === "Jordan Loyd") {
      score++;
    }
    else {
        const MauvaiseRep5 = document.getElementById('MauvaiseRep5');
        MauvaiseRep5.innerHTML = "La bonne réponse était : Jordan Loyd"
    }

    // Afficher le résultat
    let resultElement = document.getElementById("result");
    resultElement.textContent = "Score : " + score + " / 5";
}
