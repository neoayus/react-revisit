import TechStack from './TechStack';
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
