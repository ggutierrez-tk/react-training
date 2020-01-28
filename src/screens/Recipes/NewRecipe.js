import React, {useContext} from 'react';
import { RecipesContext } from '../../contexts/RecipesContext';

import RecipeForm from '../../components/RecipeForm'

export default function NewRecipe(){
    const {addRecipe, addIngredient, addTag} = useContext(RecipesContext);

    const getArrayFromCSV = (str) => {
      return str.split(',').map(element=>element.trim()).filter(val=>val!=="");
    }

    const processData = async ({ings, inputTags, title, price, time_minutes}) => {
        //build ingredients list
        let ingredientNamesArray = getArrayFromCSV(ings);
        let ingredients = await Promise.all(ingredientNamesArray.map(ing => addIngredient({'name': ing})));
        ingredients = ingredients.map(ing=>ing['id']);
        //build tags list
        let tagNamesArray = getArrayFromCSV(inputTags);
        let tags = await Promise.all( tagNamesArray.map(tag => addTag({'name': tag})));
        tags =tags.map(tag=>tag['id']);
        //build payload
        const data = {
          title,
          ingredients,
          tags,
          time_minutes,
          price,
        };
        addRecipe(data);
    };
    
    return (
      <RecipeForm processData={processData}/>
    );
}
