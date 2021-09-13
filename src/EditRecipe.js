import React, { useContext } from 'react'
import { RecipeContext } from './App'
import IngredientListEdit from './IngredientListEdit'
const EditRecipe = ({ recipe }) => {

    const { handleChange } = useContext(RecipeContext)
    function handleChangeEdit(change) {
        handleChange(recipe.id, { ...recipe, ...change })
    }

    return (
        <div className="edit-container">
            <h3>{recipe.name}</h3> <span />
            <label htmlFor="">Cook Time: </label>
            <input type="text" name="" id="" value={recipe.cookTime} onInput={(e) => handleChangeEdit({ cookTime: e.target.value })} />



            <label htmlFor="">Servings</label>
            <input type="text" name="" id="" value={recipe.servings} onInput={(e) => handleChangeEdit({ servings: parseInt(e.target.value) })} />


            <label htmlFor="">Instructions</label>
            <textarea name="" id="" cols="30" rows="5" value={recipe.instructions} onInput={(e) => handleChangeEdit({ instructions: e.target.value })}></textarea>
            <div></div>
            <IngredientListEdit ingredients={recipe.ingredients} />
        </div>
    )
}

export default EditRecipe
