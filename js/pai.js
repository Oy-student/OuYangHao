var ul = ID("bottom");
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
ul.onmousedown = function(e){
	y = e.clientY;
	isDown = true;
	window.onmousemove = function(e){
		if(isDown == false){
			return;
		}
		nx = e.clientY;
		nl = nx - y  ;
		if(nl >= 0 ){
			nl = 0;
		}
		if(nl <= "-70"){
			nl = "-70";
		}
		ul.style.marginTop = nl + "px";	
		
	}
}
window.onmouseup = function(){
	isDown = false;
}
