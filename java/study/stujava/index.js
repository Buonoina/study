const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");

pullDownButton.addEventListener('click',function(){
		this.setAttribute("style","background-color:green;")
console.log("クリック");
});

pullDownButton.addEventListener('mouseover',function(){
		this.setAttribute("style","background-color:blue;")
console.log("乗る");
});

pullDownButton.addEventListener('mouseout',function(){
		this.removeAttribute("style","backgroung-color:red;")
console.log("外れる");
});

pullDownButton.addEventListener('click',function(){
if (pullDownParents.getAttribute("style") == "display:block;"){
	pullDownParents.removeAttribute("style","display:block;")
		console.log("表示");
	}else {
		pullDownParents.setAttribute("style","display:block;")
		console.log("非表示");
	}
});