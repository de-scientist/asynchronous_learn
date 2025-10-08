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





