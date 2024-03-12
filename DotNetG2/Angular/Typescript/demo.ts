/** Agenda
 * 1- installation
 * 2- Datatypes
 * 3- array
 * 4- objects
 * 5- union
 * 6- functions
 * 7- class -- interface (oop)
 *
 */

/** Datatype
 * ---------------------
 *  number
 *  string
 *  boolean
 *  undefined
 *  null
 *  any
 */

/** var let const */

// var fname = "mona"; // string
// fname = "ali"; // string

// fname = 10;
// console.log(fname);

// var fname: string = "ali";

// fname = "mona"; // string

// fname = true;

// var x: number = 20;

// x = 234;

// var flag: boolean = true;

// flag = "rdd";

// var fname: any = "mona";

// fname = "ali";

// fname = 10;

// fname = true;

// var fname: string;
// fname = "ali";
// console.log(fname);

// var fname: string;
// console.log(fname);

// union

// type myType = string | number;

// var fname: myType = "mona";

// fname = 10;

// fname = true;

// var arr: boolean[] = []; // boolean
// var arr: any[] = [];

// arr.push("ali");
// arr.push(10);
// arr.push(true);

// type stringOrNumber = string | number;
// var arr: stringOrNumber[] = [];
// arr.push("mona");

// arr.push(10);
// arr.push(true);

// var person: { fname: string; age: number } = { fname: "ali", age: 10 };

// person.fname = "mona";
// person.age = 30;

// console.log(person);

// var arr: { fname: string; age: number }[] = [];
// // arr.push("dd");
// arr.push({ fname: "ali", age: 40 });

// var products: { id: number; name: string; price: number }[] = [];

// var products = [
// 	{ id: 1, name: "Book", price: 300 },
// 	{ id: 2, name: "PEn", price: 300 },
// 	{ id: 3, name: "watch", price: 300 },
// 	{ id: 4, name: "Mouse", price: 300 },
// ];

// console.log(products);
// 2 params
// function add(x: number, y: number): string | number {
// 	return x + y;
// }

// add(10, 40);

// function sayHello(): void {
// 	console.log("Welcome");
// }

// 0 args
// add(5, 8);
// add(40, 80);
// add(true, true);

// function add(x: number, y: number, ...rest: string[]) {}

// add(3, 6, "mona", "ali");

// function add(x: number = 0, y: number = 0) {}

// add(); //

// function add(x: number, y?: string) {}

// add(20);
/**====================== */
/*
class Product {
	id: number;
	name: string;
	
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	discount(): number {
		return 0.2;
	}
}
*/
// class Product {
// 	constructor(public id: number, private name: string) {}

// 	discount(): number {
// 		return 0.2;
// 	}

// 	get getName() {
// 		return this.name;
// 	}

// 	set setName(value: string) {
// 		this.name = value;
// 	}
// }

// var p1 = new Product(1, "book");
// var p2 = new Product(2, "pen");

// console.log(p1.getName);
// p1.setName = "new Name";

// p1.setName("watch");
// console.log(p1.getName());

// class Person {
// 	constructor(public id: number, public name: string, public age: number) {}

// 	// override
// 	display(): void {
// 		console.log(this.name + " " + this.age);
// 	}
// }

// class User extends Person {
// 	constructor(id: number, name: string, age: number, public password: string) {
// 		super(id, name, age);
// 	}

// 	display(): void {
// 		console.log("new Imple");
// 	}
// }

// var u1 = new User(1, "mona", 20, "MONA123");
// u1.display();
/**=================================== */
// interface Iproduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	quantity: number;
// 	imgSrc?: string;
// 	// discount: () => number;
// }

// var products: Iproduct[] = [];

// products = [
// 	{ id: 1, name: "book", price: 200, quantity: 0 },
// 	{ id: 2, name: "Pen", price: 200, quantity: 0 },
// 	{ id: 3, name: "Watch", price: 200, quantity: 0 },
// ];

// class Product implements Iproduct {
// 	constructor(public id, public name, public price, public quantity) {}
// 	discount(): number {
// 		return 0.2;
// 	}
// }

// var p1 = new Product(1, "book", 200, 10);
// console.log(p1.discount());
