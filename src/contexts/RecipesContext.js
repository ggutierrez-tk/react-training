import React, {createContext} from 'react';

import useBasicApi from '../hooks/useBasicApi';

export const RecipesContext = createContext();

export function RecipesContextProvider(props){
    const ingredientsEndpoint = "http://localhost:8000/api/recipe/ingredients/"
    const recipesEndpoint = "http://localhost:8000/api/recipe/recipes/"
    const tagsEndpoint = "http://localhost:8000/api/recipe/tags/"
    const [ingredients, addIngredient, refreshIngredients] = useBasicApi(ingredientsEndpoint);
    const [recipes, addRecipe, refreshRecipes] = useBasicApi(recipesEndpoint);
    const [tags, addTag, refreshTags] = useBasicApi(tagsEndpoint);

    const refresh = async () => {
        refreshIngredients();
        refreshRecipes();
        refreshTags();
    }

    const values = {
        ingredients, addIngredient, refreshIngredients,
        recipes, addRecipe, refreshRecipes,
        tags, addTag, refreshTags,
        refresh,
    }
    
    return (
        <RecipesContext.Provider value={values}>
            {props.children}
        </RecipesContext.Provider>
    );

}
