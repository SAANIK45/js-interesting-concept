//Implicit Binding

var anik = {
    name : 'Anik',
    age:27,
    printDetails : function () {
        console.log(`${this.name} is ${this.age} years old`)
    }
}
//Here it is called and we get .(dot notation) in the left so here anik is this  
anik.printDetails();