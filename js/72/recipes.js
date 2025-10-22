(function () {
    'use strict';

    const itemTitle = document.querySelector('#title');
    const img = document.querySelector('#img');
    const ingredientsList = document.querySelector('#list');



    document.querySelector('#form').addEventListener('change', async (e) => {
        try {
            const r = await fetch('recipes.json');
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText} `);
            }
            const recipeData = await r.json();


            let itemObj;
            for (let i = 0; i < recipeData.length; i++) {
                if (recipeData[i].name === e.target.id) {
                    itemObj = recipeData[i];
                }
            }

            ingredientsList.replaceChildren();
            itemTitle.innerText = itemObj.name;
            img.src = itemObj.img;
            itemObj.ingredients.forEach(e => {
                const li = document.createElement('li');
                li.innerText = e;
                ingredientsList.append(li);
            });
        } catch (e) {
            console.log(e);
            alert(e);
        }
    });
}());