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
        WHERE r.id = 1`
    );

    // const finalArr =[]
    // let newArr = [];
    // for (let i = 0; i < result.length; i++) {
    //   result.forEach(row => {
    //     if (result[i].id === i + 1) {
    //       newArr.push(result[i]);
    //     }
    //     console.log(newArr)
    //   })
    //   let obj = {...newArr[0]};
    //   obj.ingredients = [];
    //   newArr.forEach(row => {
    //   console.log(row);
    //   obj.ingredients.push(row.ingredients)
    //   finalArr.push(obj);
    // });
    // }
    let obj = { ...result[0] };
    obj.ingredients = [];
    result.forEach(row => {
      console.log(row);
      obj.ingredients.push(row.ingredients)
    });
    console.log(obj)
    res.json(obj)
  } catch (err) {
    return next(err)
  }
});

export default router;
