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
class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
    this.name = name;
    this.age = age;
  }
  // Parent er kono method jodi modify kora lage taile amra sub class theke seta modify korte pari eta kei polymorphism bole
  eat() {
    super.eat();
    console.log(`${this.name} is Eating to many`);
  }
}
//Create new object
let sakib = new Cricketer("Sakib", 32, "All rounder", "Bangladesh");

sakib.eat();

//Refers from prototypeInheritance
