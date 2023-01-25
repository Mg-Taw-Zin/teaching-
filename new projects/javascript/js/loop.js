let users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    address: "ygn",
    age: 22,
    gender: "male",
  },
  {
    id: 2,
    name: "alex",
    email: "alex@gmail.com",
    address: "pyinoolwin",
    age: 18,
    gender: "male",
  },
  {
    id: 3,
    name: "mya mya",
    email: "myamya@gmail.com",
    address: "mandalay",
    age: 25,
    gender: "female",
  },
  {
    id: 4,
    name: "kyawkyaw",
    email: "kyawkyaw@gmail.com",
    address: "naypyidaw",
    age: 30,
    gender: "male",
  },
  {
    id: 5,
    name: "aye aye ",
    email: "ayeaye@gmail.com",
    address: "pago",
    age: 32,
    gender: "female",
  },
];

let cart = [200, 300, 400, 500];
let total = cart.reduce((a, b) => a - b, 100);
console.log(total);

// let name = users.filter((u) => u.gender === "male").map((u) => u.name);
// let name2 = users.filter((u) => u.age <= 25).map((u) => u.name);
// console.log(name);
// console.log(name2);

// let name = users.map((user) => user.name);
// console.log(name);
// let email = users.map((user) => user.email);
// console.log(email);
// let address = users.map((user) => user.address);
// console.log(address);
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   //   console.log(user);
//   if (user.gender === "male") {
//     console.log(
//       `My name is Mr.${user.name} age is ${user.age} gender is ${user.gender}`
//     );
//   } else {
//     console.log(
//       `My name is Ms.${user.name} age is ${user.age} gender is ${user.gender}`
//     );
//   }
// }

// users.forEach((user) => {
//   //   console.log(user);
//   console.log(
//     `my name is ${user.name} age is ${user.age} gender is ${user.gender}`
//   );
// });

// for (const i in users) {
//   console.log(i);
//   console.log(users[i]);
//   console.log(
//     "my name is " +
//       users[i].name +
//       "age is " +
//       users[i].age +
//       " gender is " +
//       users[i].gender
//   );
// }

// for (const u of users) {
//   console.log(u);
//   console.log(
//     "my name is " + u.name + "age is " + u.age + " gender is " + u.gender
//   );
// }
