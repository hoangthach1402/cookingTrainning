import React from 'react'
import Recipe from './Recipe'
const RecipeList = ({ recipes, handleDelete }) => {



    return (
        <div className="recipeList-container">
            {recipes.map(recipe => {
                return <Recipe key={recipe.id} recipe={recipe} handleDelete={handleDelete} />
            })}
        </div>
    )
}

export default RecipeList
