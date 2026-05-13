function showms(){
    alert("ky eshte vetem nje mesazh")
}

showms();

function sum(nr1,nr3){
    return nr1 + nr3
}

sum(3,5)
console.log(sum(2,4));
document.write(sum(3,4));

function localvariable(){
    var vl="Digital School";
    alert(vl);
}

localvariable();

var car={
    name:"Audi",
    color:"Red",
    year:2000,
    kilometers:0,
    starEngine:function(){
        alert("vroom");

    },
    get getkilometers(){
        return this.kilometers;
    },
    set setkilometers(km){
        this.kilometers=km
    }
};

console.log(car.getkilometers);
car.setkilometers=100;
console.log(car.getkilometers)
alert(car,name),
alert(car['color']);

car.starEngine();