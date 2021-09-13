import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'
const Recipe = ({ recipe, handleDelete }) => {
    const { handleSelect } = useContext(RecipeContext)
    return (
        <>
            <div className="recipe-container">


                <div className="recipe-header">
                    <h3 className="recipe-title">{recipe.name}</h3>
                    <div className="recipe-btn">
                        <button onClick={() => handleSelect(recipe.id)}>Edit</button>
                        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                    </div>


                </div>
                <div className='recipe-main'>
                    <span>Cook Time</span>
                    <span>{recipe.cookTime}</span>
                </div>
                <div className="recipe-main">
                    <span>Servings </span>
                    <span>{recipe.servings}</span>
                </div>
                <div className="recipe-main">
                    <span>Instructions</span>
                    <span>{recipe.instructions}</span>
                </div>

                <div>
                    <span>Ingredient</span>
                    <IngredientList ingredients={recipe.ingredients} />
                </div>
            </div>
        </>
    )
}

export default Recipe
