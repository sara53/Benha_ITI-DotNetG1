/** Agenda
 * =====================
 *  == Proptires Features
 *  == SetTimeOut execution
 *  == Promises (then -- catch / async await)
 *  == fetch
 */

// let fname = "ali";
// let age = 28;

// // function display() {
// // 	console.log("Welcome");
// // }
// let person = {
// 	fname,
// 	age,
// 	display,
// };

// person.display();

// console.log(person.display);

// let myKey = "streetNumber";
// let person = {
// 	fname: "ali", // key:value(any data)
// 	[myKey]: 26,
// };

// console.log(person["fname"]);

// console.log(person["age"]);

// console.log(person.fname); // dotnotation
/**========================================= */
// let person = {
// 	fname: "ali",
// 	age: 25,
// 	address: "alex",
// };

// let result = Object.keys(person);
// let result = Object.values(person);
// let result = Object.entries(person);

// console.log(result);

/**========================================= */

// function first() {
// 	console.log("first");
// 	second();
// 	console.log("End of first");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 	}
// }

// first();

// setTimeout(() => {
// 	console.log("out");

// 	console.log("After");
// }, 4000);

// setTimeout(() => {
// 	console.log("Second");
// }, 4000);

// console.log("End");

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("End");

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);

// var productsId;

// setTimeout(() => {
// 	productsId = [100, 200, 300];
// 	setTimeout(() => {
// 		let product = {
// 			id: productsId[0],
// 			name: "book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			let price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

/**================= */

// let fname = "mona";

// let myCallback = function () {
// 	console.log("Welcome Callback");
// };
// function greet(x, y) {
// 	x("ali");
// 	y();
// }

// greet(
// 	function (myP) {
// 		console.log(myP);
// 		console.log("CB1");
// 	},

// );

// console.log("==========");
// greet(myCallback, myCallback);
/**====== Promise ======== */

// let myPromise = new Promise(function (x, y) {
// 	//	x("Dot net track");
// 	y("Custom error message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch(function (errorMsg) {
// 		console.log(errorMsg);
// 	});

// console.log(myPromise);

/**
 * Pending
 * fulfilled
 *
 * rejected
 *
 */

/**=================== */
// function getProductsList() {
// 	let myPromise = new Promise(function (x, y) {
// 		let productsId;

// 		setTimeout(() => {
// 			productsId = [100, 200, 300];

// 			if (productsId) {
// 				x(productsId);
// 			} else {
// 				y("Error on getting products List");
// 			}
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProduct(productId) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			let product = {
// 				id: productId,
// 				name: "book",
// 				price: 300,
// 			};

// 			product ? resolve(product) : reject("Error on getting product Data");
// 		}, 1000);
// 	});
// }

// function getPrice(product) {
// 	return new Promise(function (resolve, reject) {
// 		let price = product.price;
// 		price ? resolve(price) : reject("Error on getting price");
// 	});
// }

// getProductsList()
// 	.then((productsList) => {
// 		return getProduct(productsList[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let productsList = await getProductsList();
// 		let product = await getProduct(productsList[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// fetch("http://jsonplaceholder.typicode.com/users")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// async function execute() {
// 	try {
// 		let response = await fetch("http://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
