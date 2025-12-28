import './App.css';

export default function Text(props) {
    const {color, backgroundColor, font} = props;
    
    return (
        <div id='pDiv' style={{backgroundColor: backgroundColor}}>
            <p style = {{color : color, fontFamily: font}} >change my color</p>
        </div>
    );
}
