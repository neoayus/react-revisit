import { useState } from 'react';
import './DateApp-V2.css'

export default function DateApp(){

    // STATES: 
    const [step, setStep] = useState(1) ; 
    const [count, setCount] = useState(0) ; 

    // Date manage
    var today = new Date() ;
    const [date, updateDate] = useState(today.toDateString()) ;
    
    function updateTime(day){
        today.setDate(today.getDate() + day) ;        
        return today.toDateString() ;
    }
    

    // COUNT COUNTER: 
    function decrementCount(){
        setCount((count)=> count - step); 
        var nextCount = count - step ;
        updateDate(updateTime(nextCount));
    }

    function incrementCount(){
        setCount((count)=> count + step); 
        var nextCount = count + step ; // this line is written cause react dosen't update state immediately so using state variable to get the time in next line wouldn't align with UI for some reasons, try it if you want : (
        updateDate(updateTime(nextCount));
    }

    return(
        <div className='main'>

            <div className="step">
                <input type="range" min="1" max="10" value={step} onChange={(e) => {setStep(Number(e.target.value))}}/> {step}
            </div>

            <div className="count">
                <button onClick={decrementCount}> - </button>
                {/* <p>Count : {count}</p> */}
                <input type="number" minimum="0" value={count} onChange={(e)=> { setCount(Number(e.target.value))}}/>
                <button onClick={incrementCount}> + </button>
            </div>

            <p>
                {count < 0 ? ` ${Math.abs(count)} days from today was : ${date} ` : "" } 
                {count == 0 ? ` Today is : ${date}` : "" }
                {count > 0 ? ` ${Math.abs(count)} days from now will be : ${date} ` : "" } 
            </p>
            
            <button onClick={()=>{ 
                setStep(1) ;  
                setCount(0) ;
            }}>
                RESET
            </button>
        </div>
    )
}
