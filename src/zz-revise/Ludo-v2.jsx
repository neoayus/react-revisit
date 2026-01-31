import { useState } from 'react'
import './Ludo.css'

export default function Ludo(){
  const [color, setColor] = useState({'red' : 0, 'yellow' : 0, 'green' : 0, 'blue' : 0});

  function handleIncrement(blockColor){
    setColor((color)=> ({
      ...color, 
      [blockColor] : color[blockColor] + 1
    }) )
  }

  return(

    <div className='ludo'>
      <h3> !!Game Begins!! </h3>

      <div className='board'>
        <Blo color='red' onClick={()=> handleIncrement("red")}> RED : {color.red} </Blo
        <Block color='yellow' onClick={()=> handleIncrement("yellow")}> YELLOW: {color.yellow} </Block>
        < color='green' onClick={()=> handleIncrement("green")}> GREEN: {colo
        <Block color='blue' onClick={()=> handleIncrement("blue")}> BLUE: {color.blue}</Block>
      </div>

    </div>
  )
}

function Block({color, children, onClick}){
  return <div className='playerBlock' style={{backgroundColor : color}} onClick={onClick}>  {children} </div>
}