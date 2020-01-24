import React, {useContext} from 'react';
import { RecipesContext } from './contexts/RecipesContext';


export default function IngredientsList(){
    const {ingredients} = useContext(RecipesContext)
    return (
        <div className="IngredientsList">
            {
                ingredients.map((ingredient)=><div key={ingredient["id"]}>{ingredient["name"]}</div>)
            }
        </div>
    )
}
