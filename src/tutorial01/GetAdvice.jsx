import { useState } from "react";

export default function GetAdvice(){
    // react states to change UI 
    const [advice, setAdvice] = useState("");  // react state to change : advice 
    var [count, setCount] = useState(0); // react state ot change : advice count 


    // api calls
    async function getAdvice() { 
        const result = await fetch("https://api.adviceslip.com/advice"); 
        const data = await result.json() ;
        setAdvice(data.slip.advice) ;
        setCount(++count) // icrement count on every button click 
    } 

    return(
        <>
            <h1>Take my: {advice}</h1>
            <button onClick={getAdvice}>
                I am juss another Button!
            </button>
            <p>You've got {count} Advices, and i think it's enough for today.</p>
        </>
    )
}