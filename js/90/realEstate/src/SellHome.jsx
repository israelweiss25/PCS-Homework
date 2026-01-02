export default function SellHome(){
    return(
        <>
            {/* <h1>sell home</h1> */}
            <div style={{backgroundColor: "beige", height: '200px'}}>
                <h3>selling your home with Pcs Reality is really simple an easy </h3>
                <ul style={{listStyle: 'decimal', textAlign: 'left'}}>
                    <li>Enter your selling address</li>
                    <li>View proposals, no commitment</li>
                    <li>Choose the right agent, confidently</li>
                </ul>
                <input placeholder="enter address"/>
                <button>let's go</button>
            </div>
        </>
    )
}