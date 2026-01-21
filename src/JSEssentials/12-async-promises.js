// ASYNC PROMISES: 

// fetch() is a function used to obtain data from apis
// we'll use this demo api : https://jsonplaceholder.typicode.com/todos/

fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then(data => console.log(data));  

// console.log("memphis"); 