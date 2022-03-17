class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("John");
// only with "new";
console.log(user);
console.log(typeof User); // function
console.log(User);
console.log(User.prototype); // { constructor: f, sayHi:f }
console.log(User.prototype.constructor); 
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi) // console.log(this.name);
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

User.prototype.sayBye = function() {
    console.log(this.name);
}

let user1 = new User("Alice");

console.log(Object.getOwnPropertyDescriptor(User.prototype, "sayHi"));
console.log(Object.getOwnPropertyDescriptor(User.prototype, "sayBye"));

console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi, sayBye
console.log(Object.getOwnPropertyNames(User.prototype).length); // 3

console.log(Object.getOwnPropertyDescriptor(User.prototype))

let hmm = Object.getOwnPropertyNames(User.prototype);

console.log(hmm.filter(item => item === "sayHi"));

function getFlags(obj) {
  return Object.getOwnPropertyDescriptors(obj);
}

let result = getFlags(hmm);

console.log(result);

function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function() {
  console.log(this.model);
};

let car = new Car("Ferrari");
car.getModel();

console.log(typeof Car); // function 
console.log(car instanceof Car); // true
console.log(Car.prototype); // { constructor: f }
console.log(Car.prototype.constructor); 

for(let prop in user) {
  console.log(prop); // hmmmmmmm 
}

function createClass(str) {

  return class {
    // constructor(name) {
    //   this.name = name;
    // }
    sayHi() {
      console.log(str);
    }
  }
}

let NewUser = createClass("Hello");

new NewUser().sayHi();

Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },

    }
})

console.log(Object.getOwnPropertyDescriptors(User.prototype));

class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(this.name);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 5) {
      console.log("So small...");
      return;
    }
    this._name = value;
  }
}

let animal = new Animal("lizard");
console.log(animal.name); // lizard
// animal = new Animal("lion"); // So small... 

console.log(Object.getOwnPropertyDescriptors(Animal.prototype));

Object.defineProperties(Animal.prototype, {
  surname: {
    get() {
      return this._surname
    },
  
  }
})


Animal.prototype.roar = function() {
  console.log(this.name);
}

console.log(Object.getOwnPropertyDescriptors(Animal.prototype));

for(let prop in animal) {
  console.log(prop);
}

console.log(animal);

function MyAnimal(tail) {
  this.tail = tail;

  this.roar = function() {
    console.log("Hello");
  }
}

MyAnimal.prototype.hasTail = function() {
  console.log(this.name);
}

let tail = new MyAnimal("yea");

console.log(tail);

for(let prop in tail) {
  console.log(prop); // tail, roar, hasTail
}

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}