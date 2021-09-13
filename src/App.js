import React, { Component, useState, useContext, useEffect } from 'react'
import './App.css';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import EditRecipe from './EditRecipe';
// export const ThemeContext = React.createContext()

export const RecipeContext = React.createContext();
function App() {

  const [selectedId, setSelectedId] = useState()
  function handleSelect(id) {
    setSelectedId(id);
  }
  function handleEdit() {

  }
  const RecipeContextValue = { handleChange, handleSelect }
  function handleChange(id, change) {
    let newRecipe = [...recipes];
    let index = recipes.findIndex(recipe => recipe.id == id);
    newRecipe[index] = change;
    setRecipes(newRecipe);
  }

  const sampleRecipe = [
    {
      id: uuidv4(),
      name: "Chicken",
      cookTime: '1:30',
      servings: 3,
      instructions: '1.put salt on chicken \n2.put chicken in oven, 3.Eat chicken',
      ingredients: [
        {
          id: uuidv4(),
          name: "chicken",
          amount: "2TBS"
        },
        { id: uuidv4(), name: "Salt", amount: "1Tbs" }
      ]
    }, {
      id: uuidv4(),
      name: "Plain Pork",
      cookTime: '1:29',
      servings: 5,
      instructions: '1.put parika on pork\n 2.put pork in oven \n3.eat Pork',
      ingredients: [{ id: uuidv4(), name: "pork", amount: "3Pound" }, { id: uuidv4(), name: "Parika", amount: "2Tbs" }]
    }];
  const [recipes, setRecipes] = useState(sampleRecipe);
  const LOCAL_STORAGE = 'cookingWithMe'

  useEffect(() => {
    const recipeJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if (recipeJSON != null) setRecipes(recipeJSON);
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(recipes))
  }, [recipes])

  function handleAddRecipe() {
    let newListRecipe = [...recipes];
    let newRecipe = {
      id: uuidv4(),
      name: "New",
      cookTime: '1:30',
      servings: 1,
      instructions: 'text here',
      ingredients: [{ id: uuidv4(), name: "pork", amount: "3Pound" }, { id: uuidv4(), name: "Parika", amount: "2Tbs" }]
    }
    newListRecipe.push(newRecipe);
    setRecipes(newListRecipe)

  }
  function handleDelete(id) {
    let select = recipes.find(recipe => recipe.id === id)
    let newArray = [...recipes]
    let filteritem = newArray.filter(item => item !== select);
    // console.log(filteritem);
    setRecipes(filteritem);
  }





  return (
    <>
      <h2>LeftSide</h2>
      <RecipeContext.Provider value={RecipeContextValue}>
        <RecipeList recipes={recipes} handleDelete={handleDelete} />

        <div className="btn-container">
          <button className="btn-add" onClick={() => handleAddRecipe()}>Add Recipe</button>

        </div>
        {selectedId && <EditRecipe recipe={recipes.find(recipe => recipe.id === selectedId)} />}
      </RecipeContext.Provider>
    </>
  )
}

export default App
