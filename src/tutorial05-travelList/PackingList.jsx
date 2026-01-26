import { useState } from "react";
import Item from "./Item.jsx";

// List for List Rendering:
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function PackingList({ items, onDeleteItem, onToggleItems }) {
  const [sortBy, setSortBy] = useState("input") ; 

  // sort function 
  let sortedItems ;
  if(sortBy == "input") sortedItems= items ;
  if(sortBy == "description") sortedItems= items.slice().sort((a, b) => a.description.localeCompare(b.description) ) ;
  if(sortBy == "packed") sortedItems= items.slice().sort((a, b) => Number(a.packed) - Number (b.packed)) ;

  return (
    <div className="list">

      <ul>
        {
          // list rendering
          sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
            />
          ))
        }
      </ul>

        <div className="actions"> 
          <select name="" id="" value={sortBy} onChange={(e)=>{ setSortBy(e.target.value)}}>
            <option value="input">Sort by Input Order </option> 
            <option value="description">Sort by Description </option> 
            <option value="packed">Sort by Packed Status </option> 
          </select>
          
          <button>Clear List</button>

        </div>

    </div>
  );
}
