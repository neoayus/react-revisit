// ASYNC / AWAIT : 

fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then(data => console.log(data));  

console.log("memphis"); 

// write an alternate block of code for the same: using async await 
async function getToDos(){
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await result.json() ;
    // console.log(data) ;
    return data ;
}

const x = getToDos() ;
console.log(x) ;