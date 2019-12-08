var ul = $("contant")[0].children[0];
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
    window.onmousemove = function(e) {
   	if (isDown == false) {
      return;
  	}
    //获取x和y
    var nx = e.clientX;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);
    if(nl >= 0 ){
    	nl = 0;
    }
    if( nl <= -239){
        nl = -239;
    }
    /*超出范围*/
	ul.style.marginLeft = nl + 'px';
	}
}

$$("span")[0].onclick = function(){
    location.href = "sign.html";
}
//鼠标抬起事件

window.onmouseup = function() {
    //开关关闭
    isDown = false;
    var uL = parseInt(ul.style.marginLeft);
   
    if(uL == -239){
        $("dian")[0].children[1].style.background = "white";
        $("dian")[0].children[0].style.background = "none";
        var i = 5;
    }else {
         $("dian")[0].children[0].style.background = "white";
        $("dian")[0].children[1].style.background = "none";
    }

   /* if((uL > -132) && (uL < -30)){
        ul.style.marginLeft = "-239px";
        $("dian")[0].children[1].style.background = "white";
        $("dian")[0].children[0].style.background = "none";
   }else {
    ul.style.marginLeft = "0px";
    $("dian")[0].children[0].style.background = "white";
    $("dian")[0].children[1].style.background = "none";
   }*/
}
$("dian")[0].children[1].onclick = function(){
    this.style.background = "white";
    ul.style.marginLeft = "-239px";
    $("dian")[0].children[0].style.background = "none";
}
$("dian")[0].children[0].onclick = function(){
    this.style.background = "white";
    ul.style.marginLeft = "0px";
    $("dian")[0].children[1].style.background = "none";
}

