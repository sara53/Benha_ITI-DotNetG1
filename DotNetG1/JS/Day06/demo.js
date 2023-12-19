/** Agenda
 * ========================
 *  == Ajax
 *  == Cookies
 *  == errorHandling
 */

// var tbody = document.getElementsByTagName("tbody")[0];

// function getUserData(userId) {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId);
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		// request completed
// 		if (xhr.readyState == 4) {
// 			// response
// 			if (xhr.status == 200) {
// 				var response = JSON.parse(xhr.response);
// 				var tr = document.createElement("tr");
// 				var td1 = document.createElement("td");
// 				var td2 = document.createElement("td");
// 				var td3 = document.createElement("td");
// 				td1.innerHTML = response.id;
// 				td2.innerHTML = response.name;
// 				td3.innerHTML = response.email;

// 				tr.append(td1, td2, td3);
// 				tbody.append(tr);
// 			}
// 		}
// 	};
// }
/** ============= Cookies ========== */
// document.cookie = "email=a@a.com";
// document.cookie = "password=123";
/**=============================== */

// var myDate = new Date();
// myDate.setDate(myDate.getDate() + 3);

// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() - 1);

// console.log(expireDate);
// // document.cookie = "username=ali;expires=" + myDate;
// // document.cookie = "email=a@a.com;expires=" + myDate;
// // document.cookie = "username=newuser;expires=" + myDate;

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + myDate;
// }
// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	document.cookie = key + "=any;expires=" + expireDate;
// }

// saveCookie("password", 123);

// deleteCookie("email");
// // hasCookie()
// ================ Error Handling ================ //
// console.log("first");
// console.loffg("second");
// console.log("third");

// try {
// 	console.log("first");
// 	//console.logddd("dff");
// 	//throw "Error caused by me";
// } catch (error) {
// 	console.log(error); // log file
// 	document.writeln("Connection Error , please try again  !!");
// 	//throw "Error";
// } finally {
// 	console.log("Final Log");
// }

// function greet(x, y) {
// 	console.log(typeof arguments[0] === "string");
// 	if (arguments.length == 0) {
// 		throw "Pass two values at least";
// 	} else {
// 		console.log(x + y);
// 	}
// }

// greet(4, 5);

/** ====================== */
