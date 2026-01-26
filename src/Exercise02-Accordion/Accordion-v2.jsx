import { useState } from "react";
import "./Style.css";

// rendered list
const data = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];


export default function Accordion() {
  // state lifting 
  const [currOpen, setCurrOpen] = useState(null);
  
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
          currOpen={currOpen} 
          onOpen={setCurrOpen} 
          key={i} 
          num={i} 
          title={el.title} 
          text={el.text}/>
      ))}
    </div>
  );
}

// ACCORDION ITEM
function AccordionItem({ num, title, text, currOpen, onOpen}) {

  const isOpen = num === currOpen ;

  function handleToggle(){
    onOpen(num) ;
  } 

  return (
    <div className={`item open`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"} </p>

      {isOpen && <div className="content-box"> {text} </div>}
    </div>
  );
}
