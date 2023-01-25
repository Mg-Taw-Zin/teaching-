// let obj = {};key=>value

// let user = {
//   name: "ALEX",
//   age: 18,
//   gender: "male",
//   hobby: ["reading", "programming", "training"],
//   address: {
//     city: "yangon",
//     township: "thakata",
//     street: "20th street",
//   },
//   greet() {
//     return `my name is ${this.name} age is ${this.age}`;
//   },
// };

// object discture
// let { name, age, gender, hobby, address, phone = "0921332423" } = user;
// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(hobby[1]);
// console.log(address.city);

// user.name = "john";
// user.age = 25;
// console.log(user.greet());

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.gender);
// console.log(user.hobby);
// console.log(user.hobby[0]);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.township);
// console.log(user.greet());
// console.log(this);
// console.log(user{name});

// let users = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@gmail.com",
//     address: "ygn",
//     age: 22,
//     gender: "male",
//   },
//   {
//     id: 2,
//     name: "alex",
//     email: "alex@gmail.com",
//     address: "pyinoolwin",
//     age: 18,
//     gender: "male",
//   },
//   {
//     id: 3,
//     name: "mya mya",
//     email: "myamya@gmail.com",
//     address: "mandalay",
//     age: 25,
//     gender: "female",
//   },
//   {
//     id: 4,
//     name: "kyawkyaw",
//     email: "kyawkyaw@gmail.com",
//     address: "naypyidaw",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 5,
//     name: "aye aye ",
//     email: "ayeaye@gmail.com",
//     address: "pago",
//     age: 32,
//     gender: "female",
//   },
// ];
// console.log(users);
// console.log(users[0].name);
// console.log(users[1].name);

// let toJson = JSON.stringify(users);
// console.log(toJson);
// let toArray = JSON.parse(toJson);
// console.log(toArray);

const dice = {
  sides: 6,
  roll(count) {
    i = 0;
    let a = [];
    let b = [];
    while (i < count) {
      //diec start 1
      let res = Math.floor(this.sides * Math.random() + 1);
      if (res <= 3) {
        a.push(res);
      } else {
        b.push(res);
      }
      i++;
    }
    console.log(`a win ${a.length}`);
    console.log(`b win ${b.length}`);
    if (a.length === b.length) {
      console.log("game is draw");
    } else {
      let w = a.length > b.length ? "a winner" : "b winner";
      console.log(w);
    }
  },
};
dice.roll(12);
