//use setTimeout to learn async in js
setTimeout(function ()  {
  console.log("Good morning Mark");
}, 5000);

console.log("I am blessed and sustained");
console.log("I am highly favored and grateful to the Lord");

//use setInterval to learn async in js
/*let i = 0;
setInterval(function()  {
  console.log(`$i = ${i}`);
  
}, 1000);*/


//callbacks
//producing code
function fetchData() {
    let data = { username: "John Doe", role: "Admin" };
    return data;
}

//consuming code
function showData(data) {
    console.log(`Username is ${data.username} and role is ${data.role}`);
}

const userData = fetchData();
showData(userData);

//use setTimeout
function fetchData(callback) {
  setTimeout(() => {
    let data = { username: "John Doe", role: "Admin" };
    callback(data);
  }, 2000);
}

fetchData(function (data) {
  console.log(`Username is ${data.username} and role is ${data.role}`);
});


function fetchUser(callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    let user = { username: "John Doe", role: "Admin" };
    callback(user);
  }, 2000);
}

function fetchPosts(user, callback) {
  setTimeout(() => {
    console.log(`Fetched posts for ${user.username}`);
    let posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 2000);
}

function fetchComments(post, callback) {
  setTimeout(() => {
    console.log(`Fetched comments for ${post}`);
    let comments = ["Nice post!", "Great work!", "Interesting read"];
    callback(comments);
  }, 2000);
}

// Callback Hell (Nested Callbacks)
fetchUser((user) => {
  fetchPosts(user, (posts) => {
    fetchComments(posts[0], (comments) => {
      console.log(`User: ${user.username}, Role: ${user.role}`);
      console.log(`Posts: ${posts}`);
      console.log(`Comments on first post: ${comments}`);
    });
  });
});

//creating a promise use resolve and reject
let myPromise = new Promise(function (resolve, reject) {
  let x = 1;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

//consuming a promise using .then() and .catch()
let myPromise2 = new Promise(function (resolve, reject) {
  let x = 5;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

myPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// use of .finally()
let myPromise3 = new Promise(function (resolve, reject) {
  let x = 1;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

myPromise3
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It was nice working with this promise");
  });


//Returning a promise from a function
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = false;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

fetchUser()
  .then((user) => {
    console.log(`Username: ${user.username}, Role: ${user.role}`);
  })
  .catch((error) => {
    console.log(error);
  });