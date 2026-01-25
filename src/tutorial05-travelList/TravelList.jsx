import { useState } from 'react';
import './style.css'; 

import Logo from './Logo.jsx' ;
import Form from './Form.jsx' ;
import PackingList from './PackingList.jsx' ;
import Stats from './Stats.jsx' ;

export default function TravelList(){

    // STATE LIFTING 
    const [items, setItems] = useState([]) ;

    function handleAddItems(item){
        setItems((items)=> [...items, item] )
    }
    
    function handleDeleteItem(id){
        setItems(items => items.filter((item) => item.id !== id ))
    }

    return(
        <div className='app'>
            <Logo />
            {/* below 2 lines are affected by state lifting  */}
            <Form onAddItems={handleAddItems}/> {/* this functioned is passed to the Form Component so it can updat the new item*/}
            <PackingList items={items} onDeleteItem={handleDeleteItem}/> {/* this prop is passed to the Packing List  Component so it can trigger re-render*/}

            <Stats />
        </div>
    )
}