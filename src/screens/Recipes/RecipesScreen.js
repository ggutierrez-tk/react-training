import React, {useContext} from 'react';
import NewRecipe from './NewRecipe';
import RecipesList from '../../components/RecipesList';
import { RecipesContext } from '../../contexts/RecipesContext';
import '../../styles/Screen.css'
import BackButton from '../../components/BackButton';
export default () => {
    const {recipes} = useContext(RecipesContext)
    return (
        <div className="Screen">
            <div className="Screen-form"><NewRecipe/></div>
            <div className="Screen-list"><RecipesList recipes={recipes}/></div>
            <div className="Screen-backbutton"><BackButton/></div>
        </div>
    )
}