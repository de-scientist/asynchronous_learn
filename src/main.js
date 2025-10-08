//use setTimeout to learn async in js
setTimeout(function ()  {
  console.log("Good morning Mark");
}, 5000);

console.log("I am blessed and sustained");
console.log("I am highly favored and grateful to the Lord");

//use setInterval to learn async in js
let i = 0;
setInterval(function()  {
  console.log(`$i = ${i}`);
  
}, 1000);


//callbacks
function fetchData() {
    let data = { username: "John Doe", role: "Admin" };
    return data;
}

function showData(data) {
    console.log(`Username is ${data.username} and role is ${data.role}`);
}

const userData = fetchData();
showData(userData);