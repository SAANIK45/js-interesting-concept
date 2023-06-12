// //Explicit Binding

var printName = function(v1,v2){
    console.log(this.name)
    console.log(v1,v2)
}

var anik = { 
    name : 'Anik',
    age: 34
}
//.call method
// printName.call(anik);

//We can pass infinite parameter through call method
var printVersion = function(v1,v2){
   
    console.log(v1,v2)
}


let v1 = "smart"
let v2 = "handsome"


printVersion.call(anik,v1,v2);

//.apply
//when we need to pass an array then we can use the apply method

var printVersionApply = function(v){
    console.log(v)
}
let v3 = [v1,v2];

printVersionApply.apply(anik,v3)


//.bind - use for create new instance
const printSakib = function(v1,v2){
    console.log(this.name ,v1,v2)

}

var sakib = {
    name  : 'Sakib'
}

var newFunc = printSakib.bind(sakib,v1,v2);
newFunc()