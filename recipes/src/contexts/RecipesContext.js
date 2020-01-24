import React, {createContext, useContext} from 'react';
import axios from 'axios';

import useFetchedElements from '../hooks/useFetchedElements'
import { SessionContext } from './SessionContext';

export const RecipesContext = createContext();

export function RecipesContextProvider(props){
    const {token} = useContext(SessionContext);
    const authheaders = {'Authorization': `Token ${token}`};

    const retrieveIngredients = async  () => {
        const endpoint = "http://localhost:8000/api/recipe/ingredients/";
        const res = await axios.get(endpoint, {'headers': authheaders})
        return res;
    }
    const [ingredients, addIngredient, refreshIngredients] = useFetchedElements(retrieveIngredients);

    const retrieveRecipes = async  () => {
        const endpoint = "http://localhost:8000/api/recipe/ingredients/";
        const res = await axios.get(endpoint, {'headers': authheaders})
        return res;
    }

    const [recipes, addRecipe, refreshRecipes] = useFetchedElements(retrieveRecipes);

    const refresh = () => {
        refreshIngredients();
        refreshRecipes();
    }

    const values = {
        ingredients,
        addIngredient,
        refreshIngredients,
        recipes,
        addRecipe,
        refreshRecipes,
        refresh,
    }

    return (
        <RecipesContext.Provider value={values}>
            {props.children}
        </RecipesContext.Provider>
    );

}
