import React, {useContext} from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import BasicItemList from './BasicItemList';

import cashIcon from '../img/cash.png';
import timeIcon from '../img/clock.png';

import '../styles/RecipeBasicDisplay.css';

export default (props) => {
    const {ingredients, tags} = useContext(RecipesContext);
    const recipe_ingredients = props.ingredients.map(
        (ing_id) => {return (ingredients.find(item => item['id']===ing_id));}
    )
    const recipe_tags = props.tags.map(
        (tag_id) => {return (tags.find(item => item['id']===tag_id));}
    )
    return (
        <div className="RecipeBasicDisplay">
            <div className="RecipeBasicDisplay-section">
            <h2>{props.title}</h2>
            </div>
            <div className="RecipeBasicDisplay-section">
                <img src={timeIcon} alt="time" className="RecipeBasicDisplay-icon"/> {props.time_minutes}m
            </div>
            <div className="RecipeBasicDisplay-section">
                <img src={cashIcon} alt="price" className="RecipeBasicDisplay-icon"/>{props.price}$
            </div>
            <div className="RecipeBasicDisplay-section">
                <BasicItemList items={recipe_ingredients} target={'ingredient'}/>
            </div>
            <div className="RecipeBasicDisplay-section">
                <BasicItemList items={recipe_tags} target={'tag'}/>
            </div>
            
        </div>
    )
}
