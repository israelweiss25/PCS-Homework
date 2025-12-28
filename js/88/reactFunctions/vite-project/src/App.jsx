import { useState } from 'react'

import './App.css'
import Text from './TextComponent'
import Form from './Form';
function App() {

  const [color, setColor] = useState('#FFFFFF');
  const [backgroundColor, setBackgroundColor] = useState('#0000FF');
  const [fontFamily, setFontFamily] = useState('cursive');

  
  const fonts = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy']

  const handleSubmit = function(e, color, backgroundColor, fontFamily){
    e.preventDefault();
    setColor(color);
    setBackgroundColor(backgroundColor)
    setFontFamily(fontFamily)
  }
  return (
    <>

      <label>color</label>
      <input type='color' value={color} onChange={e => { setColor(e.target.value) }}></input>
      <label>backgroundColor</label>
      <input type='color' value={backgroundColor} onChange={e => { setBackgroundColor(e.target.value), console.log(e) }}></input>
      <select onChange={e => {setFontFamily(e.target.value)}}>
        <option hidden>select a font</option>
        {fonts.map((f, index) => <option key={index}>{f}</option>)}
      </select>


      <Form  submitHandler={handleSubmit}/>

      <Text color={color} backgroundColor={backgroundColor} font={fontFamily}/>
    </>
  );
}

export default App
