//Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is Eating`);
  }

  //Getter -  its look like method but behave like property
  get setName() {
    return this.name;
  }
  //setter - 
  set setName(name) {
    this.name = name;
  }

  //static method - there are no relation with the object we create . we can access it using class name 
  static isEqualAge(sakib , tamim){
    return sakib.age === tamim.age;
  }

}
//Create new object its look like method but behave like property
let sakib = new Person("Sakib", 32);
let tamim = new Person("Sakib", 31);

console.log(sakib.setName);

sakib.setName = 'Tamim';


console.log(Person.isEqualAge(sakib , tamim))