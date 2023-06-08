// Javascript er mddhe class blte kichu nai . javascript prototype er maddhome child object create kore.


//Parent Object Or function or a constructor function
function Person (name ,  age ) {
    //child object / get values from Person.Prototype
    let person =  Object.create(Person.prototype)
    person.name = name;
    person.age = age;

    return person;
}
//Prototype Parent func Person er property
Person.prototype = {
    //common methods
    eat(){
        console.log("person is eating");
    },
    sleep(){
        console.log("person is sleeping")
    }
}
//Create single object using Parent object
const sakib = Person('Sakib' ,  34);
console.log(sakib.eat())

const musfiq = Person('Musfiq' ,  32);
console.log(musfiq.sleep())