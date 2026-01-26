// Steps v2.0 is about learning children prop 

import { useState } from "react" ;
import './index.css' ;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps(){
    // const step = 1 ;
    // STATE VARIABLES: 
    const [step , setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true) ;
    
    //  EVENT HANDELERS:
    function handlePrevious(){
        if(step > 1) {
            setStep((step) => step - 1); 
        }
    }

    function handleNext(){
        if(step < 3) {
            setStep((step) => step + 1 ) ;
            // setStep((step) => step + 1 ) ;
        }
    }

    return(
        <> 
            <button className="close" onClick={()=> setIsOpen((is)=> !is)}> &times; </button>
            { isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}> 1 </div>
                        <div className={step >= 2 ? "active" : ""}> 2 </div>
                        <div className={step >= 3 ? "active" : ""}> 3 </div>
                    </div>

                    <p className='message'>Step {step} : {messages[step-1]}</p>

                    <div className="buttons">
                        <Button textColor="#fff" bgColor='#7950f2' onClick={handlePrevious} children> &lt; &lt; &lt; previous </Button>
                        <Button textColor="#fff" bgColor='#7950f2' onClick={handleNext} children> next &gt; &gt; &gt;  </Button> 
                    </div>

                </div>
            )}
        </>
    )
}
                // backgroundColor : "", 
                // color: "" }}

// USE CHILDREN PROP
function Button({textColor, bgColor, onClick, children}){
    return(
        <button 
            style={{
                backgroundColor : bgColor, 
                color: textColor, }}
            onClick={onClick} 
        > 
            {children}
        </button>
    )

}