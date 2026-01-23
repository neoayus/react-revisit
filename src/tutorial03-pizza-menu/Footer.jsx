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
        <footer className="footer">
            {/* <h3>{new Date().toLocaleTimeString()}. We're Currently Open!</h3> */}

            {/* CONDITIONAL RENDERING !!*/}
            {/* CONDITION : if Restraunt is Open */}
            {/* {isOpen? 
                    <p>We're Open Until {closeHour}:00, Come visit us or Order Online! </p> 
                    :<p> Sorry, We are closed for now, tho we'll Open Again soon :3 </p>
            } */}
            {
                isOpen && (
                    <div className="order">
                        <p>We're open until {closeHour}:00. Come visit us or order online. </p>
                        <button className="btn">Order Now!!</button>
                    </div>
                )
            }

        </footer>
    )
}