import React from 'react'

const IngredientEdit = ({ ingredient }) => {
    return (

        <>
            <div className="ingredientEdit-container">
                <input type="text" value={ingredient.name} />
                <input type="text" value={ingredient.amount} />

            </div>
        </>
    )
}

export default IngredientEdit
