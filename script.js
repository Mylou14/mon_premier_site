
setTimeout(function() {
var result = prompt("Quel est ton nom ?");
var element = document.getElementById('nom');
if(result != null){
  element.innerHTML = "Merci d'avoir visité mon site, " + result + " !";
}
},2000);