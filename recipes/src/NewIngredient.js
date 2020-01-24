import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';
import axios from 'axios';
import {SessionContext} from './contexts/SessionContext';
import { RecipesContext } from './contexts/RecipesContext';

export default function NewIngredient(){
    const [name, nameHandleChange, nameReset] = useInputState("");
    const {token} = useContext(SessionContext);
    const {addIngredient} = useContext(RecipesContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "http://localhost:8000/api/recipe/ingredients/"
        const data = {'name':name};
        const authheaders = {'Authorization': `Token ${token}`};
        const res = await axios.post(endpoint, data, {'headers':authheaders});
        if (res.status===201){
            addIngredient(res.data);
            nameReset();      
        }
        
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <span>ingredient: <input value={name} label="ingredient name" onChange={nameHandleChange} /></span>
                <button> add ingredient</button>
            </form>

        </div>
    );
}
