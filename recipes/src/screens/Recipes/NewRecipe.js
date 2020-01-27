import React, {useContext} from 'react';
import useInputState from '../../hooks/useInputState';
import { RecipesContext } from '../../contexts/RecipesContext';

//TODO: change this for recipes instead of ingredients.
export default function NewRecipe(props){
    const {addRecipe, addIngredient, addTag} = useContext(RecipesContext);

    const [title, titleHandleChange, titleReset] = useInputState(props.title);
    const [ings, ingsHandleChange, ingsReset] = useInputState(props.ings);
    const [inputTags, tagsHandleChange, tagsReset] = useInputState(props.inputTags);
    const [time_minutes, timeHandleChange, timeReset] = useInputState(props.time);
    const [price, priceHandleChange, priceReset] = useInputState(props.price);

    const getArrayFromCSV = (str) => {
      return str.split(',').map(element=>element.trim()).filter(val=>val!=="");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
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
        console.log(data);
        addRecipe(data);
        titleReset();
        ingsReset();
        tagsReset();
        timeReset();
        priceReset();
    };
    const fields= [
      {'label': 'Title', 'value': title, 'onChange': titleHandleChange},
      {'label': 'Ingredients', 'value': ings, 'onChange': ingsHandleChange},
      {'label': 'Tags', 'value': inputTags, 'onChange': tagsHandleChange},
      {'label': 'Time', 'value': time_minutes, 'onChange': timeHandleChange},
      {'label': 'Price', 'value': price, 'onChange': priceHandleChange},
    ]
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <table><tbody>
            {fields.map(
              field => {
                return (
                <tr key={field["label"]}>
                  <td> {field["label"]}</td>
                  <td><input {...field} /></td>
                </tr>);
              }
            )}
          </tbody></table>
            <button>{props.button_text || "add recipe"}</button>
        </form>
      </div>
    );
}
