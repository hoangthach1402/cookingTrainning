import React from 'react'
import Ingredient from './Ingredient'
const IngredientList = ({ ingredients }) => {
    return (
        <>
            {ingredients.map(ingredient => {
                return <Ingredient key={ingredient.id} ingredient={ingredient} />

            })}
        </>
    )
}

export default IngredientList
