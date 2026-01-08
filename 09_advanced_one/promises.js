const promiseOne = new Promise(function (resolve, reject) {
  // some async operation
  // db calls,crypto operations,file operations
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    consolve.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "maitreya", email: "maitreya@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "maitreya", email: "maitreya@gmail.com" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour.then((user) => {
  console.log(user);
  return user.username;
});
