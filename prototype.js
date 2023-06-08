
//Example 1
// Javascript er mddhe class blte kichu nai . javascript prototype er maddhome child object create kore.
//Parent Object Or function or a constructor function
function Person(name, age) {
  //child object / get values from Person.Prototype
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}
//Prototype Parent func Person er property
Person.prototype = {
  //common methods
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
};
//Create single object using Parent object
const sakib = Person("Sakib", 34);
// console.log(sakib.eat());

const musfiq = Person("Musfiq", 32);
// console.log(musfiq.sleep());


//Example 2
//Use with new keyword
function PersonWithNew(name, age) {
// jokhon new keyword diye object create kori tokhn Object.create use korar drkar hoina eita js nijei handle kore 
// let person = Object.create(Person.prototype);
  this.name = name;
  this.age = age;

//return kora lagena new keyword use korle
//return person;
}

PersonWithNew.prototype = {
  //common methods
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
};


//Create single object using Parent object
const tamim = new PersonWithNew("Tamim", 34);

console.log(tamim.eat());

const anik =new PersonWithNew("Anik", 32);


// Follow class.js the updated version of prototype which introduced class 