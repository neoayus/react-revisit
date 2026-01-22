export default function Pizza(props){
    console.log(props) ;
    return(
        <li className="pizza">
            {/* UI with no prop  */}
            {/* <img src="../../public/03-pizza-menu/spinaci.jpg" alt="" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese </p> */}

            {/* here' we'll update the props.propName to "props.pizza.prop" so we can render the list, in Menu.jsx" */}
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>

        </li>
    )
}