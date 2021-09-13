import React from 'react'
import IngredientEdit from './IngredientEdit'
const IngredientListEdit = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return <IngredientEdit key={ingredient.id} ingredient={ingredient} />
      })}
    </div>
  )
}

export default IngredientListEdit
