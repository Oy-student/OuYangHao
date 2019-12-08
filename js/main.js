

/*登录拖拽*/
var ul = $("bottom")[1];
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件
ul.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
   
    //获取左部和顶部的偏移量
    l = ul.offsetLeft;
    //开关打开
    isDown = true;
    //设置样式  
    ul.style.cursor = "move";
    window.onmousemove = function(e) {
   	if (isDown == false) {
      return;
  	}
    //获取x和y
    var nx = e.clientX;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);

    /*超出范围*/
	ul.style.marginLeft = nl + 'px';
    if(parseInt(ul.style.marginLeft) > 70){
        ul.style.marginLeft = "70px";
        }
     if(parseInt(ul.style.marginLeft) < -195){
        ul.style.marginLeft = "-195px";
        }
   
	}
}


//鼠标抬起事件
window.onmouseup = function() {
    //开关关闭
    isDown = false;
}

ID("fan").onclick = function(){
    $("contant1")[0].style.display = "none";
    $("bgc")[0].style.opacity = "1";
    $("bgc")[0].style.background = "none";
    $("contant")[0].style.background = "url(images/bg4.png) no-repeat";
}
$$("img")[0].onclick = function(){
    $("contant1")[0].style.display = "block";
    $("bgc")[0].style.background = "black";
    $("bgc")[0].style.opacity = "0.2";
    $("contant")[0].style.background = "none";
}