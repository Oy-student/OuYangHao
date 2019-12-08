var time = new Date();				
var p3 = document.getElementById('p3');					/*时间*/
var div1 = document.getElementsByClassName("div1")[0];  /*整个图层*/	
var text1 = document.getElementById("text1");	/*倒计时*/
var layer = document.getElementById("stu"); /*透明图层*/
var month = time.getMonth() + 1 ;
var div3 = document.getElementsByTagName("div")[0];
p3.innerHTML = time.getFullYear()+"/"+ month +"/"+time.getDate();
var div2 = document.getElementById("div2");

div2.style.animation = "touming 1s";
//关闭弹窗
function guan(){
	div2.style.display = "none";

}

//定义一个倒计时
	function countDown(){
		var hours = Math.floor(time1 / 3600);
		var minutes = Math.floor(time1 / 60) % 60;
		var seconds = Math.floor(time1 % 60);
		hours = change(hours);
		minutes = change(minutes);
		seconds = change(seconds);

		text1.innerHTML = hours + ":" + minutes + ":" +seconds;
		time1--;
		setTimeout(countDown,1000);
		layer.style.display = "block";
		if(time1 == 0){
			location.href = "main.html";
		}
	}
//时间小于10的数，让它成为两位数
	function change(e){
		if(e < 10){
			e = "0" + e;
		}return e;
	}




var sui = Math.random() * 255;
var sui1 = Math.random() * 255;
var sui2 = Math.random() * 255;
var tou = document.getElementsByClassName("tou")[0];
var tou1 = document.getElementsByClassName("tou")[1];
function bianse(){
	 sui = Math.random() * 255;
	 sui1 = Math.random() * 255;
	 sui2 = Math.random() * 255;
	tou.style.color = "rgb("+sui+","+sui1+","+sui2+")";
	tou1.style.color = "rgb("+sui+","+sui1+","+sui2+")";
}
setInterval(bianse,1000);
//定义时间
	function countDownOne(){
		time1 = 3600;
		countDown();
		div1.style.display = "none";	/*隐藏全部*/
		text1.style.animation = "touming 4s"; /*倒计时出现*/
		text1.style.textShadow = "8px 8px 8px #000";
		layer.style.zIndex = 1;

		
	}
	function countDownTwo(){
		time1 = 7200;
		countDown();
		div1.style.display = "none";	
		text1.style.animation = "touming 4s";
		layer.style.zIndex = 1;
		text1.style.textShadow = "8px 8px 8px #000";
		
	}
var a = 0;
var tt0 = document.getElementsByClassName("tt")[0];
var tt1 = document.getElementsByClassName("tt")[1];
var b = 0;
function tt(){
	tt0.innerHTML = a;
	if(a == 40){
		tt1.innerHTML = b;
		b++;
		if(b == 20){
			location.href = "interface2.html";
		}
	}else {
		a++;
	}
	
}
setInterval(tt,60000);