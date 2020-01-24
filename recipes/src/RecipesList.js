import React, {useContext} from 'react';
import { RecipesContext } from './contexts/RecipesContext';


export default function RecipesList(){
    const {recipes} = useContext(RecipesContext)
    return (
        <div className="RecipesList">
            {
                recipes.map((ingredient)=><div key={ingredient["id"]}>{ingredient["title"]}</div>)
            }
        </div>
    )
}
