var getMin = function (array){
        var min = 100000;
        for(var i=0;i<array.length;i++){
          if(min>heights[i]){
            min=heights[i]
          }
        }
        return min;
  }
  var getMax = function(array){
    var max=0;
    for(var i=0;i<array.length;i++){
      if(max<heights[i]){
        max=heights[i]
      }
    }
    return max;
  }
  var getWhich = function(num,array){
    var which=0;
    for(var i=0;i<array.length;i++){
      if(num==array[i]){
      which=i;}
    }
    return which;
  }
  var boxes=document.getElementsByClassName("box");//获取页面中的所有box并且存入数组boxes.
  var heights=new Array();
  console.log(heights.length);
  for(var i=0;i<4;i++){
    console.log(i);
  heights[i]=boxes[i].offsetHeight;
  console.log(heights[0]);
  }//创建一个高度数组,用来存储第一行div元素的高度
  for(var i=4;i<boxes.length;i++){
    console.log(i);
    var min=getMin(heights);
    console.log(min);
    console.log(heights[3]);
    var which=(getWhich(min,heights));
    console.log(which);
    boxes[i].style.position="absolute";
    boxes[i].style.top=min+"px";
    boxes[i].style.left=which*335+"px";
    heights[which]+=boxes[i].offsetHeight;
  }
  var footer=document.getElementById("footer");
  var max=getMax(heights)+400;
  console.log(heights);
  console.log(max);
  footer.style.position="absolute";
  footer.style.top=max+"px";
