import React, {useContext} from 'react';
import BasicItemNew from '../../components/BasicItemNew';
import { RecipesContext } from '../../contexts/RecipesContext';
import BasicItemList from '../../components/BasicItemList';
import BackButton from '../../components/BackButton';

export default () => {
    const {ingredients, addIngredient} = useContext(RecipesContext)
    return (
        <div className="Screen">
            <div className="Screen-form"><BasicItemNew addFunction={addIngredient} itemLabel="Ingrediente"/></div>
            <div className="Screen-basiclist"> <BasicItemList items={ingredients} target={'ingredient'}/></div>
            <div className="Screen-backbutton"><BackButton/></div>
        </div>
    )
}
