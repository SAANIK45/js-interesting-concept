//Javascript a sob kichui  Object = Object Property theke create hoi and amra joto object e create kori na kno sob gula object e main
//Object er sathe connected hoye thake ar ei system takei prototype chain bola hoi

//exp
//Main Object er mddhe anik nam a ekta property  add kora hoice
Object.prototype.anik = function () {
  console.log("i am anik");
};

var p = {};
//eijnno eikhane p.anik() access krte parchi
p.anik();
