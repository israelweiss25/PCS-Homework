import { Component } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';
import NoRecipe from './NoRecipe';
import RecipeList from './RecipeList';
import Form from './form';

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: 1
  }

  constructor() {
    super();

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('recipes.json');
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes);

      this.setState({
        recipes
      });

    } catch (e) {
      console.error(e);
    }

    /*this.interval = setInterval(() => {

      this.setState({
        selectedRecipe: this.state.selectedRecipe ? 0 : 1
      })
    }, 5000);*/
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  selectRecipe = e => {
    this.setState({
      selectedRecipe: e.target.value
    });
  }
  
  submitRecipe = r =>{
    this.setState({
      recipes: r
    })
  }

  render() {
    const { recipes, selectedRecipe } = this.state;

    /*const recipesJsx = recipes?.map(r => <option key={r.id} value={r.id}>{r.name}</option>);*/



    const recipe = !recipes.length
      ? <NoRecipe />
      : <Recipe recipe={recipes[selectedRecipe]} />

    return (
      <>
        <Header />
        {/*<select id="recipes" value={selectedRecipe} onChange={this.selectRecipe}>
          <option hidden>select a recipe</option>
          {recipesJsx}
        </select>*/}

        <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} selectRecipe={this.selectRecipe} />

        {recipe}
        <Form  recipes={recipes} onSubmit ={this.submitRecipe}/>
      </>
    );
  }
}

export default App
