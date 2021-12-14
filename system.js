function sysCheck() {
    let name = document.getElementById("uname").value;
    let pass = document.getElementById("upass").value;
    var text;
    if (name == "gcell" || name == "anish" || name == "brian" && pass == "123") {
        alert("Nice, you're good at math");
        window.open("https://saffronsan.github.io/Leform//reward.html", "_blank");
    } else {
        alert("Noob, get outta here");
    }
}
function modfiy(opp) {
    let currNum = parseInt(document.getElementById("tracker").textContent);
     if (opp == 'next') {
        if(currNum > 5){
           currNum = 4;
        }else if (currNum <= 0){
            currNum = 0;
        }
        currNum += 1;
      } 
      else if(opp = 'pre'){
         if(currNum > 5){
            currNum = 6;
         }else if(currNum <= 0){
            currNum = 2;
         }
         currNum -= 1;
     }
    changeQuestion(currNum);
}
function updateAns(answer){
    let currQuesiton = parseInt(document.getElementById("tracker").textContent);
    if(currQuesiton == 1){
        document.getElementById('QA1').innerHTML = answer;
    }else if(currQuesiton == 2){
         document.getElementById('QA2').innerHTML = answer;
    }else if(currQuesiton == 3){
         document.getElementById('QA3').innerHTML = answer;
    }else if(currQuesiton = 4){
         document.getElementById('QA4').innerHTML = answer;
    }
}
function changeQuestion(num) {
    if (num == 1) {
        document.getElementById("Question").innerHTML = "Is tawian a country?";
        document.getElementById("ans1").textContent = "What's that!";
        document.getElementById("ans2").textContent = "Yes!";
        document.getElementById("ans3").textContent = "Si!";
        document.getElementById("ans4").textContent = "Oui!";
    } else if (num == 2) {
        document.getElementById("Question").innerHTML = "What happened on 1989?";
        document.getElementById("ans1").textContent = "Chinese Civil war";
        document.getElementById("ans2").textContent = "Tiananmen square massacre!";
        document.getElementById("ans3").textContent = "nothing!";
        document.getElementById("ans4").textContent = "USSR FALLS!";
    } else if (num == 3) {
        document.getElementById("Question").innerHTML = "Question 3";
        document.getElementById("ans1").textContent = "ans";
        document.getElementById("ans2").textContent = "ans";
        document.getElementById("ans3").textContent = "ans";
        document.getElementById("ans4").textContent = "ans";
    } else if (num == 4) {
        document.getElementById("Question").innerHTML = "Question 4";
          document.getElementById("ans1").textContent = "ans";
        document.getElementById("ans2").textContent = "ans";
        document.getElementById("ans3").textContent = "ans";
        document.getElementById("ans4").textContent = "ans";
    } else if (num == 5) {
        document.getElementById("Question").innerHTML = "Question 5";
        document.getElementById("ans1").textContent = "ans";
        document.getElementById("ans2").textContent = "ans";
        document.getElementById("ans3").textContent = "ans";
        document.getElementById("ans4").textContent = "ans";
    }
    document.getElementById("tracker").innerHTML = num;
}
