/** Agenda
 * --------------------------
 *  == Function executions in memory
 *  == local scope VS Global Scope
 *  == Shadwing
 *  == Object (access / read/ write)
 *      == dot notation
 *      == subscript notation
 *
 *  == Math Object
 */

// var fname = "mona";
// function add() {
// 	fname = "Alaa";
// 	var a = 3;
// 	var b = 4;
// 	console.log("fname Inside : ", fname);
// 	console.log("Welcome dot net");

// }

// console.log("fname before calling : ", fname);
// var result = add();
// console.log("fname after calling : ", fname);

// console.log(result);
/**================================== */

// function sayHello(trackName) {
// 	console.log("Hello ", trackName);
// 	return "ITI";
// }

// function greet() {
// 	console.log("Welcome From ITI");
// 	var result = sayHello("DotNet");
// 	return result;
// }

// var output = greet();

// console.log(output);

/**====================
 *  Properties
 *  prop : key:value
 *  Methods
 *
 *
 * ============== */

// var myKey = "age";
// var person = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		city: "Benha",
// 		street: "Saad Str",
// 		code: 123,
// 	},
// 	colors: ["red", "green", "blue"],
// 	//method
// 	display: function (myFun) {
// 		myFun();
// 		console.log(person.fname);
// 	},
// 	sayHello: function () {
// 		console.log("sayHello");
// 	},
// };

// person.display(function () {
// 	console.log("Welcome call back");
// });
// person.sayHello();
// person.display();
// person["display"]();
// console.log(person.myKey); //undefined -- 20 -- error
// console.log(person["myKey"]); // 20, undefined
// console.log(person[myKey]); // 20

// person["fname"] = "hoda";
// person["gender"] = "female";
// console.log(person);

// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address.city);
// console.log(person.address["city"]);

// console.log(person.gender);
// subscript notation
// console.log(person["fname"]); // get
// console.log(person.fname); // get
// var colors = person.colors;
// for (var i = 0; i < person.colors.length; i++) {
// 	console.log(person.colors[i]);
// }
// person.address;
// console.log(person.address.city);
// console.log(person.address.code);
// console.log(person.address.street);
// console.log(address.city);
// console.log(address.code);
// console.log(address.street);
// person.color = "red"; // add

// person.fname = "hoda"; // override .. set
// console.log(person);
// console.log(person.fname); // get
// console.log(person.age); // get
// console.log(person.address); // get
// console.log(person.color); // get

// var student = {
// 	fname: "mona",
// 	age: 23,
// 	address: "alex",
// };

/** =============== */

// var arr = ["mona", "ali"];
// arr.push("new Value");
// var fname = "hello";

// console.log(fname.length); // length
// var result = fname.charAt(0);
// console.log(result);
/**===================
 *  == PI
 *  ---------------------
 *  == sqrt
 *  == abs
 *  == pow
 *  == sign --> 1 --> Positive
 *          --> -1 --> negative
 *          --> 0  --> 0
 *
 * == max
 * == min
 * ------------------------
 * == round
 * == random
 * == ceil
 * == floor
 * ---------------------------
 * ===================================== */
// console.log(Math.abs(-30));
// console.log(Math.sign(100));
// console.log(Math.sign(-100));
// console.log(Math.sign(0));
/* ================== */

// console.log(Math.max(12, 4, 6, 7));
// console.log(Math.min(12, 4, 6, 7));
/**=================================== */
// console.log(Math.round(3.2));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
/**=================================== */

// console.log(Math.floor(Math.random() * 100));
/**==================Dom
 *  == document Object Model
 *
 *
 * ================= */

// console.log(document);

console.log(Math.sin((90 * Math.PI) / 180));
