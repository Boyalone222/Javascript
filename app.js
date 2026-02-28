// Hello World!
var name = 'jasayo'
let age = 30;
student =  name + age
console.log(student);


function greet (FullName) {
    console.log('my name is ' + FullName );
}

greet("Toheeb");

class Car {
   constructor(name, price) {
    this.name = name;
    this.price = price;
  } 

  displayProduct(){

    console.log('product: ' + this.name);
    console.log('price: ' + this.price);
  }
}
const product = new Car("Benz",'40milliom');
product.displayProduct();