import { useState } from "react";
import './Form.css';
export default function Form({recipes, onSubmit}) {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [formShowing, setFormShowing] = useState(false);


    function handleChange(e) {
        switch(e.target.name){
            case 'name':
                setName([e.target.value]);
                break;
            case 'img': 
                setImg([e.target.value])
                break;
            case 'ingredients': 
                setIngredients([e.target.value])
                break; 
            case 'directions': 
                setDirections([e.target.value])
                break;

        }
    }
    function handleSubmit(e){
        e.preventDefault();
        let recipe = {
            id : recipes.length + 1,
            name: name,
            picture: img,
            ingredients : ingredients.toString().split(','),
            directions : directions.toString().split(',')
        }
        recipes.push(recipe);
        onSubmit(recipes);
        toggleForm()
        alert(`"${recipe.name}" recipe added`);
    }
    function toggleForm(){
        setName('');
        setImg('');
        setDirections('')
        setIngredients('');
        setFormShowing(!formShowing)
    }
    return (
        <>
            <button id="add" onClick={toggleForm}>{formShowing ? 'close form' : 'add recipe'}</button>

            {formShowing && <form onSubmit={handleSubmit}>
                <label>
                    recipe name
                    <input onChange={handleChange} value={name} name='name'></input>
                </label>
                <label>
                    img
                    <input  onChange={handleChange} value={img} name="img"></input>
                </label>
                <label>
                    ingredients
                    <input  onChange={handleChange} value={ingredients} name="ingredients" placeholder="separate items by commas"></input>
                </label>
                <label>
                    directions
                    <input onChange={handleChange} value={directions} name="directions" placeholder="separate steps by commas"></input>
                </label>
                <button type="submit" >submit</button>
            </form>}

        </>

    );
}