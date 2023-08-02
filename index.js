import { CalculatorModule } from "./design-pattern/module.js";
import { RevealingModuleCal } from "./design-pattern/revealing-module.js";
import { Ticket, User } from "./design-pattern/observer.js"; 
import { Product } from "./design-pattern/prototype.js";
import { Singleton } from "./design-pattern/singleton.js";
import { ProductFactory, Shirt, DiscountedProduct, FreeShippingProduct } from "./design-pattern/factory-decorate.js";
// Module
console.log('Module');
CalculatorModule.add(5, 3);
console.log(CalculatorModule.getResult());

CalculatorModule.subtract(10, 2);
console.log(CalculatorModule.getResult());

CalculatorModule.multiply(4, 3);
console.log(CalculatorModule.getResult()); 

CalculatorModule.divide(15, 3);
console.log(CalculatorModule.getResult());

CalculatorModule.divide(10, 0)

// Revealing-module
console.log('Revealing-module');
RevealingModuleCal.add(5, 3);
console.log(RevealingModuleCal.getResult());

RevealingModuleCal.subtract(10, 2);
console.log(RevealingModuleCal.getResult());

RevealingModuleCal.multiply(4, 3);
console.log(RevealingModuleCal.getResult()); 

RevealingModuleCal.divide(15, 3);
console.log(RevealingModuleCal.getResult());

RevealingModuleCal.divide(10, 0)

// Observer
console.log('Observer');
const ticket = new Ticket();
const user1 = new User("User 1");
const user2 = new User("User 2");

ticket.addUser(user1);
ticket.addUser(user2);

ticket.changeStatus('In Progress');
ticket.removeUser(user2);
ticket.changeStatus('Closed');

// Prototype 
console.log('Prototype');
let shirt = new Product('Shirt', 20);
shirt.setColor('Red');
shirt.setSize('M');

let anotherShirt = shirt.clone();
anotherShirt.setColor('Blue');
anotherShirt.setSize('L');

console.log(shirt);
console.log(anotherShirt);

// Singleton
console.log('singleton');
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2);

singletonInstance1.publicMethod();
console.log(singletonInstance1.getPrivateProperty());

// Factory
console.log('Factory');
const factory = new ProductFactory();

const shirtFactory = factory.createProduct('shirt', 'T-Shirt', 20);
shirtFactory.getInfo();

const pants = factory.createProduct('pants', 'Jeans', 50);
pants.getInfo();

// Decorator
console.log('Decorator');
const shirtDecorator = new Shirt("T-Shirt", 20);
shirtDecorator.getInfo();

const discountedShirt = new DiscountedProduct(shirtDecorator, 10);
discountedShirt.getInfo();

const freeShippingShirt = new FreeShippingProduct(shirtDecorator);
freeShippingShirt.getInfo();