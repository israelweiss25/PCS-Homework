import homePhoto from './assets/home.png'

export default function HomePage(){
    return (
        <>
            <h1 style={{color:'white'}}>Welcom to pcs reality
                the #1 reality website
            </h1>
            <img src={homePhoto} style={{height: '375px', width: '100%'}}/>
        </>
    )
}