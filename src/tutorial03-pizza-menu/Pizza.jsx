export default function Pizza(props){
    console.log(props) ;
    return(
        <div className="pizza">
            {/* UI with no prop  */}
            {/* <img src="../../public/03-pizza-menu/spinaci.jpg" alt="" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese </p> */}
            <img src={props.img} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3 + "$"}</span>
            </div>

        </div>
    )
}