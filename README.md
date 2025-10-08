# **ASYNCHRONOUS JAVASCRIPT**

* **It is done using promises and initially callbacks**
* **setTimeout() delays execution of the function, making it asynchronous**
* **setInterval**
* **Callbacks- is a function passed as an argument to another function, ensuring that execution happens only after the asynchronous operation is complete.**
* **Callback are used to link producing and consuming code**
* **fetchData() does not wait for the data to be ready—it returns undefined immediately.**
* **Has consuming code which requires the output of the producing code**
* **fetch user data (e.g., username and role)**
* **Fetch user's posts after getting user data**
* **Fetch comments on a post after retrieving posts**
* **Display all the data after everything is fetched.**
* **Promise -  is an object that links producing and consuming code.**





#### **States in Promises**

* **Pending: initial state; neither fulfilled nor rejected.**
* **Fulfilled: the operation is completed successfully.**
* **Rejection: the operation has failed.**



#### **Creating a promise﻿**

* **A promise is created using the new Promise() constructor.**
* **The new Promise() constructor accepts a single argument, which is a function called executor.**
* **The promise executes the executor function immediately.**
* **The executor function takes two parameters: the first parameter is a function to call with a value when the promise is fulfilled (mostly referred to as resolve), and the second is a function to call when the promise fails (mostly referred to as reject)**



#### **Consuming a promise﻿**

* **We can then use .then() to handle resolved value and .catch() to handle errors (rejected value).**
* **.then() takes a callback function, which receives the resolved value of the Promise as its argument.**
* **.catch() also takes a callback function, which receives the error (rejected value) as its argument when the Promise is rejected.**
* **There is also .finally() which gets executed regardless of whether the promise was a success or failure;**



#### **Returning a promise from a function﻿**

* **we can also return a promise from a function:** 
* **resolve({ username: "\_john", role: "Admin" });**



#### **Consuming Promises With Async/Await**

* **It's built on top of Promises but allows you to write asynchronous code that looks like synchronous code.**
* **async/await is mostly used to consume promises.**



#### **Handling Errors in async/await﻿**

* **One of the strengths of async/await is its ability to handle errors in a synchronous way, using try...catch.**
* **The catch block can also receive the error thrown from the promise -> catch(error)**
* **try..catch also has a finally block:\\**
* 
