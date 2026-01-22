export default function Header(){

    // Second Method of applying style (by passing this object to the 'style' attribute in inline styling in jsx)
    // const styleHero = {
    //     color: "red", 
    //     fontSize: "48px", 
    //     textTransform: "uppercase",
    // }; 

    return(
        <>
            {/* First Method of applyin Style. */}
            {/* <h1 style={{
                color: "red", 
                fontSize: "48px", 
                textTransform: "uppercase",
            }}>Fast React Pizza Co.</h1> */}

            <header className='header'>
                <h1 > Fast React Pizza Co.</h1>
            </header>
        </>
    )
}