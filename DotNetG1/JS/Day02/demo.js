/** Agenda
 * ---------------------
 * == functions
 *  -- built in functions
 *  -- user defined functions
 *      -- function statement
 *      -- function expression
 *      -- (call back function)
 *      -- (anonymous function)
 *      -- IIFE (self invoked function) (self Study)
 *
 *
 * == Hoisting
 * == How js works ?
 * ------------------------------------------
 * == Array
 * == String Object
 *
 * (Date Object) ==> Self Study
 */

// var num1 = 3;
// var num2 = 4;
// var result = num1 + num2;
// console.log(result);

// /** 20 line */

// var num1 = 10;
// var num2 = 5;
// var result = num1 + num2;
// console.log(result);

// /** 100 line */
// var num1 = 8;
// var num2 = 3;
// var result = num1 + num2;
// console.log(result);

/** ================= */

// function params
// user defined function
// function statement
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// }

// add(4, 5);
/**------------------- */

// var result = Number("10");
// console.log(result);
// add(0);

// add("mona", "ali");
// console.log("--------------");

// add(4, 5);
// console.log("---------");
// add(true, true);
// add();
// console.log("----------");
// add(4);
// console.log("-----------");
// add(5, 6);
// console.log("--------------");
// add(3, 5);

// add(2, 3); // arguments
// console.log("------");
// add(10, 11);
// console.log("------");

/**================ function expression==================== */

// (function (x, y) {
// 	console.log(x + y);
// })();

// var result = add(4, 6);
// console.log(
// 	(function (x, y) {
// 		return x + y;
// 	})(4, 5)
// );
/** ========
 * // undefined -- ali
 * // ali -- ali
 *
 * ===== */

// console.log(fname);
// var fname = "ali";
// console.log(fname);

// function add(x, y) {
// 	console.log(x + y);
// }
// add(4, 5);

// console.log(result(4, 5)); // error result is not a function
// // console.log(result);
// function result(x, y) {
// 	console.log(x + y);
// 	return "ITI";
// }
/**==============Call Back Function============= */

// var dotNet = function (instName) {
// 	console.log(" Hello Dotnet Track ", "Your Instr is : ", instName);
// };
// var mearn = function (instName) {
// 	console.log("Hello mearn track", "Your Instr is : ", instName);
// };
// function greet(myFun, supervisorName) {
// 	myFun(supervisorName);
// 	console.log("Welcome From ITI");
// }

// greet(function () {
// 	console.log("Hello Front Track");
// }, "Ahmed Ali");

// console.log("===============");
// greet(function () {
// 	console.log("Hello IOT Track");
// }, "Ayman Ahmed");

// greet(mearn, "Mona Ali");
// console.log("-----------");
// greet(dotNet, "Ahmed Mohamed");
// function sayHello(name) {
// 	console.log("Hello ya ", name);
// }

// var fname = "ali";

// sayHello(fname);
// greet(dotNet); // call back function
// console.log("===================");
// greet(mearn);

// greet(function () {}, "string");
/**==============Call Back Function============= */
// function sayHello(myFun1, myFun2) {
// 	myFun1(
// 		function () {
// 			console.log("Welcome inner function");
// 		},
// 		function () {
// 			console.log("More complex");
// 		}
// 	);
// 	myFun2();
// }

// function success(x, y) {
// 	x();
// 	y();
// 	console.log("Welcome Cb1");
// }

// function error() {
// 	console.log("Welcome CB2");
// }
// sayHello(success, error);
/**====================
 * Array
 * ---------------------
 * == length
 * ------------------------
 *  == push
 *  == unshift
 *  == pop
 *  == shift
 *  == reverse
 *  == join
 *  == sort
 * =================== */

// var arr = [2, 44, 12, 7, 9];
// arr.sort(/** function callback */); // sort
// sort
// console.log(arr);
// var arr = ["mona", "ahmed", "alaa"];
// var result = arr.join("===");
// console.log(result);
// arr.reverse();
// console.log(arr);
// arr.shift();
// arr.shift();
// arr.pop();

// arr.unshift("hoda");
// arr.unshift(123);
// arr.push("hoda");
// arr.push(123);
// var studentsNames = [
// 	"mona",
// 	123,
// 	true,
// 	function () {
// 		console.log("welcome inner");
// 	},
// 	["red", "green"],
// ];
// console.log(studentsNames[4][0]);

// studentsNames[0] = "ali"; // set
// studentsNames[1] = "mona"; // set

// for (var i = 0; i < studentsNames.length; i++) {
// 	console.log(studentsNames[i]);
// }

/** ================== String API
 *  == length
 * ======================
 * == charAt --> return char
 * == indexOf --> return index
 * == lastIndexOf --> return index
 * == concat --> return index
 * == startWith
 * == endsWith
 * == toLowerCase
 * == toUpperCase
 * == split
 * == trim
 * == trimStart
 * == trimEnd
 * == includes
 *
 * ======================= */

// var fname = "hello";
// var result = fname.includes("hello");
// console.log(result);

// console.log(fname.length);
/** ahmed  ==> demha*/

// var fname = "ahmed";

// console.log(fname.split("").reverse().join(""));
