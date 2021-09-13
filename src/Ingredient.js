import React from 'react'

const Ingredient = ({ ingredient }) => {
    return (
        <div className="ingredient-container">
            <div>{ingredient.name}</div>
            <div>{ingredient.amount}</div>
        </div>


    )
}

export default Ingredient
