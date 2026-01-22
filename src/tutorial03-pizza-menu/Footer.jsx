export default function Footer(){
    var currentHour = new Date().getHours() ; 
    const openHour = 9 ; 
    const closeHour = 22 ;

    var isOpen = currentHour >= openHour && currentHour <= closeHour  ;

    // if(cuurentHour <= openHour && cuurentHour >= closeHour){
    //     alert("Sorry, We Haven't Open Yet!");
    // }else{
    //     alert("Welcome! to our P-I-Z-Z-A teria!");
    // }

    return(
        <div className="footer">
            <h3>{new Date().toLocaleTimeString()}. We're Currently Open!</h3>
        </div>
    )
    
}