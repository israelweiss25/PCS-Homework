import express from 'express';
import pool from '../pool.js';
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const [result] = await pool.execute(
      `SELECT r.id, r.name, r.img,  ing.ingredients FROM recipes.recipes r 
        JOIN recipe_ingredients ri
        ON r.id = ri.recipeID
        JOIN ingredients ing 
        ON ing.id = ri.ingredientsID
        `
    );
    const recipeList = getRecipeList(result)
    res.json(recipeList)
  } catch (err) {
    return next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {

    const ingredientList = await checkIfIngExists(req.body.ingredients);
    console.log(ingredientList)
    const [recipe] = await pool.execute(
      `INSERT INTO recipes(name, img) VALUES(?,?)`, [req.body.name, req.body.img]
    );

    for (const ingredient of ingredientList) {
      const [recipe_ingredients] = await pool.execute(
        `INSERT INTO recipe_ingredients (recipeID, ingredientsID) VALUES (?,?)`,
        [recipe.insertId, ingredient.id]
      );
    }
    res.status(201);
    res.json(req.body)
  } catch (err) {
    next(err)
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const [result] = await pool.execute(
      `SELECT r.id, r.name, r.img,  ing.ingredients FROM recipes.recipes r 
        JOIN recipe_ingredients ri
        ON r.id = ri.recipeID
        JOIN ingredients ing 
        ON ing.id = ri.ingredientsID
        WHERE r.id = ?
        `, [req.params.id]
    );
    const recipe = getRecipeList(result)
    res.json(recipe)
  } catch (err) {
    next(err)
  }
});
router.put('/:id', async (req, res, next) => {
  try {
    const [result] = await pool.execute(
      `UPDATE recipes SET name = ?, img = ?  WHERE id = ?`, [req.body.name, req.body.img, req.params.id]
    );
    const ingredientList = await checkIfIngExists(req.body.ingredients);
   
    const [recipe_ingredients] = await pool.execute(
      `SELECT recipeID, ingredientsID FROM recipe_ingredients WHERE recipeID = ?`, [req.params.id]
    );
    for (const ingredient of ingredientList) {
      let checkIngredient = recipe_ingredients.find(ingData => ingData.ingredientsID === ingredient.id);
      if (!checkIngredient) {
        const [recipe_ingredients3] = await pool.execute(
          `INSERT INTO recipe_ingredients (recipeID, ingredientsID) VALUES (?,?)`,
          [req.params.id, ingredient.id]
        );
      }
    }
    res.statusCode = 204;
    res.end();
  } catch (err) {
    next(err)
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const [result] = await pool.execute(
      `DELETE FROM recipes WHERE id = ?`, [req.params.id]
    );
    const [result2] = await pool.execute(
      `DELETE FROM recipe_ingredients WHERE recipeID = ?`, [req.params.id]
    );
    res.statusCode = 204;
    res.end();
  } catch (err) {
    next(err)
  }

});

function getRecipeList(recipeList) {
  let newRecipeList = [];

  for (const recipe of recipeList) {
    const foundNewRecipe = newRecipeList.find(newRecipe => recipe.id === newRecipe.id);
    if (!foundNewRecipe) {
      const newRecipe = {
        id: recipe.id,
        name: recipe.name,
        img: recipe.img,
        ingredients: [recipe.ingredients]
      }
      newRecipeList.push(newRecipe);
    }
    if (foundNewRecipe) {
      foundNewRecipe.ingredients.push(recipe.ingredients);
    }
  }
  return newRecipeList;
}
async function checkIfIngExists(ingredientsReq){
  try{
    const [ingredientsData] = await pool.execute(
      `SELECT id, ingredients FROM ingredients`
    );
    let newIngredientsList = []
    
    for (const ingredientDB of ingredientsData) {
      let existIng = ingredientsReq.find(ingredient => ingredientDB.ingredients === ingredient);
      if (existIng){
        const newObj = { id: ingredientDB.id , ingredients: existIng}
        newIngredientsList.push(newObj);
      }
    }
    for (const ingredient of ingredientsReq){
      let existIng = newIngredientsList.find(ing => ing.ingredients === ingredient)
      if (!existIng) {
        const [result] = await pool.execute(
          `INSERT INTO ingredients (ingredients) VALUES (?)`, [ingredient]
        );
        existIng = { id: result.insertId, ingredients: ingredient };
        newIngredientsList.push(existIng);
      }
    }
    return newIngredientsList;
  }catch(err){
    next(err)
  }
}
export default router;
