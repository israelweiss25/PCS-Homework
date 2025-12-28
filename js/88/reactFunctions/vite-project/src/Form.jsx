import { useState } from "react";
export default function Form(props) {
    const fonts = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'];
    const [styles, setstyles] = useState({
        color: '#FFFFFF',
        backgroundColor: '#0000FF',
        fontFamily: 'monospace'
    });
    const { color, backgroundColor, fontFamily } = styles;
    return (

        <form onSubmit={e => { props.submitHandler(e, color, backgroundColor, fontFamily) }}>
            <label>color</label>
            <input type="color" value={color} onChange={e => setstyles({ ...styles, color: e.target.value })}></input>
            <label>backgroundColor</label>
            <input type="color" value={backgroundColor} onChange={e => setstyles({ ...styles, backgroundColor: e.target.value })}></input>
            <select onChange={e => setstyles({ ...styles, fontFamily: e.target.value })}>
                <option >select font</option>
                {fonts.map((f, index) => <option key={index}>{f}</option> )}
            </select>
            <button type="submit">submit</button>
        </form>

    )
}