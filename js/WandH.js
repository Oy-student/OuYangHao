function $(className){
	return document.getElementsByClassName(className);
}
function $$(TagName){
	return document.getElementsByTagName(TagName);
}
function ID(ID){
	return document.getElementById(ID);
}

$("contant")[0].style.height = innerHeight - 1 + "px";
$("contant")[0].style.width = innerWidth  - 1 + "px";