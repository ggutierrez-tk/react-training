import React, {useContext, useEffect} from 'react';
import NewIngredient from './NewIngredient';
import IngredientsList from './IngredientsList';
import { RecipesContext } from './contexts/RecipesContext';

function Ingredients (){
    const {refreshIngredients} = useContext(RecipesContext)

    useEffect(()=>{
        refreshIngredients();
    }, [])

    return (
        <div>
            <NewIngredient/>
            <IngredientsList/>
        </div>
    )
}

export default Ingredients;