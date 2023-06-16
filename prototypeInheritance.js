//Praent class or func
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Parent prototype property
Person.prototype = {
  eat: function () {
    console.log(`${this.name} is Eating`);
  },
};

//Sub class 
function Cricketer(name, age, type, country) {
  Person.call(this);
  this.type = type; 
  this.country = country;
  this.name = name;
  this.age= age;
}
//Get person prototype values in cricketer prototype
Cricketer.prototype = Object.create(Person.prototype);
//Overrite  constructor behave
Cricketer.prototype.constructor = Cricketer;
//create new object
let sakib = new Cricketer('Sakib' , 32 , 'All rounder' , "Bangladesh" );
//call
console.log(sakib.eat())
