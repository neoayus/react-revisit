export default function Pizza({pizzaObj}){
    // console.log(props) ;
    
    // CONDITIONL RENDERING WITH MULTIPLE RETURNS :
    // if(props.pizzaObj.soldOut) return null ; 

    return(
        <li className={`pizza ${pizzaObj.soldOut? "sold-out" : ""}`}>
            {/* UI with no prop  */}
            {/* <img src="../../public/03-pizza-menu/spinaci.jpg" alt="" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese </p> */}

            {/* here' we'll update the propName to "pizza.prop" so we can render the list, in Menu.jsx" */}
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                {/* {pizzaObj.soldOut ? ( 
                    <span> 'SOLD OUT' </span> 
                ):(
                    <span>{pizzaObj.price}</span> 
                )} */}

                <span>{pizzaObj.soldOut? "SOLD OUT" : pizzaObj.price}</span>

            </div>

        </li>
    )
}