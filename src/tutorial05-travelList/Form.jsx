import { useState } from "react";

export default function Form(){
    
    function handleSubmit(e){
        e.preventDefault() ;
        // console.log(e) ;
        const formData = new FormData(e.target) ;
        console.log(formData) ;
    }
    
    // STATES : to handle form data:
    const [description, setDescription] = useState("") ;
    const [quantity, setQuantity] = useState(0) ;

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select 
                name="" id=""
                value={quantity} 
                onChange={
                    (e) => setQuantity(Number(e.target.value))
                }
            >
                {/* easy way out : make an array containing 1-20*/}
                {
                    Array.from({length: 20}, (_, i) => i + 1 ).map(
                        (num)=> (
                            <option value={num} key={num}>
                                {num} 
                            </option>
                        ) 
                    )
                }
            </select>
            
            <input 
                type="text" 
                placeholder="Item..." 
                value={description} 
                onChange={
                    (e)=> {
                        console.log(e.target.value) ;
                        setDescription(e.target.value) ;                     
                    }
                }/>
            
            <button> ADD </button>

        </form>
    )
}