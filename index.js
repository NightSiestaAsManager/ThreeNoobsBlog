$(document).ready(function(){
var hideAll = function(){
  $(".container1").hide("slow");
  $(".container2").hide("slow");
  $(".container3").hide("slow");
  $(".container4").hide("slow");
}
$(".clicking1").bind("click",function(){
  hideAll();
  $(".container1").slideToggle("slow");
})
$(".clicking2").bind("click",function(){
  hideAll();
  $(".container2").slideToggle("slow");
})
$(".clicking3").bind("click",function(){
  hideAll();
  $(".container3").slideToggle("slow");
})
$(".clicking4").bind("click",function(){
  hideAll();
  $(".container4").slideToggle("slow");
})
var x=0;
$(".clicking5").bind("click",function(){
  if(x==0){$(this).css("color","red");}
  if(x==1){$(this).text("Do you understand English?");}
  if(x==2){$(this).text("Don't do it Again!!!");}
  if(x==4){window.location.href="https://fanyi.baidu.com/#en/zh/Don%E2%80%98t%20touch%20me%EF%BC%81";}
  x++;
})
  $(".container1").hide();
  $(".container2").hide();
  $(".container3").hide();
  $(".container4").hide();
});
