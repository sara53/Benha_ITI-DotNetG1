/** Agenda
 * ----------------------
 *  == generator & iterator
 *  == symbol
 *  == modules
 *  ==  oop in es6
 */

/**---------------- */

// console.log(arr);
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	address: "alex",
// };

// console.log(person);

// for (let i of arr) {
// 	console.log(i);
// }
// i --> key
// for (let key in person) {
// 	console.log(person[key]);
// }
// for (let index in arr) {
// 	console.log(arr[index]);
// }
/** ------- */
// for (let value of arr) {
// 	console.log(value);
// }

/**
 *
 *
 */

// let x = Symbol("age");

// let y = Symbol("age");
// console.log(x == y);

// let x = Symbol("age");
// let product = {
// 	id: 1,
// 	name: "book",
// 	[x]: function () {
// 		console.log("welcome");
// 	},
// };

// product[x] = function () {
// 	console.log("Hello");
// };

// product[x]();
// let arr = ["PD", "Front", "OS", "Mearn"];
// arr[Symbol.iterator] = generateEven;

// let person = {
// 	fname: "ali",
// 	age: 26,
// };

// person[Symbol.iterator] = generateEven;

// function* generateEven() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }

// function* generateEven() {
// 	for (let i in this) {
// 		yield this[i];
// 	}
// }

// for (let x of person) {
// 	console.log(x);
// }
// function generateEven() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }
// for (let x of person) {
// 	console.log(x);
// }

// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/** Symbol.iteror == function
 * function return --> object
 *
 * object has next function
 *  function return {value,done}
 *
 */

// let arr = ["PD", "Front", "OS", "Mearn"];
// arr[Symbol.iterator] = getValue;

// function getValue() {
// 	let count = 0;
// 	return {
// 		next: () => {
// 			if (count == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[count++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// for (let x of arr) {
// 	console.log(x);
// }

// let iter = getValue();

// console.log(iter);
/** ========================================= */

// parent
// class Person {
// 	#id;
// 	constructor(id, fname = "", age = "") {
// 		this.fname = fname;
// 		this.age = age;
// 		this.#id = id;
// 	}

// 	display() {
// 		console.log(`${this.fname} ${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let p1 = new Person(1, "mona", 20);

// p1.setId = "newID";
// console.log(p1.getId);

// child
// class User extends Person {
// 	constructor(fname, age, password = "") {
// 		super(fname, age);
// 		this.password = password;
// 	}

// 	display() {
// 		console.log(this.fname + this.age + this.password);
// 	}
// 	generatePass() {}
// }

// let u1 = new User(34, "user1", 44, "qwre");

// console.log(u1.getId);
// u1.display();

// u1.generatePass();
/** */

// class Person {
// 	constructor(fname, age) {
// 		if (this.constructor == Person) {
// 			throw "Can't take an object from this class";
// 		}

// 		this.fname = fname;
// 		this.age = age;
// 	}

// 	display() {
// 		throw "Method not implemented";
// 	}
// }

// let p1 = new Person("ali", 33); // error
// console.log(p1);

/** export naming
 *  export default
 *
 */

// import sayHello, { add, square } from "./main.js";

// import * as all from "./main.js";
// console.log(all.square());

// console.log(all.add(4, 6));

// all.default();

/** = Object.assign
 *  == proxy
 *
 */

/**
 * class Shape (abstract Class)
 *
 * == class Circle, square -- (inherted from shap) (Area, param)
 *
 * == override tostring method
 *
 * classes will be exist on module 1 -- objects will be in anther module
 *
 *
 * == override @@ iter for array object to print each value from arr using Generator
 * == Convert person object from not iterable to iterable object using (iterator & gen)
 *
 *
 */
