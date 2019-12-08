/*var choose_child = ID("choose");
var cc_len = choose_child.children[0].children.length;
*/
/*登录选择框*/
/*$$("li")[0].onclick = function(){
	ID("sign0").style.display = "block";
	ID("sign1").style.display = "none";
	this.classList.add("li1");
    $("btn")[0].parentNode.style.display = "block";
	$$("li")[1].classList.remove("li1");
}
$$("li")[1].onclick = function(){
	ID("sign1").style.display = "block";
	ID("sign0").style.display = "none";
    $("btn")[0].parentNode.style.display = "none";
	this.classList.add("li1");
    $$("li")[0].classList.remove("li1");
}
*/



$("fan")[0].onclick = function(){
    $("contant1")[0].style.display = "none";
    $("contant")[0].style.display = "block";
}
$("aa")[0].onclick = function(){
    $("contant")[0].style.display = "none";
    $("contant1")[0].style.display = "block";
    return false;
}
var Y = 60;
var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;

$("fa")[0].onclick = function(){
    var zhengv = $("zheng")[0].value;
    if(myreg.test(zhengv)){
        setInterval(function(){
        Y--;
        $("fa")[0].innerHTML = Y;
     },1000);
        setTimeout(function(){
            $("zq")[0].innerHTML = "验证码：1234";
        },2000);     
        $("zq")[0].style.color = "green";
    }else {
        $("zq")[0].innerHTML = "请输入正确的手机号";
        $("zq")[0].style.color = "red";
    }
    this.style.color = "gray";
}
$("btn")[0].onclick = function(){
    location.href = "main.html";
}
$("btn")[1].onclick = function(){
    if($("yan")[0].value != "1234"){
        alert("验证码错误");
    }else location.href = "main.html";
}

$("yan")[0].onfocus = function(){
    this.value = "";
    this.style.color = "black";
}
$("zheng")[0].onfocus = function(){
    this.value = "";
    this.style.color = "black";
}