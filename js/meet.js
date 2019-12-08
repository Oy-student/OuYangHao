$("span1")[0].onclick = function(){
	var i = parseInt($("input1")[0].value);
	i++;
	$("input1")[0].value = i;
}
$("span1")[1].onclick = function(){
	var i = parseInt($("input1")[0].value);
	i--;
	if(i <= 0){
		i = 0;
	}
	$("input1")[0].value = i;
}

for(var i = 0; i < 24; i++){
	if( i < 10 ){
		i = "0" + i;
	}
	$$("select")[0].options.add(new Option(i,i));
	$$("select")[2].options.add(new Option(i,i));
}
for(var i = 0;i < 60; i++){
	if( i < 10 ){
		i = "0" + i;
	}
	$$("select")[1].options.add(new Option(i,i));
	$$("select")[3].options.add(new Option(i,i));
}

$$("button")[0].onclick = function(){
	var didian = $$("input")[0].value;
	var h = $$("select")[0].value;
	var m = $$("select")[1].value;
	var h1 = $$("select")[2].value;
	var m1 = $$("select")[3].value;
	var data = new Date();
	var year = data.getFullYear();
	var month = data.getMonth() + 1;
	var data = data.getDate();
	var people = $$("input")[1].value;
	if(didian == "" || h == "" || m == "" 
		|| h1 == "" || m1 == ""){
		alert("请填写完整");
		return;
	}
	if(people == "0" || h1 < h){
		alert("填写错误");
		return;
	}
	$("span1")[2].innerHTML = year+"/"+month+"/"+data;
	$("span2")[0].innerHTML = h +":"+m+"-"+h1+":"+m1 ;
	$$("input")[2].value = didian;
	$("contant")[0].style.display = "none";
	$("contant1")[0].style.display = "block";
	setInterval(down,1000);
}
function down(){
	var suo = $("span2")[0].innerHTML;
	var qie = suo.split("-");
	var time0 = qie[0].split(":");
	var time1 = qie[1].split(":");
	function down1(h,m,h1,m1){
		var data = new Date();
		var hours = data.getHours();
		var minuites = data.getMinutes();
		hours = change(hours);
		minuites = change(minuites);
		if(h <= hours && m <= minuites){	
			if(hours >= h1 && minuites >= m1){
				location.href = "main.html";
				return;
			}

		} 
	}

	down1(time0[0],time0[1],time1[0],time1[1]);
}
function change(i){
	if(i < 10){
		i = "0" + i;
	}
	return i;
}

$("p1")[0].onclick = function(){
	$("contant2")[0].style.display = "block";
	$("contant1")[0].style.display = "none";
}
$("btn")[0].onclick = function(){
	$("contant2")[0].style.display = "none";
	$("contant1")[0].style.display = "block";
}