import './Pizza.css' 

export default function Pizza(){
    const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
    return(
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    )
}

// Header: 
function Header(){
    // Second Method of applying style (by passing this object to the 'style' attribute in inline styling in jsx)
    // const styleHero = {
    //     color: "red", 
    //     fontSize: "48px", 
    //     textTransform: "uppercase",
    // }; 

    return(
        <>
            {/* First Method of applyin Style. */}
            {/* <h1 style={{
                color: "red", 
                fontSize: "48px", 
                textTransform: "uppercase",
            }}>Fast React Pizza Co.</h1> */}
            <header className='header'>
                <h1 > Fast React Pizza Co.</h1>
            </header>
        </>
    )
}
// Menu: 
function Menu(){
    return(
        <main className='menu'>
            <h2>Our Menu</h2>
        </main>
    )
}
// Footer: 
function Footer(){
    // Welcome prompt on the Website!
    var cuurentHour = new Date().getHours() ; 

    const openHour = 9 ; 
    const closeHour = 22 ;

    var isOpen = cuurentHour >= openHour && cuurentHour <= closeHour  ;

    // if(cuurentHour <= openHour && cuurentHour >= closeHour){
    //     alert("Sorry, We Haven't Open Yet!");
    // }else{
    //     alert("Welcome! to our P-I-Z-Z-A teria!");
    // }

    return(
        <>
            <h3>{new Date().toLocaleTimeString()}. We're Currently Open!</h3>
        </>
    )
    
}