/**
 * == Events
 *  == add attribute // done
 *  == attach functions
 *  == addEventLister
 *================= DOM =================
  == How To Create Elements From JS
  ---------------------------------------
  BOM --> Browser Object Model
  ---------------------------------------
  == window
  == screen // self study
  == location
  == history
  == navigation

 */

/** <p> Welcome Dot net </p> */
// var parent = document.getElementById("parent");
// var p = document.createElement("p");
// var span = document.createElement("span");

// var text = document.createTextNode("Welcome Dot net track");

// p.appendChild(text);
// console.log(result);
// span.innerHTML = "Hello span";
// console.log(span);
// console.log(p);
// function addNewElement() {
// 	parent.before(p);
// 	parent.after(p);
// 	parent.append(p, span);
// 	parent.appendChild(p);
// 	parent.appendChild(span);
// }

/** Append VS appendChild */

/**
    p.innerHTML = "Welcome dot net track";
    p.setAttribute("id", "myP");
    p.setAttribute("class", "jsClass");
 */

// var p = document.querySelector(".content");
// var btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
// 	p.innerHTML = "Welcome dot net group";
// });
// btn.addEventListener("click", function () {
// 	p.style.backgroundColor = "red";
// });

// btn.removeEventListener("click", function () {
// 	p.style.backgroundColor = "red";
// });

// function execute(e) {
// 	console.log(e);
// 	changeContent();
// 	changeStyle();
// }
// btn.onclick = execute; // attach function

// btn.addEventListener("click", function () {
// 	changeStyle("green");
// });

/**
 *
 *
 *
 */

// function greet(x) {
// 	console.log("Welcome greet");
// }

// greet();

// removeEventListener
// var input1 = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input1.addEventListener("focus", function () {
// 	input1.style.border = "2px solid blue";
// });
// input1.addEventListener("blur", function () {
// 	input1.style.border = "2px solid orange";
// });
// input1.addEventListener("input", function (e) {
// 	if (e.target.value.length >= 3) {
// 		input1.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input1.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("success");
// }

// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("Second");
// }
// function third(e) {
// 	// e.stopPropagation();
// 	console.log("third");
// }

/** BOM --> Browser Object Model
 *
 *
 */
// var myWin;
// function openNewWindow() {
// 	myWin = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWin.close();
// }
// function moveToWindow() {
// 	myWin.moveTo(400, 400);
// }
// function moveByWindow() {
// 	myWin.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWin.resizeTo(300, 300);
// }
// function resizeByWindow() {
// 	// myWin.resizeBy(-100, -100);
// }

// console.log(window);

// alert("a");
// [window].alert("a");

// window.setTimeout(function () {
// 	open("about.html");
// }, 3000);
// var i = 0;

// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var span = document.getElementsByTagName("span")[0];

// var myInterval;
// function start() {
// 	var i = 0;
// 	myInterval = setInterval(function () {
// 		span.innerHTML = i++;
//     }, 1000 );

// }
// function stop() {
// 	clearInterval(myInterval);
// }

// function execute() {
// 	// location.reload();
// 	//location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname);//
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log(location.href);// get

// 	// console.log(history);
// 	console.log(navigator);
// }
// function successCb(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }

// function errorCb() {
// 	console.log("Error");
// }
// navigator.geolocation.getCurrentPosition(successCb, errorCb);
