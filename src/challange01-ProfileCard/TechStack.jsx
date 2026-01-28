export default function TechStack({techStack}){
    const stack = techStack.split(" ") ;
    return(
        <div className='techStack'>
            {stack.map((tech)=> (<button className='tech'>{tech}</button>))} 
        </div>
    )
}