/** Agenda
 * ----------------------
 *  == let var const
 *  == default values
 *  ==Spread Operator
 *  == rest Params
 * == primitive Datatype -- refernce datatype
 *  == String API
 *  == Arrow Functions
 *  == Array APIs
 */

/**
 * Var
 * ----------------
 * == reassign
 * == redeclare
 * == Hoisting
 * == added to window object
 * == function scope
 * =============================
 * let
 * -------------
 * == reassign
 * == can't redeclare
 * == can't be hoisted
 * == can't be added to window
 * == block scope
 * =============================
 * * const
 * -------------
 * ==can't  reassign
 * == can't redeclare
 * == can't be hoisted
 * == can't be added to window
 * == block scope
 */

// const PI = 3.14;

// console.log(PI);

// var fname = "DotNet";
// // let fname = "mona";
// console.log(fname);
// console.log(window.fname);

// function getValues() {
// 	let fname = "ali";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(fname);
// 		console.log(i);
// 	}
// 	// console.log("i outside loop is : ", i);
// }

// getValues();

/** destructuring in es6 */

// let arr = ["mona", "ali", "ahmed", "Hoda"];

// let [, , , z] = arr;

// console.log("x : ", x);
// console.log("y : ", y);
// console.log("z : ", z);

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 30,
// 	product: [1, 24, 5],
// };

// let { fname: fname, age: age } = person;
// let { fname, age, product } = person;
// console.log("fname : ", fname);
// console.log("age: ", age);

// console.log(product[0]);
/** =========================== */

// let a = 3;
// let b = a;

// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);
/** ============ Spread Operator =============== */

// let arr1 = ["mona", "ali"];
// console.log("hager", ...arr1);
// let arr2 = [1, 2, 3, ...arr1, "hoda", "ola"];

// arr1.push("ahmed");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let arr = [10, 3, 4, 60, 20];

// console.log(Math.max(...arr));

// function add(...rest) {
// 	console.log(" rest : ", rest);
// }

// add(2, 7, "mona", "ali");
// let arr = ["ali", "ahmed", "hoda", "alaa"];
// let [...y] = arr;

// // console.log(x);
// console.log(y.push("new element"));

// console.log(arr);
/** ===== functions
 *  --- built in functions
 *  --- user defined functions
 *      -- function statement
 *      -- function expression
 *      -- anonymous function
 *      -- call back function
 *      -- arrow functions
 *      -- IIFE
 *
 * =====  */
// function declartion , statement
// function add(x, y) {
// 	console.log(x + y);
// }

// // function expression
// let x = function (x, y) {
// 	console.log(x + y);
// };

// //arrow function

// let result = (x, y) => {
// 	console.log(x, y);
// };

// let add = (x) => {
// 	return x + " " + x;
// };

// let sayHello = (_) => console.log("sayHello");

// sayHello();
// let test = (x, y) => x + y;

// console.log(test(3, 5));
// console.log(add("mona"));
// this --> window
// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		//this --> person
// 		setTimeout(function () {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

/**
 *  == startsWith
 *  == endsWith
 *  == includes
 *  == concat
 *  == trim
 *  == trimEnd
 */

// let fname = "         hello from iti        ";

// console.log(`${fname.trimStart()} welcome dot net`);

/**
 *Array API
   = find
   = findIndex
   = map
   = every
   = some
   = foreach
 
 */
// let arr = [20, 40, 10, 12, 9];

//let itiTracks = ["PD", "OS", "Front", "Mearn"];

// let result = itiTracks.forEach((item, index) => {
// 	console.log(item, index);
// });
// let result = itiTracks.some(function (item, index) {
// 	return item.startsWith("s");
// });

//console.log(result);

// let result = arr.map(function (item, index) {
// 	return true;
// });

// console.log(result);
// let result = arr.find((item) => item > 25);

// console.log(result);

// function findElement(item, index, arr) {
// 	console.log("x : ", item);
// 	console.log("y : ", index);
// 	console.log("arr : ", arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}

// 	return -1;
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("========");
// }

// let products = [
// 	{
// 		id: 1,
// 		name: "book",
// 		category: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Watch",
// 		category: "B",
// 	},
// 	{
// 		id: 3,
// 		name: "Pen",
// 		category: "school",
// 	},
// 	{
// 		id: 4,
// 		name: "Mouse",
// 		category: "C",
// 	},
// ];

// let result = products.filter(function (item, index) {
// 	return false;
// });

// console.log(result);
