var programmingL = ['Java','Html','Python'];
console.log(programmingL);

console.log(programmingL[1]);

programmingL.push('css');
console.log(programmingL);

programmingL.pop();
console.log(programmingL);

programmingL.shift();
console.log(programmingL)

programmingL.splice (0,2,'javascript');
console.log(programmingL);

console.log(Math.random()*100);
console.log(Math.floor()*100);

var students=["Darisin","Donartin"]
var [s1,s2] = students;

console.log(s1);

var places = ["prishtine","prizren","peja","gjilan"];

var[, firstplace,secondplace] = places;
console.log(secondplace);