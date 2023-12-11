/**
 * Variables
 *
 *
 */

/** V8 js engine */

/** Datatypes
 * -------------------------
 *  == primitive datatype
 *  -- string
 *  -- number
 *  -- boolean
 *  -- undefined
 *  -- null
 *  -- Symbol in (es6)
 *  == refernce datatype
 *  -- Object
 */

// var fname = null; // fname ={}
// fname = "ali";
// console.log(fname);
// console.log(typeof fname);
/** Var
 * -----------
 *  == reassign -- accept deferient datatype
 *  == redeclare
 *
 */
/** camelCase */
// var firstName = "ali";
// var firstName = 50; // redelcare
// console.log(firstName);
/** first
 *  firstSecond
 *  firstSecondThird
 */
// var lname;
// console.log(typeof lname);
// lname = "ahmed";
// console.log(typeof lname);

// var fname = "Ali";

// fname = "ahmed"; // string
// fname = 50; //
// console.log(typeof fname);
// console.log(fname);

// var fname;
// console.log(fname);
// console.log(typeof fname);
// var fname = "ali";

// var num = 30.258; //

// var flag = true;

// console.log(typeof fname);
// console.log(typeof num);
// console.log(typeof flag);

// var fname = "ali"; // literal creation
// var fname = String(10);
// console.log(fname);
// console.log(typeof fname);
// console.log("--------------");

// var num = 10;
// console.log(typeof num);
// console.log("-------------------");

// var num = 30;
// var num = Number("mona");
// console.log(num);

// console.log(typeof num);
/** NaN --> Not a number */
/** Falsy Values
 * ----------------------
 *  == undefined
 *  == null
 *  == NaN
 *  == 0
 *  == false
 *  == ""
 *
 * ------------truthy values---------------
 */
// var flag = Boolean(" ");
// console.log(flag);
// console.log("---------------");
// var flag = isNaN("10");
// console.log(flag);
/**============================ */
/**
 * 1- arith operator (+,-,*,%)
 * [+] ==> number + number --> add
 *         string + string --> concat
 *
 *  == coercion ==> js engine convert automatic from datatype to anther datatype
 */

// var num1 = "mona"; // string 30

// var num2 = 10; // NaN

// console.log(num1 - num2);
/** ===========
 *  2- comparasion Operator
 *
 *      [==] --> (values only)
 *      [===] --> (values & datatypes)
 * =========== */

// var num1 = true; // boolean  -->  1 ==> number
// var num2 = "true"; // string -->  NaN --> number

// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log("==============");

// var num1 = 1; // number

// var num2 = true; // boolean ==> 1 --> number

// console.log(num1 == num2);

// var num1 = false; // boolean --> 0 --> number

// var num2 = "false"; // string --> NaN --> number

// console.log(num1 == num2);
/**-----------Logical Operator
 * and
 * ------------------
 *  == true && true --> true
 *  == false && true --> false
 *  == true && false --> false
 *  == false && false --> false
 *----------------------------------
 or ||

 true || true --> true
 true || false --> true
 false || true --> true
 false || false --> false
 -----------------------------------
 Not 

  true ==> false 
  false ==> true
 * ------------- */
// "mona" && "ali";
// 0 && undefined;
/** false &&   */
/**--------------------- */

// for (var i = 0; i < 3; i++) {
// 	console.log(i);
// }
// var i =0
// while ( i < 5 ) {
//     i++;
//     console.log(i++)
// }

// do {
//     i++;
//     console.log(i)
// }while(i<5)
/**  Regex in js */
// /** Ternary Operator */
// var color = "red";

// color == "green" ? console.log("Welcome") : console.log("Hello");
// (condition)?line in case true : line in case false
// if ( flag )
//     console.log( "Welcome" );
// else
//     console.log( "Hello" );
/**----------------- */

// var flag = false;
/** ====== Communication with user ========= */
// var num = Number(prompt("Enter Your Num"));
// console.log(num + 10);

// alert("you deleted this item");

// var result = confirm("Are you sure you want to delete this item");

// var i = 5;

// for (var i = 1; i < 7; i++) {
// }
// document.writeln("<h" + i + ">Welcome dotnet track</h" + i + ">");
// result ? console.log("Item Deleted") : console.log("Operation Cancelled");

// var fname = "mona";

// console.log(fname + "ITI" + fname + " Welcome");

// document.writeln("<h1 class='test'>Welcome</h1>");
