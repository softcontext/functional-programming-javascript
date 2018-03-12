/* https://gist.githubusercontent.com/hallettj/64478/raw/f69f6958533da8c7e0af3288bbca38dd33f77564/global-variables-are-bad.js */

// It is important to declare your variables.

(function() {
  var foo = 'Hello, world!';
  print(foo); //=> Hello, world!
})();

// Because if you don't, the become global variables.

(function() {
  foo = 'Hello, world!';
  print(foo) //=> Hello, world!
})();

print(foo) //=> Hello, world!

// When global variables sneak into your code the can cause problems.
// Especially in applications with concurrency.

var count = function() {
  for (i = 0; i < 10; i += 1) {
    print(i);
  }
};

count(); //=> 0 1 2 3 4 5 6 7 8 9

var countSilently = function() {
  for (i = 0; i < 10; i += 1) {
    // don't print anything;
  }
};

// Both loops increment i at the same time, which causes strange behavior.
window.setTimeout(countSilently, 10);
window.setTimeout(count, 10); //=> 2 3 7 8 9

// You can use 'this' in method definitions to refer to attributes of the
// method's object.

var obj = {
  name: 'foo',
  introduce: function() {
    print(this.name);
  }
};

obj.introduce(); //=> foo

// But 'this' does not follow the normal rules of scope in JavaScript. One
// might expect 'this' to be available with the same value via closure in the
// callback defined inside the method here.

var obj = {
  name: 'foo',
  introduce: function() {
    window.setTimeout(function() {
      print(this.name);
    }, 3000);
  }
};

obj.introduce(); //=> *pause* undefined

// In fact, this got bound to the global object in the callback. To get around
// this, assign the object reference to a regular variable that will have the
// same value inside the callback definition.

var obj = {
  name: 'foo',
  introduce: function() {
    var that = this;
    window.setTimeout(function() {
      print(that.name);
    }, 3000);
  }
};

obj.introduce(); //=> *pause* foo

// The keyword 'this' is actually dynamically assigned whenever a function is
// invoked. When a function is invoked as a method, i.e. obj.method(), 'this'
// is bound to 'obj'. But when a function is invoked by itself 'this' is bound
// to the global object.

var phrase = 'Hello, world!';
var printPhrase() {
  print(this.phrase);
}

printPhrase(); //=> Hello, world!

// This is true even of functions that were defined as a method.

var obj = {
  name: 'foo',
  introduce: function() {
    print(this.name);
  }
};

// When the function is invoked without 'obj.' in front of it, 'this' becomes
// the global namespace.

var introduce = obj.introduce;
introduce(); //=> undefined

// Method invocation and function invocation are two of the invocation patterns
// in JavaScript. A third is apply invocation, which gives us control over what
// 'this' will be assigned to during function execution.

introduce.apply(obj, null); //=> foo

// 'apply' is a method on Function. The first argument is the value that 'this'
// will be bound to. Successive arguments to apply are passed as arguments to
// the function that is being invoked.

var chatty = function(repeatTimes) {
  var i;
  for (i = 0; i < repeatTimes; i += 1) {
    print(this.name + ' ');
  }
}
chatty.apply(obj, 3) //=> foo foo foo

// The fourth and final invocation pattern in JavaScript is constructor
// invocation. This pattern was designed to provide a way to create new objects
// that would appear familiar to programmers who are used to programming with
// classes.

var Cat = function(name) {
  this.name = name;
};
Cat.prototype = {
  query: function() {
    print(this.name + ' says, "meow"');
  }
};

// When a function is called with the 'new' keyword in front of it, a new
// object is created and is bound to 'this' when the function runs. Special
// constructor functions use this feature to customize new objects as they are
// created.

var whiskers = new Cat('whiskers');
whiskers.query(); //=> whiskers says "meow"

// When a new object is created with 'new', the prototype of the new object is
// set to the prototype of the constructor function. So the new object inherits
// all of the attributes of the constructor's prototype value. In this case,
// new cat objects inherit the 'query' method from Cat.prototype.

var nibbler = new Cat('nibbler');
nibbler.query(); //=> nibbler says "meow"

// If a constructor function is called without the 'new' keyword, it is invoked
// with the ordinary function invocation pattern.

var gotcha = Cat('gotcha!');
gotcha.query(); //=> typein:165: TypeError: gotcha has no properties

// So 'this' is assigned to the global object instead of to a newly created object. That means that any attributes assigned to the new object by the constructor function become global variables!

print(name); //=> gotcha!

// Constructor invocation is pretty complicated and prone to disastrous global
// variable creation. Here is a cleaner way to create new objects that inherit
// from other objects.

// This defines Object.create, a method that simplifies the behavior of the
// 'new' keyword. This method was invented by Douglas Crockford.
// http://javascript.crockford.com/prototypal.html
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}

// Object.create(obj) returns a new object that inherits all of the attributes
// of obj. The 'cat' prototype object here defines a 'clone' method that wraps
// around Object.create to customize new 'cat' objects as they are created.

var cat = {
  query: function() {
    print(this.name + ' says "meow"');
  },
  clone: function(name) {
    var newCat = Object.create(this);
    newCat.name = name;
    return newCat;
  }
};

var fluffy = cat.clone('fluffy');
fluffy.query(); //=> fluffy says "meow"

// In addition to inheriting 'query', new cats also inherit 'clone'.

var fluffy2 = fluffy.clone('fluffy2');
fluffy2.query(); //=> fluffy2 says "meow"

// Methods and attributes are inherited, not copied. If you change the
// definition of 'clone' on 'cat' at this point, the change will be reflected
// in cat objects that have already been created.

fluffy2.hasOwnProperty('clone') //=> false
fluffy.hasOwnProperty('clone') //=> false
cat.hasOwnProperty('clone') //=> true
