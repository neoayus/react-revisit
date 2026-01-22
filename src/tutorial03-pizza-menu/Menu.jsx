import Pizza from './Pizza.jsx'

export default function Menu(){
    return(
        <main className='menu'>
            <Pizza 
                name='Pizza Spinaci' 
                price={10}
                img="../../public/03-pizza-menu/spinaci.jpg"
                ingredients='Tomato, mozarella, spinach, and ricotta cheese ' >
            </Pizza>
            
            <Pizza
                name='Pizza Funghi' 
                price={20}
                img='../../public/03-pizza-menu/salamino.jpg'
                ingredients='Tomatos, Mushrooms'
            >

            </Pizza>
        </main>
    )
}