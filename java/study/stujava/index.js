let pullDownButton= document.getElementById("lists");

    pullDownButton.addEventListener('click',function(){
        pullDownButton.setAttribute("style","background-color:green;")
    console.log("クリック");
});

    pullDownButton.addEventListener('mouseover',function(){
        pullDownButton.setAttribute("style","background-color:blue;")
    console.log("乗る");
});

    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute("style","backgroung-color:red;")
    console.log("外れる");
});
