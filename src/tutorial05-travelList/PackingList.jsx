import Item from './Item.jsx' ; 

// List for List Rendering: 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function PackingList(){
    return(
        <div className='list'>
            <ul>
                { // list rendering
                    initialItems.map((item) => (
                        <Item item={item} key={item.id}/>
                    ))
                }
            </ul>
        </div>
    )
}