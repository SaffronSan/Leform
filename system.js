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
    var input = document.getElementById("tracker").value;
    var currNum = parseInt(input);
    if (opp == "next") {
        currNum += 1;
    } else {
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
    }else if(num > 5){
        changeQuestion(1);
    }
    document.getElementById("tracker").innerHTML = num;
}
