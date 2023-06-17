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
  get setName(){
    return this.name;
  }
}
//Create new object
let sakib = new Person("Sakib", 32);

console.log(sakib.setName)