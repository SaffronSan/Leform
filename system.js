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
function changeQuestion(num) {
    if (num == 1) {
        document.getElementById("Question").innerHTML = "Is tawian a country?";
        document.getElementById("ans1").value = "It's state!";
        document.getElementById("ans2").value = "Yes!";
        document.getElementById("ans3").value = "Its a superpwoer!";
        document.getElementById("ans4").value = "What's that?";
    } else if (num == 2) {
        document.getElementById("Question").innerHTML = "What happened on 1989?";
        document.getElementById("ans1").value = "Titanam square masscar!";
        document.getElementById("ans2").value = "Someone died!";
        document.getElementById("ans3").value = "Nothing!";
        document.getElementById("ans4").value = "Nani?";
    } else if (num == 3) {
        document.getElementById("Question").innerHTML = "Question 3";
        document.getElementById("ans1").value = "ans";
        document.getElementById("ans2").value = "ans";
        document.getElementById("ans3").value = "ans";
        document.getElementById("ans4").value = "ans";
    } else if (num == 4) {
        document.getElementById("Question").innerHTML = "Question 4";
        document.getElementById("ans1").value = "ans";
        document.getElementById("ans2").value = "ans";
        document.getElementById("ans3").value = "ans";
        document.getElementById("ans4").value = "ans";
    } else if (num == 5) {
        document.getElementById("Question").innerHTML = "Question 5";
        document.getElementById("ans1").value = "ans";
        document.getElementById("ans2").value = "ans";
        document.getElementById("ans3").value = "ans";
        document.getElementById("ans4").value = "ans";
    }
    document.getElementById("tracker").innerHTML = num;
}
