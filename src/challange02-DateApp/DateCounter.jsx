import { useState } from 'react';
import './DateCounter.css'

export default function DateCounter(){

    // STATES: 
    const [step, setStep] = useState(1) ; 
    const [count, setCount] = useState(0) ; 

    var today = new Date() ;
    const [date, updateDate] = useState(today.toDateString()) ;
    

    // NEW NEUANCE : 
    function updateTime(day){
        today.setDate(today.getDate() + day) ;        
        return today.toDateString() ;
    }
    
    // Event Handelers: 
    // STEP COUNTER:
    function decrementStep(){
        if(step > 1){
            setStep((step)=> step - 1); 
        }
    }
    function incrementStep(){
        setStep((step)=> step + 1); 
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
                <button onClick={decrementStep}> - </button>
                <p>Step : {step} </p>
                <button onClick={incrementStep}> + </button>
            </div>

            <div className="count">
                <button onClick={decrementCount}> - </button>
                <p>Count : {count}</p>
                <button onClick={incrementCount}> + </button>
            </div>

            <p>
                {count < 0 ? ` ${Math.abs(count)} days from today was : ${date} ` : "" } 
                {count == 0 ? ` Today is : ${date}` : "" }
                {count > 0 ? ` ${Math.abs(count)} days from now will be : ${date} ` : "" } 
            </p>
        </div>
    )
}
