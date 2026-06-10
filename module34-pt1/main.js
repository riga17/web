// //function printNames(){
//   //  document.write("John");
//     //document.write("<br>");
//    // setTimeout(function(){document.write("Ana");},3000);
//     //document.write("Bob");
// //}

// //asikrone
// printNames();

var colors =['red','green','blue','perple'];

function changeBgColor(){
    document.querySelector('body').style.backgroung=
    colors[Math.floor(Math.random()*colors.length)]
}

var names = ['John','Ana','Bob','Mark'];

function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*colors.length)]
}

setInterval(changeBgColor,1000);
setInterval(changeNames,1000);

//asikrone nuk e presin njera tjetren me u kry
//sinkrone presin 1 tani 2