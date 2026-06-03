var a = 2;
do {
    a= a + 3;
    console.log(a);

}while(a>5);
console.log("------------")
var i=0;

while(i<5){
    i=i+1;
    console.log(i)
}
var x=0;
var y=0;

while(y<4){
    y++;//tash kjo ebon y=1po tash kjo riten 1+1=2
    x+=y;//x=x+y 0+1=1, e tash y=2 kshtuqe x=1+2=3
    console.log(x);
    console.log(y);
}


for(b=0;b<5;b++){
    console.log("vlera b eshte:" + b)
}

//for - {in}

var person = {firstname: "John", lastname:"Doe", age:"25"}

var text = '';

var z;

for(z in person) {
    text += person[z];

}

// 1 --> John
// 2 --> John Doe
// 3 --> JohnDoe25


console.log(text);
console.log("-----------------------")

// for - {of}

var names = ['steve','bill','mark'];

var y;

for(y of names){
    console.log(y)
}
console.log("-----------------------");


//in zakonisht perdoret kur dojna me kthy numra 

var txt = "Javascript";

var b;

for(b of txt){
    console.log(b)
}
console.log("-----------------------");
