function sysCheck(){
  let name = document.getElementById("uname").value;
  let pass = document.getElementById("upass").value;
  var text;
  if(name == "gcell" && pass == "123"){
      alret("Nice, you're good at math");
      window.open("Saffronsan.github.io/homepage.html","_blank');
   }else{
      alret("Noob, get outta here");
    }
  
}
