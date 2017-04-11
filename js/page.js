var width=document.getElementById("get").width;
var author=document.getElementById("author");
var article=document.getElementsByTagName("article");
var sb=document.getElementsByClassName("smallBox");
var relate=document.getElementById("relatedArticle");
max=0;
for(var i=0;i<sb.length;i++){
  if(max<sb[i].offsetHeight){max=sb[i].offsetHeight;}
}
console.log(sb[0].offsetHeight);
console.log(sb);
console.log(max);
article[0].style.width=width+"px";
author.style.width=2*width+"px";
relate.style.height=max+120+"px";
