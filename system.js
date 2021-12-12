function sysCheck(){
  let name = document.getElementById("uname").value;
  let pass = document.getElementById("upass").value;
  var text;
  if(name == "gcell" || name == "anish" && pass == "123"){
      alert("Nice, you're good at math");
      window.open("https://saffronsan.github.io/Leform//rickroll.html","_blank");
   }else{
      alert("Noob, get outta here");
    }
  
}
