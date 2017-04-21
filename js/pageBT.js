$(document).ready(function() {
var up=document.getElementById("up");
var down=document.getElementById("down");
up.onclick=function(){
  if(this.style.color=="yellow"){
    this.style.color="black";
  }
  else{
    this.style.color="yellow";
  }
}
down.onclick=function(){
  if(this.style.color=="red"){
    this.style.color="black";
  }
  else{
    this.style.color="red";
  }
}
});
