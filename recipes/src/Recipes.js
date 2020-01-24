import React, {useContext, useEffect} from 'react';
import NewRecipe from './NewRecipe';
import RecipesList from './RecipesList';
import { RecipesContext } from './contexts/RecipesContext';

function Recipes (){
    const {refreshRecipes} = useContext(RecipesContext)

    useEffect(()=>{
        refreshRecipes();
    }, [])

    return (
        <div>
            <NewRecipe/>
            <RecipesList/>
        </div>
    )
}

export default Recipes;