import './ProfileCard.css'; 
import img from './kanye.webp' ;

export default function ProfileCard({name, bio, techStack}){
    return(
        <>
            <div className="profileCard">
                <img src={img} alt="" />
                <div className='info'>
                    <h2>{name}</h2>
                    <p>{bio}</p>
                    <TechStack techStack={techStack}/>
                </div>
            </div>
            
        </>
    )
}

function TechStack({techStack}){
    const stack = techStack.split(" ") ;
    return(
        <div className='techStack'>
            {stack.map((tech)=> (<button className='tech'>{tech}</button>))} 
        </div>
    )
}