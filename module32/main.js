//rgex apo regular expresion
//regex e perdorim per validu,me gjet sa shkronja sa hapesira etj

var text = "The best school in Kosovo is Digital School";
var result = text.search("Digital School")
document.getElementById("rezultati1").innerHTML = result;

var text = "The best school in Kosovo is Digital School";
var result = text.search(/Digital School/)//gjen tewktsin ku ja fillon
document.getElementById("rezultati2").innerHTML = result;

var text = "The best school in Kosovo is Digital School";
var result = text.replace(/Digital School/, "Another school")//bon replace
document.getElementById("rezultati3").innerHTML = result;

var text = "abcdef";
var regex = new RegExp('abc')// true ose false
document.getElementById("rezultati4").innerHTML = regex.text(text);

var text = "The best school in Kosovo is my school";
var regex = /school/g;//sa here eshte ne fjali
document.getElementById("rezultati5").innerHTML = text.match(text);


var text = "digital school is the best school in the world";
var regex = /i/g;//mi numru shkronjat ose fjalt
document.getElementById("rezultati6").innerHTML = text.match(regex);

var text = "digital school is the best school in the world";
var regex = /[abc]/g;//ta qet qato qe i gjen
document.getElementById("rezultati7").innerHTML = text.match(regex);

var text = "digital school is in top 10 best schools in the world";
var regex = /[abc]/g;//i shafq numrat cilt jan
document.getElementById("rezultati8").innerHTML = text.match(regex);

var text = "my school is the best schools in the world";
var regex = /(top | best |school)/g;//i gjen cilat jon e rendit
document.getElementById("rezultati9").innerHTML = text.match(regex);

var text = "100percent";
var regex =/\d/g;//digit
document.getElementById("rezultati10").innerHTML = text.match(regex);

var text = "my school i9s the best school in the world";
var regex =/\s/g;//space
document.getElementById("rezultati11").innerHTML = text.match(regex);

var text = "heeey how are you";
var regex =/e+/g;//
document.getElementById("rezultati12").innerHTML = text.match(regex);

var text = "so, I hope well see each other again soon.. ";
var regex =/so*/g;//s shko shfaqmi gjithqysh po edhe o 
document.getElementById("rezultati13").innerHTML = text.match(regex);

var text = "hey, hiiii, hi ";
var regex =/hi?/g;//shko shfaqe h gjithqysh amo i veq ni here 
document.getElementById("rezultati14").innerHTML = text.match(regex);

var text = "hello, helloo, hellooo ";
var regex =/o{3}/g;//shko shfaqe o amo veq tri here
document.getElementById("rezultati15").innerHTML = text.match(regex);

var text = "hello, helloo, hellooo, helloooo, helloooooo ";
var regex =/o{3,5}/g;//shko shfaqe o amo veq tri deri te 5
document.getElementById("rezultati16").innerHTML = text.match(regex);

var text = "bestfriend, friend , girlfriend";
var regex =/end$/g;
document.getElementById("rezultati17").innerHTML = text.match(regex);