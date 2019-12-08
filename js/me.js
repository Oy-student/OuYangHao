/*动态拖拽*/
var ul = ID("dtxx").children[0];
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
var a;
/**/
var pic = ID("pic");
var picL = pic.children.length;
var file = $$("input")[0];
var	li = ID("pic").children[picL - 1];
li.onclick = function(){
	file.click(aa());
}
function de(){
	if(confirm("确认删除?")){
		this.parentNode.parentNode.remove();
	}
}
function ae(){
	if(confirm("首发无法删除")){
	}
}
$("qian")[0].onclick = function(){
	$("shu")[0].innerHTML = '<span class="shu">2<img src="images/right.png" alt=""></span>';
}
function aa(){
	if(file.value != "" ){
		var inputBox = ID("inputBox");
		var c1 = document.createElement("li");
		var img = document.createElement("img")
		var reader = new FileReader();
  		reader.readAsDataURL(inputBox.files[0]);
  		reader.onload = function(){
    		//读取完成后，将结果赋值给img的src
    		img.src = this.result;
    		img.style.width = "100px";
    		img.style.height = "100px";
    		return a = this.result;
  		}
  		if(ID("pic").children.length > 1){
  			alert("不能再添加了");
  		}else {
  			c1.appendChild(img);
			pic.insertBefore(c1,li);	
  		}
	}
	$("top")[0].children[2].onclick = function(){
		var text = $$("textarea")[0].value;
		var c2 = document.createElement("li");
		ul.insertBefore(c2,ul.children[0]);

		var p1 = document.createElement("p");
		p1.setAttribute("class","p1");
		c2.appendChild(p1);
		var img1 = document.createElement("img");
		img1.src = "images/bg.jpg";
		p1.appendChild(img1);
		var span1 = document.createElement("span");
		span1.setAttribute("class","span1");
		span1.innerHTML = "people";
		p1.appendChild(span1);
		var span2 = document.createElement("span");
		span2.setAttribute("class","span2");
		var img2 = document.createElement("img");
		img2.src = "images/leji.png";
		span2.appendChild(img2);
		span2.addEventListener("click",de);
		p1.appendChild(span2);
		

		var div = document.createElement("div");
		div.setAttribute("class","li_contant");
		c2.appendChild(div);
		var p3 = document.createElement("p");
		p3.innerHTML = $$("textarea")[0].value;
		div.appendChild(p3);
		var img7 = document.createElement("img");
		img7.src = a;
		img7.setAttribute("class","iimg");
		div.appendChild(img7);
		c2.appendChild(div);
		ID("pic").children[0].remove();



		var p2 = document.createElement("p");
		p2.setAttribute("class","p2");
		c2.appendChild(p2);
		var span3 = document.createElement("span");
		span3.setAttribute("class","span1");
		span3.innerHTML = "刚刚";
		p2.appendChild(span3);
		var span4 = document.createElement("span");
		span4.setAttribute("class","span2");
		var span7 = document.createElement("span");
		span7.innerHTML = "1";
		var img3 = document.createElement("img");
		img3.src = "images/love.png";
		span4.appendChild(img3);
		span4.appendChild(span7);
		p2.appendChild(span4);
		

		var span6 = document.createElement("span");
		span6.setAttribute("class","span4");
		var img5 = document.createElement("img");
		img5.src = "images/eye.png";
		var span8 = document.createElement("span");
		span8.innerHTML = "1";
		span6.appendChild(img5);
		p2.appendChild(span6);
		span6.appendChild(span8);

		$("contant")[0].style.display = "block";
		$("contant1")[0].style.display = "none";

		ID("choose1").style.display = "none";
		ID("phone").style.display = "block";
	}
}

//鼠标按下事件
ID("phone").onclick = function(){
	ID("choose1").style.display = "block";
	this.style.display = "none";
}
ID("choose1").children[1].onclick = function(){
	console.log(1);
}
var c  = ($("li1").length - 1) * 120 - 88;
ID("choose").children[0].children[0].onclick = function(){
    this.innerHTML = "动态";
    ID("dongtai").style.display = "block";
    ID("xinxi1").style.display = "none";
}

ID("choose").children[0].children[1].onclick = function(){
    this.innerHTML = "信息";
    ID("dongtai").style.display = "none";
    ID("xinxi1").style.display = "block";
}
ul.onmousedown = function(e){
	y = e.clientY	;
	t= ul.offsetTop;
	isDown = true;
	var uh = ul.clientHeight;
	var th = ID("dtxx").clientHeight;
window.onmousemove = function(e){
	if(isDown == false){
		return;
	}
	nx = e.clientY;
	nl = nx - (y -t) ;
	if(nl >= 0 ){
		nl = 0;
	}
	if(nl < (th -uh - 17)){
		nl = (th -uh - 17);
	}
	ul.style.marginTop = nl + "px";	
	}
}
window.onmouseup = function(){
	isDown = false;
}


$$("textarea")[0].onfocus = function(){
	if(this.value == "实时动态..."){
		this.value = "";
		this.style.color = "black";
	}
}
$$("textarea")[0].onblur = function(){
	if(this.value == ""){
		this.value = "实时动态...";
		this.style.color = "gray";
	}
}

ID("choose1").children[1].onclick = function(){
	$("contant1")[0].style.display = "block";
	$("contant")[0].style.display = "none";
}
ID("choose1").children[2].onclick = function(){
	ID("choose1").style.display = "none";
	ID("phone").style.display = "block";
}
$("top")[0].children[0].onclick = function(){
	$("contant1")[0].style.display = "none";
	$("contant")[0].style.display = "block";
	ID("choose1").style.display = "none";
	ID("phone").style.display = "block";
}

ID("xinxi1").children[0].children[1].onclick = function(){
	window.location.href = "paiming.html";
}
