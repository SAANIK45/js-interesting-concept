class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("person is eating");
  }
  sleep() {
    console.log("person is sleeping");
  }
}

const sakib =  new Person('Sakib' ,  45)
console.log(sakib.eat());