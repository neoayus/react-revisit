import Pizza from './Pizza.jsx'

export default function Menu(){
    const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "../../public/03-pizza-menu/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "../../public/03-pizza-menu/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "../../public/03-pizza-menu/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "../../public/03-pizza-menu/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "../../public/03-pizza-menu/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "../../public/03-pizza-menu/prosciutto.jpg",
        soldOut: false,
    },
];
    return(
        // RENDERING A LIST:
        <main className='menu'>
            <h2>Our Menu</h2>
            <ul className='pizzas'>
                {/* {pizzaData.map(pizza => <Pizza name={pizza.name} photoName={pizza.photoName} /> )} */}
                {/* that's not how we do it, what we do is, pass in the entire object into the more specific component (pizza in this case) */}
                {pizzaData.map((pizza)=>( <Pizza pizzaObj={pizza} key={pizza.name}/>))}
            </ul>
        </main>
        // <main className='menu'>
        //     <Pizza 
        //         name='Pizza Spinaci' 
        //         price={10}
        //         img="../../public/03-pizza-menu/spinaci.jpg"
        //         ingredients='Tomato, mozarella, spinach, and ricotta cheese ' >
        //     </Pizza>
            
        //     <Pizza
        //         name='Pizza Funghi' 
        //         price={20}
        //         img='../../public/03-pizza-menu/salamino.jpg'
        //         ingredients='Tomatos, Mushrooms'
        //     >

        //     </Pizza>
        // </main>
    )
}