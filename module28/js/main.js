var buttoni1=document.getElementById('btn1');

buttoni1.onclick=function(){
    alert('hello');
}

var buttoni2=document.getElementById('btn2');

buttoni2.onmouseover=function(){
    alert('bye');
}

var buttoni3=document.getElementById('btn3');

buttoni3.onmouseleave=function(){
    alert('good bye Tuanaaa');
}

var button=document.getElementById('btn1');

var txt1=document.getElementById('text1');


button.onclick=function(){
    txt1.style.color="blue";
    txt1.style.backgroundColor="purple";
    txt1.style.textAlign="center";
    txt1.style.padding="20px";
    txt1.style.fontSize="100px";

}    

var button4=document.getElementById('btn4');


button4.onclick=function(){
    txt1.setAttribute("class","test")
}