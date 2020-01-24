import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';
import axios from 'axios';
import {SessionContext} from './contexts/SessionContext';
import { RecipesContext } from './contexts/RecipesContext';

//TODO: change this for recipes instead of ingredients.
export default function NewRecipe(button){
    const {token} = useContext(SessionContext);
    const {addRecipe, ingredients} = useContext(RecipesContext);

    const [title, titleHandleChange] = useInputState("");
    const [ings, ingsHandleChange] = useInputState("");
    const [tags, tagsHandleChange] = useInputState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "http://localhost:8000/api/recipe/recipes/"
        const data = {
          'title':title,
        };
        const authheaders = {'Authorization': `Token ${token}`};
        const res = await axios.post(endpoint, data, {'headers':authheaders});
        if (res.status===201){
            addRecipe(res.data);
        }
    };
    const fields= [
      { 'label': 'Title',
        'value': title,
        'onChange': titleHandleChange,
      },
      { 'label': 'Ingredients',
        'value': ings,
        'onChange': ingsHandleChange,
      },
      { 'label': 'Tags',
        'value': tags,
        'onChange': tagsHandleChange,
      }
    ]
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <table><tbody>
            {fields.map(
              field => {
                return (
                <tr>
                  <td> {field["label"]}</td>
                  <td><input value={field["value"]} onChange={field['onChange']} label={field["label"]}/></td>
                </tr>);
              }
            )}
          </tbody></table>
          <button>Sign up</button>
        </form>
      </div>
    );
}
