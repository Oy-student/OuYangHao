var date=new Date();

function Ttranform(){
    var date=new Date();
    var hours=document.getElementById('hours');
    var minutes=document.getElementById('minutes');
    var seconds=document.getElementById('seconds');
    var num=$$("input")[0].value;
    var num2=$$("input")[1].value;
    hours.style.transform="rotate("+(num*30-90)+"deg)";
    minutes.style.transform="rotate("+(num2*6-90)+"deg)";
}
setInterval(Ttranform,1000);
Ttranform();
function change(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}
var hours1 = change(date.getHours());
var minutes1 = change(date.getMinutes());
$$("input")[0].value = hours1;
$$("input")[1].value = minutes1;
function test(){
    if(parseInt($$("input")[0].value) >= 24){
        $$("input")[0].value =  0;
    }
    if(parseInt($$("input")[2].value) >= 24){
        $$("input")[2].value =  0;
    }
    if(parseInt($$("input")[1].value) >= 60){
       $$("input")[1].value = 0;
    }
    if(parseInt($$("input")[3].value) >= 60){
       $$("input")[3].value = 0;
    }
}
setInterval(test,1500);
var a = 0;
$$("span")[4].onclick = function(){
    a++;
    if(a % 2 != 0){
        $("contant")[0].style.animation = "down 1s";
        $("contant")[0].style.marginTop = "250px";
        $("contant1")[0].style.animation = "top 1s";
        $("contant1")[0].style.display = "block";
    }else {
        $("contant")[0].style.marginTop = "0px";
        $("contant1")[0].style.display = "none";
    }
    
}

var ul = $("btn")[0];
var li = $("btn")[0].children[0];
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件
li.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
   
    //获取左部和顶部的偏移量
    l = li.offsetLeft;
    //开关打开
    isDown = true;
    //设置样式  
    li.style.cursor = "move";
    window.onmousemove = function(e) {
    if (isDown == false) {
      return;
    }
    //获取x和y
    var nx = e.clientX;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);
    if(nl >= 132 ){
        nl = 131;
    }

    /*超出范围*/
    li.style.marginLeft = nl + 'px';
    if(parseInt(li.style.marginLeft) > 131){
        li.style.marginLeft = "131px";
        }
    if(parseInt(li.style.marginLeft) < 0){
        li.style.marginLeft = "0px";
        }
    }
}


//鼠标抬起事件
window.onmouseup = function() {
    //开关关闭
    isDown = false;
    li.style.cursor = 'default';
}

for(var i = 0; i < $("color")[0].children.length ;i++){
    $("color")[0].children[i].onclick = function(){
        $("contant")[0].style.background = this.style.background;
    }
}

ID("end").onclick = function(){
    var h = $$("input")[0].value;
    var m = $$("input")[1].value;
    var h1 = $$("input")[2].value;
    var m1 = $$("input")[3].value;
    if(h == "" || m == "" 
        || h1 == "" || m1 == ""){
        alert("请填写完整");
        return;
    }
    if(h1 < h){
        alert("填写错误");
        return;
    }
    alert("倒计时开始");
    ID("end").onclick = function(){
                return false;
    }
    setInterval(down,1000);
}
function down(){
    var h = $$("input")[0].value;
    var m = $$("input")[1].value;
    var h1 = $$("input")[2].value;
    var m1 = $$("input")[3].value;
    function down1(){
        var data1= new Date();
        var hours = data1.getHours();
        var minutes = data1.getMinutes();
        if(h <= hours && m <= minutes ){
            if(h1 <= hours && m1 <= minutes){
                location.href="main.html";
                return;
            } 
            $("contant2")[0].style.display="block";
            /*$$("input")[0].readonly="readonly";
            console.log($$("input")[0]);
            $$("a")[0].onclick = function(){
                return false;
            }
            $$("span")[4].onclick = function(){
                return false;
            }   
            ID("end").onclick = function(){
                return false;
            }*/
        }
    }
    down1(h,m,h1,m1)
}