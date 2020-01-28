import React from 'react';
import RecipeBasicDisplay from './RecipeBasicDisplay';
import '../styles/RecipesList.css';
export default function RecipesList(props){
    return (
        <div>
            {(props.recipes !== undefined  && props.recipes.length>0)?
            (
                <div>
                    {props.recipes.map((ingredient)=><RecipeBasicDisplay key={ingredient["id"]} {...ingredient} />)}
                </div>
            ):(
                <div className="RecipesList-empty">
                    No hay resultados : /
                </div>
            )}
        </div>
    );
}
