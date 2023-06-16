//Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is Eating`);
  }
}
//sub class
class Cricketer extends Person{
  constructor(name, age, type, country) {
    super(name,age)
    this.type = type;
    this.country = country;
    this.name = name;
    this.age = age;
  }
  play(){
    console.log(`${this.name} is Playing`);
  }
}
//Create new object
let sakib = new Cricketer("Sakib", 32, "All rounder", "Bangladesh");

console.log(sakib.play());

//Refers from prototypeInheritance