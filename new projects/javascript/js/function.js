// function hello() {
//   console.log("hello js");
// }
// hello();

// function hi() {
//   return "hi js ";
// }
// hi();
// console.log(hi());

// function sayHi() {
//   let res = "hi css";
//   console.log(res);
//   return res;
// }
// sayHi();

// function say_hi(name = "mg mg") {
//   console.log("hello, I am " + name);
// }
// say_hi();
// say_hi(bobo);
// say_hi(nono);

// function say_hi(name = "mg mg") {
//   if (typeof name === "string") {
//     console.log("hello, I am " + name);
//   } else {
//     console.log("name must be a string");
//   }
// }
// say_hi(12);
// say_hi("bobo");
// say_hi("nono");

// function add(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);
//   } else {
//     console.log("a and b must be a number");
//   }
// }
// add("bobo", "mgmg");
// add(12, 20);

// function greeting(name, gender) {
//   if (gender === "male") {
//     console.log(`hello how are you mr.${name}`);
//   } else {
//     console.log(`hello how are you ms.${name}`);
//   }
// }
// greeting("bobo", "male");
// greeting("rose", "female");

// let hi = function () {
//   console.log("say hello");
// };
// hi();

// let add = function (a = 1, b = 1) {
//   console.log(a + b);
// };
// add();
// add(2, 2);

//short function
// let hello = () => {
//   console.log("hello arrow");
// };

// // most used
// let hello2 = () => console.log("hello arrow");
// // most used

// let hello3 = () => "hello arrow";
// let hello4 = (_) => "hello arrow";
//short function

// hello();
// hello2();
// console.log(hello3());
// console.log(hello3());

// let add2 = (a, b) => console.log(a + b);
// add2(2, 2);

// let add3 = (a, b) => a + b;
// console.log(add3(2, 5));

// let phone = 500;
// let computer = 2000;
// let todayUSD = 2800;

// function usd(price) {
//   console.log("$-" + price);
// }

// usd(phone);
// usd(computer);

// function mmk(price, usdrate) {
//   console.log(price * usdrate + " -MMK");
// }

// mmk(phone, todayUSD);
// mmk(computer, todayUSD);
