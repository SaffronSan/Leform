function sysCheck(){
  let name = document.getElementById("uname").value;
  let pass = document.getElementById("upass").value;
  var text;
  if(name == "gcell" && pass == "123"){
      alert("Nice, you're good at math");
      window.open("Saffronsan.github.io/homepage.html","_blank');
   }else{
      alert("Noob, get outta here");
    }
  
}
