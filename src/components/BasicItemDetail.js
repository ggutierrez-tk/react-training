import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { SessionContext } from '../contexts/SessionContext';
import RecipesList from './RecipesList';

export default ({item_id, target}) => {
    const {token} = useContext(SessionContext);
    const [recipes, setRecipes] = useState([]);
    const request = async (id) => {
        const endpoint ='http://localhost:8000/api/recipe/recipes'
        const headers = {'Authorization': `Token ${token}`};
        const res = await axios.get(`${endpoint}/?${target}=${id}`, {headers});
        if (res.status === 200) return await res.data;
    }

    useEffect(()=>{
        const data = request(item_id);
        data.then(d => setRecipes(d))
    },[])
    
    return (
        <div>
            <RecipesList recipes={recipes}/>
        </div>
    );
}
