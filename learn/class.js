// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log('Hello World!');
//     }
// }

// console.log(User.prototype.sayHi);
// console.log(User);
// console.log(User.prototype.constructor);

let User = class {
    sayHi() {
      console.log("Hello");
    }
  };

let pr = new User();

pr.sayHi();