function sysCheck() {
    let name = document.getElementById("uname").value;
    let pass = document.getElementById("upass").value;
    var text;
    if (name == "gcell" || name == "anish" && pass == "123" || pass == "hitler") {
        alert("Nice, you're good at math");
        window.open("https://saffronsan.github.io/Leform//reward.html", "_blank");
    } else {
        alert("Noob, get outta here");
    }
}
function changeButton(question){
    let qOne = document.getElementById('QA1').textContent, qTwo = document.getElementById('QA2').textContent, qThree = document.getElementById('QA3').textContent, 
    qFour = document.getElementById('QA4').textContent , qFive = document.getElementById('QA5').textContent, isSub = document.getElementById("isSub").textContent;
    if(question == 1 && qOne != 'blank'){
        setButton('ch1','f');
    }else if(question == 2 && qTwo != 'blank'){
        setButton('ch2','f');
    }else if(question == 3 && qThree != 'blank'){
        setButton('ch3','f');
    }else if(question == 4 && qFour != 'blank'){
        setButton('ch4','f');
    }else if(question == 5 && qFive != 'blank'){
        setButton('ch5','f');
    }
}
function setButton(q,on){
    if(on == 'f'){
        document.getElementById(q).style.color = "#cfcccc";
        document.getElementById(q).style.background = "grey";
    }else if(on == 't'){
        document.getElementById(q).style.color = "white";
        document.getElementById(q).style.background = "gray";
    }
}
function reset(){
    document.getElementById("reCon").style.display = "none";
    document.getElementById("ans1").style.display = "inline-block";
    document.getElementById("ans2").style.display = "inline-block";
    document.getElementById("ans3").style.display = "inline-block";
    document.getElementById("ans4").style.display = "inline-block";
    document.getElementById("a").style.display = "inline-block";
    document.getElementById("b").style.display = "inline-block";
    document.getElementById("c").style.display = "inline-block";
    document.getElementById("d").style.display = "inline-block";
    document.getElementById("isSub").textContent = "false";
    document.getElementById('QA1').textContent = "blank";
    document.getElementById('QA2').textContent = "blank";
    document.getElementById('QA3').textContent = "blank";
    document.getElementById('QA4').textContent = "blank";
    document.getElementById('QA5').textContent = "blank";
    document.getElementById("tracker").textContent = 1;
    document.getElementById("Question").style.display = "inline-block";
    changeQuestion(1);
    setButton('ch1','t');
    setButton('ch2','t');
    setButton('ch3','t');
    setButton('ch4','t');
    setButton('ch5','t');
}
function modfiy(opp) {
    let currNum = parseInt(document.getElementById("tracker").textContent);
    let qOne = document.getElementById('QA1').textContent, qTwo = document.getElementById('QA2').textContent, qThree = document.getElementById('QA3').textContent, 
    qFour = document.getElementById('QA4').textContent , qFive = document.getElementById('QA5').textContent, isSub = document.getElementById("isSub").textContent;
    if(isSub == "false"){
        if (opp == 'next' && currNum < 5 && currNum >= 1) {
            currNum += 1;
        } 
        else if(opp == 'pre' && currNum > 1){
             currNum -= 1;
        }
        changeQuestion(currNum);
         if(currNum == 5 &&  qOne != 'blank' &&  qTwo != 'blank' && qThree != 'blank' && qFour != 'blank' && qFive != 'blank'){
            document.getElementById("Question").innerHTML = "You want to submit?";
            document.getElementById("sub").style.display = "inline-block";
            document.getElementById("ans1").style.display = "none";
            document.getElementById("ans2").style.display = "none";
            document.getElementById("ans3").style.display = "none";
            document.getElementById("ans4").style.display = "none";
            document.getElementById("a").style.display = "none";
            document.getElementById("b").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("d").style.display = "none";
        }else if(opp == 'pre' && qOne != 'blank' && qOne != 'blank' && qTwo != 'blank' && qTwo != 'blank' && qThree != 'blank' && qFour != 'blank' && qFive != 'blank'){
            document.getElementById("ans1").style.display = "inline-block";
            document.getElementById("ans2").style.display = "inline-block";
            document.getElementById("ans3").style.display = "inline-block";
            document.getElementById("ans4").style.display = "inline-block";
            document.getElementById("a").style.display = "inline-block";
            document.getElementById("b").style.display = "inline-block";
            document.getElementById("c").style.display = "inline-block";
            document.getElementById("d").style.display = "inline-block";
            document.getElementById("sub").style.display = "none";
        }else if(currNum == 5){
            alert("Answer all the questions!");
        }
    }
    if(isSub == "true"){
         document.getElementById("ch1").style.display = "none";
         document.getElementById("ch2").style.display = "none";
         document.getElementById("ch3").style.display = "none";
         document.getElementById("ch4").style.display = "none";
         document.getElementById("ch5").style.display = "none";
    }
    changeButton(currNum - 1);
 
}
function finalCheck(){
    let qOne = document.getElementById('QA1').textContent, qTwo = document.getElementById('QA2').textContent, qThree = document.getElementById('QA3').textContent, 
    qFour = document.getElementById('QA4').textContent , qFive = document.getElementById('QA5').textContent, total = 0;
    document.getElementById("sub").style.display = "none";
    document.getElementById("reCon").style.display = "inline";
    document.getElementById("isSub").textContent = "true";
    document.getElementById("Question").style.display = "none";
    if(qOne == "a"){
        total += 1;
    }
    if(qTwo == "c"){
        total += 1;
    }
    if(qThree == "a"){
        total += 1;
    }
    if(qFour == "d"){
        total += 1;
    }
    if(qFive == "b"){
        total += 1;
    }
    total /= 5;
    total *= 100;
    if(total == 100){
        //add the code to the link and give the user the password
        alert(total + "%" + "\n" + document.getElementById('master').textContent + "\nUsername is gcell");
        window.open("https://saffronsan.github.io/Leform//login.html", "_blank");
    }
    document.getElementById("retry").style.display = "block";
}
function updateAns(answer){
    let currQuesiton = parseInt(document.getElementById("tracker").textContent);
    if(currQuesiton == 1){
        document.getElementById('QA1').textContent = answer;
    }else if(currQuesiton == 2){
         document.getElementById('QA2').textContent = answer;
    }else if(currQuesiton == 3){
         document.getElementById('QA3').textContent = answer;
    }else if(currQuesiton == 4){
         document.getElementById('QA4').textContent = answer;
    }else if(currQuesiton == 5){
         document.getElementById('QA5').textContent = answer;
    }
}
function changeQuestion(num) {
    let isSub = document.getElementById("isSub").textContent;
    changeButton(num);
    if(isSub == "false"){
        if (num == 1) {
            document.getElementById("Question").innerHTML = "Is tawian a country?";
            document.getElementById("ans1").textContent = "What's that!";//ans
            document.getElementById("ans2").textContent = "Yes!";
            document.getElementById("ans3").textContent = "Si!";
            document.getElementById("ans4").textContent = "Oui!";
        } else if (num == 2) {
            document.getElementById("Question").innerHTML = "What happened on 1989?";
            document.getElementById("ans1").textContent = "Chinese Civil war";
            document.getElementById("ans2").textContent = "Tiananmen square massacre!";
            document.getElementById("ans3").textContent = "nothing!";//ans
            document.getElementById("ans4").textContent = "USSR FALLS!";
        } else if (num == 3) {
            document.getElementById("Question").innerHTML = "Whats the most fun hoilday?";
            document.getElementById("ans1").textContent = "9/11";//ans
            document.getElementById("ans2").textContent = "september the 11th";
            document.getElementById("ans3").textContent = "muslim easter";
            document.getElementById("ans4").textContent = "chrismas";
        } else if (num == 4) {
            document.getElementById("Question").innerHTML = "1 + 10 * 2 * 0";
              document.getElementById("ans1").textContent = "0";
            document.getElementById("ans2").textContent = "21";
            document.getElementById("ans3").textContent = "20";
            document.getElementById("ans4").textContent = "1";//ans
        } else if (num == 5) {
            document.getElementById("Question").innerHTML = "Whos the best leader?";
            document.getElementById("ans1").textContent = "Donald Trump";
            document.getElementById("ans2").textContent = "Hitler";//ans
            document.getElementById("ans3").textContent = "Obama";
            document.getElementById("ans4").textContent = "Stalin";
        }
        document.getElementById("tracker").innerHTML = num;
    }
}
