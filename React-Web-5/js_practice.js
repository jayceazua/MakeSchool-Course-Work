// Classes are special functions
// use a class declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    this.height * this.width;
  }
}

const square = new Rectangle(10, 10)
console.log(square.area) // >> 100

// Class Expressions
// unnamed
var Rectangle = class {
  constructor(height, width){
    this.height = height;
    this.width = width
  }
}

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

console.log(Point.distance(p1, p2)); // 7.0710678118654755


class Animal {
  speak() {
    return this
  }
  static eat() {
    return this
  }
}

let obj = new Animal();
obj.speak() // Animal {}
let speak = obj.speak;
speak(); //undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined.

// More Traditional
function Animal() { }
Animal.prototype.speak = function() {
  return this
}

Animal.eat = function() {
  return this
}

let obj = new Animal();
let speak = obj.speak;
speak() // global object

let eat = Animal.eat;
eat() // global object


//  Extends

class Animal {
  constructor (name) {
    this.name = name
  }

  speak() {
    console.log(this.name + 'makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();

// Traditional
function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.')
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.')
  }
}

var d = new Dog('Thor');
d.speak() // Thor barks.

var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.')
  }
}

class Dog {
  constructor(name) {
    this.name = name
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Thor');
d.speak(); // Thor makes a noise.

// Super
class Cat {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(this.name + ' makes a noise.')
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.')
  }
}


var l = new Lion('Fuzz')
l.speak();
// Fuzz makes a noise.
// Fuzz roars.



/* NOTES:
Hoisting
function and class declarations major difference
 function declarations are hoisted and class are not
you need to declare the class and THEN access it

class expressions - another way to define a class
they can be named or un-named
class expressions also suffer from the same hoisting issues mentioned for Class declarations
Syntactical Sugar of existing prototype-based inheritance

between the curly brackets {} is where you define class members; methods or constructor

Strict Mode
the body of classes are executed in strict mode

Constructor
is a special method for creating and initializing an object creared with a class.
there can only be one special method with the name "Constructor" in a class.
an error will be thrown if there is more than one occurrence of a constructor method
it uses the super keyword to call the constructor of the super class.

Static Methods
defines a static method for a class
they are called without instantiating their class and cannot be called through
  a class instance
often used to create utility functions for apps

Boxing with prototype and static Methods
 - when a prototype is called without an object valued then the "this" will be
  undefined insude the called function. autoboxing will not happen.
all functions, methods, constructors getters or setters are executed in strict Mode
we need to specify 'this' value if not it will be undefined.

Extends
 - used to create a class as a child of another class
 - if there is a constructor present in sub-class, it needs to first call super() before using this
 - classes cannot extend regular (non-constructible) objects
- if you want to inherit from a regular object, you can instead use Object.setPrototypeOf()

in JS classes you need to explicitly call super() when defining the constructor of a subclass
*/
